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
                            orders.data.map((order, index) => (
                                <ul
                                    className="divide-y divide-gray-200"
                                    key={index}
                                >
                                    <h3>N°Commande : {order.id}</h3>
                                    {order.cartProducts ? ( 

                                        order.cartProducts.map((product, index) => (
                                        <li
                                            key=""
                                            className="flex items-center justify-between py-4"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={product.product.thumbnail}
                                                    alt=""
                                                    className="w-24 h-24 rounded img-thumbnail cover"
                                                ></img>
                                                <Link
                                                    href=""
                                                    className="font-semibold"
                                                >
                                                    {product.product.name}
                                                </Link>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                

                                                <div>{product.sellingPrice} €</div>
                                            </div>
                                            { order.status == "paid" && 
                                            <button className="text-gray-500 hover:text-gray-700" onClick={async ()=>{ await refund(customer_id, order.id)}}>
                                                <p>Refund</p>
                                                {/* <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M7.615 20C7.16833 20 6.78733 19.8426 6.472 19.528C6.15733 19.2133 6 18.8323 6 18.385V5.99998H5V4.99998H9V4.22998H15V4.99998H19V5.99998H18V18.385C18 18.845 17.846 19.229 17.538 19.537C17.2293 19.8456 16.845 20 16.385 20H7.615ZM17 5.99998H7V18.385C7 18.5643 7.05767 18.7116 7.173 18.827C7.28833 18.9423 7.43567 19 7.615 19H16.385C16.5383 19 16.6793 18.936 16.808 18.808C16.936 18.6793 17 18.5383 17 18.385V5.99998ZM9.808 17H10.808V7.99998H9.808V17ZM13.192 17H14.192V7.99998H13.192V17Z"
                                                        fill="black"
                                                    />
                                                </svg> */}
                                            </button>
                                        }
                                        
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
