import React, { useEffect, useState } from 'react'
import { DoctorsAvaliable, ConfirmBooking } from './components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "./axios.js";
import { useLocation } from "react-router-dom";


function Booking(props) {
  const [Notification, setNotification] = React.useState([])
  const [value, onChange] = useState(new Date());
  const [selectedDoc,setSelectedDoc]= useState("baa")
  const [selectedTime,setSelectedTime]= useState("00:00")
  const [selectedDate,setSelectedDate]= useState("nil")
  const [timeSlot,setTimeSlot]= useState([])

  const {state} = useLocation();
  const { id, color } = state;
  useEffect(() => {
    async function fetchData() {
      const db = await axios.get('/booking')

      let newAr = db.data.filter((item, index) => {
        if (item.specialization == state.specialization) {
          setSelectedDoc(item.name);
          setTimeSlot(item.time);
          return item.name
        }
      })
      setNotification((oldState) => newAr)
    }
    fetchData();
  }, [])


  return (
    <div>
      <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)', padding: '50px 30px 25px 60px' }}>
        <div >
          <h3 style={{ color: 'var(--blue)' }}><b>Select Doctors</b></h3>
          <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', maxHeight: '230px' }}>
            {
              Notification && Notification.map((d) => (
                <DoctorsAvaliable name={d.name} experience={d.experience} languages={d.languages} spec={d.specialization} 
                onClick={()=>{setSelectedDoc(d.name);setTimeSlot(d.time)}}/>
              ))
            }
          </div>
        </div>
        <img src='./img/BookingNow.svg' style={{ float: 'right', marginTop: '50px', height: 250 }} />
      </div>

      <div style={{ backgroundColor: 'var(--babyPurple)', padding: '50px 30px 25px 60px', overflowX: 'hidden' }}>
        <h3 style={{ color: 'var(--lightLavender)' }}><b>Select Time With {selectedDoc}</b></h3>

        <div style={{ display: 'inline-flex', padding: '10px 90px 30px 120px' }}>
          <div style={{ width: '20%', marginRight: 50 }}>
            <Calendar onChange = {onChange} value={value} class='react-calendar shadow' 
            onClickDay={()=>setSelectedDate(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full'}).format(value).toUpperCase())}
            />
          </div>
          <div style={{ borderRadius: '20px', backgroundColor: 'white' }} className='shadow'>
            <div className='booking-time-container'>
              {
                timeSlot && timeSlot.map((i)=>(
                  <div className='bookingTime shadow' onClick={()=>setSelectedTime(i)}>{i}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: ' var(--lightBlue)', padding: '45px 30px 25px 60px' }}>
        <h3 style={{ color: 'var(--blue)' }}><b>Confirm Booking</b></h3>
        <ConfirmBooking time={selectedTime} doc={selectedDoc} date={selectedDate}/>
      </div>

    </div>
  )
}

export default Booking