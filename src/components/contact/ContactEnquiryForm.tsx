"use client";

import { ArrowUpRight, Check, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { contactPage } from "@/data/contact";
import { siteConfig } from "@/data/site";

function createEnquiryWhatsAppUrl(message: string) {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function ContactEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const enquiryType = String(formData.get("enquiryType") ?? "");
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    const whatsappMessage = `Hello Velloria Westland Spa,

I would like to make an enquiry.

Enquiry type: ${enquiryType}
Name: ${name}
Contact number: ${phone}

Message:
${message}

Please let me know the next steps.`;

    window.open(
      createEnquiryWhatsAppUrl(whatsappMessage),
      "_blank",
      "noopener,noreferrer",
    );

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] bg-[var(--velloria-deep)] p-8 text-white sm:p-10">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <Check size={21} strokeWidth={1.7} />
        </span>

        <p className="velloria-eyebrow mt-7 text-[var(--velloria-sand)]">
          Enquiry prepared
        </p>

        <h3 className="velloria-display mt-4 text-4xl leading-[0.95] sm:text-5xl">
          Your conversation is ready.
        </h3>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
          Your enquiry has been prepared for WhatsApp. Continue the
          conversation there so the Velloria team can respond directly.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="velloria-button inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
          >
            <MessageCircle size={17} strokeWidth={1.8} />
            Open WhatsApp
            <ArrowUpRight size={15} strokeWidth={1.7} />
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/30 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] bg-[var(--velloria-deep)] p-7 text-white sm:p-10"
    >
      <div>
        <p className="velloria-eyebrow text-[var(--velloria-sand)]">
          {contactPage.enquiry.eyebrow}
        </p>

        <h2 className="velloria-display mt-4 text-4xl leading-[0.95] sm:text-5xl">
          {contactPage.enquiry.title}
        </h2>

        <p className="mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
          {contactPage.enquiry.description}
        </p>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Enquiry type
          </span>

          <select
            name="enquiryType"
            required
            defaultValue=""
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition-colors focus:border-[var(--velloria-sand)]"
          >
            <option value="" disabled className="text-[#33271f]">
              Select an enquiry
            </option>

            {contactPage.enquiryTypes.map((type) => (
              <option
                key={type}
                value={type}
                className="text-[#33271f]"
              >
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Your name
          </span>

          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-[var(--velloria-sand)]"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Contact number
          </span>

          <input
            type="tel"
            name="phone"
            required
            autoComplete="tel"
            placeholder="+254..."
            className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-[var(--velloria-sand)]"
          />
        </label>

        <label className="block sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
            Your message
          </span>

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us what you would like to know..."
            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-7 text-white outline-none placeholder:text-white/30 transition-colors focus:border-[var(--velloria-sand)]"
          />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-xs leading-5 text-white/40">
          Your message will open in WhatsApp so you can continue the
          conversation directly with Velloria.
        </p>

        <button
          type="submit"
          className="velloria-button inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
        >
          Send Enquiry
          <Send size={16} strokeWidth={1.7} />
        </button>
      </div>
    </form>
  );
}
