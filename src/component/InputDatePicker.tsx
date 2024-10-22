import { useState } from "react";
import DatePicker from "react-datepicker" ;
import "react-datepicker/dist/react-datepicker.css";

function InputDatePicker({ label } : InputDatePicker) {

    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return(
        <div>
            <label>{label}</label>
            <DatePicker selected={startDate} onChange={(date: Date | null) => setStartDate(date)} isClearable dateFormat="MM/dd/yyyy"/>
        </div>
    )
}

interface InputDatePicker {
    label: string;
}

export default InputDatePicker;