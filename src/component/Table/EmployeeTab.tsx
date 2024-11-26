import { useState } from "react";
import { Employee } from "../../features/employeeSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

function EmployeeTab({ searchQuery, currentEmployees }: EmployeeTabProps) {

  //Manage sorting configuration
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "ascending" | "descending" | null;
  }>({
    key: "firstname",
    direction: "ascending",
  });

  //Filter by search
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

  //Sort function
  const requestSort = (key: keyof Employee) => {
    let direction: "ascending" | "descending" | null = "ascending";

    //If the clicked column is already sorted, reverse the direction
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    } else if (
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = null;
    }

    //Update sorting configuration
    setSortConfig({ key, direction });
  };

  //Apply sorting
  //Clone the filtered list of employees
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortConfig.direction === null) return 0;

    const aValue = a[sortConfig.key as keyof Employee];
    const bValue = b[sortConfig.key as keyof Employee];

    if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
    return 0;
  });

  return (
    <div className="container mx-auto px-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg mt-4">
          <thead>
            <tr className="bg-gray-100 text-gray-600  text-sm leading-normal">
              {[
                "firstname",
                "lastname",
                "startDate",
                "department",
                "dateOfBirth",
                "street",
                "city",
                "state",
                "zipCode",
              ].map((column) => (
                <th
                  key={column}
                  onClick={() => requestSort(column as keyof Employee)}
                  className="cursor-pointer py-3 px-6 text-left"
                >
                  {column.charAt(0).toUpperCase() + column.slice(1)}
                  <FontAwesomeIcon
                    icon={
                      sortConfig.key === column
                        ? sortConfig.direction === "ascending"
                          ? faSortUp
                          : faSortDown
                        : faSort
                    }
                    className="ml-2"
                  />
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-gray-700 text-lg text-center">
            {sortedEmployees.map((employee, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-4 px-2">{employee.firstname}</td>
                <td className="py-4 px-2">{employee.lastname}</td>
                <td className="py-4 px-2">
                  {format(employee.startDate, "MM-dd-yyyy")}
                </td>
                <td className="py-4 px-2">{employee.department}</td>
                <td className="py-4 px-2">
                  {format(employee.dateOfBirth, "MM-dd-yyyy")}
                </td>
                <td className="py-4 px-2">{employee.street}</td>
                <td className="py-4 px-2">{employee.city}</td>
                <td className="py-4 px-2">{employee.state}</td>
                <td className="py-4 px-2">{employee.zipCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface EmployeeTabProps {
  searchQuery: string;
  currentEmployees: Employee[];
}

export default EmployeeTab;