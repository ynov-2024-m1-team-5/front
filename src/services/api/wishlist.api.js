export async function addFavorite(customerId, productId) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_WISHLIST}api/v1/wishlists/${customerId}/products/add/${productId}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
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

export async function getWishlist(customerId) {
    console.log(customerId);
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT_WISHLIST}api/v1/wishlists/${customerId}/products`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await res.json();
        return data.products;
        console.log(data);
    } catch (err) {
        console.error(err);
        // return err;
    }
}
