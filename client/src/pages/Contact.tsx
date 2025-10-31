import { useState } from 'react';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card } from '@/components/ui/card';
import { Mail, Clock, MapPin } from 'lucide-react';

import saasImage from '@assets/generated_images/SaaS_landing_page_mockup_e1317cb4.png';
import ecommerceImage from '@assets/generated_images/E-commerce_landing_page_mockup_ed6f2dbd.png';
import restaurantImage from '@assets/generated_images/Restaurant_landing_page_mockup_4627081b.png';
import fitnessImage from '@assets/generated_images/Fitness_app_landing_mockup_b3a6bfd6.png';

export default function Contact() {
  const formSection = useScrollReveal(0.2);
  const infoSection = useScrollReveal(0.2);

  const templates = [
    { id: 'saas', name: 'SaaS Landing', image: saasImage },
    { id: 'ecommerce', name: 'E-Commerce Pro', image: ecommerceImage },
    { id: 'restaurant', name: 'Restaurant Deluxe', image: restaurantImage },
    { id: 'fitness', name: 'Fitness Studio', image: fitnessImage },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@alexjohnson.com',
      link: 'mailto:hello@alexjohnson.com',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below and I'll get back
              to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div
              ref={formSection.ref}
              className={`lg:col-span-2 transition-all duration-1000 ${
                formSection.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Request</h2>
                <ContactForm templates={templates} />
              </Card>
            </div>

            <div
              ref={infoSection.ref}
              className={`space-y-6 transition-all duration-1000 ${
                infoSection.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={info.title}
                  className={`p-6 transition-all duration-1000 ${
                    infoSection.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          data-testid={`link-${info.title.toLowerCase()}`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="p-6 bg-primary text-primary-foreground">
                <h3 className="font-semibold mb-2">Not sure where to start?</h3>
                <p className="text-sm opacity-90">
                  No worries! Just tell me about your project and goals, and I'll
                  help you find the best solution.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
