// index.jsx
"use client";

import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import "./index.scss";
import Link from "next/link";

const Index = () => {
    const [selectedLink, setSelectedLink] = useState("dashboard");

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };

    return (
        <aside id="sidebar">
            <div className="sidebar-title">
                <Link href="/">
                    <span className=" text-2xl font-bold">Mystore.</span>
                </Link>
            </div>

            <ul className="sidebar-list">
                <li
                    className={`sidebar-list-item ${
                        selectedLink == "dashboard" ? "active" : ""
                    }`}
                >
                    <div className="left">
                        <DashboardIcon />
                        <a
                            href="#"
                            onClick={() => handleLinkClick("dashboard")}
                        >
                            Dashboard
                        </a>
                    </div>
                    <ChevronRightIcon />
                </li>
                <li
                    className={`sidebar-list-item ${
                        selectedLink === "products" ? "active" : ""
                    }`}
                >
                    <div className="left">
                        <ViewInArOutlinedIcon />
                        <a href="#" onClick={() => handleLinkClick("products")}>
                            Products
                        </a>
                    </div>
                    <ChevronRightIcon />
                </li>
                <li
                    className={`sidebar-list-item ${
                        selectedLink === "customers" ? "active" : ""
                    }`}
                >
                    <div className="left">
                        <PeopleIcon />
                        <a
                            href="#"
                            onClick={() => handleLinkClick("customers")}
                        >
                            Clients
                        </a>
                    </div>
                    <ChevronRightIcon />
                </li>
            </ul>
        </aside>
    );
};

export default Index;
