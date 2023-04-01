import { Route, Routes } from "react-router-dom";
import CardTemplate from "./CreateCard/CardTemplate/CardTemplate";
import CardTemplate1 from "./CreateCard/CardTemplate/CardTemplate";
import CreateCard from "./CreateCard/CreateCard";
import CreateCardSteps from "./CreateCardSteps/CreateCardSteps";
// import CreateCardSteps from "./CreateCardSteps/CreateCardSteps";
import Home from "./Home/Home";
// import AllProducts from "./AllProducts/AllProducts";
import "./Main.css";
import PageNotFound from "./PageNotFound/PageNotFound";
import UserDashboard from "./UserDashboard/UserDashboard";

function Main(): JSX.Element {
    return (
        <div className="Main">  
			<Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                {/* <Route path="/aboutus" element="About Us"></Route> */}
                {/* <Route path="/contact" element="Contact"></Route> */}
                {/* <Route path="/blog" element="Blog"></Route> */}
                <Route path="/createcard" element={<CreateCard/>}></Route>
                <Route path="/createcardsteps" element={<CreateCardSteps/>}></Route>
                <Route path="/card/:id" element={<CardTemplate/>}></Route>
                <Route path="/user" element={<UserDashboard/>}></Route>
                <Route path="/*" element={<PageNotFound/>}></Route>

                {/* <Route path="/allproducts" element={<AllProducts/>}></Route> */}
                {/* <Route path="/shoes" element="shoes"></Route> */}
                {/* <Route path="/clothes" element="clothes"></Route> */}
			</Routes>
        </div>
    );
}

export default Main;
