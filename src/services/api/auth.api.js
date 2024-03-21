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
    bodyFormData.keys().forEach((value, key) => {
        console.log(key, value);
    });
    try {
        console.log("bodyFormData:", bodyFormData);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}token/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                },
                body: bodyFormData,
            }
        );

        const data = await res.json();
        //window.location.href = "/shop";

        return data;
    } catch (err) {
        return err;
    }
}

// const xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);

// // Send the proper header information along with the request
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.send(varFormdata);
// // xhr.send(new Int8Array());
// // xhr.send(document);
