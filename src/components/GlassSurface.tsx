import React from 'react';

interface GlassSurfaceProps {
  children: React.ReactNode;
  variant?: 'svg' | 'fallback' | 'capsule';
  className?: string;
  style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  variant = 'fallback',
  className = '',
  style = {}
}) => {
  const baseClasses = 'glass-surface';
  const variantClass = variant === 'svg' ? 'glass-surface--svg' : 
                      variant === 'capsule' ? 'glass-surface--capsule' : 
                      'glass-surface--fallback';
  
  return (
    <div 
      className={`${baseClasses} ${variantClass} ${className}`}
      style={style}
    >
      <div className="glass-surface__filter" />
      <div className="glass-surface__content">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;