"use client";
import React from "react";
import styles from "./page.module.scss";
import Alert from "@/components/UI/Alert";
import Loader from "@/components/UI/Loader";
import { getOrder } from "@/services/api/order.api";
import { useParams } from 'next/navigation'

export default function Page() {
    //Page de détail d'une commande qui contient les informartions de la commande, l'administrateur n'a pas le droit de modifier les commandes des clients:
    /* -Les produits commandés : pour chacun le nom, la quantité et le prix. 
       -Le montant total, le numéro de commande, le nombre d'articles commandés, le choix du mode de livraison, la date de commande, statut (payé/remboursé) et le client qui a passé la commande.
    */
   
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
                        <p>Order Date: {order.date}</p>
                        <p>Order Status: {order.status}</p>
                        <p>Shipping Method: {order.method}</p>
                        <p>Number of Items: {order.numberOfItems}</p>
                        <p>Total Amount: {order.totalAmount}</p>
                        <p>Customer: {order.customer}</p>
                    </div>
                    <div className={styles.item}>
                        <h2>Products</h2>
                        <ul>
                            {order.products.map((product, index) => (
                                <li key={index}>
                                    <p>Name: {product.name}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Price: {product.price}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
