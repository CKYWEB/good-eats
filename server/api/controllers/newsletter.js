const { handleSaveSubscriber } = require("../services/newsletter");

const saveSubscriber = async (req, res) => {
    try {
        const result = await handleSaveSubscriber(req.body);

        res.status(200).json({
            msg: "Success. Your are now subscribed to our newsletter.",
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


module.exports = {
    saveSubscriber
};