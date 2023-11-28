import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Category from '../../pages/Category';
const NavBarComponent = () => {

  const {categories, setCategories} = useState ([]);
  useEffect (() => {
    .get('https://dummyjson.com/products/categories')
    .then((res) => setCategories (res.data));
    .catch((error) => console.log (error));
  }, []);



  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link 
          to={"/"}
          style={{textDecoration: "none", color: "black"}}
          >
            La tienda de la Videoteca</Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Categorías" id="basic-nav-dropdown">
            {categories.map ((category, index) => {
              return {
              <NavDropdown.Item key={index}>
                <Link
                  to={`/category/${category}`}
                  style={{textDecoration:"none", color: "black"}}
                >
                {Category}
                
                </Link>
              </NavDropdown.Item>
              );
              })}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;