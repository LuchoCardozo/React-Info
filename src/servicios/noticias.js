const API_KEY = '6417e08cdb8e4d4b8ff1f7ed98bb716e'


const OMDB_API = 'https://newsapi.org/v2/everything';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?q=${criterioBusqueda}&apikey=${API_KEY}&page=${paginaActual}&pageSize=10&language=es`);
    const noticias = await respuesta.json(); 
    console.log(noticias);
    return noticias;
}



