const API_KEY = 'b06fd472dfea491985e13a0d3e65f29d'
const Noticias_API = 'https://newsapi.org/v2/everything'

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${Noticias_API}?q=${criterioBusqueda}&apikey=${API_KEY}&language=es&page=${paginaActual}&pageSize=10&showFields=thumbnail&url&publishedAt&source`);
    const listadoNoticias = await respuesta.json();
    console.log(listadoNoticias)
    console.log(paginaActual)
    return listadoNoticias;
}