import React from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeInSection.css';

const FadeInSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  return (
    <div ref={ref} className={`fade-in-section ${inView ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
