import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import { PatientsToday, PatientsTodayBack, MultipurposeButton } from "./components"
import './FlipBox.css'
import Footer from './Footer';
import axios from './axios.js';

function DocDashboard() {
    const [value, onChange] = useState(new Date());
    const [shortDate, setShortDate] = useState((new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(value).toUpperCase().toString()));

    const [PatientsList, setPatientsList] = React.useState([])
    const [post, setPost] = React.useState()

    useEffect(() => {
        async function fetchData() {
            const db = await axios.get('/doc')
            console.log(db.data);
            console.log(shortDate);
            setPatientsList((oldState) => db.data)
        }
        fetchData();
    }, [])

    async function handleClick(itemId) {
        console.log("itemId ", itemId);
        const res = await axios.delete(`/doc/${itemId}`)
            .then((r) => {
                console.log("deleted ", r);
            })
            .catch((e) => {
                console.log(e);
            })
    }

    return (
        <div style={{ backgroundColor: ' var(--lightBlue)' }}>
            <h2 className='title-main'> Schedule</h2>

            <div style={{ display: 'flex', padding: '0px 0px 30px 30px', marginTop: '-30px' }}>
                <Calendar onChange={onChange} value={value} class='react-calendar'
                    onClickDay={() => setShortDate(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(value).toUpperCase().toString())}
                />

                <div style={{ display: 'inline-flex', flexFlow: 'wrap', height: '430px',minWidth:'609px', overflowY: 'scroll', overflowX: 'hidden' }}>
                    {
                        PatientsList && PatientsList.map((d) => (
                            shortDate && d.date==shortDate ?
                                <label>
                                    <input type="checkbox" />
                                    <div class="card">
                                        <div class="front"> <PatientsToday time={d.time} age={d.age} name={d.name} /></div>
                                        <div class="back"> <PatientsTodayBack onClick={() => handleClick(d._id)} /></div>
                                    </div>
                                </label>
                                : <br />
                        ))
                    }

                </div>
                <img src='./img/Hospital_wheelchair-2.gif' height='400' style={{ float: 'right', marginTop: '-70px' }} />

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