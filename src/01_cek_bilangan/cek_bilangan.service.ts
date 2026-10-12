import { BadRequestException, Injectable } from '@nestjs/common';
import { CekBilanganDto } from './dto/cek_bilangan.dto.js';

@Injectable()
export class CekBilanganService {
  cekBilangan(angka: number): CekBilanganDto {
    if (!Number.isInteger(angka) || angka < 1 || angka > 100) {
      throw new BadRequestException('Angka harus bilangan bulat dari 1 sampai 100',);
    }
    return {
      angka,
      jenis: angka % 2 === 0 ? 'genap' : 'ganjil',
      kuadrat: angka * angka,
      kelipatanLima: angka % 5 === 0,
    };
  }
}
