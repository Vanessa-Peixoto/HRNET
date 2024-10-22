import InputField from "../InputField";
import InputDatePicker from "../InputDatePicker";
import InputSelect from "../InputSelect";


function EmployeeForm() {
    return(
        <>
            <form action="submit">
                <div>
                    <InputField label="First Name" type="text" value={firstname} onChange={handle}/>
                    <InputField label="Last Name" type="text" value={lastname} onChange={handle}/>
                    <InputDatePicker label="Date of Birth"/>
                    <InputDatePicker label="Start Date"/>
                </div>
                <div>
                    <legend>Adress</legend>
                    <InputField label="Street" type="text" value={street} onChange={handle}/>
                    <InputField label="City" type="text" value={city} onChange={handle}/>
                    <InputSelect label="State" options={} value="" onChange={}/>
                </div>
            

            </form>


        </>
    )
}

export default EmployeeForm;