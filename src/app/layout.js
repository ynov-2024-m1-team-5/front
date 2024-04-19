"use client";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import "@/assets/styles/style.scss";
import { DM_Serif_Display, Work_Sans, Poppins } from "next/font/google";
// import { WishlistContextProvider } from "@/context/WishlistContext";
import { UserContextProvider } from "@/context/UserContext";
import { WishlistContextProvider } from "@/context/WishlistContext";
import { StoreProvider } from "@/store";

const dm_serif_display = DM_Serif_Display({
    subsets: ["latin"],
    weight: ["400"],
});

const work_sans = Work_Sans({
    subsets: ["latin"],
    weight: ["400", "700", "600", "900"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${dm_serif_display.className} ${work_sans.className} ${poppins.className}`}
            >
                <UserContextProvider>
                    <StoreProvider>
                        <WishlistContextProvider>
                            <main>{children}</main>
                        </WishlistContextProvider>
                    </StoreProvider>
                </UserContextProvider>
            </body>
        </html>
    );
}
