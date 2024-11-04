import { useState } from 'react';
import { addEmployee } from '../features/employeeSlice';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import { resetForm } from '../features/formSlice';

function useForm() {

    const [clientsErrors, setClientsErrors] = useState({});
    const dispatch = useDispatch();

    // Déclare les types des paramètres
    const validateInputForm = (
        firstname: string,
        lastname: string,
        dateOfBirth: Date | null,
        startDate: Date | null,
        street: string,
        city: string,
        state: string,
        zipCode: string | number,
        department: string
    ) => {
        const errors: { [key: string]: string } = {};

        if (!firstname) {
            errors.firstname = "Le prénom est requis";
        }
        if (!lastname) {
            errors.lastname = "Le nom est requis";
        }
        if (!dateOfBirth) {
            errors.dateOfBirth = "La date de naissance est requise";
        }
        if (!startDate) {
            errors.startDate = "La date de début de contrat est requise";
        }
        if (!street || !city || !state || !zipCode) {
            errors.street = "L'adresse complète est requise";
        }
        if (!department) {
            errors.department = "Le département est requis";
        }
        return errors;
    };

    // Déclare les types des paramètres ici aussi
    const handleSubmitForm = (
        firstname: string,
        lastname: string,
        dateOfBirth: Date | null,
        startDate: Date | null,
        street: string,
        city: string,
        state: string,
        zipCode: string | number,
        department: string
    ) => {
        const formattedDateOfBirth = dateOfBirth ? format(dateOfBirth, 'MM/dd/yyyy') : '';
        const formattedStartDate = startDate ? format(startDate, 'MM/dd/yyyy') : '';
        const errors = validateInputForm(firstname, lastname, dateOfBirth, startDate, street, city, state, zipCode, department);
        
        if (Object.keys(errors).length > 0) {
            setClientsErrors(errors);
            return;
        }
        const newEmployee = {
            firstname,
            lastname,
            dateOfBirth: formattedDateOfBirth,
            startDate: formattedStartDate,
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
        validateInputForm,
        handleSubmitForm,
        clientsErrors,
    };
}

export default useForm;
