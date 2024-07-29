import HeroSection from '@/blocks/HeroSection';
import NumberedCircle from '@/components/NumberedCircle';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="flex justify-center mt-[110px] mb-16">
        <NumberedCircle number="01" />
      </div>
    </main>
  );
}
