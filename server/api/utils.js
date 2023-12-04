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
    console.log("Mongoose disconnected on app termination");
    process.exit(0);
};

const generateMongoId = (raw) => {
    const { ObjectId } = mongoose.Types;
    return new ObjectId(raw);
};

module.exports = {
    createDbConnection,
    closeDbConnection,
    generateMongoId,
};