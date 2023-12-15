import React from 'react';

const Video = ({ url }) => {
  return (
    <video controls controlsList="nodownload" width="80%">
      <source src={url} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
