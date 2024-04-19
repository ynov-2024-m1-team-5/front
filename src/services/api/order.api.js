export const getAllOrders = async (customer_id, token) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER_CUSTOMER}${customer_id}/orders`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                cors: "no-cors",
            }
        );
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
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