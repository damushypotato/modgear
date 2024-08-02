import { create } from 'zustand';
import { CartItem, Order, Product } from '../types/definitions';
import { persist } from 'zustand/middleware';

// Define the State for the cart store
interface State {
    cart: CartItem[];
    totalItems: number;
    totalPrice: number;
    orders: Order[];
}

// Define the Actions for the cart store
interface Actions {
    addToCart: (product: Product) => void;
    removeFromCart: (product: Product) => void;
    setQuantity: (product: Product, quantity: number) => void;
    addOrder: (order: Order) => void;
    removeOrder: (order: Order) => void;
}

// Set the initial state for the cart store
const Initial_State: State = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    orders: [],
};

// Create the cart store using Zustand
export const useCartStore = create(
    // Persist the cart store to local storage so that the cart is saved between sessions
    persist<State & Actions>(
        (set, get) => ({
            cart: Initial_State.cart,
            totalItems: Initial_State.totalItems,
            totalPrice: Initial_State.totalPrice,
            orders: Initial_State.orders,

            // Function to add a product to the cart
            addToCart: product => {
                // Get the current cart from the store
                const cart = get().cart;

                // Check if the product is already in the cart
                const cartItem = cart.find(item => item.product.id === product.id);

                // Update the cart with the new product
                // or increase the quantity if the product is already in the cart
                const updatedCart = cartItem
                    ? cart.map(item =>
                          item.product.id === product.id
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                      )
                    : [...cart, { product, quantity: 1 }];

                // Update the store with the new cart
                set(state => ({
                    cart: updatedCart,
                    totalItems: state.totalItems + 1,
                    totalPrice: state.totalPrice + product.price,
                }));
            },

            // Function to remove a product from the cart
            removeFromCart: product => {
                // Get the current cart from the store
                const cart = get().cart;

                // Find the product in the cart
                const cartItem = cart.find(item => item.product.id === product.id);

                // If the product is not in the cart, return
                if (!cartItem) return;

                // Update the cart by removing the product
                // and update the total items and total price
                set(state => ({
                    cart: state.cart.filter(cartItem => cartItem.product.id !== product.id),
                    totalItems: state.totalItems - cartItem.quantity,
                    totalPrice: state.totalPrice - product.price,
                }));
            },

            // Function to set the quantity of a product in the cart
            setQuantity: (product, quantity) => {
                // Get the current cart from the store
                const cart = get().cart;

                // Find the product in the cart
                const cartItem = cart.find(item => item.product.id === product.id);

                // If the product is not in the cart, return
                if (!cartItem) return;

                // If the quantity is 0, remove the product from the cart
                if (quantity === 0) {
                    get().removeFromCart(product);
                    return;
                }

                // Update the cart with the new quantity
                const updatedCart = cart.map(item =>
                    item.product.id === product.id ? { ...item, quantity } : item
                );

                // Update the store with the new cart
                // and update the total items and total price
                set(state => ({
                    cart: updatedCart,
                    totalItems: state.totalItems + quantity - cartItem.quantity,
                    totalPrice: state.totalPrice + (quantity - cartItem.quantity) * product.price,
                }));
            },

            // Function to add an order to the store
            addOrder: order => {
                // Get the current orders from the store
                const orders = get().orders;

                // Check if the order is already in the orders
                const o = orders.find(o => o.id === order.id);

                // If the order is already in the orders, return
                if (o) return;

                // Update the store with the new order
                set(state => ({
                    orders: [...state.orders, order],
                }));
            },

            removeOrder: order => {
                // Get the current orders from the store
                const orders = get().orders;

                // Find the order in the orders
                const o = orders.find(o => o.id === order.id);

                // If the order is not in the orders, return
                if (!o) return;

                // Update the store by removing the order
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
