import './App.css';
import Buscador from './componentes/Buscador';
import Card, { ListaCard } from './componentes/Card';
import Loading from './componentes/Loading';
import NavBar from './componentes/NavBar';
import { getListadoNoticias } from './servicios/ListadoAPI';
import { useState } from 'react';
import Paginador from './componentes/Paginador';
import Card2 from './componentes/Card2';

function App() {

  const [noticias, setNoticias] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cantidadDePaginas, setCantidadDePaginas] = useState(1)
  

  
  const onBuscar = async (criterioBusqueda) => {
    setIsLoading(true)
    const { articles: noticia, totalResults} = await getListadoNoticias(criterioBusqueda)
    setNoticias(noticia)
    setIsLoading(false)
    setCantidadDePaginas(Math.ceil(parseInt(totalResults)/10))
  }
  
 

  return (
    <div className="App">
      <NavBar/>
      {isLoading && <Loading/>}
      <Buscador onBuscar={onBuscar}/>

      <div className='m-8 grid grid-cols-3 gap-1 justify-evenly'>
        <div className=''>
          {noticias && <Card/>}
      </div>
        </div>

      <div className='col-span-1'>
        {noticias && <Card2/>}
      </div>
      
      {noticias && <ListaCard noticias={noticias}/> }
      {noticias && <Paginador cantidadDePaginas={cantidadDePaginas}/>}
    </div>
  );
}

export default App;
