import Button from '@/components/Button';

function HeroContent() {
  return (
    <div className="self-end mb-[7px] max-[1325px]:col-span-2 max-[1325px]:row-start-2 max-lg:max-w-[457px] max-lg:justify-self-center max-lg:mb-0">
      <h1 className="text-heading-1 text-neutral-dark text-center mb-[34px] max-lg:mb-6 max-lg:text-5xl">
        Group Chat for Everyone
      </h1>
      <p className="text-body text-neutral-medium text-center mb-8 max-lg:text-[16px]">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="flex justify-center gap-4">
        <Button variant="primary" primaryText="Download" secondaryText="v1.3" />
        <Button variant="secondary" primaryText="What is it?" />
      </div>
    </div>
  );
}

export default HeroContent;
