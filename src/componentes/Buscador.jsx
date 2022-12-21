import { useState } from "react";


function Buscador({ onBuscar }) {
  const [criterioBusqueda, setCriterioBusqueda] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false)

  



  return (
    <div>
      <form className="items-center ml-[35%] max-w-[30em] justify-center">
        <div className="items-center border-b py-2 border-blue-600 mb-[5%]">
        { mostrarAlerta && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-2" role="alert">
          Debe ingresar al menos 3 caracteres para realizar la búsqueda.
          <button className="bg-red-300 hover:bg-red-500 text-black font-bold py-2 px-4 rounded transition-opacity ease-linear delay-75 mt-2"
          onClick={() => setMostrarAlerta(false)}>Cerrar</button>
        </div>
        )}
          <input
            className="appearance-none bg-transparent border-none w-[90%] text-gray-700 mr-1 py-1 px-2 leading-tight focus:outline-none"
            placeholder="Buscar informacion"
            aria-label="Full name"
            type="text"
            value={criterioBusqueda}
            onChange={(e) => {
              setCriterioBusqueda(e.target.value);
            }}
          />
        </div>

        <div className="">
          
          <button type="button"
          className={
            `${
              criterioBusqueda.length >= 3
              
                ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-opacity ease-linear delay-75"
                : "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-75 transition-opacity ease-linear delay-75"
              
              }`}
          onClick={() => {
          if(criterioBusqueda.length >= 3) {
            onBuscar(criterioBusqueda)
          } else {
            setMostrarAlerta(true)
          }
        }}
          >
            Buscar
          </button>
          
          
        </div>
      </form>
    </div>
  )
  ;
} 

export default Buscador;
