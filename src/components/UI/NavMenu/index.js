import Link from "next/link";

const Index = ({ menu, color, visibleWishlist }) => {
    const colors = {
        scale: "scale-500",
        black: "black",
        grey: "gray-900",
        white: "white",
    };

    return (
        <nav>
            <ul className="flex p-6 items-center justify-between lg:gap-x-5">
                {menu.map((item, index) => (
                    <li key={index} className="lg:flex-1">
                        <Link
                            href={item.path}
                            className={`text-md font-normal leading-6 text-${colors[color]} text-base hover:text-slate-500`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}

                {visibleWishlist && (
                    <li>
                        <a href="/wishlist">
                            <svg
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
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
                        </a>
                    </li>
                )}

                
                <li>
                    <a href="/panier">
                        <svg
                            viewBox="0 0 24 24"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-labelledby="wish-list-:r0:"
                            class="zds-icon RC794g X9n9TI DlJ4rT _5Yd-hZ HlZ_Tf I_qHp3"
                            focusable="false"
                            aria-hidden="false"
                            role="img"
                            data-testid="wishlist"
                        >
                            <title id="wish-list-:r0:">Wish list</title>
                            <path d="M17.488 1.11h-.146a6.552 6.552 0 0 0-5.35 2.81A6.57 6.57 0 0 0 6.62 1.116 6.406 6.406 0 0 0 .09 7.428c0 7.672 11.028 15.028 11.497 15.338a.745.745 0 0 0 .826 0c.47-.31 11.496-7.666 11.496-15.351a6.432 6.432 0 0 0-6.42-6.306zM12 21.228C10.018 19.83 1.59 13.525 1.59 7.442c.05-2.68 2.246-4.826 4.934-4.826h.088c2.058-.005 3.93 1.251 4.684 3.155.226.572 1.168.572 1.394 0 .755-1.907 2.677-3.17 4.69-3.16h.02c2.7-.069 4.96 2.118 5.01 4.817 0 6.089-8.429 12.401-10.41 13.8z"></path>
                        </svg>
                    </a>
                </li>

            </ul>
        </nav>
    );
};

export default Index;
