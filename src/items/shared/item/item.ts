import { Document } from 'mongoose';

export class Item extends Document {
  name: string;
  qtd: number;
}
