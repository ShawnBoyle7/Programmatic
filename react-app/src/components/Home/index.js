import React from "react";
import Splash from "../Splash";

function Home({authenticated}) {
    return (
        authenticated ? 
        <>
            <h1>Home</h1>
        </>
        :
        <Splash />
    )
}

export default Home
