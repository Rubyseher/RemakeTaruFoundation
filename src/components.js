import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import App from "./App";
import "./App.css";

export const NavbarMain = () => {
    return (
        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand href="#home" style={{ display: 'flex', alignItems: 'center' }}>
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
    return (
        <div className="rmpNotiBox shadow">
            <span className="timeSlotBox shadow">10:00 pm - 11:00 pm</span>
            Dr.Singh singh<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>Dentist</span>
        </div>
    )
}

export const PatientsToday= () => {
    return (
        <div className="patientTodayBox shadow">
            <span className="timeSlotBox shadow">10:00 pm - 11:00 pm</span>
            <img src='/img/meet.png' width={50} className='meetLogo'/>
            Mr.Singh singh<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>44 yrs</span>
        </div>
    )
}

export const MultipurposeButton = () => {
    return (
        <div className="multiBox" >
            Book <br />Appointments
        </div>
    )
}
