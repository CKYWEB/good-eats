const {handleLogin, handleCreateUser} = require("../services/user");
const login = async (req, res) => {
    try {
        const newUser = await handleLogin(req.body);

        res.status(200).json({
            msg: "Login successfully",
            data: newUser,
            result: true,
        });
    } catch (err) {
        res.status(403).json({
            msg: err.message,
            result: false,
        });
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = await handleCreateUser(req.body);

        res.status(200).json({
            msg: "Create successfully",
            data: newUser,
            result: true,
        });
    } catch (err) {
        res.status(403).json({
            msg: err.message,
            result: false,
        });
    }
};

module.exports = {
    login,
    createUser,
};