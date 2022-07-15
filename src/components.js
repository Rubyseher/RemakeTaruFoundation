import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import App from "./App";
import "./App.css";
export const NavbarMain = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home" style={{display: 'flex',alignItems: 'center'}}>
            <img
              alt=""
              src="/img/logo.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
             &nbsp; &nbsp; Taru Foundations
          </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export const RmpNotification = () => {
    return(
        <div>
            <h3 style={{textAlign:'left'}}>Notification</h3>
            <div className="rmpNotiBox">
                Dr.Singh singh<br/>
                Dentist
                <span >10:00pm-11:00pm</span>
            </div>
        </div>
    )
}
