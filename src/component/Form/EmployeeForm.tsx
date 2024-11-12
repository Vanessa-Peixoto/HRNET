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
import { useState } from "react";
import ModalWrapper from "../ModalWrapper";

function EmployeeForm() {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const { handleSubmitForm } = useForm();

  const [showModal, setShowModal] = useState(true);

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

    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <ModalWrapper
          message="Employe crée"
          onClose={() => setShowModal(false)}
          isOpen={showModal}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6 max-w-lg mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <InputField
              label="First Name"
              type="text"
              value={formState.firstname}
              onChange={(e) => dispatch(updateFirstname(e.target.value))}
            />
          </div>
          <div>
            <InputField
              label="Last Name"
              type="text"
              value={formState.lastname}
              onChange={(e) => dispatch(updateLastname(e.target.value))}
            />
          </div>
          <div>
            <InputDatePicker
              label="Date of Birth"
              value={formState.dateOfBirth}
              onChange={(date) =>
                dispatch(updateDateOfBirth(date?.toISOString()))
              }
            />
          </div>
          <div>
            <InputDatePicker
              label="Start Date"
              value={formState.startDate}
              onChange={(date) =>
                dispatch(updateStartDate(date?.toISOString()))
              }
            />
          </div>
        </div>

        <fieldset className="border-t border-gray-200 mt-4 pt-4">
          <legend className="text-lg font-semibold text-gray-700">
            Adress
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <InputField
              label="Street"
              type="text"
              value={formState.street}
              onChange={(e) => dispatch(updateStreet(e.target.value))}
            />
            <InputField
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
            />
            <InputField
              label="Zip Code"
              type="number"
              value={formState.zipCode}
              onChange={(e) => dispatch(updateZipCode(e.target.value))}
            />
          </div>
        </fieldset>
        <div className="mt-4">
          <InputSelect
            label="Department"
            options={departmentsOptions}
            value={formState.department}
            onChange={(e) => dispatch(updateDepartment(e.target.value))}
          />
        </div>
        <div className="text-center">
          <Button type="submit">Save</Button>
        </div>
      </form>
    </>
  );
}

export default EmployeeForm;
