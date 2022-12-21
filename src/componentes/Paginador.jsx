import React, { useState } from 'react'

function Paginador(
  {
    cantidadDePaginas,
    onChange,
    onCambioPagina
  }
) {

  const [paginaActual, setPaginaActual] = useState(4);

  const cambiaPagina = (_evento, pagina) => {
    onChange(pagina)
  }


  let maxPaginas = cantidadDePaginas;
  let items = [];
  let ladoIzquierdo = paginaActual -2;
  if (ladoIzquierdo <= 0) ladoIzquierdo = 1;
  let ladoDerecho = paginaActual +2;
  if (ladoDerecho > maxPaginas) ladoDerecho = cantidadDePaginas;

  for (let numero = ladoIzquierdo ; numero <= ladoDerecho; numero++) {
    items.push(
      <div key={numero}
        className={( 
        numero === paginaActual ? 'cursor-pointer text-white bg-orange-600 hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white transition ease-in-out delay-50' :
        'cursor-pointer text-orange-600 bg-white hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white')}
        onChange={cambiaPagina}
        onClick={() => {
          setPaginaActual(numero)}}>
            {numero}
        
      </div>,
    );
    
  }

  

  const proximaPagina = () => {
    if (paginaActual<maxPaginas) {
      setPaginaActual(paginaActual+1)
      return (
        <div className='hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[5px] w-[5px] m-[5px] shadow hover:text-white : cursor-pointer text-orange-600 bg-white'>
        </div>
      )
    }
  }
  const previaPagina = () => {
    if (paginaActual>1) {
      setPaginaActual(paginaActual-1)
    }
  }

  const paginacionRender = (
      <div className='flex justify-center flex-col items-center font-bold'>
        <div> Pagina { paginaActual } de {cantidadDePaginas}  </div>
            <div className="flex">
              <div className=" hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white items-center : cursor-pointer text-orange-600 bg-white transition ease-in-out delay-50" onClick={previaPagina}> &lsaquo; </div>
              {items}
              <div className=" hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white items-center : cursor-pointer text-orange-600 bg-white transition ease-in-out delay-50" onClick={proximaPagina}> &rsaquo; </div>
              <div className=" hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white items-center : cursor-pointer text-orange-600 bg-white transition ease-in-out delay-50" onClick={proximaPagina}> {cantidadDePaginas} </div>
            </div>
      </div>
  );
  return (paginacionRender);
}


export default Paginador