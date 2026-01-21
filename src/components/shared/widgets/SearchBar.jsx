import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiSearch, HiX } from 'react-icons/hi';

const SearchBar = ({ placeholder = "Search...", className = "" }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
          aria-label="Search"
          minLength={2}
        />

        {/* Search Icon */}
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

        {/* Clear Button */}
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <HiX className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Helper text */}
      {query.length > 0 && query.length < 2 && (
        <p className="text-xs text-gray-500 mt-1">
          Type at least 2 characters to search
        </p>
      )}
    </form>
  );
};

export default SearchBar;
