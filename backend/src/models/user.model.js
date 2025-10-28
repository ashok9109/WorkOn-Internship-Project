const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        minlenght: 10,
        maxlenght: 10
    },
    email: {
        type: String,
        required: true,
        lowercase:true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlenght: 8
    },
    role: {
        type: String,
        required: true,
        enum: ["Job Seeker", "Employer"]
    }

}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;