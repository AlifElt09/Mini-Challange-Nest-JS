import { Module } from '@nestjs/common';
import { DeretBilanganService } from './deret_bilangan.service.js';
import { DeretBilanganController } from './deret_bilangan.controller.js';

@Module({
  controllers: [DeretBilanganController],
  providers: [DeretBilanganService],
})
export class DeretBilanganModule {}
