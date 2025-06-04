const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  videoUrl: { type: String, required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true }
});

module.exports = mongoose.model('Video', VideoSchema);
