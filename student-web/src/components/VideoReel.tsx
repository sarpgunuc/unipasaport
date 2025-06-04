import { useState } from 'react';
import './VideoReel.css';

interface Video {
  id: string;
  url: string;
  liked: boolean;
  saved: boolean;
}

interface Props {
  videos: Video[];
  onLike: (id: string) => void;
  onSave: (id: string) => void;
}

export default function VideoReel({ videos, onLike, onSave }: Props) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(i => Math.min(i + 1, videos.length - 1));
  };

  const handlePrev = () => {
    setIndex(i => Math.max(i - 1, 0));
  };

  const video = videos[index];
  if (!video) return <p>No videos</p>;

  return (
    <div className="reel" onWheel={e => e.deltaY > 0 ? handleNext() : handlePrev()}>
      <video src={video.url} controls style={{ width: '100%', height: '80vh' }} />
      <div className="actions">
        <button onClick={() => onLike(video.id)}>Like</button>
        <button onClick={() => onSave(video.id)}>Save</button>
      </div>
    </div>
  );
}
