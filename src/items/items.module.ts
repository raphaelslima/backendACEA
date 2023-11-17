import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemService } from './shared/item.service/item.service';
import { ItemSchema } from './schemas/item.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Item',
        schema: ItemSchema,
      },
    ]),
  ],
  controllers: [ItemsController],
  providers: [ItemService],
})
export class ItemsModule {}
