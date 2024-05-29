import { memo, useEffect, useState } from 'react';

import './SearchBar.css';

const SearchBar = memo(({onChange, onClear, onDebounceSearch, entitiesFound, inputPlaceHolder, debounceTimer}) => {

    const [query, setQuery] = useState(null);

    const handleOnChangeEvent = (e) => {
        onChange?.(e);
        setQuery(e.target.value);
    };

    const hanldeClearButton = (e) => {
        onClear?.(e);
        setQuery(null);
     }

    useEffect(() => 
    {
        if (onDebounceSearch) 
        {
            const timer = setTimeout(() => {
                onDebounceSearch(query);
            }, debounceTimer ?? 500);

            return () => clearTimeout(timer);
        }
    }, [onDebounceSearch, debounceTimer, query])

    return (
        <div className="searchBar">
        <input 
            className="searchBar--input" 
            type="text" 
            value={query || ''}
            placeholder={inputPlaceHolder ?? "Search..."}
            onChange={handleOnChangeEvent}/>
        <div className="searchBar__options">
            {query && query.length > 0 && <button className="searchBar--clearBtn" onClick={hanldeClearButton}>Clear</button>}
            <label className="searchBar--itemsFound">{`${entitiesFound ?? 'Unknown'} results`}</label>
        </div>
    </div>
    );
});

export default SearchBar;