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

const getUsers = async (req, res) => {
    // TODO

    res.status(200).json({
        msg: "Test successfully",
        result: true,
    });
};

module.exports = {
    login,
    createUser,
    getUsers
};