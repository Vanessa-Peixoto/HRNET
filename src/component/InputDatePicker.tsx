
import DatePicker from "react-datepicker" ;
import "react-datepicker/dist/react-datepicker.css";
import './inputDatePicker.css';

function InputDatePicker({ label, value, onChange, id } : InputDatePicker) {

    const formattedDate = value ? new Date(value) : null;

    return(
        <div>
            <label htmlFor={id} className="text-gray-600 font-medium mb-1">{label}</label>
            <DatePicker id={id} selected={formattedDate} onChange={onChange} required isClearable dateFormat="MM/dd/yyyy" className="p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"/>
        </div>
    )
}

interface InputDatePicker {
    label: string;
    value: string | null;
    onChange: (date: Date | null) => void;
    id: string;
}

export default InputDatePicker;