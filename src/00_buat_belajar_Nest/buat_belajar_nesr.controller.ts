import { Controller } from '@nestjs/common';
import { BuatBelajarNesrService } from './buat_belajar_nesr.service.js';

@Controller('buat-belajar-nesr')
export class BuatBelajarNesrController {
  constructor(private readonly buatBelajarNesrService: BuatBelajarNesrService) {}
}
