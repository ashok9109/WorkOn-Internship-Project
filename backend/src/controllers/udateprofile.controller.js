const profileModel = require("../models/profile.Model");
const { findByIdAndUpdate } = require("../models/user.model");
const imageKitSendFiles = require("../services/storage.services");


const updateProfileController = async (req, res) => {

    try {
        const userId = req.user._id;

        const profile = await profileModel.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({
                message: "profile is not found"
            });
        }

        const updateData = { ...req.body };

        // uploading updated photo in imageKit
        if (req.files?.photo) {
            const photo = req.files.photo[0].buffer;
            const fileName = req.files.photo[0].originalname;
            const uploadedPhoto = await imageKitSendFiles(photo, fileName);

            updateData.photoUrl = uploadedPhoto.url;

        }

        // uploading updated cover Image in imageKit
        if (req.files?.coverImage) {
            const coverImage = req.files.coverImage[0].buffer;
            const fileName = req.files.coverImage[0].originalname;
            const uploadCoverImage = await imageKitSendFiles(coverImage, fileName);

            updateData.coverImageUrl = uploadCoverImage.url;
        }

        // uploading updated resume in imageKit
        if (req.files?.resume) {
            const resume = req.files.resume[0].buffer;
            const fileName = req.files.resume[0].originalname;
            const uploadResume = await imageKitSendFiles(resume, fileName);

            updateData.resumeUrl = uploadResume.url;
        }

        const updatedProfile = await profileModel.findOneAndUpdate(
            { user: userId },
            { $set: updateData },
            { new: true }
        );

        return res.status(200).json({
            message: "profile updated successfully",
            profile: updatedProfile
        })


    } catch (error) {
        console.log("error in update profile");
        res.status(500).json({
            message: "server error"
        })
    }

};

module.exports = updateProfileController;