"use client";
import React, {useContext} from "react";
import { UserContext } from "@/context/UserContext";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import Loader from "@/components/UI/Loader";
import { getOrder } from "@/services/api/order.api";
import { useParams } from 'next/navigation'

export default function Page() {
    
    const { token } = useContext(UserContext);
    const { id } = useParams();
    const [order, setOrder] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchOrder = async () => {
            setLoading(true);
            try {
                let order = await getOrder(token, id);
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
        <div className={styles.wrapper}>
            <div className={styles.content_header}>
                <h1 className={styles.title}>Order</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.item_3}>
                    <div className={styles.item}>
                        <h2>Order Number: {order.id}</h2>
                        <p>Order Date: {formatDate(order.date)}</p>
                        <p>Order Status: {order.status}</p>
                        <p>Shipping Method: {order.method}</p>
                        <p>Number of Items: {order.cartProducts.length}</p>
                        <p>Total Amount: {order.totalPrice}</p>
                        <p>Customer Id: {order.customer_id}</p>
                    </div>
                    <div className={styles.item}>
                        <h2>Products</h2>
                        <ul>
                            {order.cartProducts && order.cartProducts.length > 0 ? (
                                order.cartProducts.map(
                                    (cartProduct) => (
                                        <li key={cartProduct.productId}>
                                            <img src={cartProduct.product.thumbnail || "/nothumbnail.png"} alt="thumbnail" />
                                            <p>Name: {cartProduct.product.name}</p>
                                            <p>Quantity: {cartProduct.quantityInStock}</p>
                                            <p>Price: {cartProduct.product.price}</p>
                                        </li>
                                    )
                                )
                            ) : (
                                <p>No products</p>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
