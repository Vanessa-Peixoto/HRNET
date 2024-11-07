import { createSlice } from '@reduxjs/toolkit';

const initialState : FormProps = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateFirstname: (state, action) => {
            state.firstname = action.payload;
        },
        updateLastname: (state, action) => {
            state.lastname = action.payload;
        },
        updateDateOfBirth: (state, action) => {
            state.dateOfBirth = action.payload;
        },
        updateStartDate: (state, action) => {
            state.startDate = action.payload;
        },
        updateStreet: (state, action) => {
            state.street = action.payload;
        },
        updateCity: (state, action) => {
            state.city = action.payload;
        },
        updateState: (state, action) => {
            state.state = action.payload;
        },
        updateZipCode: (state, action) => {
            state.zipCode = action.payload;
        },
        updateDepartment: (state, action) => {
            state.department = action.payload;
        },
        resetForm: () => initialState
    }
})

interface FormProps {
    firstname: string,
    lastname: string,
    dateOfBirth: string,
    startDate: string,
    street: string,
    city: string,
    state: string,
    zipCode: number | '',
    department: string,
}

export default formSlice.reducer;
export const {updateFirstname, updateLastname, updateDateOfBirth, updateStartDate, updateStreet, updateCity, updateState, updateZipCode, updateDepartment, resetForm} = formSlice.actions;