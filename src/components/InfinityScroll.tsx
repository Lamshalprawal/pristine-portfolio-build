import React, { useRef, useEffect, useState } from 'react';

interface InfinityScrollProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const InfinityScroll: React.FC<InfinityScrollProps> = ({
  children,
  direction = 'left',
  speed = 1,
  pauseOnHover = true,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollContainer = container.querySelector('.scroll-content') as HTMLElement;
    if (!scrollContainer) return;

    let animationId: number;
    let currentPosition = 0;
    const scrollSpeed = direction === 'left' ? -speed : speed;

    const animate = () => {
      if (!isPaused) {
        currentPosition += scrollSpeed;
        scrollContainer.style.transform = `translateX(${currentPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [direction, speed, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex scroll-content">
        {/* First set of children */}
        <div className="flex-shrink-0">
          {children}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex-shrink-0">
          {children}
        </div>
        {/* Third set for extra smoothness */}
        <div className="flex-shrink-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InfinityScroll;
