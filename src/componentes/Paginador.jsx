import React, { useState } from 'react'

function Paginador(
  {
    cantidadDePaginas,
    onChange
    
  }
) {

  const [paginaActual, setPaginaActual] = useState(4);
  let maxPaginas = 10;
  let items = [];
  let ladoIzquierdo = paginaActual -2;
  if (ladoIzquierdo <= 0) ladoIzquierdo = 1;
  let ladoDerecho = paginaActual +2;
  if (ladoDerecho > maxPaginas) ladoDerecho = maxPaginas;
  for (let numero = ladoIzquierdo ; numero <= ladoDerecho; numero++) {
    items.push(
      <div key={numero} className={(
        numero === paginaActual ? 'cursor-pointer text-white bg-orange-600 hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white' :
        'cursor-pointer text-orange-600 bg-white hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white')}
        onClick={() => {
          setPaginaActual(numero)}}>
            {numero}
      </div>,
    );
  }

  const proximaPagina = () => {
    if (paginaActual<maxPaginas) {
      setPaginaActual(paginaActual+1)
    }
  }
  const previaPagina = () => {
    if (paginaActual>1) {
      setPaginaActual(paginaActual-1)
    }
  }

  const paginationRender = (
      <div className='flex justify-center flex-col items-center '>
        <div> currentPage : { paginaActual } </div>
            <div className="flex">
              <div className=" hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white' : 'cursor-pointer text-orange-600 bg-white" onClick={previaPagina}> &lsaquo; </div>
              {items}
              <div className=" hover:bg-orange-600 text-base text-center px-[10px] pt-[9px] rounded-[50%] h-[40px] w-[40px] m-[5px] shadow hover:text-white' : 'cursor-pointer text-orange-600 bg-white" onClick={proximaPagina}> &rsaquo; </div>
            </div>
      </div>
  );
  return (paginationRender);
}


export default Paginador