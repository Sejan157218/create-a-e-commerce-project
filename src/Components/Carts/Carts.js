import { Divider, Drawer, SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToData,removeToData,getData } from '../../LocalHostData';
import "./Carts.css"
import Cart from '../Cart/Cart';

const Carts = () => {
    const [cartProduct,setCartProduct] = useState([]);
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=>res.json())
        .then(data=>setCartProduct(data))
    },[]);

    useEffect(()=>{
        if(cartProduct.length){
            const data = getData();
            const saveData = [];
            for(const productid in data){
                const productCart=cartProduct.find(product=>product.id==productid)
                const quantity = data[productid];
                productCart.quantity = quantity;
                saveData.push(productCart);
            }
            setProducts(saveData) 
        }
    },[cartProduct]);

    const cartIcon = <ShoppingCartIcon/>
    const [state, setState] = React.useState({
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
   
        <Divider />
    
      </Box>
    );


    const quantity = (previous,current) =>previous + current.quantity
   const totalCount =products.reduce(quantity,0); 
    const totalPrice =products.reduce((previous,current) =>previous + (current.price*current.quantity),0);

   
    return (
      <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor} className="div-margin">
          <Button className="cart-icon-btn" onClick={toggleDrawer(anchor, true)}>{cartIcon} : </Button>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >  
          <div className="div-margin">
          <h1>My cart</h1>
          
          <div className="product-cart">
          {
            
            products.map(product=><Cart product={[product]}></Cart>)
            
          }
          </div>
           <div className='total-price'>
           <h5>Subtotal  : ${totalPrice.toFixed(2)}</h5>
            <h5>Total : ${totalPrice.toFixed(2)}</h5>
           </div>
          </div>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

        
    </div>
    );
};

export default Carts;