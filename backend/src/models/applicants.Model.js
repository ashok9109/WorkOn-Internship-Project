const mongoose = require("mongoose");

const applicantsSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job-posts",
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  resumeUrl: {
    type: String,
    required: true,
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  }
}, { timestamps: true });


const applicantsModel = mongoose.model("Applicants", applicantsSchema);

module.exports = applicantsModel;
