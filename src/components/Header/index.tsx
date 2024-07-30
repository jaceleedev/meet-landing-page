import Image from 'next/image';

function Header() {
  return (
    <header className="flex justify-center w-full pt-20 pb-[61px] max-lg:pt-12 max-lg:pb-16 max-sm:pb-[54px]">
      <Image
        src="/images/logo.svg"
        alt="Meet logo"
        width={119}
        height={28}
        priority
      />
    </header>
  );
}

export default Header;
