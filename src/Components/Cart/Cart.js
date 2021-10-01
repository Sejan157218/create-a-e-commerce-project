import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css';



const Cart = (props) => {
  //  const {product} = props;
  //  const quantity = (previous,current) =>previous + current.quantity
  //  const totalCount =product.reduce(quantity,0); 
    const {title,image,price,quantity} = props.product[0];
   
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
          <div>
          <Button className="icon-add" onClick={()=>props.handlerToRemove(props.product[0])}> <RemoveIcon fontSize="small"/></Button>
            <span className='quantity'>{quantity}</span>
          <Button className="icon-add" onClick={()=>props.handlerToCart(props.product[0])}><AddIcon fontSize="small"/> </Button>
          </div>
          <div>
          <Button className="icon-add" onClick={()=>props.handlerToDelete(props.product[0])}><DeleteIcon fontSize="small"/> </Button>
          </div>
          </Typography>
        </CardContent>
      </Box>
    </Card>
    );
};

export default Cart;