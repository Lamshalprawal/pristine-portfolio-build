import React from 'react';
import { CountUp } from '@/components/ui/count-up';
import { mockApiResponse } from '@/lib/valuesConfig';

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, suffix = "+" }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        <CountUp number={value} />
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem 
            value={mockApiResponse.projectsDelivered} 
            label="Projects Delivered" 
          />
          <StatItem 
            value={mockApiResponse.happyClients} 
            label="Happy Clients" 
          />
          <StatItem 
            value={mockApiResponse.globalOffices} 
            label="Global Offices" 
            suffix="" 
          />
          <StatItem 
            value={mockApiResponse.yearsExperience} 
            label="Years Experience" 
          />
        </div>
      </div>
    </section>
  );
};
