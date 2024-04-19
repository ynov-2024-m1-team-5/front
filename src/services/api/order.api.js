export async function getOrders() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}orders`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export async function getOrder(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}orders/${id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        return data.data;
    }
    catch (err) {
        console.log(err);
        return err;
    }
}

export async function getOrdersByCustomerId(customer_id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}customers/${customer_id}/orders`, 
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        return data.data;
    }
    catch (err) {
        return err
    }
}

export async function createOrder(customer_id) {
    try {
        console.log("customer_id : ", customer_id);
        const res = await fetch(`https://api-order.onrender.com/api/v1/customers/${customer_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        const data = await res.json();
        console.log({data})
        if (!data.success) {
            throw new Error(data.message);
        }
        window.location.href = data.url
    } catch (err) {
        return err;
    }
}

export async function refundOrder(customer_id, id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}customers/${customer_id}/orders/${id}/refunded`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        return data.data;
    } catch (err) {
        console.log(err);
        return err;
    }
}
