export async function createOrder(customer_id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}${customer_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
 

        // const data = await res.json();
        // return data;
    } catch (err) {
        return err;
    }
}