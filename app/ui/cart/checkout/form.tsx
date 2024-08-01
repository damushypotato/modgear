import { useForm } from '@mantine/form';
import { Checkbox, TextInput } from '@mantine/core';
import Link from 'next/link';
import { CartDisplayItem, formReturn, Order } from '@/app/types/definitions';
import OrderSummary from './summary';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/app/store/useCartStore';
import ShortUniqueId from 'short-unique-id';

interface Props {
    cart: CartDisplayItem[];
}

export default function CheckoutForm({ cart }: Props) {
    const router = useRouter();

    const addOrder = useCartStore(state => state.addOrder);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            postcode: '',
            termsOfService: false,
        },

        validate: {
            email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            phone: value =>
                value.length === 10 && /^\d+$/.test(value) ? null : 'Invalid phone number',
            postcode: value =>
                value.length === 4 && /^\d+$/.test(value) ? null : 'Invalid postcode',
        },

        transformValues: values => ({
            fullName: `${values.firstname} ${values.lastname}`,
            email: values.email,
            phone: values.phone,
            address: values.address,
            postcode: values.postcode,
            items: cart,
        }),
    });

    const placeOrder = async (values: formReturn) => {
        const id = new ShortUniqueId({ length: 10 }).rnd();

        const order: Order = {
            id,
            date: new Date().toISOString(),
            details: {
                fullName: values.fullName,
                email: values.email,
                phone: values.phone,
                address: values.address,
                postcode: values.postcode,
            },
            items: values.items.map(item => ({
                product: item.product,
                quantity: item.quantity,
            })),
            status: 'pending',
        };

        addOrder(order);

        router.push(`/cart/checkout/success/${id}`);
    };

    return (
        <form onSubmit={form.onSubmit(placeOrder)}>
            <div className='flex mb-4'>
                <TextInput
                    className='w-1/2 mx-2'
                    required
                    label='First Name'
                    placeholder='First Name'
                    key={form.key('firstname')}
                    {...form.getInputProps('firstname')}
                />

                <TextInput
                    className='w-1/2 mx-2'
                    required
                    label='Last Name'
                    placeholder='Last Name'
                    key={form.key('lastname')}
                    {...form.getInputProps('lastname')}
                />
            </div>

            <div className='flex mb-4'>
                <TextInput
                    className='w-1/2 mx-2'
                    required
                    label='Email'
                    placeholder='your@email.com'
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                />

                <TextInput
                    className='w-1/2 mx-2'
                    required
                    label='Phone'
                    placeholder='+61'
                    key={form.key('phone')}
                    {...form.getInputProps('phone')}
                />
            </div>

            <div className='flex mb-4'>
                <TextInput
                    className='w-3/4 mx-2'
                    required
                    label='Delivery Address'
                    key={form.key('address')}
                    {...form.getInputProps('address')}
                />

                <TextInput
                    className='w-1/4 mx-2'
                    required
                    label='Postcode'
                    key={form.key('postcode')}
                    {...form.getInputProps('postcode')}
                />
            </div>

            <OrderSummary />

            <div className='flex mb-4'>
                <Checkbox
                    required
                    label={
                        <p className='font-bold'>
                            I agree to the{' '}
                            <Link
                                href='about/terms'
                                target='_blank'
                                className='text-blue-600 font font-extrabold'
                            >
                                terms and conditions
                            </Link>
                        </p>
                    }
                    key={form.key('termsOfService')}
                    {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                />
            </div>

            <div className='flex mb-4 justify-center'>
                <button
                    type='submit'
                    className='border px-4 py-2 rounded-md text-lg text-white bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600'
                >
                    Confirm order
                </button>
            </div>
        </form>
    );
}
