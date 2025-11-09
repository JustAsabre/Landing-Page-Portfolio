import Navigation from '@/components/Navigation';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card } from '@/components/ui/card';
import SpotlightCard from '@/components/ui/spotlight-card';
import DotPattern from '@/components/ui/dot-pattern';
import { CheckCircle2 } from 'lucide-react';

import portraitImage from '@assets/generated_images/Freelancer_professional_portrait_efa901be.png';

export default function About() {
  const bioSection = useScrollReveal(0.2);
  const processSection = useScrollReveal(0.2);

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '150+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Happy Clients' },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'Understanding your business, goals, and target audience to create the perfect strategy',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Crafting beautiful, user-centered designs that align with your brand identity',
    },
    {
      number: '03',
      title: 'Development',
      description:
        'Building high-performance, responsive landing pages with clean code',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'Deploying your landing page and ensuring everything runs smoothly',
    },
  ];

  const skills = [
    'Landing Page Design',
    'Responsive Development',
    'UI/UX Design',
    'Conversion Optimization',
    'A/B Testing',
    'Performance Optimization',
    'Webhook Relay Services',
    'Real-time Data Integration',
  ];

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
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>
        </div>
      </section>

      <section
        ref={bioSection.ref}
        className="pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              bioSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                Hi, I'm Richard Asabre
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 5 years of experience in web design and development,
                  I specialize in creating landing pages that don't just look
                  beautiful—they drive real business results.
                </p>
                <p>
                  My approach combines stunning visual design with
                  conversion-focused strategy. Every element is carefully crafted
                  to guide visitors toward taking action, whether that's making a
                  purchase, signing up, or getting in touch.
                </p>
                <p>
                  I've had the privilege of working with startups, established
                  businesses, and everything in between. Each project is an
                  opportunity to push creative boundaries while delivering
                  measurable outcomes.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src={portraitImage}
                alt="Richard Asabre - Freelance Designer"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <StatsSection stats={stats} />
        </div>
      </section>

      <section
        ref={processSection.ref}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              processSection.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-4">
              My Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven workflow that ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <SpotlightCard
                key={step.number}
                className={`p-6 rounded-lg border border-border bg-card transition-all duration-1000 ${
                  processSection.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                spotlightColor="rgba(139, 92, 246, 0.15)"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl font-display font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
