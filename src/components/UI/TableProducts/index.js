import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Image from "next/image";
import { deleteProduct } from "@/services/api/product.api.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ClearIcon from '@mui/icons-material/Clear';

const List = ({ products }) => {

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
            <table className={styles.table}>
                <thead className={styles.tableHeader}>
                    <tr className={styles.tableRow}>
                        <th className={styles.tableCell}>Product</th>
                        <th className={styles.tableCell}>Price</th>
                        <th className={styles.tableCell}>Description</th>
                        <th className={styles.tableCell}>Stock</th>
                        <th className={styles.tableCell}>Active</th>
                        <th className={styles.tableCell}>Actions</th>
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {products && products.length > 0 ? (
                    products.map((product) => (
                        <tr className={styles.tableRow} key={product.id}>
                            <td className={styles.tableCell}>
                                <div className={styles.cellWrapper}>
                                    <img
                                        src={
                                            product.thumbnail || "/nothumbnail.png"
                                        }
                                        alt="thumbnail"
                                        className={styles.image}
                                    />
                                    {product.name}
                                </div>
                            </td>
                            <td className={styles.tableCell}>
                                {product.price}
                            </td>
                            <td className={styles.tableCell}>
                                {product.description}
                            </td>
                            <td className={styles.tableCell}>
                                {product.quantityInStock}
                            </td>
                            <td className={styles.tableCell}>
                                {product.active ? "Yes" : "No"}
                            </td>
                            <td className={styles.tableCell}>
                                <div className={styles.actions}>
                                    <Link
                                        href={`/dashboard/products/${product.id}`}
                                        key={product.id}
                                    >
                                        <VisibilityIcon
                                            className={styles.viewIcon}
                                        />
                                    </Link>

                                    <ClearIcon
                                        className={styles.deleteIcon}
                                        onClick={() => handleDeleteProduct(product.id)}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr className={styles.tableRow}>
                            <td colSpan="7" className={styles.tableCell}>
                                No products found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
    );
};

export default List;