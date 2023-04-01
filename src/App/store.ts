import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice';
import cardReducer from './cardSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        card: cardReducer
    }
});