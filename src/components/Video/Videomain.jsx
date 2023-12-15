import React, { useState } from 'react';
import Video from './Video';
import VideoButton from './VideoButton';

const App = () => {
  const [videoUrl, setVideoUrl] = useState(null);

  const handleVideoClick = (url) => {
    setVideoUrl(url);
  };

  return (
    <div>
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/Basic%20Reweighting%20_%20Stanford%20CS224U%20Natural%20Language%20Understanding%20_%20Spring%202021.mp4?alt=media&token=5c2ce18a-235e-4211-a925-894d51908c06" onClick={handleVideoClick} />
      <br></br>
      <br></br>
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/Introduction%20to%20Machine%20Learning%20and%20AI%20-%20Stanford%20University%20_%20Andrew%20Ng.mp4?alt=media&token=f1f3b3c7-8ec3-4586-86f6-4316c205f24f" onClick={handleVideoClick} />
      <VideoButton url="https://firebasestorage.googleapis.com/v0/b/website-f2fa5.appspot.com/o/Artificial%20Intelligence%20Interview%20Questions%20And%20Answers%20_%20Top%20AI%20Interview%20Tips%20_%20Simplilearn.mp4?alt=media&token=125924e3-ecec-447c-8a20-49a5eb7c86f9" onClick={handleVideoClick} />
      {videoUrl && <Video url={videoUrl} />}
    </div>
  );
};

export default App;
