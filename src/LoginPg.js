import React, { useState } from "react";
// how do i make multiple users registered
import Form from 'react-bootstrap/Form'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';

function LoginPg() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}, ${password}`)
    }

    return (
        <div className="cornerBg">
            <div style={{padding:'110px 0 0 120px'}}>
                <div style={{ borderRadius: 20, width: '28%' ,backgroundColor:'white',padding:'30px'}} className='shadow'>
                    <form onSubmit={handleSubmit}>
                        <img alt="" src="/img/logoGlow.png" class='centerlogo' />
                        <input type="text" name="email" placeholder="Phone Number" value={name}
                            onChange={(e) => setName(e.target.value)} />
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