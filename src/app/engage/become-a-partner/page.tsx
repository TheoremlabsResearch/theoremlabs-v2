import type { Metadata } from 'next';
import { Puzzle, Handshake, Share2, CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Become a Partner | Theoremlabs',
  description:
    'Join the Theoremlabs partner ecosystem and co-create the future of Fintech AI. Technology, implementation, and referral partnership opportunities available.',
};

interface PartnershipType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface PartnershipBenefit {
  text: string;
}

const partnershipTypes: PartnershipType[] = [
  {
    icon: <Puzzle className="h-7 w-7 text-[#F97316]" aria-hidden="true" />,
    title: 'Technology Partners',
    description:
      'Vendors and platform providers who want to integrate with Theoremlabs accelerators and client ecosystems. Technology partners gain access to a Fintech-native client network and co-develop integrations that expand the reach and capability of their platforms.',
  },
  {
    icon: <Handshake className="h-7 w-7 text-[#F97316]" aria-hidden="true" />,
    title: 'Implementation Partners',
    description:
      'Consulting and systems integration firms who want to deliver Theoremlabs methodologies and products to their clients. Implementation partners are trained and certified on our accelerators, enabling them to extend our reach while we support their delivery capability.',
  },
  {
    icon: <Share2 className="h-7 w-7 text-[#F97316]" aria-hidden="true" />,
    title: 'Referral Partners',
    description:
      'Trusted advisors and networks who refer Fintech organizations to Theoremlabs. Referral partners benefit from a transparent revenue-share structure and the confidence of attaching their clients to a team that consistently delivers outcomes.',
  },
];

const partnershipBenefits: PartnershipBenefit[] = [
  {
    text: 'Co-marketing opportunities including joint content, webinars, and event presence',
  },
  {
    text: 'Revenue share arrangements structured to reward partner-sourced and partner-delivered engagements',
  },
  {
    text: 'Early access to new Theoremlabs products, accelerators, and research',
  },
  {
    text: 'Joint go-to-market planning and pipeline collaboration with Theoremlabs leadership',
  },
];

export default function BecomeAPartnerPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Engage"
        title="Become a Partner"
        subtitle="Join the Theoremlabs partner ecosystem and co-create the future of Fintech AI."
      />

      {/* Intro */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div className="flex flex-col gap-5">
              <SectionHeader
                eyebrow="The Ecosystem"
                title="Built on mutual growth."
                align="left"
              />
              <p className="text-[#94A3B8] text-base leading-relaxed">
                The Theoremlabs partner ecosystem is a curated network of organizations aligned
                around one purpose: accelerating AI and Fintech innovation for financial
                institutions. We partner selectively — because a smaller, higher-trust network
                creates better outcomes for clients and partners alike.
              </p>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Whether you are a technology platform seeking Fintech distribution, a consulting
                firm looking to add AI build capability, or a trusted advisor who refers
                organizations to specialized partners — there is a place for you in the
                Theoremlabs ecosystem.
              </p>
            </div>

            {/* Benefits column */}
            <div className="flex flex-col gap-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Partnership Benefits
              </p>
              <ul className="flex flex-col gap-4 list-none p-0 m-0">
                {partnershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-[#F8FAFC] text-base leading-relaxed">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-b border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <SectionHeader
            eyebrow="Partner Tracks"
            title="Find your partnership model."
            subtitle="Three structured tracks designed to meet you where you are and grow with you over time."
            align="center"
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className={cn(
                  'flex flex-col gap-6 rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8',
                  'transition-colors duration-200 hover:border-[#F97316]'
                )}
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0F1B2D] border border-[#1E3A5F]">
                  {type.icon}
                </div>

                {/* Orange accent bar */}
                <span className="block h-0.5 w-8 rounded-full bg-[#F97316]" />

                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-bold text-[#F8FAFC] tracking-tight">{type.title}</h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{type.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-10 md:p-16 text-center flex flex-col items-center gap-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
              Partner With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F8FAFC] max-w-2xl">
              Ready to build something together?
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed max-w-xl">
              Tell us about your organization and how you see a Theoremlabs partnership creating
              mutual value. We will respond within two business days.
            </p>
            <CTAButton href="/engage/contact" variant="primary" className="mt-2 px-8 py-4 text-base">
              Apply to Become a Partner
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
