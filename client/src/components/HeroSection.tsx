import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImage from '@assets/generated_images/Cinematic_hero_workspace_background_46c32e96.png';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const words = ['Crafting', 'Digital', 'Experiences'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            {words.map((word, index) => (
              <h1
                key={word}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white transition-all duration-1000 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                data-testid={`text-hero-word-${index}`}
              >
                {word}
              </h1>
            ))}
          </div>

          <p
            className={`text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            data-testid="text-hero-subtitle"
          >
            Award-winning landing pages that convert visitors into customers
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/portfolio">
              <Button
                size="lg"
                variant="default"
                className="px-8 py-6 text-base sm:text-lg font-semibold"
                data-testid="button-hero-portfolio"
              >
                View Portfolio
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base sm:text-lg font-semibold bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                data-testid="button-hero-contact"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" data-testid="icon-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
