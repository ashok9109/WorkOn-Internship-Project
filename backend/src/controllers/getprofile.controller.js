const profileModel = require("../models/profile.Model");


const getProfileController = async (req, res) => {
    try {
        const userId = req.user._id
        const profile = await profileModel.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({
                message: 'profile not found'
            })
        }

        res.status(200).json({
            message: "profile is fetched",
            profile
        })

    } catch (error) {
        console.log("error in the get profile", error)
    }

}

module.exports = getProfileController;