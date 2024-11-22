function InputSelect({ label, options, value, onChange, id }: InputSelectProps) {
  return (
    <div>
      <label className="text-gray-600 font-medium mb-1 pr-2" htmlFor={id}>{label}</label>
      <select
        value={value}
        onChange={onChange}
        required
        id={id}
        className=" max-w-48 p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
      >
        <option value=""></option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

interface InputSelectProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  id: string;
}

export default InputSelect;
