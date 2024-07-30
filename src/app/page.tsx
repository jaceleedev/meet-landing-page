import ContentDivisionSection from '@/blocks/ContentDivisionSection';
import FeaturesSection from '@/blocks/FeaturesSection';
import HeroSection from '@/blocks/HeroSection';
import UseCasesSection from '@/blocks/UseCasesSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContentDivisionSection />
      <UseCasesSection />
      <FeaturesSection />
    </main>
  );
}
