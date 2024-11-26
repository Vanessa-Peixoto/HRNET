import { Link } from "react-router-dom";
import EmployeeForm from "../../component/Form/EmployeeForm";
import { useState } from "react";
import { Modal } from "@vanessapeixoto/my-modal";

function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">HRnet</h1>
        <Link
          to="/employee-list"
          className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition"
        >
          View Current Employees
        </Link>
      </header>

      <main className="flex flex-col items-center mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Create Employee</h2>

        <EmployeeForm onFormSubmit={handleFormSubmit} />

        {isModalOpen && (
          <Modal
            message="Employee crée"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </>
  );
}

export default CreateEmployee;