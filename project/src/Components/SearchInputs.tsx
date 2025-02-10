import { Search } from 'lucide-react';
import { ChangeEvent, KeyboardEvent, FC } from 'react';
import { useNavigate } from 'react-router';

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange, placeholder = 'Insert the title to search...' }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/layout', { state: { inputValue: value } });
    }
  };

  return (
    <div className="w-full h-10 relative flex items-center">
      <Search className="absolute ml-2" />
      <input
        id="inputHome"
        className="w-full h-10 pl-10 text-xl rounded-t-xl rounded-b-xl outline-none border"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
