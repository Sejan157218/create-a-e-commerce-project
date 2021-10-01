import { Divider, Drawer, SwipeableDrawer } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addToData,removeToData,deleteData } from '../../LocalHostData';
import "./Carts.css"
import Cart from '../Cart/Cart';
import useCartproduct from '../hook/useCartProducts';
import useNewCartProduct from '../hook/useNewCartProduct';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';

const Carts = () => {
    const [cartProduct] = useCartproduct();
    const [products,setProducts] = useNewCartProduct(cartProduct);

    const handlerToCart=item=>{
    if(products.length){
      const newProduct = [...products];
      const newProductCart=newProduct.find(product=>product.id==item.id);
      newProductCart.quantity += 1;
      setProducts(newProduct)
    }
    addToData(item.id);
  } 
    const handlerToRemove=(item)=>{
      if(products.length){
        const newProduct = [...products];
        const newProductCart=newProduct.find(product=>product.id==item.id);
        if(newProductCart.quantity>0){
          newProductCart.quantity -= 1;
        }
        setProducts(newProduct)
      }
      removeToData(item.id)
    } 


   const handlerToDelete=item => {
    if(products.length){
      const newProduct = [...products];
      const newProductCart=newProduct.filter(product=>product.id !==item.id);
      setProducts(newProductCart)
    }
      deleteData(item.id)
    }

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


    // search field and cart
    const Search = styled('div')(({ theme }) => ({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
      color: 'inherit',
      '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
    }));
    

      const [anchorEl, setAnchorEl] = React.useState(null);
      const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    
    
      const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
      const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
    
      const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
      };
    
      const menuId = 'primary-search-account-menu';
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={menuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          
        </Menu>
      );
    
      const mobileMenuId = 'primary-search-account-menu-mobile';
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          id={mobileMenuId}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
        >
          <MenuItem>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
       
    
        </Menu>
      );

    return (
      <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor} className="div-margin">
              {/* search field */}
              <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
     
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
      
          
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );


          <Button className="cart-icon-btn" onClick={toggleDrawer(anchor, true)}>{cartIcon} {totalCount}</Button>
          <Drawer
            
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >  
          <div className="div-margin">
          <h1>My cart</h1>
          
          <div className="product-cart">
          {
            
            products.map(product=><Cart handlerToCart={handlerToCart} handlerToRemove={handlerToRemove} handlerToDelete={handlerToDelete} product={[product]}></Cart>)
            
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