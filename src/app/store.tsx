import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';
import employeeReducer from '../features/employeeSlice';

const store = configureStore({
    reducer: {
        form: formReducer,
        employee: employeeReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;