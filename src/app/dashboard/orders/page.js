"use client";
import React from "react";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import TableOrders from "@/components/UI/TableOrders/index.js";
import { getOrders } from "@/services/api/order.api.js";

export default async function Page() {
    const orders = await getOrders();

    if (!orders) {
        return <Alert message="Orders not found" type="error" />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content_header}>
                <h1 className={styles.title}>Orders</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.item_3}>
                    <TableOrders orders={orders} />
                </div>
            </div>
        </div>
    );
}