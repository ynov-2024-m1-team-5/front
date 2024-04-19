"use client";
import React, { useState, useEffect } from "react";
import "@/assets/styles/style.scss";
import styles from "./page.module.scss";
import Sidebar from "../../components/UI/Sidebar/index.js";
import Headash from "../../components/UI/Headash/index.js";
import { getProducts } from "@/services/api/product.api";
import { getCustomers } from "@/services/api/auth.api";
import { getOrders } from "@/services/api/order.api";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import jwt from "jsonwebtoken";

export default function DashboardLayout({ children }) {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [orders, setOrders] = useState([]);

    const { logout, token } = useContext(UserContext);


    const fetchData = async () => {
        const products = await getProducts();
        const customers = await getCustomers();
        const orders = await getOrders(token);

        setProducts(products);
        setCustomers(customers);
        setOrders(orders);
    };


    useEffect(() => {
        const isAdminUser = () => {
            if (token) {
                const decodedToken = jwt.decode(token);
    
                fetchData();
                return decodedToken && decodedToken.is_admin;
            }
            return false;
        };
        if (!isAdminUser()) {
            logout();
            console.log("You are not an admin ! You are being redirected to the login page");
        }
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <div className={styles.right_item_1}>
                    <h1 className={styles.title_admin}>Hello Admin👋,</h1>
                </div>
                <div className={styles.right_item_2}>
                    <Headash token={token} products={products} customers={customers} orders={orders} />
                </div>
                <div className={styles.right_item_3}>{children}</div>
            </div>
        </div>
    );
}
