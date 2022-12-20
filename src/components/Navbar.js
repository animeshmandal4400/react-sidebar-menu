import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Navbar.css";

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <>
            <IconContext.Provider value={{ color: "eeeeee" }}>
                <div className="navbar">
                    <Link to="#" className="menuBars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? "navMenu active" : "navMenu"}>
                    <ul className="navMenuItems" onClick={showSidebar}>
                        <li className="navbarToggle">
                            <Link to="#" className="menuBars">
                                <MdIcons.MdOutlineClose />
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
