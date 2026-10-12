import { Module } from '@nestjs/common';
import { CekBilanganService } from './cek_bilangan.service.js';
import { CekBilanganController } from './cek_bilangan.controller.js';

@Module({
  controllers: [CekBilanganController],
  providers: [CekBilanganService],
})
export class CekBilanganModule {}
