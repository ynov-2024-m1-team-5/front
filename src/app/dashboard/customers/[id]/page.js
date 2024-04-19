"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getCustomer, updateCustomer } from "@/services/api/auth.api";
import { getOrdersByCustomerId } from "@/services/api/order.api";
import Alert from "@/components/UI/Alert";
import Loader from "@/components/UI/Loader";
import VisibilityIcon from '@mui/icons-material/Visibility';


export default function Page() {
    const { id } = useParams();
    const [customer, setCustomer] = useState(null);
    const [orders, setOrders] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomer = async () => {
            setLoading(true);
            try {
                let customer = await getCustomer(id);
                let orders = await getOrdersByCustomerId(id);
                if (customer) {
                    setCustomer(customer);
                    setOrders(orders);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchCustomer();
        }
    }, [id]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setCustomer({
            ...customer,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await updateCustomer(id, customer);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    if (loading) return <Loader />;

    if (error) return <Alert message={error.message} type="error" />;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                {customer.first_name + " " + customer.last_name}
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.tableCell}>Order Id</th>
                            <th className={styles.tableCell}>Date</th>
                            <th className={styles.tableCell}>Total Price</th>
                            <th className={styles.tableCell}>Number of Products</th>
                            <th className={styles.tableCell}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order.id}>
                                    <td className={styles.tableCell}>{order.id}</td>
                                    <td className={styles.tableCell}>{formatDate(order.date)}</td>
                                    <td className={styles.tableCell}>{order.totalPrice}</td>
                                    <td className={styles.tableCell}>{order.cartProducts.length}</td>
                                    <td className={styles.tableCell}>
                                        <Link
                                            href={`/dashboard/orders/${order.id}`}
                                        >
                                            <VisibilityIcon className={styles.viewIcon} />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.tableCell}>No orders found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="hidden" name="id" value={customer.id} />
                    <label>Customer First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        placeholder={customer.first_name}
                        onChange={handleInputChange}
                    />
                    <label>Customer Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder={customer.last_name}
                        onChange={handleInputChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder={customer.password}
                        onChange={handleInputChange}
                    />
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder={customer.phone}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder={customer.email}
                        onChange={handleInputChange}
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder={customer.address}
                        onChange={handleInputChange}
                    />
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder={customer.zipcode}
                        onChange={handleInputChange}
                    />
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder={customer.city}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className={styles.button}>
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
