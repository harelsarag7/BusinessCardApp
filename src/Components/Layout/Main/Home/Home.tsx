import Register from "../Auth/Register/Register";
import "./Home.css";
import iphonemockup from "./iphonemockup.png";
function Home(): JSX.Element {
    return (
        <div className="Home">
			<div className="home-container">
                <div className="home-title-sign">
                    
                <h1>Create your <strong>FREE</strong><br/>Business Card </h1>
                <div className="home-sign-up">
                    {/* <p>Start now </p> */}
                    <div className="emoji"></div>
                    {/* <button>Sign Up</button> */}
                    <Register/>
                </div>
                </div>
                <div className="img-home">
                    <img src={iphonemockup} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;
