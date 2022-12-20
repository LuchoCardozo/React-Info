import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';



export const TotalResultados = ({ totalResults }) => {

    return (
        <Box sx={{ width: '100%', margin: 'auto' }}>
            <Typography variant="h6" component="div">Esta viendo 10 noticias de {totalResults} resultados</Typography>
        </Box>

    )
}
