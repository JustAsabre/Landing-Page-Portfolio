import StatsSection from '../StatsSection';

export default function StatsSectionExample() {
  const mockStats = [
    { value: '5+', label: 'Years Active' },
    { value: '150+', label: 'Projects' },
    { value: '98%', label: 'Satisfaction' },
    { value: '50+', label: 'Happy Clients' },
  ];

  return (
    <div className="p-8">
      <StatsSection stats={mockStats} />
    </div>
  );
}
