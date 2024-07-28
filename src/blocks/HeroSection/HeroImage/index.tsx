import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  className?: string;
}

function HeroImage({ src, alt, className }: HeroImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={393}
      height={303}
      priority
      className={`w-[393px] h-[303px] ${className}`}
    />
  );
}

export default HeroImage;
