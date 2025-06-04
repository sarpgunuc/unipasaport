import React, { useEffect, useState } from 'react';
import { FlatList, Dimensions } from 'react-native';
import axios from 'axios';
import VideoCard from './VideoCard';

const { height } = Dimensions.get('window');

const VideoFeed = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('https://example.com/api/videos');
        setVideos(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <FlatList
      data={videos}
      renderItem={({ item }) => <VideoCard video={item} />}
      keyExtractor={(item) => item.id.toString()}
      pagingEnabled
      snapToInterval={height}
      decelerationRate="fast"
    />
  );
};

export default VideoFeed;
