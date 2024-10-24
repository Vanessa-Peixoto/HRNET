
import DatePicker from "react-datepicker" ;
import "react-datepicker/dist/react-datepicker.css";

function InputDatePicker({ label, value, onChange } : InputDatePicker) {

    return(
        <div>
            <label>{label}</label>
            <DatePicker selected={value} onChange={onChange} isClearable dateFormat="MM/dd/yyyy"/>
        </div>
    )
}

interface InputDatePicker {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

export default InputDatePicker;