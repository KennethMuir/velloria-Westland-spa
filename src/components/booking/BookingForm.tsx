"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, CalendarDays, Clock3, MessageCircle } from "lucide-react";
import {
  createBookingWhatsAppUrl,
  type BookingSelection,
  type BookingSelectionType,
} from "@/data/booking";
import { packages } from "@/data/packages";
import { treatments } from "@/data/treatments";
import { siteConfig } from "@/data/site";

type BookingFormProps = {
  initialSelection: BookingSelection | null;
};

type FormState = {
  selectionType: BookingSelectionType | "";
  selectionSlug: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
};

const initialFormState = (
  initialSelection: BookingSelection | null,
): FormState => ({
  selectionType: initialSelection?.type ?? "",
  selectionSlug: initialSelection?.slug ?? "",
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "1",
  notes: "",
});

export function BookingForm({ initialSelection }: BookingFormProps) {
  const [form, setForm] = useState(() => initialFormState(initialSelection));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedOptions = useMemo(() => {
    if (form.selectionType === "treatment") {
      return treatments.map((treatment) => ({
        value: treatment.slug,
        label: treatment.title,
        category: treatment.category,
      }));
    }

    if (form.selectionType === "package") {
      return packages.map((spaPackage) => ({
        value: spaPackage.slug,
        label: spaPackage.title,
        category: spaPackage.category,
      }));
    }

    return [];
  }, [form.selectionType]);

  function updateField<K extends keyof FormState>(
    field: K,
    value: FormState[K],
  ) {
    setSubmitted(false);
    setError("");
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleTypeChange(value: BookingSelectionType | "") {
    setSubmitted(false);
    setError("");

    setForm((current) => ({
      ...current,
      selectionType: value,
      selectionSlug: "",
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (!form.selectionType || !form.selectionSlug) {
      setError("Please choose a treatment or package.");
      return;
    }

    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your name and contact number.");
      return;
    }

    if (!form.date || !form.time) {
      setError("Please choose your preferred date and time.");
      return;
    }

    const selected =
      form.selectionType === "treatment"
        ? treatments.find((treatment) => treatment.slug === form.selectionSlug)
        : packages.find((spaPackage) => spaPackage.slug === form.selectionSlug);

    if (!selected) {
      setError("The selected experience could not be found. Please choose again.");
      return;
    }

    const category = selected.category;
    const title = selected.title;

    const message = [
      "Hello Velloria Westland Spa,",
      "",
      "I would like to make a booking enquiry.",
      "",
      `Experience: ${title}`,
      `Type: ${form.selectionType === "treatment" ? "Treatment" : "Package"}`,
      `Category: ${category}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
      `Guests: ${form.guests}`,
      "",
      `Name: ${form.name.trim()}`,
      `Contact number: ${form.phone.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : "",
      "",
      "Please let me know about availability and the next steps.",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      createBookingWhatsAppUrl(message),
      "_blank",
      "noopener,noreferrer",
    );

    setSubmitted(true);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <aside className="rounded-[2rem] bg-[#201914] p-7 text-white sm:p-9">
        <p className="velloria-eyebrow text-white/50">Your visit</p>

        <h2 className="velloria-display mt-5 text-4xl leading-[0.95] sm:text-5xl">
          Tell us how you would like to unwind.
        </h2>

        <p className="mt-6 text-sm leading-7 text-white/65">
          Share your preferred experience, timing and contact details. We will
          confirm availability and guide you through the next step on WhatsApp.
        </p>

        <div className="mt-10 space-y-5 border-t border-white/10 pt-7">
          <div className="flex gap-4">
            <CalendarDays className="mt-0.5 shrink-0 text-[#d9c9b5]" size={19} />
            <div>
              <p className="text-sm font-semibold">Your preferred date</p>
              <p className="mt-1 text-xs leading-5 text-white/50">
                Choose a date that works comfortably for you.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock3 className="mt-0.5 shrink-0 text-[#d9c9b5]" size={19} />
            <div>
              <p className="text-sm font-semibold">Your preferred time</p>
              <p className="mt-1 text-xs leading-5 text-white/50">
                We will confirm the available appointment time with you.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <MessageCircle
              className="mt-0.5 shrink-0 text-[#d9c9b5]"
              size={19}
            />
            <div>
              <p className="text-sm font-semibold">WhatsApp confirmation</p>
              <p className="mt-1 text-xs leading-5 text-white/50">
                Your enquiry opens directly in a WhatsApp conversation with
                Velloria.
              </p>
            </div>
          </div>
        </div>
      </aside>

      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] border border-[#33271f]/10 bg-[#fffdf9] p-6 shadow-[0_20px_60px_rgba(51,39,31,0.06)] sm:p-9"
      >
        <div className="grid gap-6">
          <div>
            <label
              htmlFor="booking-type"
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
            >
              Experience type
            </label>
            <select
              id="booking-type"
              value={form.selectionType}
              onChange={(event) =>
                handleTypeChange(
                  event.target.value as BookingSelectionType | "",
                )
              }
              className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none transition focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
            >
              <option value="">Choose an experience type</option>
              <option value="treatment">Treatment</option>
              <option value="package">Package</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="booking-experience"
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
            >
              Experience
            </label>
            <select
              id="booking-experience"
              value={form.selectionSlug}
              onChange={(event) =>
                updateField("selectionSlug", event.target.value)
              }
              disabled={!form.selectionType}
              className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none transition focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">
                {form.selectionType
                  ? "Choose an experience"
                  : "Choose a type first"}
              </option>
              {selectedOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} — {option.category}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="booking-name"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
              >
                Your name
              </label>
              <input
                id="booking-name"
                type="text"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                autoComplete="name"
                className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none placeholder:text-[#77675a]/55 focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
              />
            </div>

            <div>
              <label
                htmlFor="booking-phone"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
              >
                Contact number
              </label>
              <input
                id="booking-phone"
                type="tel"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+254 ..."
                autoComplete="tel"
                className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none placeholder:text-[#77675a]/55 focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <label
                htmlFor="booking-date"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
              >
                Preferred date
              </label>
              <input
                id="booking-date"
                type="date"
                value={form.date}
                onChange={(event) => updateField("date", event.target.value)}
                min={new Date().toISOString().split("T")[0]}
                className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
              />
            </div>

            <div>
              <label
                htmlFor="booking-time"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
              >
                Preferred time
              </label>
              <input
                id="booking-time"
                type="time"
                value={form.time}
                onChange={(event) => updateField("time", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
              />
            </div>

            <div>
              <label
                htmlFor="booking-guests"
                className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
              >
                Guests
              </label>
              <select
                id="booking-guests"
                value={form.guests}
                onChange={(event) => updateField("guests", event.target.value)}
                className="mt-2 w-full rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm text-[#33271f] outline-none focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
              >
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number}>
                    {number} {number === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="booking-notes"
              className="text-xs font-bold uppercase tracking-[0.14em] text-[#77675a]"
            >
              Additional notes
            </label>
            <textarea
              id="booking-notes"
              value={form.notes}
              onChange={(event) => updateField("notes", event.target.value)}
              placeholder="Anything you would like us to know?"
              rows={5}
              className="mt-2 w-full resize-none rounded-2xl border border-[#33271f]/12 bg-[#f8f5ef] px-4 py-3.5 text-sm leading-6 text-[#33271f] outline-none placeholder:text-[#77675a]/55 focus:border-[#9a8068] focus:ring-2 focus:ring-[#9a8068]/20"
            />
          </div>

          {error ? (
            <div
              role="alert"
              className="rounded-2xl border border-[#9a8068]/30 bg-[#efe8dc] px-4 py-3 text-sm leading-6 text-[#33271f]"
            >
              {error}
            </div>
          ) : null}

          {submitted ? (
            <div
              role="status"
              className="rounded-2xl border border-[#9a8068]/30 bg-[#efe8dc] px-4 py-3 text-sm leading-6 text-[#33271f]"
            >
              Your booking message has been prepared in WhatsApp. Please send
              it there so the Velloria team can respond with availability.
            </div>
          ) : null}

          <div className="flex flex-col gap-3 border-t border-[#33271f]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-5 text-[#77675a]">
              This is a booking enquiry rather than an instant reservation.
              Availability will be confirmed with you on WhatsApp.
            </p>

            <button
              type="submit"
              className="velloria-button inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-[#33271f] px-6 text-sm font-semibold tracking-wide text-[#ffffff] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#201914] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9a8068] focus-visible:ring-offset-2"
            >
              Continue on WhatsApp
              <ArrowUpRight size={16} className="text-[#ffffff]" />
            </button>
          </div>

          <p className="text-center text-xs text-[#77675a]">
            WhatsApp:{" "}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#33271f] underline decoration-[#9a8068] underline-offset-4"
            >
              {siteConfig.whatsapp}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
