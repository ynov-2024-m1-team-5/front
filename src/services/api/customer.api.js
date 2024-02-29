export const getCustomerById = async (id) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_AUTH}/api/v1/users/customers/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
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