
function InputField({ label, type, value, onChange, id } : InputFieldProps) {
    return(
        <div>
            <label className="text-gray-600 font-medium mb-1 pr-2" htmlFor={id}>{label}</label>
            <input id={id} type={type} value={value} onChange={onChange} required className="p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"/>
        </div>

    )
}

interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    id: string;
}

export default InputField;
