import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer, //aqui conectamos la logica del nombre
    }
})

// Tipos para que TypeScript te ayude 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;