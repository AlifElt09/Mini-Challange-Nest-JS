import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { KasirTokoModule } from './kasir_toko/kasir_toko.module.js';
import { CekBilanganModule } from './cek_bilangan/cek_bilangan.module.js';
import { KonversiSuhuModule } from './konversi_suhu/konversi_suhu.module.js';
import { DeretBilanganModule } from './deret_bilangan/deret_bilangan.module.js';
import { NilaiRaporModule } from './nilai_rapor/nilai_rapor.module.js';

@Module({
  imports: [KasirTokoModule, CekBilanganModule, KonversiSuhuModule, DeretBilanganModule, NilaiRaporModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
