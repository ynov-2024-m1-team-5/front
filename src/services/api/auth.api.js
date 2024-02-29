export async function saveUser(user) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}customers/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }
        );

        const data = await res.json();
        router.push('auth/login');
        return data;
    } catch (err) {
        return err;
    }
}

export async function login(bodyFormData) {
    console.log("IN : "+JSON.stringify(bodyFormData));

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}token/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: bodyFormData
            }
        );

        const data = await res.json();
        //window.location.href = "/shop";

        return data;
    } catch (err) {
        return err;
    }
}

