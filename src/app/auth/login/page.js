"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button/";
import Title from "@/components/UI/Title";
// import Loading from "@/components/UI/Loading";
import styles from "./page.module.scss";
import { login } from "@/services/api/auth.api";
import { useRouter } from "next/navigation";

// import Notification from "@/components/UI/Notification";

const Page = () => {
    const router = useRouter();
    const [userForm, setUserForm] = useState({
        username: "",
        password: "",
    });

    //ce code est à mettre dans le fichier useFetch.js
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    const submitLogin = async (e) => {
        e.preventDefault();
        const { username, password } = userForm;

        console.log("User Form:", userForm);

        const bodyFormData = new FormData();
        bodyFormData.append("username", username);
        bodyFormData.append("password", password);

    
//         for(const value of bodyFormData.values()){
//             console.log('FormData value:', value);
//         }
        
//         login(bodyFormData);


        try {
            const token = await login(bodyFormData);
            localStorage.setItem("token", token);
            router.push("/shop");
        } catch (error) {
            console.log("Error:", error);
        }

    };

    return (
        <>
            {/* <Loading isLoad={loading} /> */}
            <Title title="Connexion" Level="h1" />
            <form onSubmit={(e) => submitLogin(e)}>
                <Input
                    label="Email"
                    type="text"
                    name="username"
                    placeholder="veuillez saisir votre email"
                    isRequired={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.username}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="veuillez saisir votre mot de passe"
                    isRequired={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.password}
                />
                <Button
                    type="submit"
                    title="Connexion"
                    className="btn__primary"
                />
            </form>
            <br />
            {/* {error && <Notification type="warning" message={error.message} />} */}
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
