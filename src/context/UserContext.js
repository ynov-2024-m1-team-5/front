"use client";

import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
    user: {},
    isLogged: false,
    token: null,
    fetchDataUser: () => {},
});

export const UserContextProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const fetchDataUser = async (tokenParam) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}me`,
                {
                    method: "GET",
                    headers: {
                        token: tokenParam,
                    },
                }
            );
            // console.log("Response Token : ", { res });
            const data = await res.json();
            setUser(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {}, [user]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                fetchDataUser(storedToken);
                setIsLogged(true);
            } else {
                router.push("/auth/login");
                setIsLogged(false);
            }
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setIsLogged(false);
        router.push("/auth/login");
    };

    const context = {
        user,
        setUser,
        token,
        isLogged,
        setToken,
        logout,
    };

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
};
