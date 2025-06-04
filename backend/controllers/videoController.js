const Video = require('../models/Video');

exports.createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getVideos = async (req, res) => {
  const filter = {};
  if (req.query.course) filter.course = req.query.course;
  if (req.query.topic) filter.topic = req.query.topic;
  try {
    const videos = await Video.find(filter).populate('course').populate('topic');
    res.json(videos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
