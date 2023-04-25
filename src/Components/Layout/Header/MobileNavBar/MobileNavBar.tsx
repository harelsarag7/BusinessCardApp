import { useState } from "react";
import "./MobileNavBar.css";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router-dom";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

function MobileNavBar(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <div className="MobileNavBar">
            {isOpen ?
            <MenuOpenIcon  onClick={() => setIsOpen(!isOpen)}/> :
			<MenuIcon onClick={() => setIsOpen(!isOpen)}/>
            }

            {isOpen ?
            <div className="nav_mobile">
                 <NavLink  onClick={() => setIsOpen(false)} to={"/"}>Home</NavLink>
                 <NavLink  onClick={() => setIsOpen(false)} to={"/createcardsteps"}>Create Card</NavLink>
                 <NavLink  onClick={() => setIsOpen(false)} to={`/user`}>My Cards</NavLink>
            </div>
            : <></>}
        </div>
    );
}

export default MobileNavBar;
