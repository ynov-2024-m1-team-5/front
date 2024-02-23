// index.jsx
"use client";

import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import "./index.scss";

const Index = () => {
    const [selectedLink, setSelectedLink] = useState("dashboard");

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <div className="sidebar-brand">My Store</div>
                <span className="icon close_icon">X</span>
            </div>

            <ul className="sidebar-list">
                <li
                    className={`sidebar-list-item ${
                        selectedLink == "dashboard" ? "active" : ""
                    }`}
                >
                    <DashboardIcon />
                    <a href="#" onClick={() => handleLinkClick("dashboard")}>
                        Dashboard
                    </a>
                    <ChevronRightIcon />
                </li>
                <li
                    className={`sidebar-list-item ${
                        selectedLink === "products" ? "active" : ""
                    }`}
                >
                    <ViewInArOutlinedIcon />
                    <a href="#" onClick={() => handleLinkClick("products")}>
                        Products
                    </a>
                    <ChevronRightIcon />
                </li>
                <li
                    className={`sidebar-list-item ${
                        selectedLink === "customers" ? "active" : ""
                    }`}
                >
                    <PeopleIcon />
                    <a href="#" onClick={() => handleLinkClick("customers")}>
                        Clients
                    </a>
                    <ChevronRightIcon />
                </li>
            </ul>
        </aside>
    );
};

export default Index;
