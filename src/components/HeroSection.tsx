import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  imageUrl,
  buttonText,
  buttonLink,
  className,
}) => {
  return (
    <section
      className={cn(
        'relative py-20 bg-background text-foreground',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {description}
            </p>
            <Button size="lg" asChild>
              <a href={buttonLink}>{buttonText}</a>
            </Button>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt="Zoo animal"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;