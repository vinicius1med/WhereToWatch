import { NavLink } from 'react-router';
import { useLocation } from 'react-router';
import { fetchMovies } from '../api.ts';
import { useEffect, useState } from 'react';
import { SearchInput } from '../Components/SearchInputs';

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
  const inputValue =
    (location.state as { inputValue: string })?.inputValue || '';
  const [movies, setMovies] = useState<Movie[]>([]);
  const [inputSearchValue, setInputValue] = useState<string>('');

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
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50 bg-white p-4 border-b flex space-x-8 items-center text-2xl shadow-md">
        <NavLink to="/">Looking For</NavLink>
        <div className="w-1/3 h-10 relative flex items-center">
          <SearchInput
            value={inputSearchValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Insert the title to search..."
          />
        </div>
      </div>

      <div className="flex-1 p-4 pt-24 flex flex-col items-center space-y-4 bg-slate-100">
        {movies.map((movie, index) => (
          <div
            key={index}
            className="w-3/4 p-4 bg-slate-100 shadow-lg rounded-xl"
          >
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
              {Array.from(
                new Set(
                  movie.streamingOptions.br?.map((option) => option.service.id),
                ),
              ).map((serviceId, idx) => {
                const option = movie.streamingOptions.br.find(
                  (opt) => opt.service.id === serviceId,
                );
                return (
                  <a
                    key={idx}
                    href={option?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                  >
                    {serviceId.toUpperCase()}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t text-center first-letter:shadow-md bg-slate-100">
        WhereToWatch &copy; 2025
      </div>
    </div>
  );
}
