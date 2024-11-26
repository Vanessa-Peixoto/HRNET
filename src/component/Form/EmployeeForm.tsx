import InputField from "../InputField";
import InputDatePicker from "../InputDatePicker";
import InputSelect from "../InputSelect";
import Button from "../Button";
import {
  updateFirstname,
  updateLastname,
  updateDateOfBirth,
  updateStartDate,
  updateStreet,
  updateCity,
  updateState,
  updateZipCode,
  updateDepartment,
} from "../../features/formSlice";
import { useDispatch, useSelector } from "react-redux";
import { getStateOptions } from "../../services/getStateOptions";
import { getDepartmentOptions } from "../../services/getDepartmentOptions";
import { RootState } from "../../app/store";
import useForm from "../../hooks/useForm";

function EmployeeForm({ onFormSubmit }: EmployeeFormProps) {

  //Initializes the dispatch object to send actions to the Redux store
  const dispatch = useDispatch();
  
  //Retrieves the current state of the form from the store
  const formState = useSelector((state: RootState) => state.form);

  //Retrieve function handleSubmitform from our custom hook
  const { handleSubmitForm } = useForm();

  const statesOptions = getStateOptions();
  const departmentsOptions = getDepartmentOptions();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleSubmitForm(
      formState.firstname,
      formState.lastname,
      formState.dateOfBirth,
      formState.startDate,
      formState.street,
      formState.city,
      formState.state,
      formState.zipCode,
      formState.department
    );

    onFormSubmit();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6 max-w-lg mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="firstname"
            label="First Name"
            type="text"
            value={formState.firstname}
            onChange={(e) => dispatch(updateFirstname(e.target.value))}
          />

          <InputField
            id="lastname"
            label="Last Name"
            type="text"
            value={formState.lastname}
            onChange={(e) => dispatch(updateLastname(e.target.value))}
          />

          <InputDatePicker
            id="dateOfBirth"
            label="Date of Birth"
            value={formState.dateOfBirth}
            onChange={(date) => dispatch(updateDateOfBirth(date?.toISOString()))}
          />

          <InputDatePicker
            id="startDate"
            label="Start Date"
            value={formState.startDate}
            onChange={(date) => dispatch(updateStartDate(date?.toISOString()))}
          />
        </div>

        <fieldset className="border-t border-gray-200 mt-4 pt-4">
          <legend className="text-lg font-semibold text-gray-700">
            Address
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <InputField
              id="street"
              label="Street"
              type="text"
              value={formState.street}
              onChange={(e) => dispatch(updateStreet(e.target.value))}
            />
            <InputField
              id="city"
              label="City"
              type="text"
              value={formState.city}
              onChange={(e) => dispatch(updateCity(e.target.value))}
            />
            <InputSelect
              label="State"
              options={statesOptions}
              value={formState.state}
              onChange={(e) => dispatch(updateState(e.target.value))}
              id="state"
            />
            <InputField
              id="zipCode"
              label="Zip Code"
              type="number"
              value={formState.zipCode}
              onChange={(e) => dispatch(updateZipCode(e.target.value))}
            />
          </div>
        </fieldset>
        <fieldset className="border-t border-gray-200 mt-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <InputSelect
              label="Department"
              options={departmentsOptions}
              value={formState.department}
              onChange={(e) => dispatch(updateDepartment(e.target.value))}
              id="department"
            />
          </div>
        </fieldset>
        <div className="text-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}

interface EmployeeFormProps {
  onFormSubmit: () => void;
}

export default EmployeeForm;