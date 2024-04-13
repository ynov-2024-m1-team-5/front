"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button/";
import Title from "@/components/UI/Title";
import styles from "./page.module.scss";
import { login } from "@/services/api/auth.api";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import Loader from "@/components/UI/Loader";

const Page = () => {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Correction ici
    const router = useRouter();
    const [userForm, setUserForm] = useState({
        username: "",
        password: "",
    });

    const { setToken } = useContext(UserContext);

    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        const { username, password } = userForm;

        setLoading(true); // Début du chargement

        const bodyFormData = new FormData();
        bodyFormData.append("username", username);
        bodyFormData.append("password", password);

        try {
            const token = await login(bodyFormData);
            setToken(token);
            localStorage.setItem("token", token);
            router.push("/shop");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Fin du chargement, quel que soit le résultat
        }
    };

    if (loading) return <Loader />;

    return (
        <>
            <Title title="Connexion" Level="h1" />
            <form onSubmit={(e) => submitLogin(e)}>
                <Input
                    label="Email"
                    type="text"
                    name="username"
                    placeholder="Veuillez saisir votre email"
                    isRequired={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.username}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Veuillez saisir votre mot de passe"
                    isRequired={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.password}
                />
                {error && <p>{error}</p>}
                <Button
                    type="submit"
                    title="Connexion"
                    className="btn__primary"
                />
            </form>
            <br />
            <div className={styles.text}>
                <p>
                    <Link href="/auth/forgotpassword">
                        Mot de passe oublié ?
                    </Link>
                </p>
                <p>
                    Pas de compte ?{" "}
                    <Link href="/auth/register">Inscrivez-vous ?</Link>
                </p>
            </div>
        </>
    );
};

export default Page;
