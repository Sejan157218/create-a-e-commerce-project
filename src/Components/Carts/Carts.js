import { SwipeableDrawer } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { addToData,removeToData,getData } from '../../LocalHostData';

const Carts = () => {
    const [cartProduct,setcartProduct] = useState([]);
    const [products,setProducts] = useState({});
    console.log(products);
    useEffect(()=>{
        const url = `https://fakestoreapi.com/products`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setcartProduct(data))
    },[]);

    useEffect(()=>{
        if(cartProduct.length){
            const data = getData();
            const saveData = [];
            for(const id in data){
                const product = cartProduct.find(product=>product.id=id);
                const quantity = data[id];
                product.quantity = quantity;
                saveData.push(product);
            }
            setProducts(saveData) 
        }
        
    },[cartProduct]);


    const toggleDrawer = (anchor, open) => (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          (event.key === 'Tab' || event.key === 'Shift')
        ) {
          return;
        }
    return (
        <div>
      {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            // anchor={anchor}
            // open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
            // onOpen={toggleDrawer(anchor, true)}
          >
            {/* {list(anchor)} */}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
    );
};

export default Carts;