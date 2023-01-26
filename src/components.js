import React, { Fragment, useEffect, setState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faBacterium, faCommentMedical, faWeightScale, faLungs, faBrain, faBone, faTooth, faHeadSideCough, faHandDots, faBaby, faPersonPregnant, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Parallax } from 'react-parallax';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";

export const NavbarMain = () => {
    return (
        <Navbar bg="light" variant="light" className='shadow'>
            <Container>
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center' }}>
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
            {/* <Button variant="contained" sx={{ color: 'white', backgroundColor: '#3e37c9d9', width: '8%', borderRadius: '16px', padding: '8px 0px', marginRight: '8px' }}><b>Login</b></Button> */}
            <Button href="/login" variant="contained" sx={{ fontWeight: 'bold', letterSpacing: '2px', width: '8%', borderRadius: '12px', backgroundColor: 'var(--blue)', marginRight: '20px', padding: '7px 50px' }}>Login</Button>
            {/* <Button href="/login" variant="primary">Primary</Button> */}
        </Navbar>
    )
}
export const EachVital = (props) => {
    return (
        <div style={{ display: 'flex', height: 'fit-content', margin: '20px 0' }}>
            <span className="prescription-date">
                <h4>{props.date.split(' ')[0]}</h4>
                <h6>{props.date.slice( props.date.indexOf(' ') + 1)}</h6>
            </span>
            <div className='shadow prescription'>
                <div className="vitalTitle">Vials</div>
                <p>
                    <FontAwesomeIcon icon={faHeartPulse} size='xl' color="var(--blue)" /> BP :{props.bp}
                    <FontAwesomeIcon icon={faWeightScale} size='xl' color="var(--blue)" style={{ marginLeft: '100' }} /> Weight : {props.weight}
                </p>

                <div className="vitalTitle"><b>Prescription</b></div>
                <p>
                {props.prescription}
                </p>

            </div>
        </div>
    )
}

export const ConfirmBooking = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log(window.localStorage.getItem('signedIN'));

        if(JSON.parse(window.localStorage.getItem('signedIn')))
            navigate(`/doc`);
        else
        navigate(`/login`);
        
    }

    return (
        <div className="booking-confirm-container shadow">
            <div className='circle-multi' style={{ backgroundColor: 'var(--babyBlue)', width: '100px', height: '100px', borderRadius: '90px', marginBottom: '20px' }}>
                <CalendarMonthOutlinedIcon sx={{ fontSize: '63px', color: "var(--blue)" }} />
            </div>
            <div>Confirm<br />your appointment</div><br />
            <div style={{ letterSpacing: 1 }}><b>{props.time}
                <span style={{ color: 'gray' }}> | </span>
                {props.doc}</b>
            </div>
            <div style={{ color: 'gray', letterSpacing: 1, fontSize: 15, marginTop: 4 }}><b>{props.date}</b></div><br />
            <Button variant="contained" onClick={()=>handleClick()} sx={{ color: 'white', width: '90%', borderRadius: '30px', padding: '10px 0px', backgroundColor: 'var(--blue)' }}><b>CONFIRM</b></Button>
        </div>
    )
}

export const Services = () => {
    const servicesList = [
        {
            specialization: "Pediatrician",
            icon: faBaby
        }
        , {
            specialization: "Dermatologist",
            icon: faHandDots
        },
        {
            specialization: "Gynocologist",
            icon: faPersonPregnant
        }
        , {
            specialization: "Cardiologist",
            icon: faHeartPulse
        },
        {
            specialization: "General",
            icon: faHeadSideCough
        }
        , {
            specialization: "Dentist",
            icon: faTooth
        }
        , {
            specialization: "Orthopaedic",
            icon: faBone
        },
        {
            specialization: "Psychiatrists",
            icon: faCommentMedical
        }
        , {
            specialization: "Pulmonologist",
            icon: faLungs
        },
        {
            specialization: "Neurologist",
            icon: faBrain
        },
        {
            specialization: "Oncologist",
            icon: faBacterium
        },
        {
            specialization: "Gastroenterologist",
            icon: faCarrot
        }
    ];
    const navigate = useNavigate();
    const routeChange = (s) => {
        let path = `/booking`;
        navigate(path, {
            state: {
                specialization: s
            }
        });
    }
    return (
        servicesList.map(i =>
            <div className="services-container" onClick={() => routeChange(i.specialization)}>
                <span style={{ margin: '12px 0 0 25px' }}><b>{i.specialization}</b></span>
                <div className='circle-services' style={{ backgroundColor: 'var(--babyBlue)' }}>
                    <FontAwesomeIcon icon={i.icon} size='xl' color="#4361EE" />
                </div>
            </div>
        )
    )
}
export const ParallaxContainer = () => {
    return (
        <Parallax bgImage='./img/main2.jpg' strength={500}
            bgImageStyle={{ width: '100%' }} style={{ height: '670px' }}>
            <div style={{ height: 500 }}>
                <div className='parallax' style={{ background: 'transparent' }}>
                    <h1 className="title-main" style={{ fontSize: '70px', paddingTop: 160 }}>Health Care For All</h1>
                </div>
            </div>
        </Parallax>
    )
}

export const RmpNotification = (props) => {
    return (
        <div className="rmpNotiBox shadow">
            <span className="timeSlotBox shadow" style={{ letterSpacing: '0.5px', fontSize: 15}}><b>{props.time}</b></span>
            {props.name}<br />
            <span className="specialization">{props.spec}</span>
        </div>
    )
}

export const DoctorsAvaliable = (props) => {
    return (
        <div className="rmpNotiBox shadow" onClick={props.onClick}>
            <span className="timeSlotBox shadow" style={{ letterSpacing: '0.1px', fontSize: 14}}><b>BOOK NOW</b></span>
            <div style={{ margin: '2px 0 6px 0' }}>{props.name}</div>
            <div>

                <span className="specialization">{props.spec} , {props.experience} yrs</span>
                <span className="language" >{props.languages}</span>
            </div>
        </div>
    )
}

export const PatientsToday = (props) => {
    return (
        <div className="patientTodayBox shadow" >
                <CancelRoundedIcon className='close_button' sx={{ color: '#d9381e', fontSize: 30, backgroundColor: 'white', borderRadius: '30px' }} />
            <div style={{justifyContent:'right',paddingRight:'40px'}}>
                <span className="timeSlotBox shadow" style={{ letterSpacing: '0.5px', fontSize: 16, color: 'white', backgroundColor: 'var(--blue)' }}>
                    <b>{props.time}</b>
                </span>
                <IconButton color="primary" className='meetLogo'>
                    <img src='/img/meet.png' width={50} />
                </IconButton>
            </div>

            <div style={{ color: 'var(--blue)' }}>
               {props.name}
            </div> <br />
            <span style={{ fontWeight: 500, fontSize: 14 ,color:'grey'}}>{props.age}</span>
        </div>

    )
}

export const PatientsTodayBack = (props) => {
    return (
        <div className="patientTodayBack">
            Cancel the appointment?<br />
            <Button onClick={props.onClick} variant="outlined" startIcon={<DeleteIcon />} color="error"
                sx={{ fontWeight: 'bold', borderRadius: '10px', width: '150px', marginTop: '4px', backgroundColor: 'white' }}>
                Yes
            </Button>
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
export const MultipurposeButton = ({ color, text, bg }) => {
    return (
        <div className="multiBox shadow" style={{ backgroundColor: `${color}` }}>
            <div className='circle-multi' style={{ backgroundColor: `${bg}` }}>
                <MoreTimeIcon sx={{ color: `${color}`, fontSize: 45 }} />
            </div>
            <p>{text} </p>
            {/* {text} */}
        </div>
    )
}
