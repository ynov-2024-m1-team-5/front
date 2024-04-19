"use client";
import React, { useContext, useEffect, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import TitlePage from "@/components/UI/TitlePage";
import { WishlistContext } from "@/context/WishlistContext";
import { getWishlist } from "@/services/api/wishlist.api";
import { UserContext } from "@/context/UserContext";
import Loader from "@/components/UI/Loader";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
    const { token, user } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const customer_id = user.id;

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsData = await getWishlist(customer_id, token);
                // console.log("ALL PRODUCTS : ", productsData);
                setProducts(productsData);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des produits:",
                    error
                );
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [token, customer_id]);

    useEffect(() => {
        if (!user) {
            console.log("User not found" + user);
            router.push("/auth/login");
        }
    }, [user]);

    if (loading) return <Loader />;

    return (
        <div className="container mx-auto">
            <TitlePage title="Favoris" />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-3 md:gap-6 sm:grid-cols-2 sm:ap-5 m-0  min-h-96">
                {products && products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>Vous n'avez pas de favoris</p>
                )}
            </div>
        </div>
    );
};

export default Page;
