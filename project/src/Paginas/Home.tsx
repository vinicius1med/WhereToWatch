import '../App.css'
import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export function Home() {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate()

  const keyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('/layout', { state: { inputValue } });
    }
  }
  
  return (
    <>
     <div className='min-w-full min-h-full bg-green-200'>      
        <div className='w-full pt-72 flex flex-col justify-center items-center'>
          <p className='pb-10 text-6xl'>WHERE TO WATCH</p>          
          <div className='w-2/4 h-10 relative flex items-center '>
            <Search className=' absolute ml-2'/>
            <input id='inputHome' className='w-full h-10 pl-10 text-xl rounded-t-xl rounded-b-xl outline-none' type="text" placeholder='Insert the title to search...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}onKeyDown={keyPressed}/>
          </div>   
        </div>
      </div>
    </>
  )
}