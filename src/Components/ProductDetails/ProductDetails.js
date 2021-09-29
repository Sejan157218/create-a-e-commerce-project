import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams();
    const [product,setProduct] =useState({});
    const {title,price,image,category,description} = product || {};
    useEffect(()=>{
        const url = `https://fakestoreapi.com/products/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[id]);

    const history = useHistory();
    const handlerTOBack=()=>{
        history.push('/')
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
          {title}
        </Typography>
        <Typography variant="h5" color="div">
        Category: {category}
        </Typography>
        <Typography variant="h5" color="div">
        Price: {price}
        </Typography>   
        <Typography variant="p" color="div">
        {description}
        </Typography>   
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handlerTOBack} size="small" target="_blank">Back to Home</Button>
      </CardActions>
    </Card>
    );
};

export default ProductDetails;