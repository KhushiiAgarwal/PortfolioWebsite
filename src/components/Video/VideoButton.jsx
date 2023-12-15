import React from 'react';

const VideoButton = ({ url, onClick }) => {
  return (
    <button onClick={() => onClick(url)}>Play Video</button>
  );
};

export default VideoButton;
