import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import { PatientsToday, PatientsTodayBack } from "./components"
import './FlipBox.css'

function DocDashboard() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            {
                <div style={{ display: 'flex', padding: '30px 0px 30px 60px', backgroundColor: ' var(--lightBlue)' }}>
                    <Calendar onChange={onChange} value={value} class='react-calendar' />

                    <div style={{ display: 'inline-flex', flexFlow: 'wrap', overflow: 'scroll', height: '330px' }}>
                        <label>
                            <input type="checkbox" />
                            <div class="card">
                                <div class="front"> <PatientsToday /></div>
                                <div class="back"> <PatientsTodayBack /></div>
                            </div>
                        </label>
                    </div>
                    <img src='./img/Hospital_wheelchair.gif' height='420' style={{ float: 'right', marginTop: '-70px' }} />

                </div>
            }
            {/* <label>
                <input type="checkbox" />
                <div class="card">
                    <div class="front"> <PatientsToday /></div>
                    <div class="back"> <PatientsTodayBack /></div>
                </div>
            </label> */}
        </div>
    )
}

export default DocDashboard