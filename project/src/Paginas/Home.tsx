import '../App.css'
import { useState } from 'react';
import { SearchInput } from '../Components/SearchInputs';

export function Home() {
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div className="min-w-full min-h-full bg-slate-100">
      <div className="w-full pt-72 flex flex-col justify-center items-center">
        <p className="pb-10 text-6xl">WHERE TO WATCH</p>
        <div className="w-2/4">
          <SearchInput
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Insert the title to search..."
            addStyleClass='shadow-[0_20px_50px_rgba(192,222,252,1.000)]'
          />
        </div>
      </div>
    </div>
  );
}