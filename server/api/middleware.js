const jwt = require("jsonwebtoken");
const {USER_PATH} = require("./routes/config");

const authMiddleware = (req, res, next) => {
    if (req.path === `${USER_PATH}/login`) {
        next();

        return;
    }

    const authorizationHeader = req.get("Authorization");

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            result: false,
            message: "Invalid authorization header",
        });
    }

    const token = authorizationHeader.replace("Bearer ", "");

    if (!token) {
        return res.status(401).json({
            result: false,
            message: "Authorization token not found"
        });
    }

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        return res.status(401).json({
            result: false,
            message: "Invalid token"
        });
    }
};

module.exports = {
    authMiddleware,
};