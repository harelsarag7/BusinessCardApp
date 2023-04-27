import { Route, Routes } from "react-router-dom";
import CardTemplate from "./CreateCard/CardTemplate/CardTemplate";
import CreateCard from "./CreateCard/CreateCard";
import CreateCardSteps from "./CreateCardSteps/CreateCardSteps";
import Home from "./Home/Home";
import "./Main.css";
import PageNotFound from "./PageNotFound/PageNotFound";
import UserDashboard from "./UserDashboard/UserDashboard";

function Main(): JSX.Element {
    return (
        <div className="Main">  
			<Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/createcard" element={<CreateCard/>}></Route>
                <Route path="/createcardsteps" element={<CreateCardSteps/>}></Route>
                <Route path="/card/:id" element={<CardTemplate/>}></Route>
                <Route path="/user" element={<UserDashboard/>}></Route>
                <Route path="/*" element={<PageNotFound/>}></Route>
			</Routes>
        </div>
    );
}

export default Main;
