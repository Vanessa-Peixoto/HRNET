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
    updateDepartment 
  } from '../../features/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getStateOptions } from "../../services/getStateOptions";
import { getDepartmentOptions } from "../../services/getDepartmentOptions";
import { RootState } from '../../app/store';
import useForm from '../../hooks/useForm'


function EmployeeForm() {

    const dispatch = useDispatch();
    const formState = useSelector((state: RootState) => state.form)
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
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputField label="First Name" type="text" value={formState.firstname} onChange={(e) => dispatch(updateFirstname(e.target.value))}/>
                    <InputField label="Last Name" type="text" value={formState.lastname} onChange={(e) => dispatch(updateLastname(e.target.value))}/>
                    <InputDatePicker label="Date of Birth" value={formState.dateOfBirth} onChange={(date) => dispatch(updateDateOfBirth(date))} />
                    <InputDatePicker label="Start Date"  value={formState.startDate} onChange={(date) => dispatch(updateStartDate(date))} />
                </div>
                <div>
                    <legend>Adress</legend>
                    <InputField label="Street" type="text" value={formState.street} onChange={(e) => dispatch(updateStreet(e.target.value))}/>
                    <InputField label="City" type="text" value={formState.city} onChange={(e) => dispatch(updateCity(e.target.value))}/>
                    <InputSelect label="State" options={statesOptions} value={formState.state} onChange={(e) => dispatch(updateState(e.target.value))}/>
                    <InputField label="Zip Code" type="number" value={formState.zipCode} onChange={(e) => dispatch(updateZipCode(e.target.value))}/>
                </div>
                <div>
                    <InputSelect label="Department" options={departmentsOptions} value={formState.department} onChange={(e) => dispatch(updateDepartment(e.target.value))}/>
                </div>
                <div>
                <Button type="submit">
                    Save
                </Button>
                </div>
                
            </form>
            
            
            


        </>
    )

}

export default EmployeeForm;