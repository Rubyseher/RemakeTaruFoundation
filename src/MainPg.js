import React from "react";
import './App.css'
import { ParallaxContainer, Services } from "./components.js"
// import healthcare from './img/healthcare.svg'
function MainPg() {

    return (
        <div style={{ background: 'var(--babyBlue)' }}>
            <ParallaxContainer />
            {/* this gloating pmg will have our motive topic beside it  */}
            {/* ur services comes next  */}
            <div style={{ paddingBottom: '50px' }}>
                <h1 className="title-main">Our Services</h1>
                <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', margin: '0px 530px' }}>
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                    <Services />
                </div>
            </div>

            <div style={{ background: 'white' }}>
                <h1 className="title-main">Our Mission</h1>
                <div style={{display: 'flex' }}>
                <img src="/img/front2.png" width={500} style={{ margin: '0px 90px', display: 'inline-flex'}} className='floating-img' />

                    <p style={{textAlign:'center'}}>
                        <h5>About Us</h5>
                        Our mission is to work for the Creation, Protection And Nurturing of poverty free,
                        educated, skilled, women empowered, prosperous and healthy society through
                        philanthropic thinking, high governance and best practices across the globe.
                        <h5>WHO WE ARE</h5>

                        Taru is a group of social experts and individuals having a similar mission for the Indian sustainable growth of the society.

                        Our philanthropic approach is for sustainable economy, society and environment development and uplifting.

                        We are dedicated for empowerment of underprivileged section of the society. We have started our journey from Chhattisgarh being a deprived, marginalized and tribal area of the country.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default MainPg;