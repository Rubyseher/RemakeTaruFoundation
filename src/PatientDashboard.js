import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './App.css'
import { EachVital ,EachAppointment} from './components'
import axios from './axios.js';


function PatientDashboard() {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    async function handleLogin() {
      const res = await axios.post('/patient', { token: window.localStorage.getItem("token") }
      ).then(function (response) {
        console.log(response.data.data, "user data");
        window.localStorage.setItem('signedIN', "true")
        setUserData(response.data.data)
      }).catch(function (error) {
        console.log(error);
      });
    }

    handleLogin()
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--lightBlue)' }}>
      <h3 style={{ color: 'var(--blue)', padding: '45px 30px 15px 60px' }}><b>Welcome Ms.Priyanka</b></h3>
      <div style={{ display: 'flex' }}>

        <div className='profile-card'>
          <AccountCircleIcon style={{ fontSize: '9.0vw', marginLeft: '22%', marginBottom: 10 }} />
          <h4 style={{ marginBottom: 40 }}><b>{userData.fullName}</b></h4>
          <span style={{ fontSize: '1.1vw', lineHeight: '50px', fontWeight: '600' }} >
            <ContactPageIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />{userData.age} years<br />
            <LocalPhoneIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />{userData.phone}<br />
            <BloodtypeIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />{userData.bloodGroup}<br />
            <HomeIcon style={{ fontSize: '1.8vw', marginRight: '15px' }} />{userData.address}<br />
          </span>
        </div>

        <div style={{ width: '860 px' }}>
          <div className='vitals-container shadow' style={{ display: 'inline-flex', flexDirection: 'column', flexFlow: 'wrap', overflow: 'scroll', width: '850px',height:'350px', marginBottom: '40px' }}>
            <h4 style={{ color: 'var(--blue)', padding:'15px 30px 0px 70px' }}><b>Upcoming Appointment</b></h4>
            {
              Array.isArray(userData.appointments) && userData.appointments.length ?
                userData.appointments.map((d) => (
                  <EachAppointment doc={d.doc} meet={d.meet} date={d.date} time={d.time} specialization={d.specialization} />
                ))
                :
                <h5 style={{ display: 'flex', alignItems: 'center', margin: '0 auto', textAlign: 'center', fontWeight: 700 }}>
                  Sorry,<br />No vitals entered yet.
                  <br />
                  Please contact the Admin
                </h5>
            }
          </div>
          <div className='vitals-container shadow' style={{ display: 'inline-flex', flexDirection: 'column', flexFlow: 'wrap', overflow: 'scroll', width: '850px', height: '490px' }}>
            <h4 style={{ color: 'var(--blue)', padding:'15px 30px 0px 70px' }}><b>Vitals</b></h4>

            {
              Array.isArray(userData.vitals) && userData.vitals.length ?
                userData.vitals.map((d) => (
                  <EachVital bp={d.bp} weight={d.weight} date={d.date} prescription={d.prescription} />
                ))
                :
                <h5 style={{ display: 'flex', alignItems: 'center', margin: '0 auto', textAlign: 'center', fontWeight: 700 }}>
                  Sorry,<br />No vitals entered yet.
                  <br />
                  Please contact the Admin
                </h5>
            }
          </div>
        </div>

        <img src='./img/profile.svg' height={500} />

      </div>

    </div>
  )
}

export default PatientDashboard