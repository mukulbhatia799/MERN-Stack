import React, {useState} from 'react'
import {FaAngleDoubleLeft, FaAngleDoubleRight} from 'react-icons/fa'
import './sidebar.css'
import Menus from '../Menus/Menus'

const Sidebar = () => {
    const [toggle, setToggle] = useState(true);

    const toggleOnClick = () => {
        setToggle(!toggle);
        console.log(toggle);
    }
    return (
        <div className="sidebar-section">
            <div className={toggle?"sidebar-display":"sidebar-hidden sidebar-display"}>
                <div className="sidebar-toggle-icons">
                    <p onClick={toggleOnClick}>
                        {!toggle?(
                            <FaAngleDoubleLeft size={30} />
                            ):(
                            <FaAngleDoubleRight size={30} />
                            )
                        }
                    </p>
                </div>
                <Menus toggle={toggle}/>
            </div>
        </div>
    )
}

export default Sidebar