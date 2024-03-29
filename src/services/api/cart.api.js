export async function getAllProducts(customer_id, token) {
    // console.log("token cart api : ", token);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_CART}${customer_id}/cartProducts/`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        console.log("VIDE : " + data);

        return data;
    } catch (err) {
        return err;
    }
}
