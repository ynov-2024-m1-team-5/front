"use client";
import Link from "next/link";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
<<<<<<< HEAD
import { useState, useContext } from "react";
import { addFavorite } from "@/services/api/wishlist.api.js";
// import { WishlistContext } from "@/context/WishlistContext";


const Index = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    // const { user } = useContext(WishlistContext);


    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        addFavorite(user.id, product.id);
=======
import { useState } from "react";

const Index = () => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
>>>>>>> c1aac64 (save wishlist)
    };
    return (
        <div
            className={`group/card max-w-sm bg-white rounded-lg ${
                isFavorite ? "favorited" : ""
            }`}
        >
<<<<<<< HEAD
            <Link className="group/thumbnail thumbnail" href="">
=======
            <Link className="group/thumbnail thumbnail" href={`/shop/`}>
>>>>>>> c1aac64 (save wishlist)
                <div
                    className={`overflow-hidden w-[250px] h-[300px] relative ${
                        isFavorite ? "favorited" : ""
                    } `}
                >
                    <Image
                        className=""
                        alt="trans"
<<<<<<< HEAD
                        src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=600"
=======
                        src="https://media.cdnws.com/_i/111316/1473/1037/77/4.jpeg"
>>>>>>> c1aac64 (save wishlist)
                        fill
                        sizes="100%"
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        className="favorite-icon absolute top-0 right-0"
                        onClick={toggleFavorite}
                    >
                        <FavoriteIcon
                            style={{ color: isFavorite ? "red" : "white" }}
                        />
                    </div>
                </div>
            </Link>
            <div className="py-5">
                <h2 className="text-md mb-3">test</h2>
                <p className="font-semibold font-s">100 €</p>
                <div className="opacity-0 group-hover/card:opacity-100 transition ease-in-out delay-150">
                    <Link
                        className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white"
<<<<<<< HEAD
                        href={`/shop/${product.id}`}
=======
                        href={`/shop/`}
>>>>>>> c1aac64 (save wishlist)
                    >
                        Voir le produit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Index;
