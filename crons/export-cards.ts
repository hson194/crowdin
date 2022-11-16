import { writeFileSync } from 'fs';
import mongoose from 'mongoose';
import { CARD_CONNECTION, CARD_COLLECTION } from '../src/const/common';
import { cardSchema } from '../src/const/card.schema';

async function main() {
  console.log('Connecting to DB:', CARD_CONNECTION);
  
  await mongoose.connect(CARD_CONNECTION);
  console.log('Connect DB success');
  const cardModel = mongoose.model(CARD_COLLECTION, cardSchema);
  let result = await cardModel.find({ enable: true });
  let cards = {};

  for (let i = 0; i < result.length; i++) {
    const element = result[i];
    cards[element._id] = element;
  }
 
  writeFileSync('../languages/en/cards.json', JSON.stringify(cards, null, 4))

  console.log('done!');
  process.exit(1);
}

main();

// Excute: npx tsx ./export-cards.ts
