import { useState } from 'react';
import { useLocation } from 'wouter';
import Navigation from '@/components/Navigation';
import PortfolioCard from '@/components/PortfolioCard';
import TemplateCard from '@/components/TemplateCard';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import DotPattern from '@/components/ui/dot-pattern';

import ecommerceImage from '@assets/generated_images/E-commerce_landing_page_mockup_ed6f2dbd.png';
import saasImage from '@assets/generated_images/SaaS_landing_page_mockup_e1317cb4.png';
import restaurantImage from '@assets/generated_images/Restaurant_landing_page_mockup_4627081b.png';
import fitnessImage from '@assets/generated_images/Fitness_app_landing_mockup_b3a6bfd6.png';
import realEstateImage from '@assets/generated_images/Real_estate_landing_mockup_054b292a.png';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [, setLocation] = useLocation();
  const portfolioSection = useScrollReveal(0.2);
  const templatesSection = useScrollReveal(0.2);

  const portfolioItems = [
    {
      title: 'Fashion E-Commerce',
      category: 'E-Commerce',
      image: ecommerceImage,
      year: '2024',
    },
    {
      title: 'SaaS Platform',
      category: 'Software',
      image: saasImage,
      year: '2024',
    },
    {
      title: 'Webhook Relay Service',
      category: 'Software',
      image: saasImage,
      year: '2024',
    },
    {
      title: 'Fine Dining Restaurant',
      category: 'Restaurant',
      image: restaurantImage,
      year: '2023',
    },
    {
      title: 'Fitness App',
      category: 'Health & Wellness',
      image: fitnessImage,
      year: '2024',
    },
    {
      title: 'Luxury Real Estate',
      category: 'Real Estate',
      image: realEstateImage,
      year: '2023',
    },
    {
      title: 'Tech Startup',
      category: 'Software',
      image: saasImage,
      year: '2023',
    },
  ];

  const templates = [
    {
      id: 'saas-template',
      name: 'SaaS Landing',
      category: 'Software',
      image: saasImage,
      isPopular: true,
    },
    {
      id: 'ecommerce-template',
      name: 'E-Commerce Pro',
      category: 'E-Commerce',
      image: ecommerceImage,
      isPopular: true,
    },
    {
      id: 'restaurant-template',
      name: 'Restaurant Deluxe',
      category: 'Restaurant',
      image: restaurantImage,
    },
    {
      id: 'fitness-template',
      name: 'Fitness Studio',
      category: 'Health & Wellness',
      image: fitnessImage,
    },
  ];

  const handleTemplateSelect = (templateId: string) => {
    setLocation(`/contact?template=${templateId}`);
  };

  const filters = [
    'All',
    'E-Commerce',
    'Software',
    'Restaurant',
    'Health & Wellness',
    'Real Estate',
  ];

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <div className="min-h-screen relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className="fill-neutral-400/10"
      />
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-display font-bold tracking-tight mb-4">
              Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my work and discover landing pages that drive results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={
                  activeFilter === filter.toLowerCase() ? 'default' : 'outline'
                }
                size="sm"
                onClick={() => setActiveFilter(filter.toLowerCase())}
                data-testid={`button-filter-${filter.toLowerCase()}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={portfolioSection.ref}
        className="pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className={`transition-all duration-700 ${
                  portfolioSection.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <PortfolioCard {...item} />
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <section
        ref={templatesSection.ref}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              templatesSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              Pre-Made Templates
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use landing page templates that can be customized to match
              your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {templates.map((template, index) => (
              <div
                key={template.id}
                className={`transition-all duration-1000 ${
                  templatesSection.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <TemplateCard
                  {...template}
                  onSelect={handleTemplateSelect}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
