import Link from "next/link";
import NavMenu from "@/components/UI/NavMenu";
import menu from "@/data/menu.json";

const Index = () => {
    return (
        <footer className="bg-black py-12 pl-6 pr-6">
            <div className="flex justify-center">
                <div className="p-6 w-[20%]">
                    <Link href="/">
                        <span className="font-semibold text-2xl  text-white">
                            mystore.
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Index;
