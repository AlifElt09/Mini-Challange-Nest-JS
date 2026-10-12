import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { KasirTokoModule } from './05_kasir_toko/kasir_toko.module.js';
import { CekBilanganModule } from './01_cek_bilangan/cek_bilangan.module.js';
import { KonversiSuhuModule } from './02_konversi_suhu/konversi_suhu.module.js';
import { DeretBilanganModule } from './03_deret_bilangan/deret_bilangan.module.js';
import { NilaiRaporModule } from './04_nilai_rapor/nilai_rapor.module.js';
import { BuatBelajarNesrModule } from './00_buat_belajar_Nest/buat_belajar_nesr.module.js';

@Module({
  imports: [KasirTokoModule, CekBilanganModule, KonversiSuhuModule, DeretBilanganModule, NilaiRaporModule, BuatBelajarNesrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
