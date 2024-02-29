import React from "react";
import ProductCard from "@/components/products/ProductCard";
import TitlePage from "@/components/UI/TitlePage";

const Page = () => {
    return (
        <div className="container mx-auto">
            <TitlePage title="Favoris" />
            <div className="grid grid-cols-4 gap-8 my-12">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default Page;
