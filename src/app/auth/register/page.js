"use client";
import { useState, useEffect, useContext } from "react";
import styles from "./page.module.css";
import Input from "@/components/UI/Input";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Link from "next/link";

const Index = () => {
    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        phone: "",
        address: {
            city: "",
            zipCode: "",
            street: "",
        },
    });

    // cette fonction permet de mettre à jour le state userForm et de gérer les changements dans les inputs
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
        if (e.target.name === "zipCode") {
            userForm.address.zipCode = e.target.value;
        }
        if (e.target.name === "city") {
            userForm.address.city = e.target.value;
        }
        if (e.target.name === "street") {
            userForm.address.street = e.target.value;
        }
    };

    // cette fonction permet de soumettre le formulaire d'inscription et de gérer les erreurs et e.preventDefault() permet de ne pas recharger la page
    const submitRegister = (e) => {
        e.preventDefault();
    };

    // permet de verifier si le token est présent dans le localstorage et de faire la requête pour récupérer les

    return (
        <>
            <Title title="Inscription" Level="h1" />
            <form onSubmit={(e) => submitRegister(e)}>
                <div className={styles.username}>
                    <Input
                        label="Prénom"
                        type="text"
                        name="firstName"
                        placeholder="prénom"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.firstName}
                    />
                    <Input
                        label="Nom"
                        type="text"
                        name="lastName"
                        placeholder="Nom"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.lastName}
                    />
                </div>
                <div className={styles.username}>
                    <Input
                        label="Téléphone"
                        type="number"
                        name="phone"
                        placeholder="Téléphone"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.phone}
                    />
                    <Input
                        label="Code postal"
                        type="number"
                        name="zipCode"
                        placeholder="Code postal"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.address.zipCode}
                    />
                </div>
                <div className={styles.username}>
                    <Input
                        label="Rue"
                        type="text"
                        name="street"
                        placeholder="Rue"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.address.street}
                    />
                    <Input
                        label="Ville"
                        type="text"
                        name="city"
                        placeholder="Paris"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.address.city}
                    />
                </div>

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="veuillez saisir votre email"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.email}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="veuillez saisir votre mot de passe"
                    required={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.password}
                />
                <div className={styles.bottom}>
                    <Button
                        type="submit"
                        title="S'inscrire"
                        className="btn__primary"
                    />
                    <p>
                        Déjà membre ?{" "}
                        <Link href="/auth/login">Connectez-vous ?</Link>
                    </p>
                </div>
            </form>
        </>
    );
};

export default Index;
