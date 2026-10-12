import { Controller } from '@nestjs/common';
import { CekBilanganService } from './cek_bilangan.service.js';

@Controller('cek-bilangan')
export class CekBilanganController {
  constructor(private readonly cekBilanganService: CekBilanganService) {}
}
