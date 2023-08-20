import React, { useState } from 'react';

const SliderComponent = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    console.log('bye')

    setCurrentIndex((currentIndex + 1) % posts.length);
  };

  const previousSlide = () => {
    console.log('hi')
    setCurrentIndex((currentIndex - 1 + posts.length) % posts.length);
  };

  return (
    <div>
      <h1>Posts</h1>
      <div className="slider-container">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className={`slider-item ${index === currentIndex ? 'active' : ''}`}
          >
            {post.title.rendered}
          </div>
        ))}
      </div>
      <div className="slider-navigation">
        <span className="slider-prev" onClick={previousSlide}>
          Previous
        </span>
        <span className="slider-next" onClick={nextSlide}>
          Next
        </span>
      </div>
    </div>
  );
};

export default SliderComponent;
