import { useState } from 'react';
import TemplateCard from '../TemplateCard';
import saasImage from '@assets/generated_images/SaaS_landing_page_mockup_e1317cb4.png';

export default function TemplateCardExample() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-8 max-w-md">
      <TemplateCard
        id="saas-template"
        name="SaaS Landing"
        image={saasImage}
        category="Software"
        isPopular={true}
        isSelected={selected === 'saas-template'}
        onSelect={(id) => {
          setSelected(id);
          console.log('Template selected:', id);
        }}
      />
    </div>
  );
}
