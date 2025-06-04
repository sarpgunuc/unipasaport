import React, { useEffect, useState } from 'react';
import { request } from '../api';

function CourseManager({ token }) {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState('');

  const load = async () => {
    const res = await request('/api/courses');
    if (res.ok) setCourses(await res.json());
  };

  useEffect(() => { load(); }, []);

  const addCourse = async (e) => {
    e.preventDefault();
    await request('/api/courses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    });
    setName('');
    load();
  };

  const deleteCourse = async (id) => {
    await request(`/api/courses/${id}`, { method: 'DELETE' });
    load();
  };

  return (
    <div>
      <h2>Courses</h2>
      <form onSubmit={addCourse}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Course name"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {courses.map((c) => (
          <li key={c.id}>
            {c.name}
            <button onClick={() => deleteCourse(c.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseManager;
