import React,{useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./App.css";
import {PatientsToday} from "./components"

function DocDashboard() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <Calendar onChange={onChange} value={value} class='react-calendar'/>
            <PatientsToday/>
        </div>
    )
}

export default DocDashboard