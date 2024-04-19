"use client";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProduct } from "@/services/api/product.api.js";
import BreadCrumb from "@/components/UI/Breadcrumb";
import TitlePage from "@/components/UI/TitlePage";
import ProductFancyBox from "@/components/products/ProductFancyBox";
import Loader from "@/components/UI/Loader";
import Alert from "@/components/UI/Alert";
import Link from "next/link";
import { addProductToCart } from "@/services/api/cart.api";
import { UserContext } from "@/context/UserContext";

// import { getBase64 } from "../../../lib/base64";

export default function Page() {
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [placehodlerImage, setPlaceholderImage] = useState(null);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [slideIndex, setSlideIndex] = useState(0);
    const [showFancyBox, setShowFancyBox] = useState(false);
    const [error, setError] = useState(null);
    const { token, user } = useContext(UserContext);
    const customer_id = user.id;


    const [addToCartClicked, setAddToCartClicked] = useState(false);


    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                let product = await getProduct(id);
                if (product) {
                    setProduct(product);
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchProduct();
        }
    }, [id]);


    
    const addProduct = async () => {
        const productData = {
            productId: product.id,
            quantitySelected: 1,
            sellingPrice: product.price,
            isOrder: false
        };
        try {
            let add = await addProductToCart(customer_id, token, productData);
            localStorage.setItem('cartImage', JSON.stringify(updatedProducts));
            console.log("LOL : "+JSON.stringify(product.id));

        } catch (err) {
            setError(err);
        }   
    }

    useEffect(() => {
        if (addToCartClicked) {
            addProduct();
            setAddToCartClicked(false); // Reset after adding product
        }
    }, [addToCartClicked]);



    
    // useEffect(() => {
    //     const addProduct = async (productData) => {
    //         try {
    //             let add = await addProductToCart(productData, token, customer_id);
    //         } catch (err) {
    //             setError(err);
    //         }
    //     }

    //     if (customer_id) {
    //         addProduct();
    //     }
    // }, [id]);


    if (loading) return <Loader />;

    const goToNextSlide = () => {
        setSelectedImage(
            slideIndex === 0 ? product.packshot : product.thumbnail
        );
        setSlideIndex(slideIndex === 0 ? 1 : 0);
    };

    const goToPrevSlide = () => {
        setSelectedImage(
            slideIndex === 0 ? product.packshot : product.thumbnail
        );
        setSlideIndex(slideIndex === 0 ? 1 : 0);
    };

    return (
        <div className="container mx-auto py-12">
            {error && <Alert message={error.message} type="error" />}
            {!product && <Alert message="No products found" type="error" />}
            {showFancyBox && (
                <ProductFancyBox
                    img={selectedImage}
                    prevSlide={() => goToPrevSlide()}
                    nextSlide={() => goToNextSlide()}
                    close={() => {
                        setShowFancyBox(false);
                    }}
                />
            )}
            <BreadCrumb current_page={product?.name} />
            <div className="flex">
                <div className="thumbnail lg:flex-1">
                    <div
                        onClick={() => setShowFancyBox(true)}
                        className="group/show w-4/5 h-[550px] overflow-hidden cursor-pointer"
                    >
                        <Image
                            blurDataURL={placehodlerImage}
                            className="object-cover h-full w-full group-hover/show:scale-105 transition ease-in-out delay-150 z-1"
                            alt={product.name}
                            src={product.thumbnail}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="carousel flex mt-4 overflow-hidden">
                        <div className="item w-[100px] h-[100px] mr-2">
                            <Image
                                className="cursor-pointer object-cover h-full w-full "
                                alt={product.name}
                                src={product.thumbnail}
                                width={100}
                                height={100}
                                onMouseOver={() => {
                                    setSelectedImage(product.thumbnail);
                                    setSlideIndex(0);
                                }}
                                onClick={() => {
                                    setSelectedImage(product.thumbnail);
                                    setSlideIndex(0);
                                }}
                            />
                        </div>
                        {/* <div className="item w-[100px] h-[100px]">
                            <Image
                                className="cursor-pointer object-cover h-full w-full"
                                alt={product.name}
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${product.packshot}`}
                                width={100}
                                height={100}
                                onMouseOver={() => {
                                    setSelectedImage(product.packshot);
                                    setSlideIndex(1);
                                }}
                                onClick={() => {
                                    setSelectedImage(product.packshot);
                                    setSlideIndex(1);
                                }}
                            />
                        </div> */}
                    </div>
                </div>
                <div className="content lg:flex-1 p-6">
                    <TitlePage title={product.name} />
                    <p className="mb-3 font-semibold text-lg">
                        {product.price} €
                    </p>
                    <p className="leading-7">{product.description}</p>

                    <div className="group-hover/card:opacity-100 transition ease-in-out delay-150">
                        <Link
                            className="transition ease-in-out delay-150 mt-4 inline-flex items-center px-4 py-3 text-sm border border-slate-500 font-medium text-center text-slate-500 bg-white hover:bg-slate-500 hover:text-white"
                            href="/panier"
                            onClick={() => setAddToCartClicked(true)}
                        >
                            Ajouter au panier
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
