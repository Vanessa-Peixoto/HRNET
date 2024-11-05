
import DatePicker from "react-datepicker" ;
import "react-datepicker/dist/react-datepicker.css";
import './inputDatePicker.css';

function InputDatePicker({ label, value, onChange } : InputDatePicker) {

    return(
        <div className="flex flex-col">
            <label className="text-gray-600 font-medium mb-1">{label}</label>
            <DatePicker selected={value} onChange={onChange} isClearable dateFormat="MM/dd/yyyy" className="p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"/>
        </div>
    )
}

interface InputDatePicker {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

export default InputDatePicker;