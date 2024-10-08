// Create web server
// Create a new comment
// Get all comments
// Get a single comment
// Update a single comment
// Delete a single comment
// Delete all comments

// Dependencies
const express = require('express');
const router = express.Router();
const comments = require('../models/comments');

// Create a new comment
router.post('/comments', (req, res) => {
    const { name, email, comment } = req.body;
    comments.create(name, email, comment, (result) => {
        res.status(201).json(result);
    });
});

// Get all comments
router.get('/comments', (req, res) => {
    comments.getAll((result) => {
        res.status(200).json(result);
    });
});

// Get a single comment
router.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.getOne(id, (result) => {
        res.status(200).json(result);
    });
});

// Update a single comment
router.put('/comments/:id', (req, res) => {
    const id = req.params.id;
    const { name, email, comment } = req.body;
    comments.updateOne(id, name, email, comment, (result) => {
        res.status(200).json(result);
    });
});

// Delete a single comment
router.delete('/comments/:id', (req, res) => {
    const id = req.params.id;
    comments.deleteOne(id, (result) => {
        res.status(200).json(result);
    });
});

// Delete all comments
router.delete('/comments', (req, res) => {
    comments.deleteAll((result) => {
        res.status(200).json(result);
    });
});

module.exports = router;