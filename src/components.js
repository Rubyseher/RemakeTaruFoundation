import React, { Fragment } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import App from "./App";
import "./App.css";
import IconButton from '@mui/material/IconButton';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
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
        <div className="patientTodayBox shadow" >
            <IconButton color="primary" aria-label="add to shopping cart" className='close_button'>
                <CancelRoundedIcon sx={{ color: 'red', fontSize: 30, backgroundColor: 'white', borderRadius: '30px' }} />
            </IconButton>
            <span className="timeSlotBox shadow">10:00 pm - 11:00 pm</span>
            <IconButton color="primary" className='meetLogo'>
                <img src='/img/meet.png' width={50}  />
            </IconButton>

            Mr.Singh singh<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>44 yrs</span>
        </div>

    )
}

export const PatientsTodayBack = () => {
    return (
        <div className="patientTodayBack">
            Are you sure you want to cancel the appointment?<br />
            Yes
        </div>

    )
}
// function EasingComponent() {
//     const { background, rotateX } = useSpring({
//       from: {
//         background: '#46e891',
//         rotateX: 0,
//       },
//       to: {
//         background: '#277ef4',
//         rotateX: 190,
//       },
//       config: {
//         duration: 2000,
//         easing: easings.easeInOutQuart,
//       },
//       loop: { reverse: false },
//     })
  
//     return (
//       <animated.div
//         style={{ background, width: 120, height: 120, borderRadius: 16, rotateX}}
//       />
//     )
//   }
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
