import { addEmployee } from "../features/employeeSlice";
import { useDispatch } from "react-redux";
import { resetForm } from "../features/formSlice";

function useForm() {

  const dispatch = useDispatch();

  const handleSubmitForm = (
    firstname: string,
    lastname: string,
    dateOfBirth: string,
    startDate: string,
    street: string,
    city: string,
    state: string,
    zipCode: string | number,
    department: string
  ) => {
    const newEmployee = {
      firstname,
      lastname,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    };

    dispatch(addEmployee(newEmployee));
    dispatch(resetForm());
  };

  return {
    handleSubmitForm,
  };
}

export default useForm;