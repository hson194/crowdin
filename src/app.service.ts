import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CardDocument } from './const/card.schema';
import { CARD_COLLECTION } from './const/common';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(CARD_COLLECTION)
    private readonly cardModel: mongoose.Model<CardDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getCards(): Promise<any> {
    return await this.cardModel.find({});
  }
}
