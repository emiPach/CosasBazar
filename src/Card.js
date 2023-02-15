import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { poner } from './reducers/carrito';
import {useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { retirar } from './reducers/carrito';

import CardActions from '@mui/material/CardActions';
 
export default function Tarjeta({name, image, price, id, quitar=false}) {

  const cartProducts = useSelector( (state) => state.carro)

  const [visible, setVisible] = useState(false)

 const dispatch = useDispatch()

 useEffect( () => {
  const si = cartProducts.find(element => element.payload.id === id);

  if(si !== undefined){

    setVisible(true);
  }

 
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[cartProducts])

 const handleQuitar = (identifier) => {
  dispatch(retirar(identifier))
  }
  

  return (
    <div style={{margin: '5%', display: 'flex', textAlign: 'center'}}>
  



    <Card sx={{ maxWidth: "100%" }} >
      <CardMedia
     component="img"
     height="45%"
     image={require(`./images/${image}`)} 
     alt= {name}
      />
      <CardContent style={{padding: '1%',}}>
        <Typography variant='h6'  >
         {name}
        </Typography>
       
        <Typography variant="h7" >
          <br />
          {price}$
        </Typography>
      </CardContent>

      <CardActions style={{justifyContent: 'center',}}>
      <IconButton disabled={visible}  onClick={() => {
              
              let product =  {
                id: id,
                name: name,
                image: image,
                price: price,
              
              } 
              dispatch(poner(product))
            

              setVisible(!visible)
             
            }}> 

  < AddShoppingCartIcon />

            </IconButton>

          { quitar && <IconButton onClick={() => handleQuitar(id)}> 

            < DeleteIcon />

            </IconButton> } 
      </CardActions>
    </Card>

    
    </div>
  );
}