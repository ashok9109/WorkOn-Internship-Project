const jobModel = require("../models/job.Model");



const createJobController = async (req, res) => {

    try {
        const userId = req.user._id;

        const { title, company, location, salary, jobType, description, qualification, experience, skills, dueDate } = req.body;

        if (!title || !company || !location || !salary || !experience) {
            return res.status(400).json({
                message: "All field is required"
            });
        }

        const job = await jobModel.create({
            title,
            company,
            location,
            salary,
            jobType,
            description,
            qualification,
            experience,
            skills,
            dueDate,
            postedBy: userId
        });

        return res.status(200).json({
            message: "job post created successfully",
            job
        })

    } catch (error) {
        console.log("error in create job post ", error);
        res.status(500).json({
            message:"server error while creating post"
        })
    }
}

module.exports = { createJobController };