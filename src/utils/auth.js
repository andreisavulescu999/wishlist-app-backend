import jwt from "jsonwebtoken";

export const generateAuthToken = (id, name) => {
    return jwt.sign(
        { userId: id, name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
}
