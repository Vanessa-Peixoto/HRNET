import { Link } from "react-router-dom";
import EmployeeTab from "../../component/Table/EmployeeTab";
import { useState } from "react";
import SearchBar from "../../component/SearchBar";
import InputSelect from "../../component/InputSelect";
import Pagination from "../../component/Pagination";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

function EmployeeList() {

  //Retrieve employees from the Redux store
  const employees = useSelector((state: RootState) => state.employee.employee);

  //States for pagination and search
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  //Handler to change the page
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  //Handler to change the number of entries per page
  const handleEntriesPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  //Calculate employee start index for pagination
  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentEmployees = employees.slice(
    startIndex,
    startIndex + entriesPerPage
  );

  //Pagination options (how many entries per page)
  const entriesOptions = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">HRnet</h1>
        <Link
          to="/"
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
        >
          Home
        </Link>
      </header>

      <main className="flex flex-col items-center mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Current Employees</h2>

        <div className="container mx-auto px-4">
          <div className="flex justify-between min-w-full p-4">
            <div className="flex">
              <InputSelect
                label="Show"
                options={entriesOptions}
                value={String(entriesPerPage)}
                onChange={handleEntriesPerPageChange}
                id="show"
              />
              <span className="flex items-center pl-2 text-gray-600">
                entries
              </span>
            </div>

            <SearchBar onSearch={setSearchQuery} />
          </div>

          <EmployeeTab
            searchQuery={searchQuery}
            currentEmployees={currentEmployees}
          />

          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalEntries={employees.length}
            entriesPerPage={entriesPerPage}
          />
        </div>
      </main>
    </>
  );
}

export default EmployeeList;