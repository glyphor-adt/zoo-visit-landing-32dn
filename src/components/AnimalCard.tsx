import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Animal } from "@/types/animal"; // Assuming you have an Animal type defined
import Image from 'next/image';
import { Heart } from "lucide-react";

interface AnimalCardProps {
  animal: Animal;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animal }) => {
  return (
    <Card className="w-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{animal.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {animal.imageUrl && (
          <div className="relative h-48 w-full overflow-hidden rounded-md">
            <Image
              src={animal.imageUrl}
              alt={animal.name}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <CardDescription className="text-sm text-muted-foreground">
          {animal.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end items-center">
        <button className="flex items-center gap-1 text-sm text-primary hover:text-primary-foreground transition-colors duration-200">
          <Heart className="h-4 w-4" />
          Favorite
        </button>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;