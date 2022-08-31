import React, { Fragment, useEffect, setState } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faBacterium, faCommentMedical,faWeightScale, faLungs, faBrain, faBone, faTooth, faHeadSideCough, faHandDots, faBaby, faPersonPregnant, faHeartPulse } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton';
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
            <Button href="/login" variant="outlined" sx={{ color: '#1b53ac' }} startIcon={<LoginIcon />}>
                <b>LOGIN</b>
            </Button>
        </Navbar>
    )
}
export const EachVital = () => {
    return (
        <div style={{ display: 'flex', height: 'fit-content', margin: '20px 0' }}>
            <span className="prescription-date">
                <h4>25</h4>
                <h6>Jun 22</h6>
            </span>
            <div className='shadow prescription'>
                <div className="vitalTitle">Vials</div>
                <p>
                    <FontAwesomeIcon icon={faHeartPulse} size='xl' color="#e24033" /> BP : 90/120
                    <FontAwesomeIcon icon={faWeightScale} size='xl' color="#3e9c45"  style={{marginLeft:'100'}}/> Weight : 77kgs
                </p>

                <div className="vitalTitle">Prescription</div>
                <p>
                    20mg methyl daily morning for 10 days
                    5mg dolo night for 5 days
                </p>

            </div>
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
            specialization: "Orthopaedic ",
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
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/booking`; 
      navigate(path);
    }
    return (
        servicesList.map(i =>
            <div className="services-container" onClick={routeChange}>
                <span style={{ margin: '12px 0 0 25px' }}><b>{i.specialization}</b></span>
                <div className='circle-services' style={{ backgroundColor: 'var(--babyBlue)' }}>
                    {/* <MoreTimeIcon sx={{ color:'var(--royalBlue)', fontSize: 25 }} /> */}
                    <FontAwesomeIcon icon={i.icon} size='xl' color="var(--darkBlue)" />
                </div>
            </div>
        )
    )
}
export const ParallaxContainer = () => {
    return (
        <Parallax bgImage='./img/parallaxDoc2.webp' strength={500}
            bgImageStyle={{ width: '100%' }} style={{ height: '670px' }}>
            <div style={{ height: 500 }}>
                <div className='parallax' style={{ background: 'transparent' }}>
                    <img src="/img/healthcare.png" width={800} style={{ marginTop: '90px' }} />
                    {/* <img src="/img/forAll.png" /> */}
                </div>
            </div>
        </Parallax>
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
                <img src='/img/meet.png' width={50} />
            </IconButton>

            Mr.Singh singh<br />
            <span style={{ fontWeight: 400, fontSize: 14 }}>44 yrs</span>
        </div>

    )
}

export const PatientsTodayBack = () => {
    return (
        <div className="patientTodayBack">
            Cancel the appointment?<br />
            <Button variant="outlined" startIcon={<DeleteIcon />} color="error"
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
