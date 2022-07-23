import './App.css';
import {NavbarMain} from './components';
import { Routes, Route, Link } from "react-router-dom";
import LoginPg from './LoginPg';
import MainPg from './MainPg';
import DocDashboard from './DocDashboard';
import RmpDashboard from './RmpDashboard'
function App() {
  return (
    <div className="App">
      <NavbarMain/>
      <Routes>
        <Route path="/" element={<MainPg />} />
        <Route path="/about" element={<LoginPg />} />
        <Route path="/rmp" element={<RmpDashboard />} />
        <Route path="/doc" element={<DocDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
