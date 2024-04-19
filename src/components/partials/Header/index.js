"use client";
import Link from "next/link";
import { UserContext } from "@/context/UserContext";
import { useContext } from "react";
import jwt from "jsonwebtoken";
import DropdownMenu from "@/components/UI/DropdownMenu";
import { Store } from "@/store";

const Index = () => {
    const { state } = useContext(Store);
    const { isLogged, token } = useContext(UserContext);
    const { cart, wishlist } = state;
    console.log({ wishlist });

    // Fonction pour vérifier si l'utilisateur est admin
    const isAdminUser = () => {
        if (token) {
            // Décodez le token pour obtenir les informations utilisateur
            const decodedToken = jwt.decode(token);

            // Vérifiez si l'utilisateur est admin
            return decodedToken && decodedToken.is_admin;
        }
        return false; // Retourne false si le token est absent ou invalide
    };
    return (
        <header className="bg-white border-b border-color-black p-6">
            <ul className="flex pl-6 pr-6 items-center justify-between">
                <li className="flex lg:flex-1">
                    <Link href="/">
                        <span className=" text-2xl font-bold">Mystore.</span>
                    </Link>
                </li>

                {!isLogged && (
                    <div className="flex items-center gap-5">
                        <li>
                            <Link href="/shop">
                                <span className="">shop</span>
                            </Link>
                        </li>

                        <li className="flex items-center justify-center gap-5">
                            <a href="/wishlist" className="relative">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    aria-labelledby="wish-list-:r0:"
                                    className="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
                                    focusable="false"
                                    aria-hidden="false"
                                    role="img"
                                    data-testid="wishlist"
                                >
                                    <title id="wish-list-:r0:">Wish list</title>
                                    <path d="M17.488 1.11h-.146a6.552 6.552 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.745.745 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.432 6.432 0 0 0-6.42-6.306zM12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8z"></path>
                                </svg>
                                <span className="absolute bottom-3 left-3 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs font-bold"></span>
                            </a>
                            <a href="/panier" className="relative">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title id="wish-list-:r0:">Panier</title>
                                    <path
                                        d="M33.3333 37.5C34.4384 37.5 35.4982 37.939 36.2796 38.7204C37.061 39.5018 37.5 40.5616 37.5 41.6667C37.5 42.7717 37.061 43.8315 36.2796 44.6129C35.4982 45.3943 34.4384 45.8333 33.3333 45.8333C32.2283 45.8333 31.1685 45.3943 30.3871 44.6129C29.6057 43.8315 29.1667 42.7717 29.1667 41.6667C29.1667 40.5616 29.6057 39.5018 30.3871 38.7204C31.1685 37.939 32.2283 37.5 33.3333 37.5ZM33.3333 39.5833C32.7808 39.5833 32.2509 39.8028 31.8602 40.1935C31.4695 40.5842 31.25 41.1141 31.25 41.6667C31.25 42.2192 31.4695 42.7491 31.8602 43.1398C32.2509 43.5305 32.7808 43.75 33.3333 43.75C33.8859 43.75 34.4158 43.5305 34.8065 43.1398C35.1972 42.7491 35.4167 42.2192 35.4167 41.6667C35.4167 41.1141 35.1972 40.5842 34.8065 40.1935C34.4158 39.8028 33.8859 39.5833 33.3333 39.5833ZM14.5833 37.5C15.6884 37.5 16.7482 37.939 17.5296 38.7204C18.311 39.5018 18.75 40.5616 18.75 41.6667C18.75 42.7717 18.311 43.8315 17.5296 44.6129C16.7482 45.3943 15.6884 45.8333 14.5833 45.8333C13.4783 45.8333 12.4185 45.3943 11.6371 44.6129C10.8557 43.8315 10.4167 42.7717 10.4167 41.6667C10.4167 40.5616 10.8557 39.5018 11.6371 38.7204C12.4185 37.939 13.4783 37.5 14.5833 37.5ZM14.5833 39.5833C14.0308 39.5833 13.5009 39.8028 13.1102 40.1935C12.7195 40.5842 12.5 41.1141 12.5 41.6667C12.5 42.2192 12.7195 42.7491 13.1102 43.1398C13.5009 43.5305 14.0308 43.75 14.5833 43.75C15.1359 43.75 15.6658 43.5305 16.0565 43.1398C16.4472 42.7491 16.6667 42.2192 16.6667 41.6667C16.6667 41.1141 16.4472 40.5842 16.0565 40.1935C15.6658 39.8028 15.1359 39.5833 14.5833 39.5833ZM37.5 12.5H8.89584L14.2083 25H31.25C31.9375 25 32.5417 24.6667 32.9167 24.1667L39.1667 15.8333C39.4375 15.4792 39.5833 15.0417 39.5833 14.5833C39.5833 14.0308 39.3638 13.5009 38.9731 13.1102C38.5824 12.7195 38.0525 12.5 37.5 12.5ZM31.25 27.0833H14.3125L12.7083 30.3333L12.5 31.25C12.5 31.8025 12.7195 32.3324 13.1102 32.7231C13.5009 33.1138 14.0308 33.3333 14.5833 33.3333H37.5V35.4167H14.5833C13.4783 35.4167 12.4185 34.9777 11.6371 34.1963C10.8557 33.4149 10.4167 32.3551 10.4167 31.25C10.416 30.5431 10.5953 29.8477 10.9375 29.2292L12.4375 26.1667L4.875 8.33333H2.08334V6.25H6.25L8.02084 10.4167H37.5C38.6051 10.4167 39.6649 10.8557 40.4463 11.6371C41.2277 12.4185 41.6667 13.4783 41.6667 14.5833C41.6667 15.625 41.3125 16.5 40.7292 17.2083L34.6667 25.3125C33.9167 26.375 32.6667 27.0833 31.25 27.0833Z"
                                        fill="black"
                                    />
                                </svg>
                                <span className="absolute bottom-3 left-3 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs font-bold"></span>
                            </a>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <Link
                                className="rounded-md bg-slate-600 px-4 py-2 text-sm font-medium text-white shadow"
                                href="/auth/login"
                            >
                                <span className="font-semibold">Login</span>
                            </Link>
                        </li>
                    </div>
                )}
                {isLogged && (
                    <div className="flex gap-5 items-center">
                        <li className="">
                            <Link href="/shop">
                                <span className="text-base">Shop</span>
                            </Link>
                        </li>
                        {isAdminUser() && (
                            <li>
                                <Link href="/dashboard">
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                        )}

                        <li className="flex items-center justify-center gap-5">
                            <a href="/wishlist" className="relative">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    fill="currentColor"
                                    aria-labelledby="wish-list-:r0:"
                                    className="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
                                    focusable="false"
                                    aria-hidden="false"
                                    role="img"
                                    data-testid="wishlist"
                                >
                                    <title id="wish-list-:r0:">Wish list</title>
                                    <path d="M17.488 1.11h-.146a6.552 6.552 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.745.745 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.432 6.432 0 0 0-6.42-6.306zM12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8z"></path>
                                </svg>
                                <span className="absolute bottom-3 left-3 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs font-bold">
                                    {wishlist.wishlistItems.length > 0 &&
                                        wishlist.wishlistItems.length}
                                </span>
                            </a>
                            <a href="/panier" className="relative">
                                <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 50 50"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title id="wish-list-:r0:">Panier</title>
                                    <path
                                        d="M33.3333 37.5C34.4384 37.5 35.4982 37.939 36.2796 38.7204C37.061 39.5018 37.5 40.5616 37.5 41.6667C37.5 42.7717 37.061 43.8315 36.2796 44.6129C35.4982 45.3943 34.4384 45.8333 33.3333 45.8333C32.2283 45.8333 31.1685 45.3943 30.3871 44.6129C29.6057 43.8315 29.1667 42.7717 29.1667 41.6667C29.1667 40.5616 29.6057 39.5018 30.3871 38.7204C31.1685 37.939 32.2283 37.5 33.3333 37.5ZM33.3333 39.5833C32.7808 39.5833 32.2509 39.8028 31.8602 40.1935C31.4695 40.5842 31.25 41.1141 31.25 41.6667C31.25 42.2192 31.4695 42.7491 31.8602 43.1398C32.2509 43.5305 32.7808 43.75 33.3333 43.75C33.8859 43.75 34.4158 43.5305 34.8065 43.1398C35.1972 42.7491 35.4167 42.2192 35.4167 41.6667C35.4167 41.1141 35.1972 40.5842 34.8065 40.1935C34.4158 39.8028 33.8859 39.5833 33.3333 39.5833ZM14.5833 37.5C15.6884 37.5 16.7482 37.939 17.5296 38.7204C18.311 39.5018 18.75 40.5616 18.75 41.6667C18.75 42.7717 18.311 43.8315 17.5296 44.6129C16.7482 45.3943 15.6884 45.8333 14.5833 45.8333C13.4783 45.8333 12.4185 45.3943 11.6371 44.6129C10.8557 43.8315 10.4167 42.7717 10.4167 41.6667C10.4167 40.5616 10.8557 39.5018 11.6371 38.7204C12.4185 37.939 13.4783 37.5 14.5833 37.5ZM14.5833 39.5833C14.0308 39.5833 13.5009 39.8028 13.1102 40.1935C12.7195 40.5842 12.5 41.1141 12.5 41.6667C12.5 42.2192 12.7195 42.7491 13.1102 43.1398C13.5009 43.5305 14.0308 43.75 14.5833 43.75C15.1359 43.75 15.6658 43.5305 16.0565 43.1398C16.4472 42.7491 16.6667 42.2192 16.6667 41.6667C16.6667 41.1141 16.4472 40.5842 16.0565 40.1935C15.6658 39.8028 15.1359 39.5833 14.5833 39.5833ZM37.5 12.5H8.89584L14.2083 25H31.25C31.9375 25 32.5417 24.6667 32.9167 24.1667L39.1667 15.8333C39.4375 15.4792 39.5833 15.0417 39.5833 14.5833C39.5833 14.0308 39.3638 13.5009 38.9731 13.1102C38.5824 12.7195 38.0525 12.5 37.5 12.5ZM31.25 27.0833H14.3125L12.7083 30.3333L12.5 31.25C12.5 31.8025 12.7195 32.3324 13.1102 32.7231C13.5009 33.1138 14.0308 33.3333 14.5833 33.3333H37.5V35.4167H14.5833C13.4783 35.4167 12.4185 34.9777 11.6371 34.1963C10.8557 33.4149 10.4167 32.3551 10.4167 31.25C10.416 30.5431 10.5953 29.8477 10.9375 29.2292L12.4375 26.1667L4.875 8.33333H2.08334V6.25H6.25L8.02084 10.4167H37.5C38.6051 10.4167 39.6649 10.8557 40.4463 11.6371C41.2277 12.4185 41.6667 13.4783 41.6667 14.5833C41.6667 15.625 41.3125 16.5 40.7292 17.2083L34.6667 25.3125C33.9167 26.375 32.6667 27.0833 31.25 27.0833Z"
                                        fill="black"
                                    />
                                </svg>
                                <span className="absolute bottom-3 left-3 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs font-bold">
                                    {cart.cartItems.length > 0 &&
                                        cart.cartItems.length}
                                </span>
                            </a>
                            <DropdownMenu />
                        </li>
                    </div>
                )}
            </ul>
        </header>
    );
};

export default Index;
