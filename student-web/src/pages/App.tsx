import { Routes, Route, Navigate, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import FeedPage from './FeedPage';
import SavedPage from './SavedPage';

export default function App() {
  const token = localStorage.getItem('token');
  return (
    <>
      <nav>
        {token && (
          <>
            <Link to="/feed">Feed</Link> | <Link to="/saved">Saved</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/feed" /> : <LoginPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/saved" element={<SavedPage />} />
      </Routes>
    </>
  );
}
