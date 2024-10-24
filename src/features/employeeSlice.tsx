import { createSlice } from "@reduxjs/toolkit";

const initialState: EmployeeProps = {
  employee: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employee.push(action.payload);
    },
  },
});

interface EmployeeProps {
    employee: Employee[];
}

export interface Employee {
    firstname: string;
    lastname: string;
    dateOfBirth: string;
    startDate: string; 
    street: string;
    city: string;
    state: string;
    zipCode: string | number; 
    department: string;
  }

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
