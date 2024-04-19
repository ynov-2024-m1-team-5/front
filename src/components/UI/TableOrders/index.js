import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ConfirmationModal from "../../UI/ConfirmationModal";
import { refundOrder } from "@/services/api/order.api";

const List = ({ orders }) => {
    const handleRefundOrder = async (id) => {
        try {
            await refundOrder(id);
        } catch (err) {
            console.log(err);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

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
                    orders.map((order) => (
                        <tr className={styles.tableRow} key={order.id}>
                            <td className={styles.tableCell}>
                                {order.shoppingCart_id}
                            </td>
                            <td className={styles.tableCell}>
                                {order.totalPrice}
                            </td>
                            <td className={styles.tableCell}>
                                {order.cartProducts.length}
                            </td>
                            <td className={styles.tableCell}>{order.method}</td>
                            <td className={styles.tableCell}>{formatDate(order.date)}</td>
                            <td className={styles.tableCell}>{order.status}</td>
                            <td className={styles.tableCell}>
                                <div className={styles.actions}>
                                    <Link
                                        href={`/dashboard/orders/${order.id}`}
                                        key={order.id}
                                    >
                                        <VisibilityIcon
                                            className={styles.viewIcon}
                                            color="action"
                                        />
                                    </Link>
                                    {order.status === "refund on demand" && (
                                        <>
                                            <ConfirmationModal
                                                onConfirm={() =>
                                                    handleRefundOrder(order.id)
                                                }
                                                title={`Refund order n°${order.id}`}
                                                message={`Are you sure you want to refund order n°${order.id}?`}
                                            >
                                                {(openModal) =>
                                                    <CurrencyExchangeIcon
                                                        className={styles.refundIcon}
                                                        onClick={openModal}
                                                        color="action"
                                                    />
                                                }
                                            </ConfirmationModal>
                                        </>
                                    )}
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
};

export default List;
