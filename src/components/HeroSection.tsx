import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  zooName: string;
  welcomeMessage: string;
  imageUrl: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  zooName,
  welcomeMessage,
  imageUrl,
}) => {
  return (
    <div className="relative bg-background text-foreground">
      <div className="absolute inset-0">
        <img
          src={imageUrl}
          alt={`Welcome to ${zooName}`}
          className="h-full w-full object-cover opacity-50 dark:opacity-30"
        />
      </div>
      <div className="relative px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            Welcome to {zooName}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {welcomeMessage}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button variant="primary" size="lg">
              Explore the Animals
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;