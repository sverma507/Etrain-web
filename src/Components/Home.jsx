import React from "react";
import "./Home.css"
import headerimg from "../images/headerimg.png";
import Button from "./Button.jsx";
function Home() {
    return (
        <>
            <div className="header-outer">
                <div className="header-1">
                    <div className="heading1">
                        <h6 className="heading1"> EVERY CHILD YEARNS TO LEARN</h6>
                    </div>
                    <div className="heading2">
                        Making Yours Childs <br></br>World Better
                    </div>
                    <div className="paragraph">
                        Replenish seasons may male hath
                        fruit beastwere seas saw you arrie said man<br></br>
                        beast whales his void unto last session for bite Set have great you 'll male<br></br> yielding yeilding man
                    </div>

                    <button className="button-view-course">View Course</button>

                    <button className="button-Get-started"> Get Started</button>
                </div>

                <div className="home-img">
                    {/* <img src={headerimg} alt="Home image" className="home-img" /> */}
                </div>
            </div>
        </>

    );
}
export default Home;