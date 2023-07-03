import {configureStore} from '@reduxjs/toolkit';
import user from './slices/userSlice';
import products from './slices/productsSlice';

export const store = configureStore({
    reducer: {user, products}
});