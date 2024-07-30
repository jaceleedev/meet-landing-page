import Image from 'next/image';
import NumberedCircle from '../NumberedCircle';
import Button from '../Button';

function Footer() {
  return (
    <footer className="relative h-[308px] pt-[116px] mt-[calc(140px-28px)] max-lg:h-[428px] max-lg:pt-[92px]">
      <div className="absolute inset-0 z-0 bg-primary-teal">
        <Image
          src="/images/desktop/image-footer.jpg"
          alt="Footer background"
          fill
          priority
          className="object-cover opacity-[0.1045] max-lg:hidden"
        />
        <Image
          src="/images/tablet/image-footer.jpg"
          alt="Footer background"
          fill
          priority
          className="object-cover opacity-[0.1045] hidden max-lg:block max-sm:hidden"
        />
        <Image
          src="/images/mobile/image-footer.jpg"
          alt="Footer background"
          fill
          priority
          className="object-cover opacity-[0.1045] hidden max-sm:block"
        />
      </div>
      <div className="absolute left-1/2 top-[calc(-140px+28px)] transform -translate-x-1/2">
        <NumberedCircle number="02" />
      </div>
      <div className="relative z-10 grid grid-cols-[auto_auto_auto] max-w-[1110px] mx-auto max-lg:grid-cols-1 max-lg:grid-rows-[auto_auto_auto] max-lg:max-w-[573px] max-lg:justify-items-center max-sm:max-w-[327px]">
        <h2 className="text-heading-2 text-neutral-light mr-[125px] max-lg:mr-0 max-lg:mb-8 max-lg:max-w-[457px] max-lg:text-center max-sm:text-[32px] max-sm:leading-[36px] max-sm:mb-6">
          Experience more together
        </h2>
        <p className="text-body text-neutral-light mr-[92px] max-lg:mr-0 max-lg:mb-10 max-lg:text-center max-sm:mb-8">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <div className="self-center">
          <Button
            variant="secondary"
            primaryText="Download"
            secondaryText="v1.3"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
