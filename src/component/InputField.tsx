
function InputField({ label, type, value, onChange } : InputFieldProps) {
    return(
        <div>
            <label className="text-gray-600 font-medium mb-1">{label}</label>
            <input type={type} value={value} onChange={onChange} className="p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"/>
        </div>

    )
}

interface InputFieldProps {
    label: string;
    type: string;
    value: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default InputField;
