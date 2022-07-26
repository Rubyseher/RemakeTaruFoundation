import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import { PatientsToday } from "./components"

function DocDashboard() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Calendar onChange={onChange} value={value} class='react-calendar' />

                <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', overflow: 'scroll', height: '230px' }}>
                    <PatientsToday />
                    <PatientsToday />
                </div>
            </div>

        </div>
    )
}

export default DocDashboard