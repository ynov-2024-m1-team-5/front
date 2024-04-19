export async function refundReq(customer_id, token, order_id) {
    try {
        console.log('TATA : '+token);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER_CUSTOMER}${customer_id}/orders/${order_id}/refund`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            cors: "no-cors"
        });
 
        const data = await res.json();
        console.log({data})
        return data;
        // window.location.href = data.url
    } catch (err) {
        return err;
    }
}