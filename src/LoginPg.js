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
        <div style={{ marginTop: '3rem' }}>
            <div class="wrapper">
                <div class="sct brand">
                    <h3> Healthcare <br />For All </h3>
                </div>
                <div class="sct login">
                    <form onSubmit={handleSubmit}>
                        <img alt="" src="/img/logoGlow.png" class='centerlogo' />
                        <input type="text" name="email" placeholder="Username" value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <input type="password" name="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <div class="forgot-remember">
                            <div class="forgot"> <a href="#">Forgot Password?</a> </div>
                        </div>
                        <input type="submit" name="send" value="Send" />
                        <p class="text-center">Sign up with<br /><i class="fa fa-hand-o-down" aria-hidden="true"></i></p>
                        <div class="social-sign">
                            <a href="#"><FontAwesomeIcon icon={faGoogle} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPg;