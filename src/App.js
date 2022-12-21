import './App.css';
import Buscador from './componentes/Buscador';
import { ListaCard } from './componentes/Card';
import Loading from './componentes/Loading';
import NavBar from './componentes/NavBar';
import { getListadoNoticias } from './servicios/ListadoAPI';
import { useEffect, useState } from 'react';
import Paginador from './componentes/Paginador';
import { useSearchParams } from "react-router-dom";
import TotalResultados from './componentes/TotalResultados';


function App() {
  
  const [noticias, setNoticias] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cantidadDePaginas, setCantidadDePaginas] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagina, setPagina] = useState(1);
  const [totalResultado, setTotalResultado] = useState('')

  useEffect(() => {
    const buscarNoticias = async () => {
      setIsLoading(true)
      const { articles: noticia, totalResults} = await getListadoNoticias(searchParams.get('query'), pagina)
      setNoticias(noticia)
      setIsLoading(false)
      setCantidadDePaginas(Math.ceil(parseInt(totalResults)/10))
      setTotalResultado(totalResults)
    }

    if(searchParams.get('query')) {
      buscarNoticias(pagina) 
    }
  }, [searchParams, pagina]) 

  const onBuscar = (criterioBusqueda) => {
    setSearchParams({query: criterioBusqueda})
  }

  const onCambioPagina = (pagina) => {
    setPagina(pagina)
  }

  const totalDePaginas = (totalResultado) => {
    setTotalResultado(totalResultado)
    console.log(totalDePaginas)
  }
  
  return (
    <div className="App">
      <NavBar/>
      <TotalResultados totalResults={totalDePaginas}/>
      {isLoading && <Loading/>}
      <Buscador onBuscar={onBuscar}/>
      {noticias && <ListaCard noticias={noticias}/> }
      {noticias && <Paginador cantidadDePaginas={cantidadDePaginas} onChange={onCambioPagina}/>}
    </div>
  );
}

export default App;
