export async function saveUser(user) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        const data = await res.json();
        router.push("auth/login");
        return data;
    } catch (err) {
        return err;
    }
}

export async function login(bodyFormData) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}token/`,
            {
                method: "POST",
                headers: {
                    Accept: "*/*",
                },
                body: bodyFormData,
            }
        );

        const data = await res.json();

        return data.access_token;
    } catch (err) {
        return err;
    }
}

// recuperer le user avec son id

// export async function getUser(id) {
//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/${id}/`,
//             {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             }
//         );

//         const data = await res.json();

//         return data;
//     } catch (err) {
//         return err;
//     }
// }
