"use client";
import { useState } from "react";
import Link from "next/link";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button/";
import Title from "@/components/UI/Title";
// import Loading from "@/components/UI/Loading";
import styles from "./page.module.scss";
import {login} from "@/services/api/auth.api";


// import Notification from "@/components/UI/Notification";

const Page = () => {
    const [userForm, setUserForm] = useState({
        email: "",
        password: "",
    });

    //ce code est à mettre dans le fichier useFetch.js
    const handleChange = (e) => {
        setUserForm({
            ...userForm,
            [e.target.name]: e.target.value,
        });
    };

    // const submitLogin = (e) => {
    //     const { email, password } = userForm;
    //     console.log('TEST : '+JSON.stringify(userForm));

    //     const bodyFormData = new FormData();
    //     bodyFormData.append("username", email);
    //     bodyFormData.append("password", password);
    //     console.log('TEST : '+JSON.stringify(bodyFormData));
    //     login(bodyFormData);
    //     e.preventDefault();
    // };

    const submitLogin = (e) => {
        e.preventDefault();
        const { email, password } = userForm;
    
        console.log('User Form:', userForm);
        
        const bodyFormData = new FormData();
        bodyFormData.append("username", email);
        bodyFormData.append("password", password);
    
        for(const value of bodyFormData.values()){
            console.log('FormData value:', value);
        }
        
        login(bodyFormData);
    };
    

    return (
        <>
            {/* <Loading isLoad={loading} /> */}
            <Title title="Connexion" Level="h1" />
            <form onSubmit={(e) => submitLogin(e)}>
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="veuillez saisir votre email"
                    isRequired={true}
                    onChange={(e) => handleChange(e)}
                    value={userForm.email}
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
