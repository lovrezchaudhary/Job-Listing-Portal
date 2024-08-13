const mongoose = require('mongoose');

const jobListingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    qualifications: {
        type: String,
    },
    responsibilities: {
        type: String,
    },
    location: {
        type: String,
        required: true,
    },
    salaryRange: {
        type: String,
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'internship'],
        required: true,
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const JobListing = mongoose.model('JobListing', jobListingSchema);

module.exports = JobListing;
