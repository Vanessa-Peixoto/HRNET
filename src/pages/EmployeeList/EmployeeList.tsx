import { Link } from "react-router-dom";
import EmployeeTab from "../../component/Table/EmployeeTab";

function EmployeeList() {
    return(
        <>
        <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">HRnet</h1>
        <Link to="/" className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition">Home</Link>
        </header>

        <main className="flex flex-col items-center mt-8 p-4">
        <h2 className="text-xl font-semibold mb-4">Current Employees</h2>

        <EmployeeTab/>
        </main>
            
            
        </>
    )

}

export default EmployeeList;