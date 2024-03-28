"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { createCustomer } from "@/services/api/auth.api";

const Page = () => {
    const [customer, setCustomer] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        zipcode: "",
        city: "",
    });

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setCustomer({
            ...customer,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await createCustomer(customer);
            console.log(response);
            // Reset the form
            setCustomer({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                password: "",
                address: "",
                zipcode: "",
                city: "",
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label>Customer First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="Customer First Name"
                        value={customer.first_name}
                        onChange={handleInputChange}
                    />
                    <label>Customer Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Customer Last Name"
                        value={customer.last_name}
                        onChange={handleInputChange}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={customer.password}
                        onChange={handleInputChange}
                    />
                    <label>Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={customer.phone}
                        onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={customer.email}
                        onChange={handleInputChange}
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={customer.address}
                        onChange={handleInputChange}
                    />
                    <label>Postal Code</label>
                    <input
                        type="text"
                        name="zipcode"
                        placeholder="Postal Code"
                        value={customer.zipcode}
                        onChange={handleInputChange}
                    />
                    <label>City</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={customer.city}
                        onChange={handleInputChange}
                    />
                    <button type="submit" className={styles.button}>
                        Create
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Page;
