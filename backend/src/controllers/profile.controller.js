const profileModel = require("../models/profile.Model");
const imageKitSendFiles = require("../services/storage.services");

const profileController = async (req, res) => {

    try {
        const { firstName, lastName, email, number, description, dob, age, gender, languages, qualification, experience } = req.body;

        let photoUrl = "";
        let coverImageUrl = "";
        let resumeUrl = "";

        // uploading photo to imagekit
        if (req.files["photo"]) {
            const photo = req.files.photo[0].buffer;
            const fileName = req.files.photo[0].originalname
            const uploadPhoto = await imageKitSendFiles(photo, fileName);

            photoUrl = uploadPhoto.url
        }

        // uploading coverImage to imageKit
        if (req.files["coverImage"]) {
            const coverImage = req.files.coverImage[0].buffer;
            const fileNmae = req.files.coverImage[0].originalname;
            const uploadCoverImage = await imageKitSendFiles(coverImage, fileNmae);

            coverImageUrl = uploadCoverImage.url;
        }

        // uploading resume to imageKit
        if (req.files["resume"]) {
            const resume = req.files.resume[0].buffer;
            const fileName = req.files.resume[0].originalname;
            const uploadResume = await imageKitSendFiles(resume, fileName);

            resumeUrl = uploadResume.url;
        }

        const profile = await profileModel.create({
            photoUrl,
            coverImageUrl,
            firstName,
            lastName,
            email,
            number,
            description,
            dob,
            age,
            gender,
            languages,
            qualification,
            experience,
            resumeUrl
        });

        res.status(201).json({
            message: "profile details are saved",
            profile
        })


    } catch (error) {
        console.log("error in profile controller", error)
    }

}

module.exports = profileController;