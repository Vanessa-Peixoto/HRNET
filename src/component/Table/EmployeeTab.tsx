import { useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../../app/store";
import Pagination from "../Pagination";
import SearchBar from "../SearchBar";
import { Employee } from "../../features/employeeSlice";
import InputSelect from "../InputSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

function EmployeeTab() {
  const employees = useSelector((state: RootState) => state.employee.employee);

  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1); // Réinitialiser à la première page lors du changement du nombre d'entrées par page
  };

  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEmployees = employees.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  const entriesOptions = [
    { label: "10", value: "10" },
    { label: "25", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'ascending' | 'descending' | null }>({
        key: 'firstname', // Initialiser avec une colonne par défaut
        direction: 'ascending', // Direction par défaut
    });

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
    if (sortConfig.direction === null) return 0;

        const aValue = a[sortConfig.key as keyof Employee];
        const bValue = b[sortConfig.key as keyof Employee];

        if (aValue < bValue) return sortConfig.direction === 'ascending' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'ascending' ? 1 : -1;
        return 0;
    });


  const requestSort = (key: keyof Employee) => {
    let direction: "ascending" | "descending" | null = "ascending";
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
            direction = null; // Reset si la colonne est cliquée à nouveau
        }

        setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mt-8 p-4">
        <div className="flex">
        <InputSelect
          label="Show"
          options={entriesOptions}
          value={String(entriesPerPage)}
          onChange={handleEntriesPerPageChange}
        />
        <span>entries</span>
        </div>
       
        <SearchBar onSearch={setSearchQuery} />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mt-4">
        <thead>
                <tr className="bg-gray-100 text-gray-600  text-sm leading-normal">
                    {['firstname', 'lastname', 'startDate', 'department', 'dateOfBirth', 'street', 'city', 'state', 'zipCode'].map((column) => (
                        <th
                            key={column}
                            onClick={() => requestSort(column as keyof Employee)}
                            className="cursor-pointer py-3 px-6 text-left"
                        >
                            {column.charAt(0).toUpperCase() + column.slice(1)}
                            <FontAwesomeIcon
                                icon={sortConfig.key === column ? (sortConfig.direction === 'ascending' ? faSortUp : faSortDown) : faSort}
                                className="ml-2"
                            />
                        </th>
                    ))}
                </tr>
            </thead>

          <tbody className="text-gray-700 text-sm">
            {sortedEmployees.map((employee, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
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
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalEntries={employees.length}
        entriesPerPage={entriesPerPage}
      />
    </div>
  );
}

export default EmployeeTab;
