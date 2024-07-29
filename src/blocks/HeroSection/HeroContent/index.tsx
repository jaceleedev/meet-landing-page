import Button from '@/components/Button';

function HeroContent() {
  return (
    <div className="self-end mb-[7px]">
      <h1 className="text-heading-1 text-center mb-[34px]">
        Group Chat for Everyone
      </h1>
      <p className="text-body text-center mb-8">
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
