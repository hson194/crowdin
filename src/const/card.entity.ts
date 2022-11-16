export class CardEntity{
  _id: string;
  externalId: string;
  name: string;
  enable: boolean;
  cmsId: string;
  coverUrl?: string;
  description?: string;
  cashback?: string;
  annualFee?: number;
  interestRate?: string;
  minIncomePerMonth?: number;
  category?: string;
  bank?: any;
  giftIcon?: string;
  giftPhotoUrl?: string;
  giftTitle?: string;
  giftDescription?: string;
  cardFeatureSections?: any;
  cardFeatures?: any;
  totalApplications?: number;
}
