'use client';

import { useState } from 'react';
import { Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
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
  'bg-[#1A2B45] border border-[#1E3A5F] text-[#F8FAFC] rounded-lg px-4 py-3 w-full ' +
  'focus:border-[#F97316] focus:outline-none transition-colors placeholder:text-[#94A3B8]';

export default function ContactPage() {
  const [fields, setFields] = useState<FormFields>(initialFields);
  const [submitted, setSubmitted] = useState<boolean>(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#0F1B2D] min-h-screen">
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Our Office
                </span>
                <div className="flex items-start gap-3">
                  <MapPin
                    className="h-5 w-5 text-[#F97316] mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-[#F8FAFC] text-base leading-relaxed">
                    <span className="font-semibold block">Theoremlabs Partners LLC</span>
                    101 S. Tryon St, STE 2700
                    <br />
                    Charlotte, NC 28280
                  </address>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Email Us
                </span>
                <a
                  href="mailto:info@theoremlabs.io"
                  className="flex items-center gap-3 text-[#F8FAFC] text-base hover:text-[#F97316] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[#F97316] flex-shrink-0" aria-hidden="true" />
                  info@theoremlabs.io
                </a>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                  Also Find Us At
                </span>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Theoremlabs on LinkedIn"
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-lg',
                      'bg-[#1A2B45] border border-[#1E3A5F]',
                      'text-[#94A3B8] hover:text-[#F97316] hover:border-[#F97316]',
                      'transition-colors duration-200'
                    )}
                  >
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href="#"
                    aria-label="Theoremlabs on Twitter"
                    className={cn(
                      'flex h-11 w-11 items-center justify-center rounded-lg',
                      'bg-[#1A2B45] border border-[#1E3A5F]',
                      'text-[#94A3B8] hover:text-[#F97316] hover:border-[#F97316]',
                      'transition-colors duration-200'
                    )}
                  >
                    <Twitter className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Decorative divider card */}
              <div className="hidden md:block rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-6">
                <p className="text-[#94A3B8] text-sm leading-relaxed">
                  We typically respond within one business day. For time-sensitive matters, please
                  include that context in your message and we will prioritize accordingly.
                </p>
              </div>
            </div>

            {/* RIGHT — Contact form */}
            <div
              className={cn(
                'rounded-xl bg-[#1A2B45] border border-[#1E3A5F] p-8 md:p-10',
                'flex flex-col gap-6'
              )}
            >
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F1B2D] border border-[#F97316]">
                    <Mail className="h-7 w-7 text-[#F97316]" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#F8FAFC] tracking-tight">
                    Thanks! We&apos;ll be in touch.
                  </h2>
                  <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs">
                    Your message has been received. A member of the Theoremlabs team will reach out
                    within one business day.
                  </p>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#F97316] mb-1">
                      Send Us a Message
                    </span>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      Fill in the form below and we will get back to you promptly.
                    </p>
                  </div>

                  {/* First / Last name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="firstName"
                        className="text-[#F8FAFC] text-sm font-medium"
                      >
                        First Name <span className="text-[#F97316]">*</span>
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
                        className="text-[#F8FAFC] text-sm font-medium"
                      >
                        Last Name <span className="text-[#F97316]">*</span>
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
                    <label htmlFor="email" className="text-[#F8FAFC] text-sm font-medium">
                      Email <span className="text-[#F97316]">*</span>
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
                    <label htmlFor="company" className="text-[#F8FAFC] text-sm font-medium">
                      Company <span className="text-[#F97316]">*</span>
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
                    <label htmlFor="message" className="text-[#F8FAFC] text-sm font-medium">
                      Message <span className="text-[#F97316]">*</span>
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className={cn(
                      'w-full rounded-lg px-6 py-3.5 font-semibold text-sm text-white',
                      'bg-[#F97316] hover:bg-[#ea6a0a] active:bg-[#d45e08]',
                      'transition-colors duration-200'
                    )}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
