import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { ArrowLeft, ArrowRight, Cat, Dog, Bird, Fish } from 'lucide-react';
import Image from 'next/image';

// Define a type for an animal
interface Animal {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  category: 'cat' | 'dog' | 'bird' | 'fish' | 'other';
}

// Sample data for animals (replace with your actual data)
const sampleAnimals: Animal[] = [
  {
    id: 1,
    name: 'Leo',
    description: 'A playful lion cub.',
    imageUrl: '/lion.jpg', // Replace with actual image URL
    category: 'cat',
  },
  {
    id: 2,
    name: 'Buddy',
    description: 'A friendly golden retriever.',
    imageUrl: '/dog.jpg', // Replace with actual image URL
    category: 'dog',
  },
  {
    id: 3,
    name: 'Tweety',
    description: 'A cheerful canary.',
    imageUrl: '/bird.jpg', // Replace with actual image URL
    category: 'bird',
  },
  {
    id: 4,
    name: 'Nemo',
    description: 'A curious clownfish.',
    imageUrl: '/fish.jpg', // Replace with actual image URL
    category: 'fish',
  },
  {
    id: 5,
    name: 'Shadow',
    description: 'A stealthy panther.',
    imageUrl: '/panther.jpg', // Replace with actual image URL
    category: 'cat',
  },
  {
    id: 6,
    name: 'Bella',
    description: 'A gentle labrador.',
    imageUrl: '/labrador.jpg', // Replace with actual image URL
    category: 'dog',
  },
  {
    id: 7,
    name: 'Rio',
    description: 'A colourful macaw.',
    imageUrl: '/macaw.jpg', // Replace with actual image URL
    category: 'bird',
  },
  {
    id: 8,
    name: 'Goldie',
    description: 'A graceful goldfish.',
    imageUrl: '/goldfish.jpg', // Replace with actual image URL
    category: 'fish',
  },
];

interface AnimalListProps {
  animals?: Animal[]; // Optional prop to allow external data
}

const AnimalList: React.FC<AnimalListProps> = ({ animals: propsAnimals }) => {
  const animals = propsAnimals || sampleAnimals; // Use prop data or default to sample
  const [currentPage, setCurrentPage] = React.useState(1);
  const animalsPerPage = 4; // Number of animals to display per page

  const totalPages = Math.ceil(animals.length / animalsPerPage);

  const startIndex = (currentPage - 1) * animalsPerPage;
  const endIndex = startIndex + animalsPerPage;
  const currentAnimals = animals.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getCategoryIcon = (category: Animal['category']) => {
    switch (category) {
      case 'cat':
        return <Cat className="h-4 w-4" />;
      case 'dog':
        return <Dog className="h-4 w-4" />;
      case 'bird':
        return <Bird className="h-4 w-4" />;
      case 'fish':
        return <Fish className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <section className="container py-8">
      <h2 className="text-2xl font-semibold mb-4">Animal List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentAnimals.map((animal) => (
          <Card key={animal.id} className="bg-card text-card-foreground shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{animal.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <div className="relative w-full h-40 mb-2">
                <Image
                  src={animal.imageUrl}
                  alt={animal.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <CardDescription className="text-sm text-muted-foreground">
                {animal.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                  {getCategoryIcon(animal.category)}
                  <span className="text-xs text-muted-foreground capitalize">{animal.category}</span>
                </div>
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <span className="sr-only">Go to previous page</span>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                   <Button
                    variant={currentPage === page ? 'default' : 'outline'}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                </PaginationItem>
              ))}
              <PaginationItem>
                <Button
                  variant="outline"
                  className="h-8 w-8 p-0"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <span className="sr-only">Go to next page</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </section>
  );
};

export default AnimalList;