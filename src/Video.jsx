import React from 'react';

const src =
  "https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/Basic%20Reweighting%20_%20Stanford%20CS224U%20Natural%20Language%20Understanding%20_%20Spring%202021.mp4?alt=media&token=5c2ce18a-235e-4211-a925-894d51908c06";

const Video = () => {
  return (
    <video controls controlsList="nodownload" width="80%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default Video;
