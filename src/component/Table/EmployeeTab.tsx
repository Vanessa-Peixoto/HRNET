import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../app/store";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import { Employee } from '../../features/employeeSlice';

function EmployeeTab() {
  const employees = useSelector((state: RootState) => state.employee.employee);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Employee; direction: 'ascending' | 'descending' } | null>(null);

  // Filtrer par recherche
  const filteredEmployees = employees.filter((employee) => {
    return (
        employee.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.lastname.toLowerCase().includes(searchQuery.toLowerCase()) || 
        employee.startDate.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchQuery.toLowerCase()) || 
        employee.dateOfBirth.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.street.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        employee.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
});

// Appliquer le tri
const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortConfig !== null) {
        const { key, direction } = sortConfig;
        if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
        if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
    }
    return 0;
});

const requestSort = (key: keyof Employee) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
    }
    setSortConfig({ key, direction });
};


  return (
    <>
    <SearchBar onSearch={setSearchQuery} />
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('firstname')}>First Name</th>
            <th onClick={() => requestSort('lastname')}>Last Name</th>
            <th onClick={() => requestSort('startDate')}>Start Date</th>
            <th onClick={() => requestSort('department')}>Department</th>
            <th onClick={() => requestSort('dateOfBirth')}>Date of Birth</th>
            <th onClick={() => requestSort('street')}>Street</th>
            <th onClick={() => requestSort('city')}>City</th>
            <th onClick={() => requestSort('state')}>State</th>
            <th onClick={() => requestSort('zipCode')}>Zip Code</th>
          </tr>
        </thead>

        <tbody>
          {sortedEmployees.map((employee, index) => (
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
      <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
    </>
  );
}

export default EmployeeTab;
