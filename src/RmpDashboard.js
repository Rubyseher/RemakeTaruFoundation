import React from "react";
import { RmpNotification, MultipurposeButton } from './components'
function RmpDashboard() {
    return (
        <div>

            <div style={{ display: 'flex', backgroundColor: ' var(--lightBlue)',padding:'30px 60px'}}>
                <div >
                    <h3 >Notification</h3>
                    <div style={{ display: 'inline-flex' ,width:'900',flexFlow:'wrap',overflow:'scroll',height:'230px'}}>
                        <RmpNotification />
                        <RmpNotification />
                        <RmpNotification />
                        <RmpNotification />
                        <RmpNotification />
                        <RmpNotification />
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