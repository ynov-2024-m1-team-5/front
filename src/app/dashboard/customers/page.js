"use client";
import React from "react";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import TableCustomers from "@/components/UI/TableCustomers/index.js";
import { getCustomers } from "@/services/api/auth.api.js";
import Link from "next/link";

export default async function Page() {
    const customers = await getCustomers();

    if (!customers) {
        return <Alert message="Customers not found" type="error" />;
    }

    return (
        <div>
            <div className={styles.content_header}>
                <h1 className={styles.title}>Customers</h1>
                <Link href="/dashboard/customers/add">
                    <button className={styles.button}>Add Customer</button>
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.item_3}>
                    <TableCustomers customers={customers} />
                </div>
            </div>
        </div>
    );
};
