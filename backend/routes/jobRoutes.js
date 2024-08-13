const express = require('express');
const JobListing = require('../models/JobListing');
const auth = require('../middleware/auth');

const router = express.Router();

// Create a job listing
router.post('/', auth, async (req, res) => {
    const { title, description, qualifications, responsibilities, location, salaryRange, jobType } = req.body;

    try {
        const newJob = new JobListing({
            title,
            description,
            qualifications,
            responsibilities,
            location,
            salaryRange,
            jobType,
            company: req.user.id,
        });

        const job = await newJob.save();
        res.json(job);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get all job listings
router.get('/', async (req, res) => {
    try {
        const jobs = await JobListing.find().populate('company', ['name', 'email']);
        res.json(jobs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get job listings by employer
router.get('/employer', auth, async (req, res) => {
    try {
        const jobs = await JobListing.find({ company: req.user.id });
        res.json(jobs);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
