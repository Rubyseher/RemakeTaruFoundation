import React, { Fragment } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import App from "./App";
import "./App.css";
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';

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
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export const RmpNotification = (props) => {
    return (
        <div className="rmpNotiBox shadow">
            <span className="timeSlotBox shadow">{props.time}</span>
            {props.name}<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>{props.spec}</span>
        </div>
    )
}

export const PatientsToday = () => {
    return (
        <Fragment>
            {/* <IconButton color="secondary" aria-label="add to shopping cart" className='close_button'>
                <CancelIcon sx={{ color: 'red', fontSize: 25 }} />
            </IconButton> */}
            <div className="patientTodayBox shadow">
                <span className="timeSlotBox shadow">10:00 pm - 11:00 pm</span>
                <img src='/img/meet.png' width={50} className='meetLogo' />
                Mr.Singh singh<br />
                <span style={{ fontWeight: 400, fontSize: 14 }}>44 yrs</span>
            </div>

        </Fragment>

    )
}

export const Footer = () => {
    <a href="https://storyset.com/health">Health illustrations by Storyset</a>
}
export const MultipurposeButton = () => {
    return (
        <div className="multiBox" >
            Book <br />Appointments
        </div>
    )
}
