"use client";
import React, { useState, useEffect } from "react";
import "@/assets/styles/style.scss";
import { DM_Serif_Display, Work_Sans } from "next/font/google";
import styles from "./page.module.scss";
import Sidebar from "../../components/UI/Sidebar/index.js";
import Headash from "../../components/UI/Headash/index.js";
import { getProducts } from "@/services/api/product.api";
import { getCustomers } from "@/services/api/auth.api";

const dm_serif_display = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
});

const work_sans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "700", "600", "900"],
});

export default function DashboardLayout({ children }) {
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchProductsAndCustomers = async () => {
            const products = await getProducts();
            const customers = await getCustomers();
            setProducts(products);
            setCustomers(customers);
        };
        fetchProductsAndCustomers();
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
                    <Headash products={products} customers={customers} />
                </div>
                <div className={styles.right_item_3}>{children}</div>
            </div>
        </div>
    );
}
