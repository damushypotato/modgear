import { create } from 'zustand';
import { CartItem, Order, Product } from '../types/definitions';
import { persist } from 'zustand/middleware';

interface State {
    cart: CartItem[];
    totalItems: number;
    totalPrice: number;
    orders: Order[];
}

interface Actions {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    setQuantity: (product: Product, quantity: number) => void;
    addOrder: (order: Order) => void;
    removeOrder: (order: Order) => void;
}

const Initial_State: State = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    orders: [],
};

export const useCartStore = create(
    persist<State & Actions>(
        (set, get) => ({
            cart: Initial_State.cart,
            totalItems: Initial_State.totalItems,
            totalPrice: Initial_State.totalPrice,
            orders: Initial_State.orders,

            addToCart: product => {
                const cart = get().cart;
                const cartItem = cart.find(item => item.product.id === product.id);

                const updatedCart = cartItem
                    ? cart.map(item =>
                          item.product.id === product.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                      )
                    : [...cart, { product, quantity: 1 }];

                set(state => ({
                    cart: updatedCart,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + product.price,
                }));
            },

            removeFromCart: product => {
                const cart = get().cart;

                const cartItem = cart.find(item => item.product.id === product.id);

                if (!cartItem) return;

                set(state => ({
                    cart: state.cart.filter(cartItem => cartItem.product.id !== product.id),
                    totalItems: state.totalItems - cartItem.quantity,
                    totalPrice: state.totalPrice - product.price,
                }));
            },

            setQuantity: (product, quantity) => {
                const cart = get().cart;

                const cartItem = cart.find(item => item.product.id === product.id);

                if (!cartItem) return;

                if (quantity === 0) {
                    get().removeFromCart(product);
                    return;
                }

                const updatedCart = cart.map(item =>
                    item.product.id === product.id ? { ...item, quantity } : item
                );

                set(state => ({
                    cart: updatedCart,
                    totalItems: state.totalItems + quantity - cartItem.quantity,
                    totalPrice: state.totalPrice + (quantity - cartItem.quantity) * product.price,
                }));
            },

            addOrder: order => {
                const orders = get().orders;

                const o = orders.find(o => o.id === order.id);

                if (o) return;

                set(state => ({
                    orders: [...state.orders, order],
                }));
            },

            removeOrder: order => {
                const orders = get().orders;

                const o = orders.find(o => o.id === order.id);

                if (!o) return;

                set(state => ({
                    orders: state.orders.filter(o => o.id !== order.id),
                }));
            },
        }),
        {
            name: 'cart',
        }
    )
);
