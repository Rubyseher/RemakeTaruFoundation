import React, { useState ,useEffect} from "react";
import Form from 'react-bootstrap/Form'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import axios from './axios.js';

function LoginPg() {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [users, setUsers] = React.useState([])

    useEffect(() => {
        async function fetchData() {
            const db = await axios.get('/login')
            console.log(db.data);
            setUsers((oldState) => db.data)
        }
        fetchData();
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${phone}, ${password}`)
    }

    return (
        <div className="cornerBg">
            <div style={{padding:'110px 0 0 120px'}}>
                <div style={{ borderRadius: 20, width: '28%' ,backgroundColor:'white',padding:'30px'}} className='shadow'>
                    <form onSubmit={handleSubmit}>
                        <img alt="" src="/img/logoGlow.png" class='centerlogo' />
                        <input type="text" name="phone" placeholder="Phone Number" value={phone}
                            onChange={(e) => setPhone(e.target.value)} />
                        <input type="password" name="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div class="forgot-remember">
                            <div class="forgot"> <a href="#">Forgot Password?</a> </div>
                        </div>
                        <input type="submit" name="send" value="SUBMIT" />
                        <div class="createAcc" style={{textAlign:'center'}}>
                            <div class="createAcc"> <a href="#">Dont have an Account?<br/>Create one Now</a> </div>
                        </div>
                        {/* <p class="text-center">Sign up with<br /><i class="fa fa-hand-o-down" aria-hidden="true"></i></p> */}
                        {/* <div class="social-sign">
                            <a href="#"><FontAwesomeIcon icon={faGoogle} color='#e24033' /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} color='#3396e9' /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} color="#3358a3" /></a>
                        </div> */}
                    </form>
                </div>
            </div>
            <img src='/img/login2.svg' className="login-img"/>
        </div>
    )
}

export default LoginPg;