import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        className: "navText",
    },
    {
        title: "Products",
        path: "/products",
        icon: <FaIcons.FaCartPlus />,
        className: "navText",
    },
    {
        title: "Reports",
        path: "reports/",
        icon: <IoIcons.IoIosPaper />,
        className: "navText",
    },
    {
        title: "Team",
        path: "/team",
        icon: <IoIcons.IoMdPeople />,
        className: "navText",
    },
    {
        title: "Messages",
        path: "/messages",
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: "navText",
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
        className: "navText",
    },
];
