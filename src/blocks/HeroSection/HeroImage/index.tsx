import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <div className={`relative w-[393px] h-[303px] ${className}`}>
      <Image src={src} alt={alt} fill priority />
    </div>
  );
}

export default HeroImage;
