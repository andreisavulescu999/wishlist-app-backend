import jwt from "jsonwebtoken";

export const geneateAuthToken = (id, name) => {
    return jwt.sign(
        { userId: id, name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}
