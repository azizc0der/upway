import { configureStore } from '@reduxjs/toolkit';
import cartProductsReducer from '../store/cartProductsSlice';

const store = configureStore({
    reducer: {
        cart: cartProductsReducer,
    },
});

export default store;
