import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../Main/Auth/Login/Login";
import Register from "../Main/Auth/Register/Register";
import "./Footer.css";
import { Modal, Box } from "@mui/material";

function Footer(): JSX.Element {
        
    const userRedux = useSelector((state: any) => state.auth)
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        textAlign : "center",
        transform: 'translate(-50%, -50%)',
        width: "250px !important",
        bgcolor: 'white',
        border: '2px solid #9689D5 ',
        boxShadow: 24,
        borderRadius: '15px',
        pt: 3,
        px: 4,
        pb: 3,
      };

    useEffect(() => {
        console.log(userRedux);
    }, [userRedux])
    return (
      <footer className="footer">
        <div className="start-learning">
          <div className="footer-start">
            <div className="texts">
              <h2 className="section-title">Start introducing yourself</h2>
              <h3 className="section-sub-heading">
                {/* <span> PREMIUM Cards - Only</span><strong> $5 </strong> */}
                <span> Coming Soon - PREMIUM Cards - Only</span>
                <strong> $5 </strong>
                <span>for a</span> <strong>One year</strong>
              </h3>
            </div>
            <a style={{cursor: 'pointer'}} onClick={handleOpen} className="button">
              <span className="label">Join the club</span>
            </a>
          </div>
        </div>
        <div className="inner">
          {/* <div className="column is-logo">
                <a href="#" className="main-logo">
                    <div className="logo">
                        <img src="logo.png" alt="stackfindover"/>
                    </div>
                    <div className="logo-info">
                        <div className="text">Stackfindover</div>
                        <span className="copyright">© 2021. All rights reserved.</span>
                    </div>
                </a>
            </div> */}
          <div className="column is-nav">
            <div className="column-title">Navigation</div>
            <ul>
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="/createcardsteps">Create new Card</Link>
              </li>
              <li>
                <Link to={`/user`}>My Cards</Link>
              </li>
            </ul>
          </div>
          <div className="column is-nav">
            <div className="column-title">Contact</div>
            <ul>
              <li>
                <a href="mailto:HarelSarag7@gmail.com">
                  <i className="fa fa-envelope-open"></i> HarelSarag7@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/harel-sarag-849102234/">
                  <i className="fa fa-twitter"></i>@Harel_Fullstack_LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="column is-nav">
            {/* <div className="column-title">Blog</div> */}
            {userRedux ? (
              <></>
            ) : (
              <ul>
                <li>
                  <Register />
                </li>
                <li>
                  <Login />
                </li>
              </ul>
            )}
          </div>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 250 }}>
            <h2 id="parent-modal-title">Coming soon...</h2>
          </Box>
        </Modal>
      </footer>
      // </div>
    );
}

export default Footer;
