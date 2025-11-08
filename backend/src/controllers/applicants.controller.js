const applicantsModel = require("../models/applicants.Model");
const jobModel = require("../models/job.Model");
const profileModel = require("../models/profile.Model");



const applyJobController = async (req, res) => {

    try {

        const userId = req.user._id;

        const { jobId } = req.body;

        const profile = await profileModel.findOne({ user: userId });

        if (!profile) {
            return res.status(400).json({
                message: "Profile is not found"
            })
        }

        const isAlreadyApplied = await applicantsModel.findOne({ job: jobId, applicant: userId });

        if (isAlreadyApplied) {
            return res.status(400).json({
                message: "You already applied to this job"
            })
        }


        const newApplications = await applicantsModel.create({
            job: jobId,
            applicant: userId,
            profile: profile._id,
            resumeUrl: profile.resumeUrl
        });


        res.status(201).json({
            message: "Applied successfully",
            applicants: newApplications
        })


    } catch (error) {
        console.log("erro in apply for job", error);
        res.status(500).json({
            message: "server error while applying jobs"
        })
    }
};

// my applicants controller

const myApplicantsController = async (req, res) => {
    try {

        const employersId = req.user._id;

        const employersJobs = await jobModel.find({ postedBy: employersId });

        if (!employersJobs) {
            return res.status(404).json({
                message: "jobs not found"
            })
        }

        const jobIds = employersJobs.map((job) => job._id);


        const applicantsList = await applicantsModel
            .find({ job: { $in: jobIds } })
            .populate("job", "title")
            .populate("applicant", " email mobile")
            .populate("profile", " firstName lastName resumeUrl experience qualification");


        res.status(200).json({
            message: "Applicants fetched successfully",
            applicants: applicantsList
        });

    } catch (error) {
        console.log("error fetching the my applicants ", error);
        res.status(500).json({
            message: "error while fetching the my applicants"
        })
    }
}


module.exports = { applyJobController, myApplicantsController };