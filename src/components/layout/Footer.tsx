import Link from 'next/link';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { VimeoIcon } from '@/components/shared/VimeoIcon';
import { CTAButton } from '@/components/shared/CTAButton';
import { Logo } from '@/components/shared/Logo';

interface FooterLinkGroup {
  heading: string;
  links: { label: string; href: string }[];
}

const LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: 'Products',
    links: [
      { label: 'PromptLine', href: '/products/promptline' },
      { label: 'Tacit', href: '/products/tacit' },
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

const SOCIALS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/theoremlabs-io/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'Vimeo',
    href: 'https://vimeo.com/user222655519',
    icon: VimeoIcon,
    external: true,
  },
  { label: 'Contact Us', href: '/engage/contact', icon: Mail, external: false },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1220] border-t border-border">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Theoremlabs home">
              <Logo />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Theoremlabs is a hybrid of management consulting, build &amp; experimentation labs for
              Fintech products that apply advances in AI, Data, Cloud and mature Web 3 technologies.
            </p>

            {/* Address */}
            <address className="not-italic flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-primary" />
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
              {SOCIALS.map(({ label, href, icon: Icon, external }) => {
                const iconClass =
                  'w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200';

                return external ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={iconClass}
                  >
                    <Icon size={16} />
                  </a>
                ) : (
                  <Link key={label} href={href} aria-label={label} className={iconClass}>
                    <Icon size={16} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                {group.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            &copy; {year} Theoremlabs Partners LLC. All rights reserved.
          </p>
          <CTAButton href="/engage/contact" variant="primary" className="px-4 py-2 text-xs">
            Let&apos;s Talk
          </CTAButton>
        </div>
      </div>
    </footer>
  );
}
