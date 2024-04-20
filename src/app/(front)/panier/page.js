"use client";
import TitlePage from "@/components/UI/TitlePage";
import { UserContext } from "@/context/UserContext";
import { getAllProducts, deleteProductFromCart, updateProductToCart } from "@/services/api/cart.api";
import Link from "next/link";
import Loader from "@/components/UI/Loader";
import { useContext, useEffect, useState } from "react";
import { createOrder } from "@/services/api/order.api";

const Page = () => {
    const { token, user } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteFromCartClicked, setDeleteFromCartClicked] = useState(false);

    const customer_id = user.id;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsData = await getAllProducts(customer_id, token);
                setProducts(productsData);

                const totalCount = productsData.shop.reduce((acc, product) => acc + product.quantitySelected, 0);
                setTotalQuantity(totalCount);

                const amount = productsData.shop.reduce(
                    (acc, product) =>
                        acc + product.sellingPrice * product.quantitySelected,
                    0
                );
                setTotalAmount(amount);

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
            fetchProducts();
        }
    }, [token, customer_id]);

    const handlerDeleteProduct = async (cartProductId) => {
        try {
            let deleteProduct = await deleteProductFromCart(cartProductId, token, customer_id);
            window.location.reload(true);
        } catch (err) {
            setError(err);
        }
    }

    const handleAddQuantity = async (cartProductId, quantity) => {
        try {
            const newQuantity = quantity + 1;
            const requestData = {
                quantitySelected: newQuantity
            };
            await updateProductToCart(cartProductId, token, requestData);
            setProducts(prevProducts => {
                const updatedProducts = prevProducts.shop.map(product => {
                    if (product.cartProductId === cartProductId) {
                        return { ...product, quantitySelected: newQuantity };
                    }
                    return product;
                });
                return { ...prevProducts, shop: updatedProducts };
            });
            setTotalAmount(prevTotalAmount => prevTotalAmount + products.shop.find(product => product.cartProductId === cartProductId).sellingPrice);
            setTotalQuantity(prevTotalProducts => prevTotalProducts + 1);
        } catch (err) {
            setError(err);
        }
    };
    
    const handleSubtractQuantity = async (cartProductId, quantity) => {
        try {
            if (quantity > 1) {
                const newQuantity = quantity - 1;
                const requestData = {
                    quantitySelected: newQuantity
                };
                await updateProductToCart(cartProductId, token, requestData);
                setProducts(prevProducts => {
                    const updatedProducts = prevProducts.shop.map(product => {
                        if (product.cartProductId === cartProductId) {
                            return { ...product, quantitySelected: newQuantity };
                        }
                        return product;
                    });
                    return { ...prevProducts, shop: updatedProducts };
                });
                setTotalAmount(prevTotalAmount => prevTotalAmount - products.shop.find(product => product.cartProductId === cartProductId).sellingPrice);
                setTotalQuantity(prevTotalProducts => prevTotalProducts - 1);
            }
        } catch (err) {
            setError(err);
        }
    };
    


    if (loading) return <Loader />;

    return (
        <div className="container mx-auto ">
            <TitlePage title="Panier" />
            <div className="max-w-6xl mx-auto px-4 pb-4 min-h-96">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:ap-5 m-0">
                    <div className="md:col-span-2">
                        {products.shop ? (
                            products.shop.map((product, index) => (
                                <ul
                                    className="divide-y divide-gray-200"
                                    key={index}
                                >
                                    <li
                                        key=""
                                        className="flex items-center justify-between py-4"
                                    >   
                                        <div className="flex items-center space-x-4">
                                            <img
                                                alt={product.name}
                                                src={product.Product.thumbnail}
                                                className="w-24 h-24 rounded img-thumbnail cover"
                                            ></img>
                                            <Link
                                                href=""
                                                className="font-semibold"
                                            >
                                                {product.name}
                                            </Link>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <button className="text-gray-500 hover:text-gray-700 disabled:opacity-50" onClick={() => handleSubtractQuantity(product.cartProductId, product.quantitySelected)}>
                                                <svg
                                                    width="13"
                                                    height="2"
                                                    viewBox="0 0 13 2"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M13 1C13 1.55228 12.5523 2 12 2H1C0.447715 2 0 1.55228 0 1V1C0 0.447715 0.447715 0 1 0H12C12.5523 0 13 0.447715 13 1V1Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </button>
                                            <span>
                                                {product.quantitySelected}
                                            </span>
                                            <button className="text-gray-500 hover:text-gray-700 disabled:opacity-50" onClick={() => handleAddQuantity(product.cartProductId, product.quantitySelected)}>
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M18 12.998H13V17.998C13 18.2632 12.8946 18.5176 12.7071 18.7051C12.5196 18.8926 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8926 11.2929 18.7051C11.1054 18.5176 11 18.2632 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8926 5.29289 12.7051C5.10536 12.5176 5 12.2632 5 11.998C5 11.7328 5.10536 11.4784 5.29289 11.2909C5.48043 11.1033 5.73478 10.998 6 10.998H11V5.99799C11 5.73277 11.1054 5.47842 11.2929 5.29088C11.4804 5.10334 11.7348 4.99799 12 4.99799C12.2652 4.99799 12.5196 5.10334 12.7071 5.29088C12.8946 5.47842 13 5.73277 13 5.99799V10.998H18C18.2652 10.998 18.5196 11.1033 18.7071 11.2909C18.8946 11.4784 19 11.7328 19 11.998C19 12.2632 18.8946 12.5176 18.7071 12.7051C18.5196 12.8926 18.2652 12.998 18 12.998Z"
                                                        fill="black"
                                                    />
                                                </svg>
                                            </button>

                                            <div>{product.sellingPrice} €</div>
                                        </div>
                                        <button className="text-gray-500 hover:text-gray-700" onClick={() => handlerDeleteProduct(product.cartProductId)}>
                                            <svg
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
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            ))
                        ) : (
                            <p>Aucun produit trouvé.</p>
                        )}
                    </div>
                    <div>
                        <div className="bg-white shadow-md rounded-md p-6">
                            <h2 className="text-lg font-semibold mb-4">
                                Total ( {totalQuantity} produits) <br />
                            </h2>
                            <div className="text-xl font-semibold">
                                {totalAmount}€
                            </div>
                            <button onClick={()=>createOrder(user.id)} className="w-full mt-4 bg-black hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50">
                                Paiement
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
