import { Module } from '@nestjs/common';
import { KasirTokoService } from './kasir_toko.service.js';
import { KasirTokoController } from './kasir_toko.controller.js';

@Module({
  controllers: [KasirTokoController],
  providers: [KasirTokoService],
})
export class KasirTokoModule {}
