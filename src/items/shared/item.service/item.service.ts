import { Injectable } from '@nestjs/common';
import { Item } from '../item/item';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

@Injectable()
export class ItemService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async getAll() {
    return await this.itemModel.find().exec();
  }

  async getById(id: string) {
    return await this.itemModel.findById(id).exec();
  }

  async create(item: Item) {
    const createdTask = new this.itemModel(item);
    return await createdTask.save();
  }

  async update(id: string, item: Item) {
    await this.itemModel.updateOne({ _id: new ObjectId(id) }, item).exec();
    return this.getById(id);
  }

  async delete(id: string) {
    await this.itemModel.deleteOne({ _id: id }).exec();
  }
}
