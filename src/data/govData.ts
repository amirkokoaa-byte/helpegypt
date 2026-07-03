import { GovService } from '../types';
import { trafficServices } from './gov/traffic';
import { civilServices } from './gov/civil';
import { notaryServices } from './gov/notary';
import { utilitiesServices } from './gov/utilities';
import { rentServices } from './gov/rent';

export const govServices: GovService[] = [
  ...trafficServices,
  ...civilServices,
  ...notaryServices,
  ...utilitiesServices,
  ...rentServices
];

export const serviceCategories = [
  { ar: 'الكل', en: 'All' },
  { ar: 'خدمات المرور', en: 'Traffic Services' },
  { ar: 'الأحوال الشخصية والمدنية', en: 'Civil & Personal Status' },
  { ar: 'الشهر العقاري والتوثيق', en: 'Real Estate & Notary' },
  { ar: 'شركات المرافق والخدمات', en: 'Utility Services' },
  { ar: 'عقود الإيجار والتمليك', en: 'Rent & Ownership' }
];
