const mongoose = require("mongoose");

const NewsletterSubscribers = mongoose.model("NewsletterSubscribers", new mongoose.Schema(
    {
        email: String
    },
));

module.exports = NewsletterSubscribers;