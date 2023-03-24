import './App.css';
import {NavbarMain} from './components';
import { Routes, Route, Link } from "react-router-dom";
import LoginPg from './LoginPg';
import MainPg from './MainPg';
import DocDashboard from './DocDashboard';
import RmpDashboard from './RmpDashboard'
import PatientDashboard from './PatientDashboard'
import Login from "./LoginPg"
import Login2 from "./LoginPg2"
import Booking from "./Booking"
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Routes>
        <Route path="/" element={<MainPg />} />
        <Route path="/rmp" element={<RmpDashboard />} />
        <Route path="/doc" element={<DocDashboard />} />
        <Route path="/patient" element={<PatientDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login2" element={<Login2/>} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default App;
