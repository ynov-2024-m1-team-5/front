import { useContext } from "react";
import { Store } from "../Store";
import { Helmet } from "react-helmet-async";
import MessageBox from "../components/MessageBox";
import { Link } from "react-router-dom";

export default function CartScreen() {
    const { state, dispatch: ctxDispatch } = useContext(Store);
    const {
        cart: { cartItems },
    } = state;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                    <ul className="divide-y divide-gray-200">
                        <li
                            key={item._id}
                            className="flex items-center justify-between py-4"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 rounded img-thumbnail"
                                ></img>
                                <Link
                                    to={`/product/${item.slug}`}
                                    className="font-semibold"
                                >
                                    {item.name}
                                </Link>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                    disabled={item.quantity === 1}
                                >
                                    <i className="fas fa-minus-circle"></i>
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="text-gray-500 hover:text-gray-700 disabled:opacity-50"
                                    disabled={
                                        item.quantity === item.countInStock
                                    }
                                >
                                    <i className="fas fa-plus-circle"></i>
                                </button>
                                <button className="text-gray-500 hover:text-gray-700">
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                            <div>${item.price}</div>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="bg-white shadow-md rounded-md p-6">
                        <h2 className="text-lg font-semibold mb-4">
                            Subtotal{" "}
                        </h2>
                        <div className="text-xl font-semibold">
                            {/* ${cartItems.reduce((a, c) => a + c.price * c.quantity, 0)} */}
                        </div>
                        <button
                            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
                            disabled={cartItems.length === 0}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
