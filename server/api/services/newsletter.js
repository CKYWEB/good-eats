const NewsletterSubscribers = require("../models/newsletter");
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSaveSubscriber = async (payload) => {
    if (payload.email === undefined) {
        throw new Error("Email cannot not be undefined");
    }

    const existedSubscriber = await NewsletterSubscribers.find({ email: payload.email });

    if (existedSubscriber.length !== 0) {
        throw new Error("The same email exists");
    }

    if (!EMAIL_REGEX.test(payload.email)) {
        throw new Error("Please enter a valid Email");
    }

    await NewsletterSubscribers.create({
        email: payload.email
    });

    return NewsletterSubscribers.findOne({email: payload.email});
};

module.exports = {
    handleSaveSubscriber
};