
import { DateTime } from 'luxon'
import React from 'react'

function Card2({
    noticias, description, urlToImg, url, fechaPublicacion, origenNoticia, pagina
}) {

  return (
        
                <div className="md:max-w-xl rounded-lg bg-white hover:bg-slate-200 transition ease-in-out delay-50 shadow-lg m-2 hover:-translate-y-1 hover:scale-200">
                    <a href={url} target="_blank" rel='noreferrer'>
                    <img className="" src={urlToImg === 'N/A' ? '../assets/img/imgNoEncontrada.jpg' : urlToImg} alt="" />
                    
                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{noticias}</h5>
                        <p className="text-gray-700 text-base mb-4">{description}
                        </p>
                        <p className="text-gray-600 text-xs">Link: {url}</p>
                        <p className="text-gray-600 text-xs">{pagina}</p>
                        <p className="text-gray-600 text-xs">Publicado por: {origenNoticia}</p>
                        <p className="text-gray-600 text-xs">Fecha de publicacion: {DateTime.fromISO(fechaPublicacion).toFormat('dd-MM-yyyy')} a las {DateTime.fromISO(fechaPublicacion).toFormat('HH:mm')}</p>
                    </div>
                    </a>
                </div>


  )
}


    

export const ListaCard = ({noticias}) => {
    

    return noticias.map((noticias, index) => {
        return <div key={index}>
            <Card2 noticias={noticias.title}
            description={noticias.description}
            urlToImg={noticias.urlToImage}
            url={noticias.url}
            fechaPublicacion = {noticias.publishedAt}
            origenNoticia={noticias.source.name}
            pagina={noticias.page}
            />
            
            
            </div>
      
    }
    
    )
}

export default Card2