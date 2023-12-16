import React from 'react';
import LikeCounter from './RenderProps';

const LikeImage = ({ handleLikeCount, likeCounter, label }) => (
  <div>
    <button onClick={handleLikeCount}>Like {label} {likeCounter}</button>
  </div>
);

export default LikeCounter(LikeImage, 'Image');