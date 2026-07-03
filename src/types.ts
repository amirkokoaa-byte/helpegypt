export interface Station {
  id: string;
  nameAr: string;
  nameEn: string;
}

export interface TransportLine {
  id: string;
  nameAr: string;
  nameEn: string;
  type: 'metro' | 'monorail' | 'brt';
  color: string;
  stations: Station[];
}

export interface PricingTier {
  id: string;
  maxStations: number; // e.g. 9, 16, 23, 999
  price: number;
}

export interface SubscriptionTier {
  nameAr: string;
  nameEn: string;
  durationAr: string;
  durationEn: string;
  price: number;
  detailsAr: string;
  detailsEn: string;
}

export interface TelecomBundle {
  id: string;
  nameAr: string;
  nameEn: string;
  price: number;
  quota: string;
  validityAr: string;
  validityEn: string;
  code: string;
}

export interface TelecomADSLPlan {
  id: string;
  quota: string; // e.g., "140 GB", "250 GB"
  speed: string; // e.g., "Up to 30 Mbps"
  priceBeforeVat: number;
  priceWithVat: number;
}

export interface USSDCode {
  code: string;
  descriptionAr: string;
  descriptionEn: string;
  category: 'balance' | 'internet' | 'calls' | 'cash' | 'other';
}

export interface TelecomOperator {
  id: 'vodafone' | 'etisalat' | 'orange' | 'we';
  nameAr: string;
  nameEn: string;
  color: string;
  logoUrl: string;
  ussdCodes: USSDCode[];
  internetBundles: TelecomBundle[];
  callBundles: TelecomBundle[];
  postpaidPlans: {
    nameAr: string;
    nameEn: string;
    price: number;
    minutes: string;
    mobileInternet: string;
    benefitsAr: string;
    benefitsEn: string;
  }[];
  adslPlans: TelecomADSLPlan[];
}

export interface GovDocument {
  nameAr: string;
  nameEn: string;
  isRequired: boolean;
  notesAr?: string;
  notesEn?: string;
}

export interface GovService {
  id: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  documents: GovDocument[];
  feesAr: string;
  feesEn: string;
  durationAr: string;
  durationEn: string;
  officialUrl?: string;
}

export interface BasePricingSettings {
  metro: PricingTier[];
  monorailTicketPrice: number; // Flat rate
  brtTicketPrice: number; // Flat rate
  monorailTiers: PricingTier[];
  brtTiers: PricingTier[];
}

export interface PostOffice {
  id: string;
  nameAr: string;
  nameEn: string;
  postalCode: string;
  addressAr: string;
  addressEn: string;
  workingHoursAr: string;
  workingHoursEn: string;
  govAr: string;
  govEn: string;
  regionAr: string;
  regionEn: string;
}

