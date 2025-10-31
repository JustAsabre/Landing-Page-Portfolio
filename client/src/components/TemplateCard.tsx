import { useState } from 'react';
import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  isPopular?: boolean;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
}

export default function TemplateCard({
  id,
  name,
  image,
  category,
  isPopular,
  isSelected,
  onSelect,
}: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className={`group overflow-hidden hover-elevate transition-all duration-300 ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-template-${id}`}
    >
      <div className="relative aspect-video overflow-hidden">
        {isPopular && (
          <Badge
            className="absolute top-3 right-3 z-10 bg-chart-2 text-white border-0"
            data-testid="badge-popular"
          >
            Popular
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        {isSelected && (
          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3
            className="text-lg font-semibold mb-1"
            data-testid={`text-template-name-${id}`}
          >
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{category}</p>
        </div>

        <Button
          variant={isSelected ? 'default' : 'outline'}
          className="w-full"
          onClick={() => onSelect?.(id)}
          data-testid={`button-select-${id}`}
        >
          {isSelected ? 'Selected' : 'Select Template'}
        </Button>
      </div>
    </Card>
  );
}
