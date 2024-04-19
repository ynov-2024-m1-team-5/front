"use client";
import React from "react";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import Loader from "@/components/UI/Loader";
import { getOrder } from "@/services/api/order.api";
import { useParams } from 'next/navigation'

export default function Page() {
    const { id } = useParams();
    const [order, setOrder] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                let order = await getOrder(id);
                if (order) {
                    console.log(order);
                    setOrder(order);
                }
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchOrder();
        }
    }, [id]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    if (loading) return <Loader />;

    if (error) return <Alert message={error.message} type="error" />;

    return (
        <div className={styles.container}>
            <div className={styles.orderContainer}>
                <div className={styles.orderHeader}>
                    <h1>Order Number: {order.id}</h1>
                    <p>Order Date: {formatDate(order.date)}</p>
                </div>
                <div className={styles.orderDetails}>
                    <p>Order Status: {order.status}</p>
                    <p>Shipping Method: {order.method}</p>
                    <p>Number of Items: {order.cartProducts.length}</p>
                    <p>Total Amount: {order.totalPrice}</p>
                    <p>Customer Id: {order.customer_id}</p>
                </div>
            </div>
            <div className={styles.productDetails}>
                <h2>Products</h2>
                <ul className={styles.productList}>
                    {order.cartProducts && order.cartProducts.length > 0 ? (
                        order.cartProducts.map(
                            (cartProduct) => (
                                <li className={styles.productItem} key={cartProduct.productId}>
                                    <img src={cartProduct.product.thumbnail || "/nothumbnail.png"} alt="thumbnail" />
                                    <div>
                                        <p>Name: {cartProduct.product.name}</p>
                                        <p>Quantity: {cartProduct.quantityInStock}</p>
                                        <p>Price: {cartProduct.product.price}</p>
                                    </div>
                                </li>
                            )
                        )
                    ) : (
                        <p>No products</p>
                    )}
                </ul>
            </div>
        </div>
    );
}
