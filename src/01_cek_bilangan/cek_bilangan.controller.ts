import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { CekBilanganService } from './cek_bilangan.service.js';

@Controller('bilangan')
export class CekBilanganController {
  constructor(private readonly cekBilanganService: CekBilanganService,) {}

  @Get(':angka')
  cekBilangan(@Param('angka', ParseIntPipe) angka: number) {
    return this.cekBilanganService.cekBilangan(angka);
  }
}