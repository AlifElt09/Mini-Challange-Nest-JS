import { Controller } from '@nestjs/common';
import { KonversiSuhuService } from './konversi_suhu.service.js';

@Controller('konversi-suhu')
export class KonversiSuhuController {
  constructor(private readonly konversiSuhuService: KonversiSuhuService) {}
}
