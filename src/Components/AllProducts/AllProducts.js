import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './AllProducts.css'

const AllProducts = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])
    return (
        <div className="allproduct-container">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {products.map(product => (
            <Grid item xs={2} sm={4} md={3} >
            <Products key={product.id} product={product}></Products>
            </Grid>
        ))}
        </Grid>
        </div>
    );
};

export default AllProducts;