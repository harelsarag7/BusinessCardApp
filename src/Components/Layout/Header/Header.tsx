import { Avatar, Menu, MenuItem } from "@mui/material";
import deepOrange from "@mui/material/colors/deepOrange";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Main/Auth/Login/Login";
import NavBar from "./CategoriesNavBar/NavBar";
import "./Header.css";
import { logout } from "../../../App/authSlice";
import logo from "./businesscardlogo.png";
import MobileNavBar from "./MobileNavBar/MobileNavBar";
import Register from "../Main/Auth/Register/Register";
import { useNavigate } from "react-router-dom";

function Header(): JSX.Element {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRedux = useSelector((state: any) => state.auth)

    useEffect(() => {
        console.log(userRedux);
    }, [userRedux])


    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleClick(event: any) {
      if (anchorEl !== event.currentTarget) {
        setAnchorEl(event.currentTarget);
      }
    }
  
    function handleClose() {
      setAnchorEl(null);
    }
  
    function logoutButton(){ 
        dispatch(logout());
    }    

    return (
        <div className="Header">
            <div className="container">
               
                <div className="logo" onClick={() => navigate("/")}><img src={logo} alt="" /></div>
		    	
                <div className="categories-container">
			        <div className="categories">
                        <NavBar/>
                        <MobileNavBar/>
                    </div>
                 </div>

                 <div>
                 <div>{userRedux? 
                 <div className="avatar-header" >
                         <Avatar 
                         aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}   sx={{ bgcolor: deepOrange[500] }}>{userRedux.username?.charAt(0).toLocaleUpperCase()}

                         <Menu 
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                            {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                            <MenuItem onClick={logoutButton}>Logout</MenuItem>
                        </Menu>
                            </Avatar>
                 </div>
                 : 
                 <div className="login_register_header">
                    <Register/>
                     <Login/>
                 </div>
                        }</div>
                </div>

            </div>
        </div>
    );
}

export default Header;
