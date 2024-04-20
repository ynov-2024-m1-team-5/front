"use client";
import TitlePage from "@/components/UI/TitlePage";
import { UserContext } from "@/context/UserContext";
import { getAllOrders } from "@/services/api/order.api";
import Link from "next/link";
import Loader from "@/components/UI/Loader";
import { useContext, useEffect, useState } from "react";
import { refundReq } from "@/services/api/refund.api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Page = () => {
    const { token, user } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const customer_id = user.id;

    const [refundClick, setRefundClick] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const ordersData = await getAllOrders(customer_id, token);
                console.log("ALL PRODUCTS : ", ordersData);
                setOrders(ordersData);

            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des produits:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        if(token && customer_id){
            fetchOrders();
        }
    }, [token, customer_id]);

    // useEffect(() => {
    //     if (refundClick) {
    //         refund();
    //         setRefundClick(false);
    //     }
    // }, [refundClick]);
    const notify = () => toast("The refund request has been send to the administrator. Check you emails for further informations.");

    const refund = async (customer_id, order_id) => {
        try {
            console.log('TOTO : '+token);
            const responseRefund = await refundReq(customer_id, token, order_id);
            console.log('TEST : '+JSON.stringify(responseRefund));
            // ajout modal
            if(responseRefund.success == true){
                notify();
            }

            return responseRefund;

            // ajout modal


        } catch (error) {
            console.error(
                "Erreur lors de la récupération des commandes :",
                error
            );
        }
    }
    if (loading) return <Loader />;

    return (
        <div className="container mx-auto">
            <TitlePage title="Commandes" />
            <div className="max-w-6xl mx-auto px-4 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                        {orders.data ? (
                            orders.data.sort((a,b)=>new Date(a.date) - new Date(b.date)).map((order) => (
                                <ul
                                    className="divide-y divide-gray-200"
                                    key={`order-${order.id}`}
                                >
                                    <div className="flex items-center justify-between py-4">

                                    <h3>N°Commande : {order.id}</h3>
                                    <div>{order.method}</div>
                                    <p>Prix total : {order.totalPrice}€</p>
                                    <div>
                                    <p>Statut : {order.status}</p>
                                    { order.status == "paid"&&
                                            <button className="text-gray-500 hover:text-gray-700" onClick={async ()=>{ await refund(customer_id, order.id)}}>
                                                <p>Ask Refund</p>
                                            </button>
                                            }
                                            </div>
                                    </div>
                                        
                                    {order.cartProducts ? ( 

                                        order.cartProducts.map((cartProd) => (
                                        <li
                                            key={`cardProduct-${cartProd.cartProductId}`}
                                            className="flex items-center justify-between py-4"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={cartProd.product.thumbnail}
                                                    alt={cartProd.product.name}
                                                    className="w-20 h-20 rounded img-thumbnail cover"
                                                ></img>
                                                <Link
                                                    href={`/shop/${cartProd.product.id}`}
                                                    className="text-sm font-semibold"
                                                >
                                                    {cartProd.product.name}
                                                </Link>
                                            </div>
                                            
                                            <p>Quantité : {cartProd.quantitySelected}</p>
                                            <div className="flex flex-col items-center space-x-4">
                                                <p>Prix unitaire : {cartProd.product.price} €</p>
                                            </div>
                                        </li>
                                        ))
                                        ) : (
                                            <p>Aucun produit trouvé.</p>
                                        )}
                                </ul>
                            ))
                        ) : (
                            <p>Aucune commande trouvé.</p>
                        )}
                    </div>
                
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Page;
