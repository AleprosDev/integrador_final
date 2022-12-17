import './App.css';
import Buscador from './componentes/Buscador';
import Card, { ListaCard } from './componentes/Card';
import Loading from './componentes/Loading';
import NavBar from './componentes/NavBar';
import { getListadoNoticias } from './servicios/ListadoAPI';
import { useState } from 'react';
import Paginador from './componentes/Paginador';

function App() {

  const [noticias, setNoticias] = useState()
  const [isLoading, setIsLoading] = useState(false)

  
  const onBuscar = async (criterioBusqueda) => {
    setIsLoading(true)
    const { articles: noticia} = await getListadoNoticias(criterioBusqueda)
    setNoticias(noticia)
    setIsLoading(false)
  }
 

  return (
    <div className="App">
      <NavBar/>
      {isLoading && <Loading/>}
      <Buscador onBuscar={onBuscar}/>
      {noticias && <Card/>}
      {noticias && <ListaCard noticias={noticias}/> }
      {noticias && <Paginador/>}
    </div>
  );
}

export default App;
