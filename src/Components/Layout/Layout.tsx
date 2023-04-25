import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./Layout.css";
import Main from "./Main/Main";

function Layout(): JSX.Element {
    return (
     <div className="Layout">
            <div className="desktop">

			<Header/>
            <Main/>
			<Footer/>
            </div>
            {/* <div className="mobile">
            <div className="container">
                <h1>The app is currently not available for mobile.</h1>
                <h3>You can visit through the computer</h3>
                <img src="https://img.freepik.com/free-vector/abstract-grunge-style-coming-soon-with-black-splatter_1017-26690.jpg?w=1380&t=st=1682172617~exp=1682173217~hmac=2ca5f1aa3f4b3d91acdfaa91b06736f75a5866dd23fef48c86754a8702997e24" alt="Not Available on Mobile" />
                </div>
            </div> */}
        </div>
    );
}

export default Layout;
