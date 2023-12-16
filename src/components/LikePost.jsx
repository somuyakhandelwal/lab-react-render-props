import React from 'react';
import LikeCounter from './RenderProps';

const LikePost = ({ handleLikeCount, likeCounter, label }) => (
  <div>
    <button onClick={handleLikeCount}>Like {label} {likeCounter}</button>
  </div>
);

export default LikeCounter(LikePost, 'Post');