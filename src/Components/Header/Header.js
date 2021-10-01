
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'
import { Form, FormControl, Navbar } from 'react-bootstrap';

  
import './Header.css'


const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <NavLink to="/"><img className="img-size" src={logo} alt="" /></NavLink>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              
                <NavLink className="mr-auto my-2 my-lg-0  text-decoration-none" to="/home">All Products</NavLink>
                <NavLink className="mr-auto my-2 my-lg-0 mx-4 text-decoration-none" to="/cart">Cart</NavLink>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                </Form>
            </Navbar.Collapse>
            </Navbar>
    );
};

export default Header;