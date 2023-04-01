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
function Header(): JSX.Element {

    // const [user1, setUser] = useState<userModel | undefined>(undefined)
    const dispatch = useDispatch();

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
               
                <div className="logo"><img src={logo} alt="" /></div>
		    	
                <div className="categories-container">
			        <div className="categories">
                        <NavBar/>
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
                 : <Login/>
                        }</div>
                </div>

            </div>
        </div>
    );
}

export default Header;
