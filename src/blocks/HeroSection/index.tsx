import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

function HeroSection() {
  return (
    <section className="grid grid-cols-[auto_540px_auto] h-[358px] overflow-x-hidden">
      <HeroImage
        src="/images/desktop/image-hero-left.png"
        alt="Meet members"
        className="justify-self-start -ml-8"
      />
      <HeroContent />
      <HeroImage
        src="/images/desktop/image-hero-right.png"
        alt="Meet members"
        className="justify-self-end self-end -mr-8"
      />
    </section>
  );
}

export default HeroSection;
