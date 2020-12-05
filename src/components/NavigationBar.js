import React from 'react';
import{ Nav , Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Nav.css';

export const NavigationBar = () => (
   
     <Navbar expand="lg">
         <Navbar.Brand className="text-white" href="/">Expery</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
         <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ml-auto">
                 <Nav.Item> <Nav.Link href="/">For Entrepreneur</Nav.Link> </Nav.Item>
                 <Nav.Item> <Nav.Link href="/about">For Experts</Nav.Link> </Nav.Item>

            </Nav>
         </Navbar.Collapse>
     </Navbar>
  
)
export default NavigationBar;