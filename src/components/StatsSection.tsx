import React from 'react';
import { CountUp } from '@/components/ui/count-up';
import { mockApiResponse } from '@/lib/valuesConfig';
import { useIntersectionObserver } from '@/hooks/use-parallax';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  index?: number;
  isVisible?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "+", index = 0, isVisible = false }) => {
  return (
    <div 
      className={`text-center transition-all duration-700 ${
        isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 0.2}s`,
        animationDelay: `${index * 0.2}s`
      }}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        <CountUp number={value} inView={isVisible} />
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    },
    { threshold: 0.1 }
  );

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem 
            value={100} 
            label="Client Satisfaction" 
            suffix="%" 
            index={0}
            isVisible={isVisible}
          />
          <StatItem 
            value={mockApiResponse.projectsDelivered} 
            label="Projects Completed" 
            index={1}
            isVisible={isVisible}
          />
          <StatItem 
            value={mockApiResponse.happyClients} 
            label="Happy Clients" 
            index={2}
            isVisible={isVisible}
          />
          <StatItem 
            value={24} 
            label="Support Available" 
            suffix="/7" 
            index={3}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
};
