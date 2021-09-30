import { Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import { addToData,removeToData } from '../../LocalHostData';

const Products = (props) => {
    const {id,title,price,image,category,rating} = props.product;
    const history = useHistory();

    const handlerToCart=item=>{
      item.quantity = 1;
      addToData(item.id)
    }  
    const handlerToRemove=(item)=>{
      removeToData(item.id)
    }  
    const handlerForDetails=()=>{
      history.push(`/product/${id}`)
    }

    
    return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.slice(0,15)}
        </Typography>
        <Typography variant="h5" color="div">
        Category: {category}
        </Typography>
        <Typography variant="h5" color="div">
        Price: {price}
        </Typography>   
      </CardContent>
      <Rating name="read-only" value={rating.rate} readOnly />
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button onClick={()=>handlerToCart(props.product)} size="small">Add to cart</Button>
        <Button onClick={()=>handlerToRemove(props.product)} size="small">remove to cart</Button>
        <Button onClick={handlerForDetails} size="small" target="_blank">Details</Button>
      </CardActions>
    </Card>
    );
};

export default Products;