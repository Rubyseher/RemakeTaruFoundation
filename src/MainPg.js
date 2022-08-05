import React from "react";
import './App.css'
function MainPg() {
    
    return (
        <div>
            {/* pararax for home screen */}
            {/* this gloating pmg will have our motive topic beside it  */}
            <img src="/img/front2.png" width={500} style={{margin:'40px 90px'}} className='floating-img'/>
            <img src="/img/healthcare.png" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src="/img/forAll.png"  />
            {/* ur services comes next  */}
            straight from the confort of ur home
        </div>

    )
}

export default MainPg;