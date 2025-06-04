import React, { useState } from 'react';
import Login from './components/Login';
import CourseManager from './components/CourseManager';
import TopicManager from './components/TopicManager';
import VideoManager from './components/VideoManager';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  if (!token) {
    return <Login onLogin={setToken} />;
  }

  return (
    <div className="App">
      <h1>Admin Panel</h1>
      <button onClick={() => {
        localStorage.removeItem('token');
        setToken(null);
      }}>Logout</button>
      <CourseManager token={token} />
      <TopicManager token={token} />
      <VideoManager token={token} />
    </div>
  );
}

export default App;
