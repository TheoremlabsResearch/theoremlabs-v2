import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { CTAButton } from '@/components/shared/CTAButton';

export const metadata: Metadata = {
  title: 'Our Team | Theoremlabs',
  description:
    'Meet the experienced leaders and innovators driving Theoremlabs — a team united by a passion for AI, entrepreneurship, and building the next generation of founders.',
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Wendie Hernandez',
    title: 'Co-Founder & Managing Partner',
    bio: 'Wendie brings decades of venture and operational experience to guide Theoremlabs\' portfolio companies from idea to market.',
    photo: '/images/team-wendie.png',
  },
  {
    name: 'Shantanu Wadodkar',
    title: 'Co-Founder & Managing Partner',
    bio: 'Shantanu combines deep technical expertise and entrepreneurial vision to shape Theoremlabs\' strategy and founder programs.',
    photo: '/images/team-shantanu.png',
  },
  {
    name: 'Prashant Sarode',
    title: 'Cofounder and AI Mentor in Residence',
    bio: 'Prashant leverages his background in applied AI to mentor founders building intelligent, production-ready systems.',
    photo: '/images/team-prashant.png',
  },
  {
    name: 'Will Storey',
    title: 'Co-Founder & Lab Mentor',
    bio: 'Will draws on hands-on startup experience to help Theoremlabs founders navigate growth, product, and team challenges.',
    photo: '/images/team-will.png',
  },
  {
    name: 'David Ward',
    title: 'Chief Revenue & Growth Officer',
    bio: 'David architects go-to-market strategies and revenue engines that help Theoremlabs and its companies scale efficiently.',
    photo: '/images/team-david.png',
  },
  {
    name: 'Jim Stevenson',
    title: 'Contributor',
    bio: 'Jim brings specialized domain knowledge and a broad network that enriches the Theoremlabs community and its portfolio.',
    photo: '/images/team-jim.png',
  },
];

export default function OurTeamPage() {
  return (
    <main className="bg-[#0F1B2D] min-h-screen">
      <PageHero
        eyebrow="About"
        title="Meet Our Team"
        subtitle="The experienced leaders and innovators behind Theoremlabs."
      />

      {/* Team Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
            {teamMembers.map((member) => (
              <li
                key={member.name}
                className="bg-[#1A2B45] border border-[#1E3A5F] rounded-xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={member.photo}
                    width={300}
                    height={300}
                    alt={member.name}
                    className="w-full aspect-square object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-lg font-semibold text-[#F8FAFC] leading-snug">
                    {member.name}
                  </p>
                  <p className="text-sm text-[#F97316] font-medium">{member.title}</p>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mt-1">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight">
            Work with this team
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl">
            Ready to build something extraordinary? We&apos;d love to hear from you.
          </p>
          <CTAButton href="/engage/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </main>
  );
}
