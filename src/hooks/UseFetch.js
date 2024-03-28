import { useState } from "react";

const useFetch = ({ url, method, body, token }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const headers = {
                Accept: "*/*",
            };

            // Ajoutez le token d'authentification dans les en-têtes si le token est défini
            if (token) {
                headers["Authorization"] = `Bearer ${token}`;
            }

            let requestOptions = {
                method: method,
                headers: headers,
            };

            // Si la méthode est POST, PUT ou PATCH et qu'un corps est défini, ajoutez le corps à la requête
            if (
                (method === "POST" || method === "PUT" || method === "PATCH") &&
                body
            ) {
                const formData = new FormData(); // Créez un nouvel objet FormData
                for (const key in body) {
                    formData.append(key, body[key]);
                }
                requestOptions.body = formData;
            }

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}${url}`,
                requestOptions
            );

            const dataJson = await response.json();
            if (!response.ok) {
                throw new Error(
                    dataJson.message ||
                        "Une erreur s'est produite lors de la requête."
                );
            }
            setData(dataJson);
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    };

    return { fetchData, data, error, loading };
};

export default useFetch;