import HeroSection from '@/components/HeroSection';
import PortfolioCard from '@/components/PortfolioCard';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';

import ecommerceImage from '@assets/generated_images/E-commerce_landing_page_mockup_ed6f2dbd.png';
import saasImage from '@assets/generated_images/SaaS_landing_page_mockup_e1317cb4.png';
import restaurantImage from '@assets/generated_images/Restaurant_landing_page_mockup_4627081b.png';

export default function Home() {
  const featuredSection = useScrollReveal(0.2);
  const servicesSection = useScrollReveal(0.2);
  const ctaSection = useScrollReveal(0.2);

  const stats = [
    { value: '5+', label: 'Years Active' },
    { value: '150+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Happy Clients' },
  ];

  const services = [
    {
      icon: Sparkles,
      title: 'Custom Design',
      description: 'Unique landing pages tailored to your brand and objectives',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround without compromising on quality',
    },
    {
      icon: Target,
      title: 'High Conversion',
      description: 'Optimized for maximum visitor-to-customer conversion',
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StatsSection stats={stats} />
        </div>
      </section>

      <section
        ref={featuredSection.ref}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              featuredSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of recent projects that showcase my approach to design
              and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
                title: 'Fine Dining',
                category: 'Restaurant',
                image: restaurantImage,
                year: '2023',
              },
            ].map((project, index) => (
              <div
                key={project.title}
                className={`transition-all duration-1000 ${
                  featuredSection.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <PortfolioCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <Button variant="outline" size="lg" data-testid="button-view-all">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        ref={servicesSection.ref}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              servicesSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`p-8 rounded-lg border border-border bg-card hover-elevate transition-all duration-1000 ${
                  servicesSection.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={ctaSection.ref}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-card"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              ctaSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let's Create Something Extraordinary
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to elevate your online presence? Get in touch and let's
              discuss your project.
            </p>
            <Link href="/contact">
              <Button size="lg" className="px-8" data-testid="button-cta">
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
