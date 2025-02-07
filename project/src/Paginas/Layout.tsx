import { NavLink } from 'react-router';
import { useLocation} from 'react-router';
import { Search } from 'lucide-react';
import { fetchMovies } from '../api.ts';
import { useEffect, useState } from 'react';

// export function Layout() {
  // const location = useLocation();
  // const navigate = useNavigate(); se precisar linkar com alguma outra rota
  // const inputValue = (location.state as { inputValue: string })?.inputValue || 'Sem dados de entrada'; usado para pegar o valor do input na rota Home

// function navegation(){ NAV VAI AQ } 
// function mainContent(){ MAIN CONTENT VAI AQ - FRAGMENTAR EM MAIS COMPONENTES }
// function footer(){ FOOTER VAI AQ }

//   return (
//     <div className='h-screen w-screen'>
//       {/* Nav content */}
      // <div className="h-30 p-4 border-b flex space-x-8 items-center text-2xl">
      //   <NavLink to="/">Looking For</NavLink>
      //   <div className="w-1/3 h-10 relative flex items-center ">
      //     <Search className="absolute ml-2" />
      //     <input
      //       className="border w-full h-10 pl-10 text-lg rounded-t-xl rounded-b-xl outline-none"
      //       type="text"
      //       placeholder="Insert the title to search..."
      //     />
      //   </div>
      // </div>
//       {/* Nav content END*/}
      
//         {/* Main Content */}
//       <div className="h-3/4 p-4 flex justify-center">
//         <div className='h-3/4 w-3/4 mx-auto'>
//             <div className="p-1 h-4/5 w-full bg-slate-100 flex ">
//                 <div className='w-72 h-full bg-slate-600'>
//                     IMAGEM: {/* {'verticalPoster': {'w360': LINK}} */}
//                 </div>
//                 <div className='w-full h-full pl-3 flex flex-col space-y-1'>
//                     <div className='h-10 bg-red-200'>Titulo: {/* 'title': 'TITULO' */}</div>
//                     <div className='h-full bg-red-300'>Descricao: {/* 'overview': 'DESCRICAO' */} </div>
//                 </div>
//             </div>
//             <div className='w-full h-16 flex justify-center bg-slate-200'>
//                 DISPONIVEL EM : O O O 
//                 {/* 'streamingOptions': {'br': [{'link': 'https://www.primevideo.com/detail/0OWZLPZCZKLFFM69I3A60V1KQ6/ref=atv_dp'}] } */}
//                 {/* campo da requisicao "country": "br", pais onde vai checar a disponibilidade */}
                
//             </div>
//         </div>
//       </div>
//       {/* Main Content END */}
        
//         {/* Footer */}  
//       <div className="p-4 border-t flex justify-center">
//         WhereToWatch&copy; 2025
//       </div>
//       {/* Footer END */} 
//     </div>
//   );
// }

interface StreamingOption {
  service: {
    id: string;
  };
  link: string;
}

interface Movie {
  title: string;
  overview: string;
  imageSet: {
    verticalPoster: {
      w360: string;
    };
  };
  streamingOptions: {
    br: StreamingOption[];
  };
}

export function Layout() {
  const location = useLocation();
  const inputValue = (location.state as { inputValue: string })?.inputValue || '';
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      if (inputValue) {
        const response = await fetchMovies(inputValue);
        if (response && response.data) {
          setMovies(response.data);
        } else {
          console.log('Sem dados de entrada');
        }
      }
    };

    loadMovies();
  }, [inputValue]);

  return (
    <div className='h-screen w-screen'>
      <div className="h-30 p-4 border-b flex space-x-8 items-center text-2xl">
        <NavLink to="/">Looking For</NavLink>
        <div className="w-1/3 h-10 relative flex items-center ">
          <Search className="absolute ml-2" />
          <input
            className="border w-full h-10 pl-10 text-lg rounded-t-xl rounded-b-xl outline-none"
            type="text"
            placeholder="Insert the title to search..."
          />
        </div>
      </div>

      <div className="h-3/4 p-4 flex flex-col items-center space-y-4">
        {movies.map((movie, index) => (
          <div key={index} className="w-3/4 p-4 bg-slate-100 shadow-lg rounded-xl">
            <div className="flex">
              <img
                src={movie.imageSet.verticalPoster.w360}
                alt={movie.title}
                className="w-48 h-auto rounded-xl"
              />
              <div className="pl-4">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="text-gray-700">{movie.overview}</p>
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              {movie.streamingOptions.br?.map((option, idx) => (
                <a
                  key={idx}
                  href={option.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                >
                  {option.service.id.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t text-center">
        WhereToWatch &copy; 2025
      </div>
    </div>
  );
}