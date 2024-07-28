import Image from 'next/image';

function Header() {
  return (
    <header className="flex justify-center w-full pt-20 pb-[61px]">
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
