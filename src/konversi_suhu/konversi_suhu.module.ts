import { Module } from '@nestjs/common';
import { KonversiSuhuService } from './konversi_suhu.service.js';
import { KonversiSuhuController } from './konversi_suhu.controller.js';

@Module({
  controllers: [KonversiSuhuController],
  providers: [KonversiSuhuService],
})
export class KonversiSuhuModule {}
