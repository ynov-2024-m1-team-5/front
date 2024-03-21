"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { createProduct } from "@/services/api/product.api";

const Page = () => {
    const [product, setProduct] = useState({
        name: "",
        thumbnail: "",
        price: "",
        quantityInStock: "",
        active: false,
        description: "",
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setProduct({
            ...product,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const productData = {
                product: { ...product }
            };
            const response = await createProduct(productData);
            console.log(response);
            // Reset the form
            setProduct({
                name: "",
                thumbnail: "",
                price: "",
                quantityInStock: "",
                active: false,
                description: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        value={product.name}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Thumbnail</label>
                    <input
                        type="input"
                        name="thumbnail"
                        placeholder="Thumbnail URL"
                        value={product.thumbnail}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={product.price}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Stock</label>
                    <input
                        type="number"
                        name="quantityInStock"
                        placeholder="Stock"
                        value={product.quantityInStock}
                        onChange={handleInputChange}y
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
                        rows="2"
                        placeholder="Description"
                        value={product.description}
                        onChange={handleInputChange}
                    >
                    </textarea>
                    <button type="submit" className={styles.button}>
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
