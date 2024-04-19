export async function addFavorite(customerId, productId, token) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_WISHLIST}api/v1/wishlists/${customerId}/products/add/${productId}`,

            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        return data.success;
    } catch (err) {
        // return err;
        console.error(err);
    }
}

// recuperer la liste des favoris

export async function getWishlist(customerId, token) {
    console.log(customerId);
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_WISHLIST}api/v1/wishlists/${customerId}/products`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        const data = await res.json();
        console.log({ data });
        return data.products;
    } catch (err) {
        console.error(err);
        // return err;
    }
}
