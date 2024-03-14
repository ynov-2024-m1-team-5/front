"use client";
import { createContext, useState, useEffect } from "react";
import { getWishlist } from "@/services/api/wishlist.api.js";

export const WishlistContext = createContext();

export const WishlistContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUser] = useState({ id: 1 });

    useEffect(() => {
        const fetchWishlist = async () => {
            setLoading(true);
            try {
                let wishlist = await getWishlist();
                console.log("wish", wishlist);
                if (wishlist) {
                    setProducts(wishlist || []);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchWishlist();
    }, []);

    const context = {
        products,
        user,
    };

    return (
        <WishlistContext.Provider value={context}>
            {children}
        </WishlistContext.Provider>
    );
};
