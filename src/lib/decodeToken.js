import jwt from "jsonwebtoken";

export const decodeToken = async (token) => {
    try {
        const decoded = await jwt.decode(token);
        return decoded;
    } catch (err) {
        return err;
    }
}

