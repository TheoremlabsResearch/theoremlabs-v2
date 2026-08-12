'use client';

import { useState } from 'react';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { VimeoIcon } from '@/components/shared/VimeoIcon';
import { cn } from '@/lib/utils';

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

const initialFields: FormFields = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  message: '',
};

const inputClass =
  'bg-card border border-border text-foreground rounded-lg px-4 py-3 w-full ' +
  'focus:border-primary focus:outline-none transition-colors placeholder:text-muted-foreground';

export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? 'Something went wrong. Please try again.');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <PageHero
        eyebrow="Engage"
        title="Let&apos;s Talk"
        subtitle="Ready to explore what's possible? We'd love to hear from you."
      />

      {/* Two-column contact section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

            {/* LEFT — Company info */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Our Office
                </span>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-foreground text-base leading-relaxed">
                    <span className="font-semibold block">Theoremlabs Partners LLC</span>
                    101 S. Tryon St, STE 2700
                    <br />
                    Charlotte, NC 28280
                  </address>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Email Us
                </span>
                <a
                  href="mailto:imagine@theoremlabs.io"
                  className="flex items-center gap-3 text-foreground text-base hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                  imagine@theoremlabs.io
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Also Find Us At
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.linkedin.com/company/theoremlabs-io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Theoremlabs on LinkedIn"
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-lg',
                      'bg-card border border-border',
                      'text-muted-foreground hover:text-primary hover:border-primary',
                      'transition-colors duration-200'
                    )}
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="https://vimeo.com/user222655519"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Theoremlabs on Vimeo"
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-lg',
                      'bg-card border border-border',
                      'text-muted-foreground hover:text-primary hover:border-primary',
                      'transition-colors duration-200'
                    )}
                  >
                    <VimeoIcon size={20} />
                  </a>
                </div>
              </div>

              {/* Decorative divider card */}
              <div className="hidden md:block rounded-xl bg-card border border-border p-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We typically respond within one business day. For time-sensitive matters, please
                  include that context in your message and we will prioritize accordingly.
                </p>
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div
              className={cn(
                'rounded-xl bg-card border border-border p-8 md:p-10',
                'flex flex-col gap-6'
              )}
            >
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border border-primary">
                    <Mail className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Thanks! We&apos;ll be in touch.
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                    Your message has been received. A member of the Theoremlabs team will reach out
                    within one business day.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                      Send Us a Message
                    </span>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Fill in the form below and we will get back to you promptly.
                    </p>
                  </div>

                  {/* First / Last name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-foreground text-sm font-medium"
                      >
                        First Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={fields.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="lastName"
                        className="text-foreground text-sm font-medium"
                      >
                        Last Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={fields.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-foreground text-sm font-medium">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={fields.email}
                      onChange={handleChange}
                      placeholder="jane@yourcompany.com"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-foreground text-sm font-medium">
                      Company <span className="text-primary">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={fields.company}
                      onChange={handleChange}
                      placeholder="Acme Financial"
                      required
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-foreground text-sm font-medium">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={fields.message}
                      onChange={handleChange}
                      placeholder="Tell us about your initiative, challenge, or question..."
                      required
                      rows={5}
                      className={cn(inputClass, 'resize-none')}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p role="alert" className="text-sm text-red-400">
                      {error}
                    </p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className={cn(
                      'w-full rounded-lg px-6 py-3.5 font-semibold text-sm text-white',
                      'bg-primary hover:bg-[#ea6a0a] active:bg-[#d45e08]',
                      'transition-colors duration-200',
                      'disabled:opacity-60 disabled:cursor-not-allowed'
                    )}
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
