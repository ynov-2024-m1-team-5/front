"use client";

import Link from "next/link";
import NavMenu from "@/components/UI/NavMenu";
import menu from "@/data/menu.json";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";

const Index = () => {
    const { user, isLogged, logout } = useContext(UserContext);

    // console.log({ user }, isLogged);
    return (
        <header className="bg-white border-b border-color-black">
            <ul className="flex pl-6 pr-6 items-center justify-between">
                <li className="flex lg:flex-1">
                    <Link href="/">
                        <span className=" text-2xl font-bold">Mystore.</span>
                    </Link>
                </li>
                <li>
                    <NavMenu menu={menu} visibleWishlist={true} color="grey" />
                </li>
                {isLogged && (
                    <li>
                        <button
                            onClick={() => logout()}
                            className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            Logout
                        </button>
                        <Link href="/account">
                            <h2>{user.first_name}</h2> - Profil
                        </Link>
                    </li>
                )}
            </ul>
        </header>
    );
};

export default Index;
