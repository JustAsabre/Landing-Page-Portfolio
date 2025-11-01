import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  year?: string;
  onClick?: () => void;
}

export default function PortfolioCard({
  title,
  category,
  image,
  year,
  onClick,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group overflow-hidden cursor-pointer hover-elevate active-elevate-2 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      data-testid={`card-portfolio-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-4 right-4">
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3
            className="text-xl font-semibold tracking-tight"
            data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {title}
          </h3>
          {year && (
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {year}
            </span>
          )}
        </div>
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
      </div>
    </Card>
  );
}
