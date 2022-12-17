import './App.css';
import Buscador from './componentes/Buscador';
import Card from './componentes/Card';
//import ErrorMensaje from './componentes/ErrorMensaje';
import Loading from './componentes/Loading';
import NavBar from './componentes/NavBar';
import { getListadoNoticias } from './servicios/ListadoAPI';
import { useState } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
import ErrorMensaje from './componentes/ErrorMensaje';
import { Outlet } from "react-router-dom";

function App() {

  const [noticias, setNoticias] = useState()
  const [isLoading, setIsLoading] = useState(false)

  
  const onBuscar = async (criterioBusqueda) => {
    setIsLoading(true)
    const { articles: noticia} = await getListadoNoticias(criterioBusqueda)
    setNoticias(noticia)
    setIsLoading(false)
  }
 
  if(isLoading) {
    return (
    <div>
    <Loading/>
    </div>
    )
  }

  if(isVisible) {
    return (
      <div>
        <ErrorMensaje/>
        <Outlet />
      </div>
    )
  } else {
    isVisible(false)
  }

  return (
    <div className="App">
      <NavBar/>
      <Buscador onBuscar={onBuscar}/>
      <Card/>
    </div>
  );
}

export default App;
