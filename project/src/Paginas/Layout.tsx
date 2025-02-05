import { NavLink } from 'react-router';
// import { NavLink, Outlet } from 'react-router'; Outlet?????
// import { useLocation} from 'react-router';
import { Search } from 'lucide-react';

export function Layout() {
  // const location = useLocation();
  // const navigate = useNavigate(); se precisar linkar com alguma outra rota
  // const inputValue = (location.state as { inputValue: string })?.inputValue || 'Sem dados de entrada'; usado para pegar o valor do input na rota Home

// function navegation(){ NAV VAI AQ } 
// function mainContent(){ MAIN CONTENT VAI AQ - FRAGMENTAR EM MAIS COMPONENTES }
// function footer(){ FOOTER VAI AQ }

  return (
    <div className='h-screen w-screen'>
      {/* Nav content */}
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
      {/* Nav content END*/}
      
        {/* Main Content */}
      <div className="h-3/4 p-4 flex justify-center">
        {/* <Outlet /> Uso ou nao??? */}
        {/* <p className="text-xl">{inputValue}</p> */}
        <div className='h-3/4 w-3/4 mx-auto'>
            <div className="p-1 h-4/5 w-full bg-slate-100 flex ">
                <div className='w-72 h-full bg-slate-600'>
                    IMAGEM: {/* {'verticalPoster': {'w360': LINK}} */}
                </div>
                <div className='w-full h-full pl-3 flex flex-col space-y-1'>
                    <div className='h-10 bg-red-200'>Titulo: {/* 'title': 'TITULO' */}</div>
                    <div className='h-full bg-red-300'>Descricao: {/* 'overview': 'DESCRICAO' */} </div>
                </div>
            </div>
            <div className='w-full h-16 flex justify-center bg-slate-200'>
                DISPONIVEL EM : O O O 
                {/* 'streamingOptions': {'br': [{'link': 'https://www.primevideo.com/detail/0OWZLPZCZKLFFM69I3A60V1KQ6/ref=atv_dp'}] } */}
                {/* campo da requisicao "country": "br", pais onde vai checar a disponibilidade */}
                
            </div>
        </div>
      </div>
      {/* Main Content END */}
        
        {/* Footer */}  
      <div className="p-4 border-t flex justify-center">
        WhereToWatch&copy; 2025
      </div>
      {/* Footer END */} 
    </div>
  );
}
