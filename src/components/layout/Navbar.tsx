'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CTAButton } from '@/components/shared/CTAButton';
import { Logo } from '@/components/shared/Logo';

interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'Our Team', href: '/about/our-team' },
      { label: 'Partnerships', href: '/about/partnerships' },
    ],
  },
  {
    label: 'Products',
    children: [
      { label: 'PromptLine', href: '/products/promptline' },
      { label: 'Tacit', href: '/products/tacit' },
      { label: 'Kirdar.ai', href: '/products/kirdar-ai' },
      { label: 'DataGaze.ai', href: '/products/datagaze-ai' },
      { label: 'Accelerators', href: '/products/accelerators' },
    ],
  },
  { label: 'Advisory & Consulting', href: '/advisory-consulting' },
  { label: 'Art of Possible Labs', href: '/art-of-possible-labs' },
  {
    label: 'Innovation',
    children: [
      { label: 'Coding Loops', href: '/innovation/coding-loops' },
      { label: 'AI Technologies', href: '/innovation/ai-technologies' },
    ],
  },
  {
    label: 'Engage',
    children: [
      { label: 'Setup Design Workshops', href: '/engage/workshops' },
      { label: 'Become a Partner', href: '/engage/become-a-partner' },
      { label: "Let's be in Touch", href: '/engage/contact' },
    ],
  },
];

interface DesktopDropdownProps {
  item: NavItem;
}

function DesktopDropdown({ item }: DesktopDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-[12.5px] xl:text-[13px] text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex"
        >
          <ChevronDown size={13} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full pt-3 z-50"
          >
            <div className="min-w-[210px] bg-card border border-border rounded-lg overflow-hidden shadow-2xl">
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className="block px-4 py-3 text-sm text-foreground hover:bg-background hover:text-primary transition-colors duration-150 border-b border-border last:border-b-0"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  function toggleMobileSection(label: string) {
    setOpenMobileSection((prev) => (prev === label ? null : label));
  }

  function closeMobileMenu() {
    setMobileOpen(false);
    setOpenMobileSection(null);
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border'
            : 'bg-background border-b border-border/50'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-5 xl:px-16 h-16 flex items-center justify-between gap-3 xl:gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="Theoremlabs home">
            <Logo priority />
          </Link>

          {/* Desktop nav — shown at lg (1024px+), so only tablets/phones get the hamburger */}
          <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 flex-1 justify-center">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} item={item} />
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-[12.5px] xl:text-[13px] text-foreground hover:text-primary transition-colors duration-200 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <CTAButton
              href="/engage/contact"
              variant="primary"
              className="hidden sm:inline-flex px-4 py-2"
            >
              Let&apos;s Talk
            </CTAButton>
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="fixed top-16 left-0 right-0 z-40 bg-background border-b border-border overflow-y-auto max-h-[calc(100vh-4rem)] lg:hidden"
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex flex-col">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="border-b border-border/60 last:border-b-0">
                    {item.children ? (
                      <>
                        <button
                          className="w-full flex items-center justify-between px-2 py-3.5 text-sm text-foreground hover:text-primary transition-colors duration-200"
                          onClick={() => toggleMobileSection(item.label)}
                          aria-expanded={openMobileSection === item.label}
                        >
                          {item.label}
                          <motion.span
                            animate={{ rotate: openMobileSection === item.label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex text-muted-foreground"
                          >
                            <ChevronDown size={16} />
                          </motion.span>
                        </button>

                        <AnimatePresence initial={false}>
                          {openMobileSection === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 border-l-2 border-primary/40 ml-2 pb-2">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
                                    onClick={closeMobileMenu}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        className="block px-2 py-3.5 text-sm text-foreground hover:text-primary transition-colors duration-200"
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile CTA */}
                <div className="py-4">
                  <CTAButton
                    href="/engage/contact"
                    variant="primary"
                    className="block w-full text-center px-4 py-3"
                    onClick={closeMobileMenu}
                  >
                    Let&apos;s Talk
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
