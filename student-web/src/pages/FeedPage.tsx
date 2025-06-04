import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoReel from '../components/VideoReel';

interface Video {
  id: string;
  url: string;
  liked: boolean;
  saved: boolean;
}

interface Course {
  id: string;
  name: string;
}

interface Topic {
  id: string;
  name: string;
}

export default function FeedPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [courseId, setCourseId] = useState('');
  const [topicId, setTopicId] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('/api/courses', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setCourses(res.data));
  }, [token]);

  useEffect(() => {
    if (!courseId) return;
    axios
      .get(`/api/courses/${courseId}/topics`, { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setTopics(res.data));
  }, [courseId, token]);

  useEffect(() => {
    const params: Record<string, string> = {};
    if (courseId) params.courseId = courseId;
    if (topicId) params.topicId = topicId;
    axios
      .get('/api/videos', { params, headers: { Authorization: `Bearer ${token}` } })
      .then(res => setVideos(res.data));
  }, [courseId, topicId, token]);

  const handleLike = async (id: string) => {
    await axios.post(
      `/api/videos/${id}/like`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  const handleSave = async (id: string) => {
    await axios.post(
      `/api/videos/${id}/save`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return (
    <div>
      <div>
        <select value={courseId} onChange={e => setCourseId(e.target.value)}>
          <option value="">All Courses</option>
          {courses.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <select value={topicId} onChange={e => setTopicId(e.target.value)}>
          <option value="">All Topics</option>
          {topics.map(t => (
            <option key={t.id} value={t.id}>{t.name}</option>
          ))}
        </select>
      </div>
      <VideoReel videos={videos} onLike={handleLike} onSave={handleSave} />
    </div>
  );
}
