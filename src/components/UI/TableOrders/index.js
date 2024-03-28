import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const List = ({ orders }) => {
    return (
        <table className={styles.table}>
            <thead className={styles.tableHeader}>
                <tr className={styles.tableRow}>
                    <th className={styles.tableCell}>Order Number</th>
                    <th className={styles.tableCell}>Total Price</th>
                    <th className={styles.tableCell}>Number of Products</th>
                    <th className={styles.tableCell}>Delivery Mode</th>
                    <th className={styles.tableCell}>Order Date</th>
                    <th className={styles.tableCell}>Status</th>
                    <th className={styles.tableCell}>Actions</th>
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {orders && orders.length > 0 ? (
                    orders.map((command) => (
                        <tr className={styles.tableRow} key={command.id}>
                            <td className={styles.tableCell}>
                                {command.shoppingCart_id}
                            </td>
                            <td className={styles.tableCell}>
                                {command.totalPrice}
                            </td>
                            <td className={styles.tableCell}>
                                {command.products.length}
                            </td>
                            <td className={styles.tableCell}>
                                {command.deliveryMode}
                            </td>
                            <td className={styles.tableCell}>
                                {command.date}
                            </td>
                            <td className={styles.tableCell}>
                                {command.status}
                            </td>
                            <td className={styles.tableCell}>
                                <div className={styles.actions}>
                                    <Link
                                        href={`/dashboard/orders/${command.id}`}
                                        key={command.id}
                                    >
                                        <button className={styles.button}>
                                            View
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="7" className={styles.tableCell}>
                            No orders found
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default List;