import Image from 'next/image';

export function Testimonial() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-[#1A2B45]/30 border border-[#1E3A5F] rounded-2xl p-6 md:p-8 lg:p-12">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/quote.gif"
                alt="quote"
                width={48}
                height={48}
                unoptimized
              />
            </div>

            {/* Quote text */}
            <blockquote className="text-xl font-light italic text-[#F8FAFC] leading-relaxed md:text-2xl lg:text-3xl">
              &ldquo;It&apos;s going to be interesting to see how society deals
              with artificial intelligence, but it will definitely be
              cool.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-[#94A3B8] font-medium mt-6">
              &mdash; Colin Angle, CEO of iRobot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
