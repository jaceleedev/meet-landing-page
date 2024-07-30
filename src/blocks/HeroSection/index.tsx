import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

function HeroSection() {
  return (
    <section className="grid grid-cols-[auto_540px_auto] h-[358px] overflow-x-hidden max-[1325px]:grid-cols-[auto_auto] max-[1325px]:grid-rows-[303px_auto] max-[1325px]:h-auto max-[1325px]:gap-y-[72px] max-lg:gap-x-8">
      <HeroImage
        src="/images/desktop/image-hero-left.png"
        alt="Meet members"
        className="self-start -ml-8 max-lg:-ml-[26px]"
      />
      <HeroContent />
      <HeroImage
        src="/images/desktop/image-hero-right.png"
        alt="Meet members"
        className="justify-self-end self-end -mr-8 max-lg:-mr-[26px]"
      />
    </section>
  );
}

export default HeroSection;
