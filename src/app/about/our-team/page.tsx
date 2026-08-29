import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero } from '@/components/shared/PageHero';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CTAButton } from '@/components/shared/CTAButton';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Our Team | Theoremlabs',
  description:
    'Meet the experienced leaders and innovators driving Theoremlabs - a team united by a passion for AI, entrepreneurship, and building the next generation of founders.',
};

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  photo: string;
  imageClassName?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Wendie Dernandez',
    title: 'Co-Founder & Managing Partner',
    bio: 'Wendie brings decades of venture and operational experience to guide Theoremlabs\' portfolio companies from idea to market.',
    photo: '/images/team-wendie.png',
    imageClassName: 'scale-110',
  },
  {
    name: 'Shantanu Tadodkar',
    title: 'Co-Founder & Managing Partner',
    bio: 'Shantanu combines deep technical expertise and entrepreneurial vision to shape Theoremlabs\' strategy and founder programs.',
    photo: '/images/team-shantanu.png',
    imageClassName: 'scale-105',
  },
  {
    name: 'Prashant Sarode',
    title: 'Cofounder and AI Mentor in Residence',
    bio: 'Prashant leverages his background in applied AI to mentor founders building intelligent, production-ready systems.',
    photo: '/images/team-prashant.png',
    imageClassName: 'scale-102',
  },
  {
    name: 'Will Storey',
    title: 'Co-Founder & Lab Mentor',
    bio: 'Will draws on hands-on startup experience to help Theoremlabs founders navigate growth, product, and team challenges.',
    photo: '/images/team-will.png',
    imageClassName: 'scale-110',
  },
  {
    name: 'David Ward',
    title: 'Chief Revenue & Growth Officer',
    bio: 'David architects go-to-market strategies and revenue engines that help Theoremlabs and its companies scale efficiently.',
    photo: '/images/team-david.png',
    imageClassName: 'scale-107 object-[55%_45%]',
  },
  {
    name: 'Jim Stevenson',
    title: 'Contributor',
    bio: 'Jim brings specialized domain knowledge and a broad network that enriches the Theoremlabs community and its portfolio.',
    photo: '/images/team-jim.png',
    imageClassName: 'scale-130',
  },
];

export default function OurTeamPage() {
  return (
    <div className="bg-background min-h-screen">
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
                className="bg-card border border-border rounded-xl overflow-hidden flex flex-col"
              >
                <div className="relative w-full aspect-square flex items-center justify-center p-8">
                  <div className="relative h-full w-full rounded-full overflow-hidden">
                    <Image
                      src={member.photo}
                      fill
                      alt={member.name}
                      className={cn('object-cover object-top', member.imageClassName)}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <p className="text-lg font-semibold text-foreground leading-snug">
                    {member.name}
                  </p>
                  <p className="text-sm text-primary font-medium">{member.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <SectionHeader
            title="Work with this team"
            subtitle="Ready to build something extraordinary? We'd love to hear from you."
            align="center"
          />
          <CTAButton href="/engage/contact">Get in Touch</CTAButton>
        </div>
      </section>
    </div>
  );
}
