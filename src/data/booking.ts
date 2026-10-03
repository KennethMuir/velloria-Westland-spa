import { getPackageBySlug } from "@/data/packages";
import { siteConfig } from "@/data/site";
import { getTreatmentBySlug } from "@/data/treatments";

export type BookingSelectionType = "treatment" | "package";

export type BookingSelection = {
  type: BookingSelectionType;
  slug: string;
  title: string;
  category: string;
};

export function getBookingSelection(
  type: string | undefined,
  slug: string | undefined,
): BookingSelection | null {
  if (!type || !slug) {
    return null;
  }

  if (type === "treatment") {
    const treatment = getTreatmentBySlug(slug);

    if (!treatment) {
      return null;
    }

    return {
      type: "treatment",
      slug: treatment.slug,
      title: treatment.title,
      category: treatment.category,
    };
  }

  if (type === "package") {
    const spaPackage = getPackageBySlug(slug);

    if (!spaPackage) {
      return null;
    }

    return {
      type: "package",
      slug: spaPackage.slug,
      title: spaPackage.title,
      category: spaPackage.category,
    };
  }

  return null;
}

export function createBookingWhatsAppUrl(message: string) {
  return `${siteConfig.whatsappUrl}?text=${encodeURIComponent(message)}`;
}



