import React from 'react';
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoCard = ({ video }) => (
  <View style={styles.container}>
    <Video
      source={{ uri: video.url }}
      style={StyleSheet.absoluteFill}
      resizeMode="cover"
      repeat
    />
  </View>
);

const styles = StyleSheet.create({
  container: { height: '100%', width: '100%' },
});

export default VideoCard;
