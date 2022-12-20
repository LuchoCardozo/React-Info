import { Container } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticia/Noticia";
import { getListadoNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom";
import { TotalResultados } from "../components/CantNoticias/cantNoticas";
import ButtonAppBar from "../components/NavBar/navBar";


const PaginaBuscador = () => {
    const [noticias, setNoticias] = useState();
    const [ totalResults, setTotalResults] = useState() ;
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticia(pagina)
        }
    }, [searchParams, pagina]);

    const buscarNoticia = async () => {
        setIsLoading(true);
        const { articles: notis, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        setNoticias(notis);
        setTotalResults(totalResults);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
    }

    const onBuscar = (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda});
    };

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };

    return (
        <>
        <ButtonAppBar/>
        <Container maxWidth="md"  >
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { totalResults && <TotalResultados totalResults={totalResults}/>}
            { noticias && <ListaNoticias noticias={noticias}/> }
            { noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
        </Container>
        </>
    )
}

export default PaginaBuscador;