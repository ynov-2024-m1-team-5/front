"use client";
import { useState, useEffect, useContext } from "react";
import styles from "./page.module.css";
import Input from "@/components/UI/Input";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { saveUser, login } from "@/services/api/auth.api";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import Loader from "@/components/UI/Loader";

const Index = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { setToken } = useContext(UserContext);
    const [userForm, setUserForm] = useState({
        first_name: "",
        last_name: "",
        password: "",
        email: "",
        phone: "",
        city: "",
        zipcode: "",
        address: "",
    });

    // cette fonction permet de mettre à jour le state userForm et de gérer les changements dans les inputs
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    // cette fonction permet de soumettre le formulaire d'inscription et de gérer les erreurs et e.preventDefault() permet de ne pas recharger la page
    const submitRegister = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await register();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const register = async () => {
        try {
            await saveUser(userForm).then(() => {
                authlogin(userForm);
            });
        } catch (error) {
            setError(error.message);
        }
    };

    const authlogin = async (userForm) => {
        const bodyFormData = new FormData();
        const username = userForm.email;
        const password = userForm.password;
        bodyFormData.append("username", username);
        bodyFormData.append("password", password);
        try {
            const token = await login(bodyFormData);
            setToken(token);
            localStorage.setItem("token", token);
            router.push("/shop");
        } catch (error) {
            setError(error.message);
        }
    };

    // permet de verifier si le token est présent dans le localstorage et de faire la requête pour récupérer les

    if (loading) return <Loader />;

    return (
        <>
            <Title title="Inscription" Level="h1" />
            <form onSubmit={(e) => submitRegister(e)}>
                <div className={styles.username}>
                    <Input
                        label="Prénom"
                        type="text"
                        name="first_name"
                        placeholder="prénom"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.first_name}
                    />
                    <Input
                        label="Nom"
                        type="text"
                        name="last_name"
                        placeholder="Nom"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.last_name}
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
                        name="zipcode"
                        placeholder="Code postal"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.zipcode}
                    />
                </div>
                <div className={styles.username}>
                    <Input
                        label="Rue"
                        type="text"
                        name="address"
                        placeholder="11 Rue saint honoré"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.address}
                    />
                    <Input
                        label="Ville"
                        type="text"
                        name="city"
                        placeholder="Paris"
                        required={true}
                        onChange={(e) => handleChange(e)}
                        value={userForm.city}
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
                {error && <p>{error}</p>}
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
