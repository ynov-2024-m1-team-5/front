"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import { useParams } from 'next/navigation'
import { getProduct, updateProduct } from "@/services/api/product.api";
import Alert from "@/components/UI/Alert";
import Loader from "@/components/UI/Loader";

export default function Page() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                let product = await getProduct(id);
                if (product) {
                    setProduct(product);
                }
            }
            catch (err) {
                setError(err)
            }
            finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchProduct();
        }
    }, [id]);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const productData = {
                product: { ...product }
            };
            const response = await updateProduct(id, productData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    
    if (loading) return <Loader />;

    if (error) return <Alert message={error.message} type="error" />;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src={product.thumbnail} alt="thumbnail" fill />
                </div>
                {product.name}
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder={product.name}
                        onChange={handleInputChange}
                    />
                    <label>Thumbnail</label>
                    <input
                        type="input"
                        name="thumbnail"
                        placeholder={product.thumbnail}
                        onChange={handleInputChange}
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder={product.price}
                        onChange={handleInputChange}
                    />
                    <label>Stock</label>
                    <input
                        type="number"
                        name="quantityInStock"
                        placeholder={product.quantityInStock}
                        onChange={handleInputChange}
                    />
                    <label>Active product</label>
                    <input
                        type="checkbox"
                        name="active"
                        checked={product.active}
                        onChange={handleInputChange}
                    />

                    <label>Description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="10"
                        placeholder={product.description}
                        onChange={handleInputChange}
                    ></textarea>
                    <button type="submit" className={styles.button}>
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
}
