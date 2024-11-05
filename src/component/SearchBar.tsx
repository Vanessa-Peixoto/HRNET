import { useState } from "react";
import InputField from "./InputField";

function SearchBar({ onSearch } : SearchBarProps) {

    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }

    return(
   
        <div className="mb-4">
        <InputField
          label="Search"
          type="text"
          value={query}
          onChange={handleChange}
        />
      </div>
       
    )
}

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default SearchBar;