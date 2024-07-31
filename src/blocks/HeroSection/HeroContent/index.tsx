import Button from '@/components/Button';

function HeroContent() {
  return (
    <header className="self-end mb-[7px] max-[1325px]:col-span-2 max-[1325px]:row-start-2 max-lg:max-w-[457px] max-lg:justify-self-center max-lg:mb-0 max-sm:max-w-[327px]">
      <h1 className="text-heading-1 text-neutral-dark text-center text-balance mb-[34px] max-lg:mb-6 max-lg:text-5xl max-sm:text-[40px] max-sm:leading-[1.1]">
        Group Chat for Everyone
      </h1>
      <p className="text-body text-neutral-medium text-center mb-8 max-lg:text-[16px]">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <nav
        aria-label="Download options"
        className="flex justify-center gap-4 max-sm:flex-col max-sm:items-center"
      >
        <Button variant="primary" primaryText="Download" secondaryText="v1.3" />
        <Button variant="secondary" primaryText="What is it?" />
      </nav>
    </header>
  );
}

export default HeroContent;
