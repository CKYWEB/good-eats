const {
    handleLogin,
    handleCreateUser,
    handleFindUsers,
    handleGetUserInfo,
    handleGetAuthorInfo,
    handleDeleteUser,
} = require("../services/user");

const isAdmin = (role) => {
    return role === 1;
};
const login = async (req, res) => {
    try {
        const data = await handleLogin(req.body);

        res.status(200).json({
            msg: `Welcome, ${data.firstName}.`,
            data: {
                token: data.token,
            },
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
        const { role } = (await handleGetUserInfo(req)).toObject();

        if (!isAdmin(role)) {
            res.status(403).json({
                msg: "Unauthorized role",
                result: false,
            });

            return;
        }

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

const getUserInfo = async (req, res) => {
    try {
        const result = await handleGetUserInfo(req);

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

const getAuthorInfo = async (req, res) => {
    try {
        const result = await handleGetAuthorInfo(req.query?.authorId);

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

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const { role, _id } = (await handleGetUserInfo(req)).toObject();

        if (!isAdmin(role) || _id === userId) {
            res.status(403).json({
                msg: "Unauthorized role",
                result: false,
            });

            return;
        }

        await handleDeleteUser(userId);

        res.status(200).json({
            result: true,
            msg: "User is deleted successfully!"
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
    getUsers,
    getUserInfo,
    getAuthorInfo,
    deleteUser,
};