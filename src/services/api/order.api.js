export async function getOrders(token) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}`, {
            method: "GET",
            headers: {
                "Authorization": token,
            },
        });
        const data = await res.json();

        return data;
    }
    catch (err) {
        console.log(err);
        return err
    }
}

export async function getOrder(token,id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}/${id}`, {
            method: "GET",
            headers: {
                "Authorization": token,
            },
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        return err
    }
}

export async function createOrder(customer_id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}/${customer_id}`, {
            method: "POST",
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        return err
    }
}

export async function confirmOrder(customer_id, order_id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}/${customer_id}/${order_id}`, {
            method: "PATCH",
        });
        const data = await res.json();
        return data;
    }
    catch (err) {
        return err
    }
}

