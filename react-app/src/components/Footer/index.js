import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className='footer-cards'>
                <div>
                    <a href='https://github.com/WellHelloIvy' target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/ivy-huynh-43718821b/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Ivy Huynh</p>
                </div>
                <div>
                    <a href='https://github.com/monemad' target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/moiznahmad/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Moiz Ahmad</p>
                </div>
                <div>
                    <a href='https://github.com/ShawnBoyle7' target="_blank" rel="noreferrer"><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/shawn-boyle-59570b19b/' target="_blank" rel="noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Shawn Boyle</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
