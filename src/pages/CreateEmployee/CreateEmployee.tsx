import InputDatePicker from "../../component/InputDatePicker";

function CreateEmployee() {
    return(
        <>
            <header>
                <h1>HRnet</h1>
                <a>View Current Employees</a>
            </header>

            <main>
            <h2>Create Employee</h2>
            <InputDatePicker label="Date de naissance"/>
            </main>
            
        </>
    )
}

export default CreateEmployee;