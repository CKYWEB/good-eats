const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const EMAIL_REGEX = /^[a-zA-Z](\.?[a-zA-Z]){2,}@northeastern\.edu$/;
const NAME_REGEX = /^[a-z ,.'-]+$/i;

const checkPassword = (password1, password2) => {
    return bcrypt.compareSync(password1, password2);
};

const handleCreateUser = async (payload) => {
    if (payload.firstName === undefined) {
        throw new Error("First name cant not be undefined");
    }

    if (payload.lastName === undefined) {
        throw new Error("Last name cant not be undefined");
    }

    if (payload.email === undefined) {
        throw new Error("Email cant not be undefined");
    }

    if (payload.password === undefined) {
        throw new Error("Password cant not be undefined");
    }

    const existedUsers = await User.find({email: payload.email});

    if (existedUsers.length !== 0) {
        throw new Error("The same email exists");
    }

    if (!NAME_REGEX.test(payload.firstName)) {
        throw new Error("First name is not valid");
    }

    if (!NAME_REGEX.test(payload.lastName)) {
        throw new Error("Last name is not valid");
    }

    if (!EMAIL_REGEX.test(payload.email)) {
        throw new Error("Email must be a Northeastern email");
    }

    await User.create({
        email: payload.email,
        password: bcrypt.hashSync(payload.password, 10),
        firstName: payload.firstName,
        lastName: payload.lastName,
    });

    const result = await User.find({email: payload.email}).select("-password");

    return result;
};

const handleLogin = async (payload) => {
    if (payload.email === undefined) {
        throw new Error("Email cant not be undefined");
    }

    if (payload.password === undefined) {
        throw new Error("Password cant not be undefined");
    }

    const existedUsers = await User.find({email: payload.email});

    if (existedUsers.length === 0) {
        throw new Error("User not exists");
    } else if (!checkPassword(payload.password, existedUsers[0].password)) {
        throw new Error("Password is not correct");
    }

    const result = (await User.findOne({email: payload.email})).toObject();

    return {
        firstName: result.firstName,
        token: jwt.sign(result, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * process.env.JWT_EXPIRES_IN }),
    };
};

const handleFindUsers = async (payload) => {
    const result = await User.find(payload).select("-password");

    return result;
};

const handleGetUserInfo = async (req) => {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    return await User.findOne({_id: payload._id}).select("-password");
};

module.exports = {
    handleLogin,
    handleCreateUser,
    handleFindUsers,
    handleGetUserInfo,
};