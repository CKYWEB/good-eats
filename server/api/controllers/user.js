const {handleLogin, handleCreateUser, handleFindUsers} = require("../services/user");
const login = async (req, res) => {
    try {
        const result = await handleLogin(req.body);

        res.status(200).json({
            msg: `Welcome, ${result[0].firstName}.`,
            data: result,
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
        const result = await handleCreateUser(req.body);

        res.status(200).json({
            msg: "Your account is created successfully.",
            data: result,
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
    try {
        const result = await handleFindUsers(req.query);

        res.status(200).json({
            data: result,
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
    getUsers
};