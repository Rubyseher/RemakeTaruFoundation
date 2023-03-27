import React, { useEffect, useState } from 'react'
import { DoctorsAvaliable, ConfirmBooking } from './components'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from "./axios.js";
import { useLocation } from "react-router-dom";
import Footer from './Footer';
function Booking(props) {
  const [Notification, setNotification] = React.useState([])
  const [value, onChange] = useState(new Date());
  const [selectedDoc, setSelectedDoc] = useState("")
  const [selectedTime, setSelectedTime] = useState("00:00")
  const [selectedDate, setSelectedDate] = useState("nil")
  const [timeSlot, setTimeSlot] = useState([])

  const { state } = useLocation();
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
    // console.log(window.localStorage.getItem("token") );
  }, [])

  return (
    <div style={{backgroundColor:'var(--lightBlue)'}}>
      <div className='AvaliableDocContainer'>

        <div className='selectDoc'>
          <h3 className='subTitle-other' style={{ color: 'var(--blue)', marginBottom: '2rem', marginTop: '0.5rem', textAlign: 'center' }}><b>Select Doctor</b></h3>
          <div style={{ display: 'flex', flexFlow: 'wrap', margin: '0 auto' }}>
            {
              Notification && Notification.map((d) => (
                  <DoctorsAvaliable name={d.name} experience={d.experience} languages={d.languages} spec={d.specialization}
                    onClick={() => { window.location.replace("/booking#selectTime");setSelectedDoc(d.name); setTimeSlot(d.time) }} />
              ))
            }
          </div>
        </div>
      </div>

      <div id="selectTime" className='selectTime' style={{   overflowX: 'hidden', margin: '0 auto' ,backgroundColor:'white'}}>
        <h3 className='subTitle-other' style={{ color: 'var(--blue)', marginBottom: '3rem', marginTop: '0.5rem',textAlign: 'center' }}><b>Select Date & Time With {selectedDoc}</b></h3>

        <div  className='selectDateTimeContainer' style={{ display: 'flex', margin: '0 auto' ,flexFlow: 'wrap' }}>

          <div className='mobileCalendar'>
            <Calendar onChange={onChange} value={value} class='react-calendar shadow'
              onClickDay={() => setSelectedDate(new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(value).toUpperCase())}
            />
          </div>
          <div className='booking-time-container'>
            {
              timeSlot && timeSlot.map((i) => (
                <div className='bookingTime shadow' onClick={() => setSelectedTime(i)}
                  style={{ color: selectedTime == i ? "var(--lightBlue)" : "var(--blue)", backgroundColor: selectedTime == i ? "var(--blue)" : "var(--lightBlue)" }}>
                  {i}
                </div>
              ))
            }
          </div>

        </div>
      </div>

      <div style={{  padding: '70px 30px 110px 60px', }}>
        <h3 style={{ color: 'var(--blue)', marginBottom: '3rem', marginTop: '0.5rem', textAlign: 'center' }}><b>Confirm Booking</b></h3>

        <ConfirmBooking specialization={state.specialization} time={selectedTime} doc={selectedDoc} date={selectedDate} />
      </div>
      <Footer />
    </div>
  )
}

export default Booking