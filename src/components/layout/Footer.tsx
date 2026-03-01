import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'Products',
    links: [
      { label: 'Kirdar.ai', href: '/products/kirdar-ai' },
      { label: 'DataGaze.ai', href: '/products/datagaze-ai' },
      { label: 'Accelerators', href: '/products/accelerators' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Our Team', href: '/about/our-team' },
      { label: 'Partnerships', href: '/about/partnerships' },
      { label: 'Advisory & Consulting', href: '/advisory-consulting' },
      { label: 'Art of Possible Labs', href: '/art-of-possible-labs' },
    ],
  },
  {
    heading: 'Innovation & Engage',
    links: [
      { label: 'Coding Loops', href: '/innovation/coding-loops' },
      { label: 'AI Technologies', href: '/innovation/ai-technologies' },
      { label: 'Setup Design Workshops', href: '/engage/workshops' },
      { label: 'Become a Partner', href: '/engage/become-a-partner' },
      { label: "Let's be in Touch", href: '/engage/contact' },
    ],
  },
];

// Social hrefs — update once social accounts are confirmed (see Open Decisions in CLAUDE.md)
const SOCIALS = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Twitter / X', href: '#', icon: Twitter },
  { label: 'Email', href: 'mailto:info@theoremlabs.io', icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1220] border-t border-[#1E3A5F]">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Theoremlabs home">
              <Image
                src="/images/logo.png"
                alt="Theoremlabs"
                width={150}
                height={38}
                className="h-8 w-auto"
              />
            </Link>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              Theoremlabs is a hybrid of management consulting, build &amp; experimentation labs for
              Fintech products that apply advances in AI, Data, Cloud and mature Web 3 technologies.
            </p>

            {/* Address */}
            <address className="not-italic flex items-start gap-2 text-sm text-[#94A3B8]">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#F97316]" />
              <span>
                Theoremlabs Partners LLC
                <br />
                101 S. Tryon St, STE 2700
                <br />
                Charlotte, NC 28280
              </span>
            </address>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-[#1E3A5F] flex items-center justify-center text-[#94A3B8] hover:text-[#F97316] hover:border-[#F97316] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-5">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#94A3B8] text-center sm:text-left">
            &copy; {year} Theoremlabs Partners LLC. All rights reserved.
          </p>
          <Link
            href="/engage/contact"
            className="px-4 py-2 rounded-lg bg-[#F97316] text-white text-xs font-semibold hover:bg-[#ea6a0a] transition-colors duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </footer>
  );
}
