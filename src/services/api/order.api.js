export async function getOrders(token) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}orders`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export async function getOrder(token,id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}orders/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await res.json();
        console.log("data "+ data);
        console.log("data.data "+ data.data);
        return data.data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export async function getOrdersByCustomerId(customer_id, token) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}customers/${customer_id}/orders`, 
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await res.json();
        return data.data;
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


