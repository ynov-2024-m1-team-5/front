import Link from "next/link";
import NavMenu from "@/components/UI/NavMenu";
import menu from "@/data/menu.json";

const Index = () => {
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
            </ul>
        </header>
    );
};

export default Index;
