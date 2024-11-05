import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../app/store";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import { Employee } from '../../features/employeeSlice';
import InputSelect from "../InputSelect";

function EmployeeTab() {
  const employees = useSelector((state: RootState) => state.employee.employee);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1); // Réinitialiser à la première page lors du changement du nombre d'entrées par page
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEmployees = employees.slice(startIndex, startIndex + entriesPerPage);

  const entriesOptions = [
    { label: '10 entries', value: '10' },
    { label: '25 entries', value: '20' },
    { label: '50 entries', value: '50' },
    { label: '100 entries', value: '100' },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof Employee; direction: 'ascending' | 'descending' } | null>(null);

  // Filtrer par recherche
  const filteredEmployees = currentEmployees.filter((employee) => {
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
    <div className="container mx-auto px-4">
        <InputSelect
          label="Show"
          options={entriesOptions}
          value={String(entriesPerPage)}
          onChange={handleEntriesPerPageChange}
        />
    <SearchBar onSearch={setSearchQuery} />
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mt-4">
        <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('firstname')}>First Name</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('lastname')}>Last Name</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('startDate')}>Start Date</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('department')}>Department</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('dateOfBirth')}>Date of Birth</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('street')}>Street</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('city')}>City</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('state')}>State</th>
            <th  className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('zipCode')}>Zip Code</th>
          </tr>
        </thead>

        <tbody className="text-gray-700 text-sm">
          {sortedEmployees.map((employee, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
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
      </div>
      <Pagination currentPage={currentPage} onPageChange={handlePageChange} totalEntries={employees.length}
        entriesPerPage={entriesPerPage} />
    </div>
  );
}

export default EmployeeTab;
