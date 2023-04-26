import "./PageNotFound.css";
import img from "../PageNotFound/404.jpeg"
import { useNavigate } from "react-router-dom";

function PageNotFound(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="PageNotFound">
			<div><h1> Page NOT Found</h1></div>
            <button className="button-17" onClick={() => navigate("/")} role="button">Back Home</button>
			<div><img src={img} alt="" /></div>

        </div>
    );
}

export default PageNotFound;
