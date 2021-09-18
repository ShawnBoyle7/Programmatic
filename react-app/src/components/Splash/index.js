import React from "react";
import { demo } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"

function Splash() {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleDemo = () => {
        // history.push("/")
        dispatch(demo(1))
    }

    return (
        <>
            <h1>Splash</h1>
            <button onClick={handleDemo}>Demo</button>
        </>
    )
}

export default Splash
