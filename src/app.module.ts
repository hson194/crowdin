import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { cardSchema } from './const/card.schema';
import { CARD_COLLECTION } from './const/common';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test-crowdin'),
    MongooseModule.forFeature([{ name: CARD_COLLECTION, schema: cardSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
