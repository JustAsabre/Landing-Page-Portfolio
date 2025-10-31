import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
          data-testid={`stat-${index}`}
        >
          <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
            {stat.value}
          </div>
          <div className="text-sm sm:text-base text-muted-foreground">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
