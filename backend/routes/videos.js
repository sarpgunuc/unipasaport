const express = require('express');
const router = express.Router();
const { createVideo, getVideos } = require('../controllers/videoController');
const auth = require('../middleware/auth');

router.post('/', auth, createVideo);
router.get('/', getVideos);

module.exports = router;
