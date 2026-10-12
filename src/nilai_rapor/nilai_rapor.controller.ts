import { Controller } from '@nestjs/common';
import { NilaiRaporService } from './nilai_rapor.service.js';

@Controller('nilai-rapor')
export class NilaiRaporController {
  constructor(private readonly nilaiRaporService: NilaiRaporService) {}
}
