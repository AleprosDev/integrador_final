import './App.css';
import Buscador from './componentes/Buscador';
import { ListaCard } from './componentes/Card';
import Loading from './componentes/Loading';
import NavBar from './componentes/NavBar';
import { getListadoNoticias } from './servicios/ListadoAPI';
import { useState } from 'react';
import Paginador from './componentes/Paginador';


function App() {

  const [noticias, setNoticias] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cantidadDePaginas, setCantidadDePaginas] = useState(1)
  const [paginaActual, setPaginaActual] = useState(1);
  

  
  const onBuscar = async (criterioBusqueda) => {
    setIsLoading(true)
    const { articles: noticia, totalResults} = await getListadoNoticias(criterioBusqueda, paginaActual)
    setNoticias(noticia)
    setIsLoading(false)
    setCantidadDePaginas(Math.ceil(parseInt(totalResults)/10))
  }

  const onCambioPagina = (pagina) => {
    setPaginaActual(pagina)
  }
  
 

  return (
    <div className="App">
      <NavBar/>
      {isLoading && <Loading/>}
      <Buscador onBuscar={onBuscar}/>
      
      {noticias && <ListaCard noticias={noticias}/> }
      {noticias && <Paginador cantidadDePaginas={cantidadDePaginas} onChange={onCambioPagina}/>}
    </div>
  );
}

export default App;
