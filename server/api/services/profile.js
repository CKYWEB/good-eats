const { handleUpdateProfile } = require("../services/profile");

const updateProfile = async (req, res) => {
  try {
    const result = await handleUpdateProfile(req);

    res.status(200).json({
      msg: "Profile updated successfully.",
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
  updateProfile,
};
