const express = require('express');
const router = express.Router();
const { createTopic, getTopics } = require('../controllers/topicController');
const auth = require('../middleware/auth');

router.post('/', auth, createTopic);
router.get('/', getTopics);

module.exports = router;
