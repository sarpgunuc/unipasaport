const Topic = require('../models/Topic');

exports.createTopic = async (req, res) => {
  try {
    const topic = await Topic.create(req.body);
    res.status(201).json(topic);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getTopics = async (req, res) => {
  const filter = {};
  if (req.query.course) {
    filter.course = req.query.course;
  }
  try {
    const topics = await Topic.find(filter).populate('course');
    res.json(topics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
