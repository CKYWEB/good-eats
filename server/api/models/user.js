const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema(
    {
        email: String,
        password: String,
        createdDate: { type: Date, default: Date.now()},
        firstName: String,
        lastName: String,
    },
));

module.exports = User;