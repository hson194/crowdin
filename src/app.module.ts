import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { cardSchema } from './const/card.schema';
import { CARD_COLLECTION, CARD_CONNECTION } from './const/common';

@Module({
  imports: [
    MongooseModule.forRoot(CARD_CONNECTION),
    MongooseModule.forFeature([{ name: CARD_COLLECTION, schema: cardSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
