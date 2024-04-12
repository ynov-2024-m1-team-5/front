import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { deleteCustomer } from "@/services/api/auth.api.js";

const List = ({ customers }) => {
    const handleDeleteCustomer = async (id) => {
        try {
            await deleteCustomer(id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.wrapper}>
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
                                            <Image
                                                src="/view.svg"
                                                alt="view"
                                                className={styles.image}
                                                width={28}
                                                height={28}
                                            />
                                        </Link>

                                        <button
                                            onClick={() =>
                                                handleDeleteCustomer(
                                                    customer.id
                                                )
                                            }
                                        >
                                            <Image
                                                src="/delete.svg"
                                                alt="view"
                                                className={styles.image}
                                                width={28}
                                                height={28}
                                            />
                                        </button>
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
        </div>
    );
};

export default List;
