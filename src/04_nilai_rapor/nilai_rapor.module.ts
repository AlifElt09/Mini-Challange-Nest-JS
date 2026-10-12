import { Module } from '@nestjs/common';
import { NilaiRaporService } from './nilai_rapor.service.js';
import { NilaiRaporController } from './nilai_rapor.controller.js';

@Module({
  controllers: [NilaiRaporController],
  providers: [NilaiRaporService],
})
export class NilaiRaporModule {}
