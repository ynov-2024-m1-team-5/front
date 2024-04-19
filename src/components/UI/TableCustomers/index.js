import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { deleteCustomer } from "@/services/api/auth.api.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';
import ConfirmationModal from "../ConfirmationModal";

const List = ({ customers }) => {
    const handleDeleteCustomer = async (id) => {
        try {
            await deleteCustomer(id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableCell}>Customer Name</th>
                        <th className={styles.tableCell}>Mail</th>
                        <th className={styles.tableCell}>Phone</th>
                        <th className={styles.tableCell}>Address</th>
                        <th className={styles.tableCell}>PostalCode</th>
                        <th className={styles.tableCell}>City</th>
                        <th className={styles.tableCell}>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {customers && customers.length > 0 ? (
                        customers.map((customer) => (
                            <tr className={styles.tableRow} key={customer.id}>
                                <td className={styles.tableCell}>
                                    {customer.first_name +
                                        " " +
                                        customer.last_name}
                                </td>
                                <td className={styles.tableCell}>
                                    {customer.email}
                                </td>
                                <td className={styles.tableCell}>
                                    {customer.phone}
                                </td>
                                <td className={styles.tableCell}>
                                    {customer.address}
                                </td>
                                <td className={styles.tableCell}>
                                    {customer.zipcode}
                                </td>
                                <td className={styles.tableCell}>
                                    {customer.city}
                                </td>
                                <td className={styles.tableCell}>
                                    <div className={styles.actions}>
                                        <Link
                                            href={`/dashboard/customers/${customer.id}`}
                                            key={customer.id}
                                        >
                                            <VisibilityIcon
                                                className={styles.viewIcon}
                                                color="action"
                                            />
                                        </Link>

                                        <ConfirmationModal
                                            onConfirm={() =>
                                                handleDeleteCustomer(customer.id)
                                            }
                                            title={`Delete ${customer.first_name} ${customer.last_name}`}
                                            message={`Are you sure you want to delete ${customer.first_name} ${customer.last_name}?`}
                                        >
                                            {(openModal) => (
                                                <ClearIcon
                                                    className={styles.deleteIcon}
                                                    onClick={openModal}
                                                    color="action"
                                                />
                                            )}
                                        </ConfirmationModal>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr className={styles.tableRow}>
                            <td colSpan="7" className={styles.tableCell}>
                                No customers found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
    );
};

export default List;
