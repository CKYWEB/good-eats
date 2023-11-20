const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const createDbConnection = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
    });
};

const closeDbConnection = async () => {
    await mongoose.disconnect();
};

module.exports = {
    createDbConnection,
    closeDbConnection,
};