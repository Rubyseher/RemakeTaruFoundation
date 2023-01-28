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
    console.log(window.localStorage.getItem("token") );
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)', padding: '50px 30px 25px 60px' }}>
        
        <div >
          <h3 style={{ color: 'var(--blue)',marginBottom:'2rem',marginTop:'0.5rem' }}><b>Select Doctors</b></h3>
          <div style={{ display: 'flex', flexFlow: 'wrap', maxHeight: '230px',margin:'0 auto'}}>
            {
              Notification && Notification.map((d) => (
                <DoctorsAvaliable name={d.name} experience={d.experience} languages={d.languages} spec={d.specialization} 
                onClick={()=>{setSelectedDoc(d.name);setTimeSlot(d.time)}}/>
              ))
            }
          </div>
        </div>

        <img src='./img/BookingNow.svg' style={{ float: 'right', marginTop: '50px', height: 250 ,marginLeft:'3rem'}} />
      </div>

      <div style={{ backgroundColor: 'var(--babyPurple)', padding: '50px 30px 25px 60px', overflowX: 'hidden',margin:'0 auto' }}>
        <h3 style={{ color: 'var(--lightLavender)' ,marginBottom:'2rem',marginTop:'0.5rem'}}><b>Select Time With {selectedDoc}</b></h3>

        <div style={{ display: 'flex',width:'70rem',margin:'0 auto'  }}>
          
          <div style={{ width: '25rem', marginRight: 50 }}>
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

      <div style={{ backgroundColor: ' var(--lightBlue)', padding: '45px 30px 55px 60px'}}>
        <h3 style={{ color: 'var(--blue)' ,marginBottom:'2rem',marginTop:'0.5rem' }}><b>Confirm Booking</b></h3>
        <ConfirmBooking specialization={state.specialization} time={selectedTime} doc={selectedDoc} date={selectedDate}/>
      </div>
<Footer/>
    </div>
  )
}

export default Booking