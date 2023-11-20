const bcrypt = require("bcrypt");
const User = require("../models/user");
const {createDbConnection, closeDbConnection} = require("../utils");
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

    await createDbConnection();

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

    await closeDbConnection();

    return result;
};

const handleLogin = async (payload) => {
    await createDbConnection();

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

    const result = await User.find({email: payload.email}).select("-password");

    await closeDbConnection();

    return result;
};

const handleFindUsers = async (payload) => {
    await createDbConnection();

    const result = await User.find(payload).select("-password");

    await closeDbConnection();

    return result;
};

module.exports = {
    handleLogin,
    handleCreateUser,
    handleFindUsers,
};