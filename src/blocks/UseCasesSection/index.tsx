import Image from 'next/image';

interface UseCase {
  src: string;
  alt: string;
}

const useCases: UseCase[] = [
  {
    src: '/images/desktop/image-woman-in-videocall.jpg',
    alt: 'woman in video call',
  },
  {
    src: '/images/desktop/image-women-videochatting.jpg',
    alt: 'women video chatting',
  },
  {
    src: '/images/desktop/image-men-in-meeting.jpg',
    alt: 'men in meeting',
  },
  {
    src: '/images/desktop/image-man-texting.jpg',
    alt: 'man texting',
  },
];

function UseCasesSection() {
  return (
    <section className="pb-20 max-lg:pb-12 max-sm:pb-16">
      <div className="grid grid-cols-4 gap-[30px] max-w-[1110px] mx-auto max-lg:gap-[11px] max-lg:max-w-[689px] max-sm:max-w-[327px] max-sm:grid-cols-2 max-sm:grid-rows-2 max-sm:gap-x-[25px] max-sm:gap-y-6">
        {useCases.map((useCase) => (
          <Image
            key={useCase.alt}
            src={useCase.src}
            alt={useCase.alt}
            width={255}
            height={242}
            className="rounded-lg max-lg:max-w-[164px] max-lg:max-h-[156px] max-sm:max-w-[151px] max-sm:max-h-[143px]"
          />
        ))}
      </div>
    </section>
  );
}

export default UseCasesSection;
