import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useState } from "react";
import { TextField } from '@mui/material';

const Buscador = ({ onBuscar }) => {
  const [criterioBusqueda, setCriterioBusqueda] = useState('');

  return (
    <Paper
      sx={{  display: 'flex', flexDirection: 'row', alignItems: 'center', width: 400, margin: 'auto', marginTop: 5, marginBottom: 5 }}
    elevation={0}
   
   >
      <TextField
        sx={{ marginRight: 2 }}
        placeholder="Buscar Noticias"
        value={criterioBusqueda}
        onChange={(e) => {
          setCriterioBusqueda(e.target.value)
        }}
        fullWidth
        label="Buscar Noticia"
        type="text"
        autoComplete="current-password"
      />

      <Button
        aria-label="search"
        onClick={() => {
          if (criterioBusqueda.length > 3) {
            onBuscar(criterioBusqueda)
          }
        }}
        role="button"
        variant="contained"
        size="large"
      > Buscar
      </Button>
    </Paper>
  );
};

export default Buscador
