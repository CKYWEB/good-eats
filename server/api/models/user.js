const mongoose = require("mongoose");

const User = mongoose.model("User", new mongoose.Schema(
    {
        email: String,
        password: String,
        createdDate: { type: Date, default: Date.now() },
        firstName: String,
        lastName: String,
        role: { type: Number, default: 2 }, // 1: admin 2: user
        image: String,
        description: String,
        savedRecipes: { type: String, default: "" },
    },
));

module.exports = User;