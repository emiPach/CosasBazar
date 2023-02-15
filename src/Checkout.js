import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tarjeta from "./Card";
import {  useSelector, useDispatch } from 'react-redux';
import {useEffect } from 'react';
import {cambiar } from './reducers/total';
import {vaciar } from './reducers/carrito';
import {Link } from "react-router-dom";


export default function Checkout(){
const carro = useSelector((state) => state.carro);
const total = useSelector((state) => state.total);

const dispatch = useDispatch()



useEffect( () => {
    let res= 0;
    if(carro.length){
        for(const product of carro){
            res+= parseInt(product.payload.price)
        }
    }
    dispatch(cambiar(res));
    
// eslint-disable-next-line react-hooks/exhaustive-deps
},[carro])


const handleComprar = () => {
    if(! carro.length){return}
    let texto = ""
    if(carro.length>1){texto = "Hola que tal, me interesa comprar los siguientes productos:\n"} 
    else {texto = "Hola que tal, me interesa comprar el siguiente producto:\n"}
    for( let i = 0; i< carro.length - 1; i++){
    texto+= carro[i].payload.name + ","
    }
    texto+= carro[carro.length-1].payload.name + "."

    console.log(texto)
    
    window.location.href=`https://wa.me/7222402775?text=${texto}`
}

const handleVaciar = () => {
    dispatch(vaciar())
    dispatch(cambiar(0))
  
}



    return (
<div >
       
 <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
    
       
       {carro?.map( ( cosas ) => {
        
  return(
    <Box sx={{width: '20%',
    height: 'auto',}} key={cosas.payload.id}>
    <Tarjeta name={ cosas.payload.name} image={cosas.payload.image} price={cosas.payload.price} id={cosas.payload.id} 
    quitar={true}/>
    </Box>
 ) } ) 
 }


       </Stack>
       <Typography variant='h4'  gutterBottom>
         {total.payload}
        </Typography>
        <Button variant="contained" onClick={handleComprar}>Comprar</Button>
        <Button variant="outlined" onClick={handleVaciar} >Vaciar</Button>
        <Link to="/"> 
        <Button variant="outlined">Regresar</Button>
        </Link> 

    </Box>
        </div>
    )
}