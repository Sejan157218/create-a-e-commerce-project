import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Cart = (props) => {
   const {product} = props;
   const quantity = (previous,current) =>previous + current.quantity
   const totalCount =product.reduce(quantity,0); 

//    const totalCount = product.reduce((previous, product) => previous + product.quantity, 0);
//    console.log(props);
    console.log(product);
    return (
        <Card sx={{ display: 'flex' }}>
      <Box
       sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
     <hr />
    </Card>
    
   
    );
};

export default Cart;