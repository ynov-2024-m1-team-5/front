export async function getCustomers() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
        if (!res.ok) {
            throw new Error("HTTP error! status: " + res.status);
        }
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function getCustomer(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}${id}`, {
            cache: "no-store",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function createCustomer(Customer) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Customer),
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}

export async function updateCustomer(id, Customer) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Customer),
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

export async function deleteCustomer(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_USER}${id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        return data;
    } catch (err) {
        return err;
    }
}
