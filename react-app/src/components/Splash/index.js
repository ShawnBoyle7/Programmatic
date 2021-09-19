import React from "react";
import "./Splash.css"
import AuthFormsModal from "../AuthFormsModal";

function Splash() {

    return (
        <>
            <div className="splash-header-div">
                <h1 className="splash-header">Programmatic</h1>
                <h2 className="splash-header">Visualize Your Learning</h2>
            <AuthFormsModal forbidden={false}/>
            </div>
            <img src="https://week-20-group-project.s3.amazonaws.com/tmpGWCAk2s.png" className="splash-img"/>
        </>
    )
}

export default Splash
