"use client";

import React, { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import "./index.scss";
import Link from "next/link";

const Index = () => {
    const [selectedLink, setSelectedLink] = useState("dasboard");

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
                        <Link
                            href="/dashboard"
                            onClick={() => handleLinkClick("dashboard")}
                        >
                            Dashboard
                        </Link>
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
                        <Link
                            href="/dashboard/products"
                            onClick={() => handleLinkClick("products")}
                        >
                            Products
                        </Link>
                    </div>
                    <ChevronRightIcon />
                </li>

                <li
                    className={`sidebar-list-item ${
                        selectedLink === "clients" ? "active" : ""
                    }`}
                >
                    <div className="left">
                        <PeopleIcon />
                        <Link
                            href="/dashboard/clients"
                            onClick={() => handleLinkClick("clients")}
                        >
                            Clients
                        </Link>
                    </div>
                    <ChevronRightIcon />
                </li>
            </ul>
        </aside>
    );
};

export default Index;