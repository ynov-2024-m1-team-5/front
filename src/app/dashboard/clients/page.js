import React from "react";
import styles from "./page.module.scss";
import Table from "../../../components/UI/Table/index.js";

const Page = () => {
    return (
        <div className={styles.right_item_3}>
            <div className={styles.item_3}>
                <Table />
            </div>
        </div>
    );
};

export default Page;
