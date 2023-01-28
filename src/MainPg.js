import React from "react";
import './App.css'
import { ParallaxContainer, Services } from "./components.js"
import Footer from './Footer';

function MainPg() {

    return (
        <div >
            <ParallaxContainer />
            {/* this gloating pmg will have our motive topic beside it  */}
            {/* ur services comes next  */}
            <div style={{ background: 'var(--babyBlue)', margin: '0 auto'  }}>

                <h1 className="title-main">Our Services</h1>
                <div style={{ display: 'inline-flex', width: '60rem', flexFlow: 'wrap', margin: '0 auto' }}>
                    <Services />
                </div>
            </div>

            <div style={{ background: 'white', width: '75rem', margin: '0 auto' }}>
                <h1 className="title-main" style={{ padding: '60px 0 -40px 0' }} >Our Mission</h1>
                <div style={{ display: 'flex' }}>
                    <img src="/img/front2.png" height={707} width={500} style={{ display: 'inline-flex' ,margin:'0 5rem 0 0'}} className='floating-img' />

                    <p className='mission'>
                        <h4 className="hover-underline-animation">About Us</h4><br />
                        Our mission is to work for the Creation, Protection And Nurturing of poverty free,
                        educated, skilled, women empowered, prosperous and healthy society through
                        philanthropic thinking, high governance and best practices across the globe.
                        <br />
                        <h4 id='whoAreWe' className="hover-underline-animation">Who are We</h4><br />
                        Taru is a group of social experts and individuals having a similar mission for the Indian sustainable growth of the society.
                        Our philanthropic approach is for sustainable economy, society and environment development and uplifting.
                        We are dedicated for empowerment of underprivileged section of the society. We have started our journey from Chhattisgarh being a deprived, marginalized and tribal area of the country.
                    </p>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default MainPg;