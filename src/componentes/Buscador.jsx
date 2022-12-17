import { useState } from "react";


function Buscador({ onBuscar }) {
  const [criterioBusqueda, setCriterioBusqueda] = useState("");

  



  return (
    <div>
      <form className="items-center ml-[35%] max-w-[30em] justify-center">
        <div className="items-center border-b py-2 border-blue-600 mb-[5%]">
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

        <div className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1">
          
          <button type="button" onClick={() => {
          if(criterioBusqueda.length > 2) {
            onBuscar(criterioBusqueda)
          }
        }} >
            Buscar
          </button>
          
          
        </div>
      </form>
    </div>
  );
}

export default Buscador;
