import { HeroSection } from './sections/HeroSection';
import { MissedOpportunitySection } from './sections/MissedOpportunitySection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ProductDemoSection } from './sections/ProductDemoSection';
import { ServiceCapabilitiesSection } from './sections/ServiceCapabilitiesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FAQSection } from './sections/FAQSection';
import { CTASection } from './sections/CTASection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <main className="w-full bg-[#020204] text-white">
      <HeroSection />
      <MissedOpportunitySection />
      <HowItWorksSection />
      <ProductDemoSection />
      <ServiceCapabilitiesSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}

export default App;
