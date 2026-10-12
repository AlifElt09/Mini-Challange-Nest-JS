import { Module } from '@nestjs/common';
import { BuatBelajarNesrService } from './buat_belajar_nesr.service.js';
import { BuatBelajarNesrController } from './buat_belajar_nesr.controller.js';

@Module({
  controllers: [BuatBelajarNesrController],
  providers: [BuatBelajarNesrService],
})
export class BuatBelajarNesrModule {}
