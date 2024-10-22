function InputSelect({ label, options, value, onChange }: InputSelectProps) {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">Selectionner</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

interface InputSelectProps {
  label: string;
  options: [];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default InputSelect;
