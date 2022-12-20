import { Typography, Card, Button } from "@mui/material";

function Error404() {
    return (

        <Card sx={{
            maxWidth: 600, margin: 'auto', marginTop: 10, display: 'flex',flexDirection:'column', justifyContent: 'center',
        }} >
            <Typography variant="h1" marginBottom={5}>
                Error 404: Página no encontrada
            </Typography>
            <Typography marginBottom={5}>
                La página que estás buscando no existe o ha sido movida.
            </Typography>
            <Button variant="contained" color="success" href="/"  underline="none" >página principal</Button>
        </Card>

    );
}

export default Error404;