import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './App.css'
import {EachVital} from './components'

function PatientDashboard() {
  return (
    <div style={{ backgroundColor: ' var(--lightPurple)' }}>
      <h6 className="welcome">Welcome</h6>
      <div style={{display:'flex'}}>

        <div className='profile-card'>
          <AccountCircleIcon style={{ fontSize: '9.0vw', marginLeft: '22%', marginBottom: 10 }} />
          <h4 style={{ marginBottom: 40 }}><b>Mr. Singh</b></h4>
          <span style={{ fontSize: '1.1vw', lineHeight: '50px', fontWeight: '600' }} >
            <ContactPageIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />27<br />
            <CalendarMonthIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />22/03/2000<br />
            <LocalPhoneIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />5984303810<br />
            <BloodtypeIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />A+<br />
            <HomeIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />#44, BTM 8th stage, Bangalore<br />
          </span>
        </div>

        <div className='vitals-container shadow' style={{display:'inline-flex',flexDirection:'column', flexFlow: 'wrap', overflow: 'scroll', height: '530px' }}>
          <EachVital/>
          <EachVital/>
          <EachVital/>
        </div>
        <img src='./img/profile.svg' height={500}/>

      </div>

    </div>
  )
}

export default PatientDashboard