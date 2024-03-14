"use client";
import React, { useContext } from "react";
import ProductCard from "@/components/products/ProductCard";
import TitlePage from "@/components/UI/TitlePage";
import { WishlistContext } from "@/context/WishlistContext";

const Page = () => {
    const { products } = useContext(WishlistContext);
    console.log(products);

    return (
        <div className="container mx-auto">
            <TitlePage title="Favoris" />
            <div className="grid grid-cols-4 gap-8 my-12">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Page;
