import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { DEFAULT_IMAGE, NA } from '../../libs/constantes';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { Box, Card } from '@mui/material';
import { DateTime } from 'luxon';


export const ListaNoticias = ({ noticias }) => {

  return (
    <Box sx={{ width: '100%', margin: 'auto' }}>
      <Stack spacing={1}>
        {
          noticias.map((noticia) => {
            return (

              <Link href={noticia.url} underline="none">
                <Card sx={{ display: 'flex', flexDirection: 'row', borderRadius: 2, backgroundColor: '#34495E', color: '#FBFCFC' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', width:'80%', }}>
                    <CardContent >
                      <Typography variant="h6" component="div">
                        {noticia.title}
                      </Typography>
                      <Typography variant="body2" >
                        {noticia.description.substring(0, 180)}  ....
                      </Typography>
                      <Typography variant="subtitle2" >Autor: {noticia.author}</Typography>
                      <Typography variant="subtitle2" >Publicado el: {DateTime.fromISO(noticia.publishedAt).toFormat('dd/MM/yyyy')} a las {DateTime.fromISO(noticia.publishedAt).toFormat('HH:mm')} </Typography>
                    </CardContent>
                  </Box>
                    <div
                      style={{
                        display:'block',
                        width:'20%',
                        backgroundImage: `url(${noticia.urlToImage === NA ? DEFAULT_IMAGE : noticia.urlToImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
          
                      }}
                    >
                    </div>
                </Card>
              </Link>

            )
          })
        }
      </Stack>
    </Box>

  )
}


