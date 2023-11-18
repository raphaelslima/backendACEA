import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemService } from './shared/item.service/item.service';
import { Item } from './shared/item/item';

@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemService) {}

  @Get()
  async getAll(): Promise<Item[]> {
    return this.itemService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Item> {
    return this.itemService.getById(id);
  }

  @Post()
  async create(@Body() item: Item): Promise<Item> {
    return this.itemService.create(item);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() item: Item): Promise<Item> {
    return this.itemService.update(id, item);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.itemService.delete(id);
  }
}
