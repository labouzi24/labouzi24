export type Vendor = {
  name: string;
  rating: string;
  delivery: string;
};

// Placeholder vendor records for the "multi-vendor network" slide.
// Swap this array for a real API response later — components only
// depend on the Vendor shape above.
export const vendors: Vendor[] = [
  { name: "مؤسسة الخليج لقطع الغيار", rating: "4.8", delivery: "توصيل خلال يوم" },
  { name: "متجر الأمانة للسيارات", rating: "4.6", delivery: "توصيل خلال يومين" },
  { name: "معرض النخبة لقطع الغيار", rating: "4.9", delivery: "توصيل خلال يوم" },
  { name: "بيت القطعة الأصلية", rating: "4.7", delivery: "توصيل خلال 3 أيام" },
  { name: "الوفاء لقطع غيار السيارات", rating: "4.5", delivery: "توصيل خلال يومين" },
  { name: "متجر السرعة", rating: "4.8", delivery: "توصيل خلال يوم" },
];

// Step numbers for the "how it works" slide; titles/descriptions live in
// the i18n translation files so they can be localized independently.
export const stepNumbers: number[] = [1, 2, 3];
