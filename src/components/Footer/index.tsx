import Image from 'next/image';
import NumberedCircle from '../NumberedCircle';
import Button from '../Button';

function Footer() {
  return (
    <footer className="relative h-[308px] pt-[116px] mt-[calc(140px-28px)]">
      <div className="absolute inset-0 z-0 bg-primary-teal">
        <Image
          src="/images/desktop/image-footer.jpg"
          alt="Footer background"
          fill
          priority
          className="object-cover opacity-[0.1045]"
        />
      </div>
      <div className="absolute left-1/2 top-[calc(-140px+28px)] transform -translate-x-1/2">
        <NumberedCircle number="02" />
      </div>
      <div className="relative z-10 grid grid-cols-[auto_auto_auto] max-w-[1110px] mx-auto">
        <h2 className="text-heading-2 text-neutral-light mr-[125px]">
          Experience more together
        </h2>
        <p className="text-body text-neutral-light mr-[92px]">
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