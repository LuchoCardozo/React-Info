import { Box, Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiaPagina = (_evento, pagina) => {
        onChange(pagina);
    };

    return (
        <Box sx={{ width: '100%', margin:'50px auto', display:'flex', justifyContent:'center' }}>
            <Pagination
                shape="rounded"
                size="large" 
                count={cantidadPaginas}
                color="primary"
                onChange={cambiaPagina}
            />
        </Box>
    );
}

export default Paginador;
