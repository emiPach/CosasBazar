import './App.css';
import Tarjeta from "./Card";
import Producto from "./products"
import Grid from '@mui/material/Grid';
import React from 'react';


function Inicio() {
  return (
<Grid container>

  {Producto.map( ( product) => {
  
    return(
  
    <Grid item xs={6} md={4} key={product.id}>
    <Tarjeta name={product.name} image={product.img}
   price={product.price} id={product.id} />
  </Grid> ) } ) }

</Grid>


  );
}




export default Inicio;
