import React, { createContext, useReducer } from "react";

// Création du contexte pour le store global
export const Store = createContext();

// État initial du store
const initialState = {
    cart: {
        cartItems: [], // Tableau d'articles dans le panier
    },
    wishlist: {
        wishlistItems: [], // Tableau d'articles dans la liste de souhaits
    },
};

// Reducer pour gérer les actions sur le store
function reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": // Action pour ajouter un article au panier
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: [...state.cart.cartItems, action.payload], // Ajoute l'article au tableau
                },
            };
        case "REMOVE_FROM_CART": // Action pour supprimer un article du panier
            return {
                ...state,
                cart: {
                    ...state.cart,
                    cartItems: state.cart.cartItems.filter(
                        (item) => item.id !== action.payload // Filtre les articles pour enlever celui avec l'ID spécifié
                    ),
                },
            };
        case "ADD_TO_WISHLIST": // Action pour ajouter un article à la liste de souhaits
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    wishlistItems: [
                        ...state.wishlist.wishlistItems,
                        action.payload,
                    ], // Ajoute l'article à la liste de souhaits
                },
            };
        case "REMOVE_FROM_WISHLIST": // Action pour supprimer un article de la liste de souhaits
            return {
                ...state,
                wishlist: {
                    ...state.wishlist,
                    wishlistItems: state.wishlist.wishlistItems.filter(
                        (item) => item.id !== action.payload // Filtre les articles pour enlever celui avec l'ID spécifié
                    ),
                },
            };
        default:
            return state;
    }
}

// Provider pour envelopper l'application et fournir le store global via le contexte
export function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState); // Utilisation de useReducer pour gérer l'état global

    const addToWishlist = (item) => {
        dispatch({ type: "ADD_TO_WISHLIST", payload: item });
    };

    const removeFromWishlist = (itemId) => {
        dispatch({ type: "REMOVE_FROM_WISHLIST", payload: itemId });
    };

    return (
        <Store.Provider
            value={{ state, dispatch, addToWishlist, removeFromWishlist }}
        >
            {props.children}
        </Store.Provider>
    );
}
