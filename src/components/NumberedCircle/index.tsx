import Image from 'next/image';

interface NumberedCircleProps {
  number: string;
}

function NumberedCircle({ number }: Readonly<NumberedCircleProps>) {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <Image src="/images/vertical-line.svg" alt="" width={1} height={84} />
      <div
        className="flex justify-center items-center text-numbered-circle w-14 h-14 border border-solid border-[rgba(135,135,157,0.25)] rounded-full bg-neutral-light"
        aria-label={`Step ${number}`}
      >
        {number}
      </div>
    </div>
  );
}

export default NumberedCircle;
