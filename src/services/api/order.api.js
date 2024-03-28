export async function getOrders() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}`);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function getOrder(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}${id}`);
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function createOrder(order) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function updateOrder(id, order) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
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
        return data;
    } catch (err) {
        return err;
    }
}

export async function deleteOrder(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}