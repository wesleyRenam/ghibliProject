import React from 'react';
import '../css/loading.css';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
    </div>
  );
};

export default Loading;