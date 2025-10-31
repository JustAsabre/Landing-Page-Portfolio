import PortfolioCard from '../PortfolioCard';
import ecommerceImage from '@assets/generated_images/E-commerce_landing_page_mockup_ed6f2dbd.png';

export default function PortfolioCardExample() {
  return (
    <div className="p-8 max-w-md">
      <PortfolioCard
        title="Fashion E-Commerce"
        category="E-Commerce"
        image={ecommerceImage}
        year="2024"
        onClick={() => console.log('Portfolio card clicked')}
      />
    </div>
  );
}
