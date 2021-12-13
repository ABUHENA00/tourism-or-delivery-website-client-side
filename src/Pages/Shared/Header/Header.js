import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Header.css';


const Header = () => {
  const {user, logOut} =useAuth()||{}
    return (
        <>
        <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg">
       <Container>
       <Navbar.Brand href="#home"><h1 className="text-secondary">HOTEL BOOKING</h1></Navbar.Brand>
 
       <Navbar.Toggle />
       <Navbar.Collapse className="justify-content-end">
         <Nav.Link as={HashLink} to="/home#home" className="text-success">Home</Nav.Link>

         {user?.email?<>(
        <Nav.Link as={Link} to ="/addService" className="text-success">AddService</Nav.Link>
        <Nav.Link as={Link} to ="/manageService" className="text-success">ManageAllServices</Nav.Link>
        <Nav.Link as={Link} to ="/myorders" className="text-success">MyOrders</Nav.Link>
        <Button variant="danger" onClick={logOut}>LogOut</Button>
    )</>:
        <Nav.Link as={Link} to ="/login">LogIn</Nav.Link>}
       <Navbar.Text>
      <span className="text-light"> Sign in :<span className="text-primary">{user.displayName}</span></span> 
       </Navbar.Text>
       </Navbar.Collapse>
       </Container>
     </Navbar>
       </>
    );
};

export default Header;