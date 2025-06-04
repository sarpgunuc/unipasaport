import React, { useEffect, useState } from 'react';
import { request } from '../api';

function TopicManager({ token }) {
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState('');

  const load = async () => {
    const res = await request('/api/topics');
    if (res.ok) setTopics(await res.json());
  };

  useEffect(() => { load(); }, []);

  const addTopic = async (e) => {
    e.preventDefault();
    await request('/api/topics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    setTitle('');
    load();
  };

  const deleteTopic = async (id) => {
    await request(`/api/topics/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div>
      <h2>Topics</h2>
      <form onSubmit={addTopic}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Topic title"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {topics.map((t) => (
          <li key={t.id}>
            {t.title}
            <button onClick={() => deleteTopic(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicManager;
