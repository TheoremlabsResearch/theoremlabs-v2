import { Quote } from 'lucide-react';

export function Testimonial() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-card/30 border border-border rounded-2xl p-6 md:p-8 lg:p-12">
            {/* Quote icon */}
            <div className="flex justify-center mb-6">
              <Quote className="h-10 w-10 text-primary" strokeWidth={1.5} />
            </div>

            {/* Quote text */}
            <blockquote className="text-base font-light italic text-foreground leading-relaxed md:text-xl lg:text-2xl">
              &ldquo;It&apos;s going to be interesting to see how society deals
              with artificial intelligence, but it will definitely be
              cool.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-muted-foreground font-medium mt-6">
              &mdash; Colin Angle, CEO of iRobot
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
