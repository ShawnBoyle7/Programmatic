import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <footer>
            <div className='footer-cards'>
                <div>
                    <a href='https://github.com/WellHelloIvy'><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/ivy-huynh-43718821b/'><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Ivy Huynh</p>
                </div>
                <div>
                    <a href='https://github.com/monemad'><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/moiznahmad/'><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Moiz Ahmad</p>
                </div>
                <div>
                    <a href='https://github.com/ShawnBoyle7'><i className="fab fa-github-square fa-3x"></i></a>
                    <a href='https://www.linkedin.com/in/shawn-boyle-59570b19b/'><i className="fab fa-linkedin fa-3x"></i></a>
                    <p>Shawn Boyle</p>
                </div>
            </div>
            {/* <div><p>Meet The Developers</p></div> */}
        </footer>
    )
}

export default Footer
