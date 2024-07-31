import Image from 'next/image';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

function HeroSection() {
  return (
    <section
      aria-label="Hero Section"
      className="grid grid-cols-[auto_540px_auto] h-[358px] overflow-x-hidden max-[1325px]:grid-cols-[auto_auto] max-[1325px]:grid-rows-[303px_auto] max-[1325px]:h-auto max-[1325px]:gap-y-[72px] max-lg:gap-x-8 max-md:grid-cols-1 max-md:grid-rows-[auto_auto] max-md:gap-y-12 max-md:gap-x-0"
    >
      <figure className="hidden max-md:block w-screen overflow-hidden">
        <div className="relative w-[calc(100%+52px)] max-w-[820px] max-h-[303px] aspect-[820/303] -translate-x-[26px] max-sm:w-[calc(100%+39px)] max-sm:-translate-x-[20px]">
          <Image
            src="/images/tablet/image-hero.png"
            alt="Meet members"
            fill
            priority
            className="object-contain"
          />
        </div>
      </figure>
      <HeroImage
        src="/images/desktop/image-hero-left.png"
        alt="Meet members"
        className="self-start w-[393px] h-[303px] -ml-8 max-lg:-ml-[26px] max-md:hidden"
      />
      <HeroContent />
      <HeroImage
        src="/images/desktop/image-hero-right.png"
        alt="Meet members"
        className="justify-self-end self-end w-[393px] h-[303px] -mr-8 max-lg:-mr-[26px] max-md:hidden"
      />
    </section>
  );
}

export default HeroSection;
