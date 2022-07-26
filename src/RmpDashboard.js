import React, { useEffect, useState } from "react";
import { RmpNotification, MultipurposeButton } from './components'
import axios from "./axios.js";

function RmpDashboard() {
    const [Notification, setNotification] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get('/rmp')
            console.log(data);
            setNotification(data)
        }
        fetchData();
    }, [])
    return (
        <div>

            <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)', padding: '30px 60px' }}>
                <div >
                    <h3 >Notification</h3>
                    <div style={{ display: 'inline-flex', width: '900', flexFlow: 'wrap', overflow: 'scroll', height: '230px' }}>
                        {
                            Notification.length!=0 && Array.from(Notification).forEach((item, i) => (
                                <RmpNotification />
                                // console.log("onw")
                            ))
                        }
                    </div>
                </div>
                <img src='./img/rmp.svg' width='350' height='350' style={{ float: 'right' }} />
            </div>

            <div style={{ display: 'flex' }}>
                <MultipurposeButton />
                <MultipurposeButton />
                <MultipurposeButton />
                <MultipurposeButton />
            </div>

        </div>
    )
}

export default RmpDashboard;