import { useState } from "react";

function SearchBar({ onSearch } : SearchBarProps) {

    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value);
    }

    return(
   
            <form>
                <label>Search</label>
                <input type="text" value={query} onChange={handleChange}/>
            </form>
       
    )
}

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default SearchBar;