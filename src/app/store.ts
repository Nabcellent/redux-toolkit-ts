import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import reservationReducer from '../features/reservations/reservationsSlice';
import customerReducer from '../features/customer/customerSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        reservations: reservationReducer,
        customers: customerReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
