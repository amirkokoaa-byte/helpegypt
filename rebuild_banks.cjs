const fs = require('fs');

const nbeData = JSON.parse(fs.readFileSync('nbe_500_branches_real.json', 'utf8'));
const bmData = JSON.parse(fs.readFileSync('public/banque_misr_300_branches.json', 'utf8'));
const bdcData = JSON.parse(fs.readFileSync('public/bdc_250_branches.json', 'utf8'));
const abeData = JSON.parse(fs.readFileSync('public/abe_250_branches.json', 'utf8'));

// The other banks in a small stub array:
const otherBanks = [
  {
    "id": "cib",
    "nameAr": "البنك التجاري الدولي",
    "nameEn": "Commercial International Bank (CIB)",
    "category": "Private/Regional Commercial Bank",
    "categoryAr": "بنوك تجارية خاصة وإقليمية",
    "descriptionAr": "أكبر بنك قطاع خاص في مصر، يقدم خدمات مالية متميزة للشركات والأفراد.",
    "descriptionEn": "The largest private sector bank in Egypt, offering premium financial services for corporate and retail clients.",
    "branches": [
      {
        "branchName": "فرع المهندسين",
        "governorate": "الجيزة",
        "district": "المهندسين",
        "detailedAddress": "شارع جامعة الدول العربية، المهندسين",
        "phone": "19666",
        "googleMapsLink": "https://maps.app.goo.gl/dummy"
      }
    ]
  },
  {
    "id": "faisal_bank",
    "nameAr": "بنك فيصل الإسلامي",
    "nameEn": "Faisal Islamic Bank",
    "category": "Islamic Bank",
    "categoryAr": "بنوك إسلامية",
    "descriptionAr": "أول وأكبر بنك إسلامي في مصر، يعمل وفقاً لأحكام الشريعة الإسلامية.",
    "descriptionEn": "The first and largest Islamic bank in Egypt, operating in accordance with Islamic Sharia.",
    "branches": [
      {
        "branchName": "الفرع الرئيسي",
        "governorate": "القاهرة",
        "district": "وسط البلد",
        "detailedAddress": "شارع طلعت حرب",
        "phone": "19851",
        "googleMapsLink": "https://maps.app.goo.gl/dummy"
      }
    ]
  },
  {
    "id": "qnb",
    "nameAr": "بنك قطر الوطني الأهلي",
    "nameEn": "QNB Alahli",
    "category": "Private/Regional Commercial Bank",
    "categoryAr": "بنوك تجارية خاصة وإقليمية",
    "descriptionAr": "من أكبر بنوك القطاع الخاص في مصر.",
    "descriptionEn": "One of the largest private sector banks in Egypt.",
    "branches": []
  },
  {
    "id": "alexbank",
    "nameAr": "بنك الإسكندرية",
    "nameEn": "Alexbank (Intesa Sanpaolo)",
    "category": "Private/Regional Commercial Bank",
    "categoryAr": "بنوك تجارية خاصة وإقليمية",
    "descriptionAr": "بنك رائد في السوق المصري وجزء من مجموعة إنتيسا سان باولو.",
    "descriptionEn": "A leading bank in the Egyptian market and part of the Intesa Sanpaolo group.",
    "branches": []
  }
];

const allBanks = [
  nbeData,
  bmData,
  bdcData,
  abeData,
  ...otherBanks
];

const tsContent = `export interface Branch {
  branchName: string;
  governorate: string;
  district: string;
  detailedAddress: string;
  phone: string;
  googleMapsLink: string;
}

export interface Bank {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'State Bank' | 'Private/Regional Commercial Bank' | 'Arab/International Bank' | 'Islamic Bank' | 'Public Sector Bank';
  categoryAr: string;
  descriptionAr: string;
  descriptionEn: string;
  branches: Branch[];
}

export const egyptBanksData: Bank[] = ${JSON.stringify(allBanks, null, 2)};
`;

fs.writeFileSync('src/data/egyptBanksData.ts', tsContent, 'utf8');
console.log("Successfully rebuilt egyptBanksData.ts");
