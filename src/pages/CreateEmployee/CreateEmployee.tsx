import EmployeeForm from "../../component/Form/EmployeeForm";
import EmployeeTab from "../../component/Table/EmployeeTab";




function CreateEmployee() {



    return(
        <>
            <header>
                <h1>HRnet</h1>
                <a>View Current Employees</a>
            </header>

            <main>
            <h2>Create Employee</h2>
            <EmployeeForm/>
            <EmployeeTab/>
            </main>
            
        </>
    )
}

export default CreateEmployee;