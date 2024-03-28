"use client";
import React from "react";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import TableProducts from "@/components/UI/TableProducts/index.js";
import { getProducts } from "@/services/api/product.api.js";
import Link from "next/link";

export default async function Page() {
    const products = await getProducts();

    if (!products) {
        return <Alert message="Products not found" type="error" />;
    }

    return (
        <div>
            <div className={styles.content_header}>
                <h1 className={styles.title}>Products</h1>
                <Link href="/dashboard/products/add">
                    <button className={styles.button}>Add Product</button>
                </Link>
            </div>
            <div className={styles.content}>
                <div className={styles.item_3}>
                    <TableProducts products={products} />
                </div>
            </div>
        </div>
    );
};
