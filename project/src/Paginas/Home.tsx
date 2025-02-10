import '../App.css'
import { useState } from 'react';
import { SearchInput } from '../Components/SearchInputs'; // Import do componente

export function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="min-w-full min-h-full bg-green-200">
      <div className="w-full pt-72 flex flex-col justify-center items-center">
        <p className="pb-10 text-6xl">WHERE TO WATCH</p>
        <div className="w-2/4">
          <SearchInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Insert the title to search..."
          />
        </div>
      </div>
    </div>
  );
}