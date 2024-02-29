export async function getProducts() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/products/all?take=${take}`,
            {
                cache: "no-store",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        console.log(data);
        return data.products;
    } catch (err) {
        return err;
    }
}

export async function getProduct(id) {
    try {
        console.log(id);
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/products/${id}`,
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

export async function createProduct(product) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/products`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function updateProduct(id, product) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/products/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function deleteProduct(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}api/v1/products/${id}`,
            {
                method: "DELETE",
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function createProduct(productData) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCT}create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });

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
    }
    catch (err) {
        return err;
    }
}

export async function updateProduct(id, productData) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCT}${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(productData),
        });
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
    }
    catch (err) {
        return err
    }
}

export async function deleteProduct(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_PRODUCT}${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return data.product;
    }
    catch (err) {
        return err;
    }
}