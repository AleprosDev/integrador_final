const API_KEY = '3c95991b12724b278b73054a585c5b6f'
const Noticias_API = 'https://newsapi.org/v2/everything'

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${Noticias_API}?q=${criterioBusqueda}&apikey=${API_KEY}&language=es&page=${paginaActual}&pageSize=10&showFields=thumbnail&url&publishedAt&source`);
    const listadoNoticias = await respuesta.json();
    console.log(listadoNoticias)
    console.log(paginaActual)
    return listadoNoticias;
}