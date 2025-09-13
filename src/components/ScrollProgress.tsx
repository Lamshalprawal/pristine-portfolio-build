import React from 'react';
import { useScrollProgress } from '@/hooks/use-parallax';

const ScrollProgress: React.FC = () => {
  const progressRef = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-black/10 z-50">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-150 ease-out"
        style={{ width: '0%' }}
      />
    </div>
  );
};

export default ScrollProgress;
