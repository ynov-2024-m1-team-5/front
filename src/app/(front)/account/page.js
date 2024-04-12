"use client";
import React, { useState, useEffect, useContext } from "react";
import Input from "@/components/UI/Input";
import Title from "@/components/UI/Title";
import Button from "@/components/UI/Button";
import styles from "./page.module.css";
import { updateCustomer } from "@/services/api/auth.api";
import { UserContext } from "@/context/UserContext";

const Page = () => {
    const { user } = useContext(UserContext);
    const [modifying, setModifying] = useState(false);
    const [title, setTitle] = useState("Mon compte");
    const [form, setForm] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        city: user.city,
        zipcode: user.zipcode,
        address: user.address,
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitRegister = async (e) => {
        updateCustomer(user.id, form);
    };

    useEffect(() => {
        if (modifying) {
            setTitle("Modifier mon compte");
        } else {
            setTitle("Mon compte");
        }
    }, [modifying]);

    return (
        <>
            <Title title={title} Level="h1" />
            {modifying ? (
                <form
                    className={styles.form}
                    onSubmit={(e) => submitRegister(e)}
                >
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
                            title="Modifier"
                            className="btn__primary"
                            handleClick={(e) => submitRegister(e)}
                        />
                        <Button
                            title="Annuler"
                            className="btn__secondary"
                            handleClick={() => setModifying(false)}
                        />
                    </div>
                </form>
            ) : (
                <div className="flow-root rounded-lg border border-gray-100 py-3 w-2/4 m-auto shadow-sm">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                                Prénom
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.first_name}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Nom</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.last_name}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Email</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.email}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                                Téléphone
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.phone}
                            </dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Ville</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.city}
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">
                                Code Postal
                            </dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.zipcode}
                            </dd>
                        </div>
                        <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                            <dt className="font-medium text-gray-900">Rue</dt>
                            <dd className="text-gray-700 sm:col-span-2">
                                {user.address}
                            </dd>
                        </div>
                    </dl>
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
