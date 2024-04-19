"use client";
import Link from "next/link";
import Image from "next/image";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext, useState } from "react";
import { addFavorite } from "@/services/api/wishlist.api.js";
import { UserContext } from "@/context/UserContext";
import { Store } from "@/store";

const Index = ({ product }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const { user, token } = useContext(UserContext);
    const customer_id = user.id;

    const { dispatch: ctxDispatch } = useContext(Store);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        addFavorite(customer_id, product.id, token);
        ctxDispatch({
            type: "ADD_TO_WISHLIST",
            payload: {
                ...product,
                quantity: 1,
            },
        });
    };

    return (
        <div
            className={`group/card max-w-sm bg-white rounded-lg ${
                isFavorite ? "favorited" : ""
            }`}
        >
            <Link className="group/thumbnail thumbnail" href="">
                <div
                    className={`overflow-hidden w-[250px] h-[300px] relative ${
                        isFavorite ? "favorited" : ""
                    }`}
                >
                    <Image
                        className=""
                        alt="trans"
                        src={product.thumbnail}
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
                <h2 className="text-md mb-3">{product.name}</h2>
                <p className="font-semibold font-s">{product.price} €</p>
                <div className="opacity-0 group-hover/card:opacity-100 transition ease-in-out delay-150">
                    <Link
                        className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white"
                        href={`/shop/${product.id}`}
                    >
                        Voir le produit
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Index;
