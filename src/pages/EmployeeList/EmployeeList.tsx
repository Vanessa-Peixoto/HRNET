import { Link } from "react-router-dom";
import EmployeeTab from "../../component/Table/EmployeeTab";

function EmployeeList() {
    return(
        <div>
            <EmployeeTab/>
            <Link to="/">Home</Link>
        </div>
    )

}

export default EmployeeList;