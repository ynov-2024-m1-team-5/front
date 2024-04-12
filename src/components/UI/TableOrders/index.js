import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const List = ({ orders }) => {
    return (
        <div className={styles.wrapper}>
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
                        orders.map((order) => (
                            <tr className={styles.tableRow} key={order.id}>
                                <td className={styles.tableCell}>
                                    {order.shoppingCart_id}
                                </td>
                                <td className={styles.tableCell}>
                                    {order.totalPrice}
                                </td>
                                <td className={styles.tableCell}>
                                    {order.products.length}
                                </td>
                                <td className={styles.tableCell}>
                                    {order.method}
                                </td>
                                <td className={styles.tableCell}>
                                    {order.date}
                                </td>
                                <td className={styles.tableCell}>
                                    {order.status}
                                </td>
                                <td className={styles.tableCell}>
                                    <div className={styles.actions}>
                                        <Link
                                            href={`/dashboard/orders/${order.id}`}
                                            key={order.id}
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
        </div>
    );
};

export default List;
