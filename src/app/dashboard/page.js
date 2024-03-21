import React from "react";
import styles from "./page.module.scss";

const Page = () => {
    return (
        <div>
            <div className={styles.content_header}>
                <h1 className={styles.title}>Dashboard</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.item_3}>
                </div>
            </div>
        </div>
    );
};

export default Page;
