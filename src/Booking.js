import React, { useEffect, useState } from 'react'
import { DoctorsAvaliable } from './components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "./axios.js";

function Booking() {
  const [Notification, setNotification] = React.useState([])
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      const db = await axios.get('/booking')

      let newAr = db.data.filter((item, index) => {
        if (item.specialization == 'Pediatrician') {
          console.log('item', item.name)
          return item.name
        }
      })
      setNotification((oldState) => newAr)
    }
    fetchData();

  }, [])
  return (
    <div>
      <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)', padding: '30px 30px 30px 60px' }}>
        <div >
          <h3 style={{ color: 'var(--darkBlue)' }}><b>Doctors Avaliable</b></h3>
          <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', height: '230px' }}>
            {
              Notification && Notification.map((d) => (
                <DoctorsAvaliable name={d.name} experience={d.experience} languages={d.languages} spec={d.specialization} />
              ))
            }
          </div>
        </div>
        <img src='./img/BookingNow.svg' style={{ float: 'right', marginTop: '50px', height: 250 }} />
      </div>

      <h3 style={{ color: 'var(--lightLavender)', padding: '30px 30px 10px 60px' }}><b>Select Time</b></h3>

      <div style={{ display: 'inline-flex', padding: '10px 190px 30px 190px' }}>
        <div style={{ width: '20%',marginRight:50 }}>
          <Calendar onChange={onChange} value={value} class='react-calendar shadow' />
        </div>
        <div style={{borderRadius: '20px' ,backgroundColor:'#f4ecff'}} className='shadow'>
          <div className='booking-time-container'>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
            <div className='bookingTime shadow'>9:00 AM</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking