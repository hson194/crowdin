import { Document, Schema } from "mongoose";
import { CardEntity } from "./card.entity";

export const CARD_SCHEMA_NAME = 'Card';

export const cardSchema = new Schema<CardEntity>({
  externalId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  enable: { type: Boolean, required: true },
  cmsId: { type: String, required: true, unique: true },
  coverUrl: { type: String, required: false},
  description: { type: String, required: false},
  cashback: { type: String, required: false},
  annualFee: { type: Number, required: false},
  interestRate: { type: String, required: false},
  minIncomePerMonth: { type: Number, required: false},
  category: { type: String, required: false},
  bank: { type: Schema.Types.Mixed, required: false},
  giftIcon: { type: String, required: false},
  giftPhotoUrl: { type: String, required: false},
  giftTitle: { type: String, required: false},
  giftDescription: { type: String, required: false},
  cardFeatures: { type: Schema.Types.Mixed, required: false},
  cardFeatureSections: { type: Schema.Types.Mixed, required: false},
  totalApplications: { type: Number, required: false, default: 0},
}, {
  timestamps: true
})

export type CardDocument = CardEntity & Document;
