import ContactForm from '../ContactForm';

export default function ContactFormExample() {
  const mockTemplates = [
    { id: 'saas', name: 'SaaS Landing' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'restaurant', name: 'Restaurant' },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <ContactForm templates={mockTemplates} />
    </div>
  );
}
