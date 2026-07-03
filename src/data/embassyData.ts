import { embassiesPart1 } from './embassies_part1';
import { embassiesPart2 } from './embassies_part2';
import { embassiesPart3 } from './embassies_part3';
import { embassiesPart4 } from './embassies_part4';

export interface Embassy {
  id: string;
  countryAr: string;
  countryEn: string;
  nameAr: string;
  nameEn: string;
  regionAr: string;
  regionEn: string; // e.g. Arab State, Europe, Americas, Asia
  addressAr: string;
  addressEn: string;
  phones: string[];
  workingHoursAr: string;
  workingHoursEn: string;
  email: string;
  website: string;
  locationLink: string; // Google Maps search link or coordinates
  continent: 'Arab' | 'Europe' | 'Americas' | 'Asia' | 'Africa';
}

// Consolidate the 144 unique embassies and consulates
export const embassiesData: Embassy[] = [
  ...embassiesPart1,
  ...embassiesPart2,
  ...embassiesPart3,
  ...embassiesPart4
];
