import React from "react";
import './menus.css'
import {FcHome, FcAbout, FcContacts} from 'react-icons/fc'
import {GrTechnology} from 'react-icons/gr'
import myProfilePic from '../../images/mukulpic.png'
import {RiProjectorFill} from 'react-icons/ri'
const Menus = ({toggle}) => {
    return <div>
        {!toggle ? (
            <div className="menu-div">
                <div>
                    <img src={myProfilePic} alt="Mypic" width="150px" height="150px" className="profile-image" />
                </div>
                <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link"><FcHome /> Home</div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><FcAbout /> About Me</div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><GrTechnology /> Tech skills</div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><RiProjectorFill /> Projects</div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><FcContacts /> Contact Me</div>
                    </div>
                </div>
            </div>
        ) : (
            <div>
                <div className="nav-items">
                    <div className="nav-item">
                        <div className="nav-link"><FcHome /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><FcAbout /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><GrTechnology /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><RiProjectorFill /></div>
                    </div>
                    <div className="nav-item">
                        <div className="nav-link"><FcContacts /></div>
                    </div>
                </div>
            </div>
        )}
    </div>
}

export default Menus;