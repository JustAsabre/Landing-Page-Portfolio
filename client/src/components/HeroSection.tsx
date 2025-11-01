import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '@assets/generated_images/Cinematic_hero_workspace_background_46c32e96.png';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  
  // Parallax effect - background moves slower than scroll
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const words = ['Crafting', 'Digital', 'Experiences'];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          y: backgroundY,
          scale: scale,
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"
          style={{ opacity }}
        />
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            {words.map((word, index) => (
              <motion.h1
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.43, 0.13, 0.23, 0.96]
                }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white dark:text-white"
                data-testid={`text-hero-word-${index}`}
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 dark:text-white/90 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subtitle"
          >
            Award-winning landing pages that convert visitors into customers
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
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
                className="px-8 py-6 text-base sm:text-lg font-semibold bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20"
                data-testid="button-hero-contact"
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1, ease: 'easeOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity }}
      >
        <motion.div 
          className="flex flex-col items-center gap-2 text-white/70 dark:text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" data-testid="icon-scroll-indicator" />
        </motion.div>
      </motion.div>
    </section>
  );
}
