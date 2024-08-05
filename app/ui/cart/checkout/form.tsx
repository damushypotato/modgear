import { useForm } from '@mantine/form';
import { Checkbox, TextInput } from '@mantine/core';
import Link from 'next/link';
import { CartDisplayItem, formReturn, Order } from '@/app/types/definitions';
import OrderSummary from './summary';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/app/store/useCartStore';
import ShortUniqueId from 'short-unique-id';

// define the props for the checkout form
interface Props {
    cart: CartDisplayItem[];
}

// define the checkout form component
export default function CheckoutForm({ cart }: Props) {
    // get a reference to the router to redirect the user when the order is placed
    const router = useRouter();

    // get a reference to the addOrder function to add the order to the store
    const addOrder = useCartStore(state => state.addOrder);

    // create a form using the useForm hook
    const form = useForm({
        mode: 'uncontrolled',

        // set the initial values for the form fields
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            postcode: '',
            termsOfService: false,
        },

        // validdation for the form fields
        validate: {
            // validate the email field using a regular expression
            // to check if the email is in the correct format
            // Expression: /^\S+@\S+$/ - checks if the email has a @ symbol
            // and at least one character before and after the @ symbol
            email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),

            // validate the phone field using a regular expression
            // to check if the phone number is in the correct format
            // Expression: /^\d+$/ - checks if the phone number contains only digits
            // and has exactly 10 digits
            phone: value =>
                value.length === 10 && /^\d+$/.test(value) ? null : 'Invalid phone number',

            // validate the postcode field using a regular expression
            // to check if the postcode is in the correct format
            // Expression: /^\d+$/ - checks if the postcode contains only digits
            // and has exactly 4 digits
            postcode: value =>
                value.length === 4 && /^\d+$/.test(value) ? null : 'Invalid postcode',
        },

        // transform the form values when the form is submitted
        transformValues: values => ({
            // combine the first name and last name into a full name
            fullName: `${values.firstname} ${values.lastname}`,
            email: values.email,
            phone: values.phone,
            address: values.address,
            postcode: values.postcode,
            items: cart,
        }),
    });

    // define the function to place the order
    const placeOrder = async (values: formReturn) => {
        // generate a unique id for the order
        const id = new ShortUniqueId({ length: 10 }).rnd();

        // create an order object with the order details
        const order: Order = {
            // set the order id to the unique id
            id,

            // set the order date to the current date
            date: new Date().toISOString(),

            // set the order details to the form values
            details: {
                fullName: values.fullName,
                email: values.email,
                phone: values.phone,
                address: values.address,
                postcode: values.postcode,
            },

            // set the order items to the cart items
            items: values.items.map(item => ({
                product: item.product,
                quantity: item.quantity,
            })),

            // set the order status to pending
            status: 'pending',
        };

        // add the order to the store
        addOrder(order);

        // redirect the user to the order success page
        router.push(`/cart/checkout/success/${id}`);
    };

    // render the checkout form
    return (
        // render the form and set it to call the placeOrder function when submitted
        <form onSubmit={form.onSubmit(placeOrder)}>
            {/* render the text input for first name and last name fields */}
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

            {/* render the text input for email and phone fields */}
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

            {/* render the text input for address and postcode fields */}
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

            {/* render the order summary */}
            <OrderSummary />

            {/* render the checkbox for the terms of service */}
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

            {/* render the submit button */}
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
