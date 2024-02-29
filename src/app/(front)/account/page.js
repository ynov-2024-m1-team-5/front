"use client";
import React from "react";
import Input from "@/components/UI/Input";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { getCustomerById } from "@/services/api/customer.api";

const Page = () => {
    const [modifying, setModifying] = useState(false);
    const [user, setUser] = useState({
        
            email: "example@example.com",
            id: "123456789",
            first_name: "John",
            last_name: "Doe",
            phone: "123-456-7890",
            zipcode: "12345",
            city: "New York",
            address: "1234 Main St",
        
    });
    const [title, setTitle] = useState("Mon compte");

    const handleChange = (e) => {
        user[e.target.name] = e.target.defaultValue;
    };
    const submitRegister = (e) => {};

    const fetchUserData = async () => {
        const userData = await getCustomerById(1);
        setUser(userData);
    
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    useEffect(() => {
        if (modifying) {
            setTitle("Modifier mon compte");
        } else {
            setTitle("Mon compte");
        }
    }, [modifying])
    

    return (
        <>

            <Title title={title} Level="h1" />
            {modifying ?
            (<form className={styles.form} onSubmit={(e) => submitRegister(e)}>
                <Input
                    label="Prénom"
                    type="text"
                    name="first_name"
                    placeholder="Prénom"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    defaultValue={user.first_name}
                />
                <Input
                    label="Nom"
                    type="text"
                    name="last_name"
                    placeholder="Nom"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    defaultValue={user.last_name}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    defaultValue={user.email}
                />
                <Input
                    label="Téléphone"
                    type="phone"
                    name="phone"
                    placeholder="Téléphone"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    defaultValue={user.phone}
                />
                <div className={styles.location}>
                <div className={styles.city}>
                    <Input
                        label="Ville"
                        type="text"
                        name="city"
                        placeholder="Ville"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        defaultValue={user.city}
                    />
                    </div>
                <div className={styles.zipcode}>
                    <Input
                        label="Code postal"
                        type="number"
                        name="zipcode"
                        placeholder="Code postal"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        defaultValue={user.zipcode}
                    />
                </div>
                </div>
                <Input
                    label="Adresse"
                    type="text"
                    name="address"
                    placeholder="Adresse"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    defaultValue={user.address}
                />

                <div className={styles.bottom}>
                    <Button
                        type="submit"
                        title="Enregistrer les modifications"
                        className="btn__primary"
                        handleClick={(e)=>submitRegister(e)}
                    />
                    <Button
                        title="Annuler"
                        className="btn__secondary"
                        handleClick={() => setModifying(false)}
                    />
                </div>
            </form> )
            : (
                <div className={styles.form}>
                    <div>
                        <p>
                            <strong>Prénom:</strong> {user.first_name}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Nom:</strong> {user.last_name}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong>Téléphone:</strong> {user.phone}
                        </p>
                    </div>
                    <div>
                        <div>
                            <p>
                                <strong>Ville:</strong> {user.city}
                            </p>
                        </div>
                        <div>
                            <p>
                                <strong>Code postal:</strong> {user.zipcode}
                            </p>
                        </div>
                    </div>
                    <div>
                        <p>
                            <strong>Adresse:</strong> {user.address}
                        </p>
                    </div>
                    <div className={styles.bottom}>
                        <Button
                            title="Modifier"
                            className="btn__primary"
                            handleClick={() => setModifying(true)}
                        />
                    </div>
                </div>
            )}
            
        </>
    );
};
export default Page;
