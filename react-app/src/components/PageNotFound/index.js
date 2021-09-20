import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import "./PageNotFound.css"

function PageNotFound() {

    const sessionUser = useSelector(state => state.session?.user)
    const authenticated = sessionUser !== null

    return (
        <div className="not-found-div">
            <h1>We could not find the page you were looking for</h1>
            {authenticated && 
                <Link to="/" className="not-found-link">Click here to take a look at our most popular lessons instead!</Link>
            }
            
            {!authenticated && 
                <Link to="/" className="not-found-link">Click here to go back home!</Link>
            }
            <img className="not-found-cat" src="https://week-20-group-project.s3.amazonaws.com/tmp4041.jpg" alt="not-found-cat"/>
        </div>
    )
}

export default PageNotFound
