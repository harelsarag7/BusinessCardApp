import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { userModel } from "../../../../Models/userModel";
import { userFunctions } from "../../../../Services/user";
import "./NavBar.css";

function NavBar(): JSX.Element {

    
    // const [user1, setUser] = useState<userModel | undefined>(undefined)

    
    const userRedux = useSelector((state: any) => state.auth)

    useEffect(() => {
        console.log(userRedux);
    }, [userRedux])


    
    return (
        <div className="NavBar">
                <NavLink to={"/"}>Home</NavLink>
                {/* <NavLink to={"/createcard"}>Create Card</NavLink> */}
                <NavLink to={"/createcardsteps"}>Create Card</NavLink>
                {/* <NavLink to={`/user/${userRedux?.username}`}>My Cards</NavLink> */}
                <NavLink to={`/user`}>My Cards</NavLink>
                {/* <NavLink to={"/blog"}>Blog</NavLink> */}
        </div>
    );
}

export default NavBar;
