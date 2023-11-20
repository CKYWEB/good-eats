const mongoose = require("mongoose");
const {MONGODB_URI} = require("./config");

const createDbConnection = async () => {
    await mongoose.connect(MONGODB_URI, {
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