import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import {Link } from "react-router-dom";

export default function About() {
  return (
    <Box  style={{margin: '10%',  width: '100%', display: 'flex', alignItems: 'center', flexDirection:"column"}}>
      <Typography variant="h3" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="h5" gutterBottom>
        Básicamente un bazar de cosas pero bien baratas, solo que en línea.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Entregas a domicilio en toda la república, presenciales Toluca-Metepec.
      </Typography>
      <Typography variant="h7" gutterBottom>
        Síguenos en nuestras redes:

      </Typography>
      <Grid container spacing={2}    style={{ flexDirection:"column",
    display:"flex",
    alignItems: "center",
  justifyContent: "center"}}
   >
<Grid item xs={4}>
                   
  <Typography variant="body1" gutterBottom style={{color: '#063970'}}>
    @cosasBazar_mx
  </Typography>
         </Grid>
  <Grid item xs={4}>
  <Link to="/"> 

  <InstagramIcon fontSize="large" sx={{ transform: {xs:"none", md:"scale(3)"}, margin:"3vw"}}/>
  </Link>
  <Link to="/"> 
         
  
         <FacebookIcon fontSize="large" sx={{ transform: {xs:"none", md:"scale(3)"}, margin:"3vw"  }}/>
                </Link>
  </Grid>
  
  
</Grid>
      
  
  
      
    </Box>
  );
}

