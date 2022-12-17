import React from 'react'

function Card({
    noticias, description, urlToImg
}) {
    console.log(noticias)
  return (
    <div>
        <div className="flex justify-center">
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg m-2">
                <img className=" max-w-[80px] h-full w-full md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={urlToImg} alt="" />
                
                <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{noticias}</h5>
                    <p className="text-gray-700 text-base mb-4">{description}
                    </p>
                    <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export const ListaCard = ({noticias}) => {
    return noticias.map((noticias, index) => {
        return <div key={index}>
            <Card noticias={noticias.title}
            description={noticias.description}
            urlToImg={noticias.urlToImage}/>

            </div>
        
    }

    )
}

export default Card