function FeaturesSection() {
  return (
    <section className="flex flex-col justify-center max-w-[540px] pb-[72px] mx-auto text-center max-lg:max-w-[573px] max-lg:pb-20 max-sm:pb-16 max-sm:max-w-[327px]">
      <h3 className="text-sub-heading mb-4 max-sm:mb-6">
        Built for modern use
      </h3>
      <h2 className="text-heading-2 text-neutral-dark max-w-[445px] mb-8 mx-auto max-sm:text-[32px] max-sm:leading-[36px]">
        Smarter meetings, all in one place
      </h2>
      <p className="text-body text-neutral-medium text-balance max-lg:text-[16px] max-lg:text-wrap">
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with{' '}
        <span className="max-sm:whitespace-nowrap">invite-only</span> team
        access, data encryption, and data export.
      </p>
    </section>
  );
}

export default FeaturesSection;
