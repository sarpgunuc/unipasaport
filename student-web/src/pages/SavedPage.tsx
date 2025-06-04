import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoReel from '../components/VideoReel';

interface Video {
  id: string;
  url: string;
  liked: boolean;
  saved: boolean;
}

export default function SavedPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('/api/videos/saved', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => setVideos(res.data));
  }, [token]);

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
    <VideoReel videos={videos} onLike={handleLike} onSave={handleSave} />
  );
}
