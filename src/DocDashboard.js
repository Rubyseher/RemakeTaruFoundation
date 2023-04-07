import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { PatientsToday, PatientsTodayBack, MultipurposeButton } from "./components"
import './FlipBox.css'
import Footer from './Footer';
import axios from './axios.js';
import { useLocation } from 'react-router-dom';

function DocDashboard() {
    const [value, onChange] = useState(new Date());
    const [shortDate, setShortDate] = useState((new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(value).toUpperCase().toString()));

    const [PatientsList, setPatientsList] = React.useState([])
    // const [docName, setDocName] = React.useState()
    const [post, setPost] = React.useState()

    const data = useLocation();
    // setDocName(data.state.data.fullName);
    async function fetchData() {
        const db = await axios.get('/doc')
        console.log(db.data);
        console.log(shortDate);
        setPatientsList((oldState) => db.data)
    }
    useEffect(() => {
        fetchData();
    }, [])

    async function handleClick(itemId) {
        console.log("itemId ", itemId);
        const res = await axios.delete(`/doc/${itemId}`)
            .then((r) => {
                console.log("deleted ", r);
                fetchData();
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <div style={{ backgroundColor: ' var(--lightBlue)' }}>
            <h3 style={{ color: 'var(--blue)', padding: '45px 30px 15px 60px' }}><b>Welcome {data.state.data.fullName}</b></h3>

            <div style={{ display: 'flex', margin: '0 auto',width:'70vw' }}>
                
                <div style={{ width: '25rem' }}>
                    <Calendar onChange={onChange} value={value} class='react-calendar'
                        onClickDay={() => setShortDate(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(value).toUpperCase().toString())}
                    />
                </div>

                <div style={{ marginLeft:'2rem',display: 'inline-flex', flexFlow: 'wrap', height: '300px', width:'600px',overflowY: 'scroll', overflowX: 'hidden' }}>
                    {
                        PatientsList && PatientsList.map((d) => (
                            shortDate && d.date == shortDate && d.doc == data.state.data.fullName ?
                                <label>
                                    <input type="checkbox" />
                                    <div class="card">
                                        <div class="front"> <PatientsToday time={d.time} age={d.age} name={d.name} /></div>
                                        <div class="back"> <PatientsTodayBack onClick={() => handleClick(d._id)} /></div>
                                    </div>
                                </label>
                                : <div></div>
                        ))
                    }

                </div>
                {/* <img src='./img/Hospital_wheelchair-2.gif' height='350' style={{ float: 'right', marginTop: '-70px' }} /> */}
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'var(--babyPurple)' }}>
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Publish Free Slots'} />
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Cancel All Appointments'} />
                <MultipurposeButton color={'#6d45ae'} bg={'#eae1fa'} text={'Show Patient Details'} />
            </div> */}
            <Footer />
        </div>
    )
}

export default DocDashboard