export async function getProducts() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCT}all`,
            {
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const data = await res.json();
        return data.products;
    } catch (err) {
        return err;
    }
}

export async function getProduct(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCT}${id}`,
            {
                cache: "no-store",
            }
        );

        const data = await res.json();
        return data.product;
    } catch (err) {
        return err;
    }
}

export async function createProduct(productData) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCT}create`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            }
        );

        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                return data.product;
            } catch {
                throw new Error(text);
            }
        }
        const data = await res.json();
        return data.product;
    } catch (err) {
        return err;
    }
}

export async function updateProduct(id, productData) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCT}${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productData),
            }
        );
        if (!res.ok) {
            const text = await res.text();
            try {
                const data = JSON.parse(text);
                console.log(data);
                return data.product;
            } catch {
                throw new Error(text);
            }
        }
        const data = await res.json();
        console.log("data :", data);
        return data.product;
    } catch (err) {
        return err;
    }
}

export async function deleteProduct(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_PRODUCT}${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        return data.product;
    } catch (err) {
        return err;
    }
}
