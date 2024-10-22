
function InputField({ label, type, value, onChange } : InputFieldProps) {
    return(
        <div>
            <label>{label}</label>
            <input type={type} value={value} onChange={onChange} />
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
