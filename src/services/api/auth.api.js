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

// export async function login(bodyFormData) {
//     console.log("IN : "+JSON.stringify(bodyFormData));

//     try {
//         const res = await fetch(
//             `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}token`,
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded"
//                 },
//                 body: bodyFormData
//             }
//         );

//         const data = await res.json();
//         //window.location.href = "/shop";

//         return data;
//     } catch (err) {
//         return err;
//     }
// }

export async function login(bodyFormData) {

    try {
        const formDataString = new URLSearchParams(bodyFormData).toString();

        const contentLength = formDataString.length;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}token`,
            {
                method: "POST",
                headers: {
                    'Accept': '*/*',     
                },
                body: bodyFormData,
            }
        );

        const data = await res.json();

        console.log(data);
        if(data != null){
            window.location.href = "/shop";
        }
        return data;
    } catch (err) {
        return err;
    }
}

export async function getCustomers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        if (!res.ok) {
            throw new Error("HTTP error! status: " + res.status);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function getCustomer(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/${id}`, {
            cache: "no-store",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function createCustomer(Customer) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Customer),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function updateCustomer(id, Customer) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Customer),
        });
        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch {
                throw new Error(text);
            }
        }
        const data = await res.json();
        
        return data.access_token;

    } catch (err) {
        return err;
    }
}


export async function deleteCustomer(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

