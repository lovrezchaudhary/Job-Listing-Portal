const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['jobseeker', 'employer'],
        required: true,
    },
    profile: {
        resume: { type: String },
        contactInfo: { type: String },
    },
    company: {
        name: { type: String },
        website: { type: String },
    },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
