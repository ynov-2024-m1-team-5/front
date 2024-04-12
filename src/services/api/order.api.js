export async function createOrder(customer_id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT_ORDER}/customers/${customer_id}`, {
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