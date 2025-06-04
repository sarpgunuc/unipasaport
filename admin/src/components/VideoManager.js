import React, { useEffect, useState } from 'react';
import { request } from '../api';

function VideoManager({ token }) {
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const load = async () => {
    const res = await request('/api/videos');
    if (res.ok) setVideos(await res.json());
  };

  useEffect(() => { load(); }, []);

  const addVideo = async (e) => {
    e.preventDefault();
    await request('/api/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, url })
    });
    setTitle('');
    setUrl('');
    load();
  };

  const deleteVideo = async (id) => {
    await request(`/api/videos/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div>
      <h2>Videos</h2>
      <form onSubmit={addVideo}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Video title"
        />
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Video URL"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {videos.map((v) => (
          <li key={v.id}>
            {v.title} - {v.url}
            <button onClick={() => deleteVideo(v.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoManager;
