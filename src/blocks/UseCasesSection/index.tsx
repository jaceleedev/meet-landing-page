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
    <section className="pb-20">
      <div className="grid grid-cols-4 gap-[30px] max-w-[1110px] mx-auto">
        {useCases.map((useCase) => (
          <Image
            key={useCase.alt}
            src={useCase.src}
            alt={useCase.alt}
            width={255}
            height={242}
            className="rounded-lg"
          />
        ))}
      </div>
    </section>
  );
}

export default UseCasesSection;