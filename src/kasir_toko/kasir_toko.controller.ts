import { Controller } from '@nestjs/common';
import { KasirTokoService } from './kasir_toko.service.js';

@Controller('kasir-toko')
export class KasirTokoController {
  constructor(private readonly kasirTokoService: KasirTokoService) {}
}
