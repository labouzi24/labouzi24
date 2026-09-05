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

export type Brand = {
  id: string;
  name: string;
};

// Brand names are proper nouns and stay the same across locales, so they
// live here rather than in the i18n files (same treatment as vendor names).
export const brands: Brand[] = [
  { id: "toyota", name: "Toyota" },
  { id: "hyundai", name: "Hyundai" },
  { id: "kia", name: "Kia" },
  { id: "renault", name: "Renault" },
  { id: "peugeot", name: "Peugeot" },
  { id: "volkswagen", name: "Volkswagen" },
  { id: "mercedes-benz", name: "Mercedes-Benz" },
  { id: "bmw", name: "BMW" },
  { id: "nissan", name: "Nissan" },
  { id: "ford", name: "Ford" },
  { id: "fiat", name: "Fiat" },
  { id: "citroen", name: "Citroën" },
  { id: "dacia", name: "Dacia" },
];

export const modelsByBrand: Record<string, string[]> = {
  toyota: ["Corolla", "Camry", "Yaris", "Hilux", "RAV4"],
  hyundai: ["Elantra", "Tucson", "Accent", "i10", "Santa Fe"],
  kia: ["Sportage", "Cerato", "Picanto", "Sorento"],
  renault: ["Clio", "Megane", "Duster", "Symbol"],
  peugeot: ["208", "308", "3008", "2008"],
  volkswagen: ["Golf", "Polo", "Passat", "Tiguan"],
  "mercedes-benz": ["C-Class", "E-Class", "GLC", "A-Class"],
  bmw: ["Series 3", "Series 5", "X3", "X5"],
  nissan: ["Sunny", "Qashqai", "Micra", "X-Trail"],
  ford: ["Focus", "Fiesta", "Kuga", "EcoSport"],
  fiat: ["Tipo", "500", "Panda", "Doblo"],
  citroen: ["C3", "C4", "C-Elysée", "Berlingo"],
  dacia: ["Logan", "Duster", "Sandero", "Dokker"],
};

export type PartType = "brake" | "filter" | "battery";

export type Offer = {
  id: string;
  vendorName: string;
  price: number;
  rating: string;
  delivery: string;
  referenceNumber: string;
  partType: PartType;
  yearRange: string;
};

// Placeholder offers for the offers-list page. Prices are plain numbers
// (SAR) so the list can be sorted ascending without extra parsing.
export const offers: Offer[] = [
  {
    id: "o1",
    vendorName: "متجر الأمانة للسيارات",
    price: 89,
    rating: "4.6",
    delivery: "توصيل خلال يومين",
    referenceNumber: "OF-2210-FLT",
    partType: "filter",
    yearRange: "2015-2019",
  },
  {
    id: "o2",
    vendorName: "متجر السرعة",
    price: 132,
    rating: "4.8",
    delivery: "توصيل خلال يوم",
    referenceNumber: "BT-7788-BAT",
    partType: "battery",
    yearRange: "2013-2020",
  },
  {
    id: "o3",
    vendorName: "مؤسسة الخليج لقطع الغيار",
    price: 145,
    rating: "4.8",
    delivery: "توصيل خلال يوم",
    referenceNumber: "TY-4351-BRK",
    partType: "brake",
    yearRange: "2015-2019",
  },
  {
    id: "o4",
    vendorName: "الوفاء لقطع غيار السيارات",
    price: 158,
    rating: "4.5",
    delivery: "توصيل خلال يومين",
    referenceNumber: "TY-4351-BRK-2",
    partType: "brake",
    yearRange: "2015-2019",
  },
  {
    id: "o5",
    vendorName: "معرض النخبة لقطع الغيار",
    price: 176,
    rating: "4.9",
    delivery: "توصيل خلال يوم",
    referenceNumber: "OF-2210-FLT-P",
    partType: "filter",
    yearRange: "2015-2022",
  },
  {
    id: "o6",
    vendorName: "بيت القطعة الأصلية",
    price: 210,
    rating: "4.7",
    delivery: "توصيل خلال 3 أيام",
    referenceNumber: "BT-7788-BAT-OE",
    partType: "battery",
    yearRange: "2013-2020",
  },
];
