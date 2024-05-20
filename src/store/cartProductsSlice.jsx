import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProducts: [],
};

const cartProductsSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            const existingProduct = state.cartProducts.find(p => p.id === product.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartProducts.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const productId = action.payload.id;
            state.cartProducts = state.cartProducts.filter(p => p.id !== productId);
        },
        deleteFormCart: (state, action) => {
            const productId = action.payload;
            state.cartProducts = state.cartProducts.filter(p => p.id !== productId);
        },
        increaseQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find(p => p.id === productId);
            if (product) {
                product.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.cartProducts.find(p => p.id === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        }
    }
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, deleteFormCart } = cartProductsSlice.actions;

export default cartProductsSlice.reducer;
