import { useSelector } from "react-redux";
import { useState } from 'react';
import { RootState } from "../../app/store";
import Pagination from "../Pagination";


function EmployeeTab() {

    const employees = useSelector((state: RootState) => state.employee.employee)
    const [currentPage, setCurrentPage] = useState(1);
 




    return(
        <>

        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
            </tr>
            </thead>

            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td>{employee.firstname}</td>
                        <td>{employee.lastname}</td>
                        <td>{employee.startDate}</td>
                        <td>{employee.department}</td>
                        <td>{employee.dateOfBirth}</td>
                        <td>{employee.street}</td>
                        <td>{employee.city}</td>
                        <td>{employee.state}</td>
                        <td>{employee.zipCode}</td>
                    </tr>
                ))}

            </tbody>
            
        </table>
        <Pagination currentPage={currentPage} 
                onPageChange={setCurrentPage} />
        </>
    )
}

export default EmployeeTab;
