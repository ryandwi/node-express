const express = require('express');
const router = express.Router();
const {
    blogIndex
} = require('../controllers/blogController')

router
    .route('/')
    .get(blogIndex)

module.exports = router;