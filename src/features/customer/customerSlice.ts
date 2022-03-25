import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Customer {
    id: string;
    name: string;
    food: string[];
}

export interface CustomerState {
    value: Customer[];
}

const initialState: CustomerState = {
    value: []
};

interface AddFood {
    id: string;
    food: string;
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        addFood: (state, action: PayloadAction<AddFood>) => {
            state.value.forEach(customer => {
                if (customer.id === action.payload.id) customer.food.push(action.payload.food);
            });
        }
    }
});

export const {addCustomer, addFood} = customerSlice.actions;

export default customerSlice.reducer;