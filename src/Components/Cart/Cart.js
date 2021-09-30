import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './Cart.css'
import { addToData, removeToData } from '../../LocalHostData';
const Cart = (props) => {
  //  const {product} = props;
  //  const quantity = (previous,current) =>previous + current.quantity
  //  const totalCount =product.reduce(quantity,0); 
    const {title,image,price,quantity} = props.product[0];
    const handlerToCart=item=>{
      item.quantity = 1;
      addToData(item.id)
    }  
    const handlerToRemove=(item)=>{
      removeToData(item.id)
    } 
    return (
        <Card sx={{ display: 'flex',mb :2 }}>
          <CardMedia
        component="img"
        sx={{ width: 80 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box
       sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {title.slice(0,17)}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            ${price} x {quantity}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <Button className="icon-add" onClick={()=>handlerToRemove(props.product[0])}> <RemoveIcon fontSize="small"/></Button>
            <span className='quantity'>{quantity}</span>
          <Button className="icon-add" onClick={()=>handlerToCart(props.product[0])}><AddIcon fontSize="small"/> </Button>
          </Typography>
        </CardContent>
      </Box>
    </Card>
    );
};

export default Cart;