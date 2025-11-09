import { useScrollReveal } from '@/hooks/useScrollReveal';
import CountUp from '@/components/ui/count-up';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  const { ref, isVisible } = useScrollReveal(0.3);

  const parseStatValue = (value: string) => {
    // Extract number and suffix (like +, %)
    const match = value.match(/(\d+)([+%]?)/);
    if (match) {
      return {
        number: parseInt(match[1]),
        suffix: match[2] || ''
      };
    }
    return { number: 0, suffix: '' };
  };

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {stats.map((stat, index) => {
        const { number, suffix } = parseStatValue(stat.value);
        
        return (
          <div
            key={stat.label}
            className={`text-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            data-testid={`stat-${index}`}
          >
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
              <CountUp
                from={0}
                to={number}
                duration={2}
                delay={index * 0.1}
                className="text-4xl sm:text-5xl font-bold text-primary"
              />
              {suffix}
            </div>
            <div className="text-sm sm:text-base text-muted-foreground">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
