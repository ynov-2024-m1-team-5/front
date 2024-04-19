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

export async function addProductToCart(customer_id, token, productData) {
    // console.log("token cart api : ", token);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_CART}${customer_id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData)
            }
        );
        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch {
                throw new Error(text);
            }
        }

        return data;
    } catch (err) {
        return err;
    }
}

export async function deleteProductFromCart(cartProduct_id, token, customer_id) {

    try {

        const res = await fetch (
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_CART}${cartProduct_id}/user/${customer_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            }

        );

        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch {
                throw new Error(text);
            }
        }

        return data;
    } catch (err) {
        return err;
    }

}

export async function updateProductToCart(cartProductId, token, productData) {
    console.log("token cart api : ", token);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_CART}${cartProductId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(productData)
            }
        );
        console.log("Body : "+productData);

        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data;
            } catch {
                throw new Error(text);
            }
        }

        return data;
    } catch (err) {
        return err;
    }
}
