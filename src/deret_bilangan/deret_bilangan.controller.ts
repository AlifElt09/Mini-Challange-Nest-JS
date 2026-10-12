import { Controller } from '@nestjs/common';
import { DeretBilanganService } from './deret_bilangan.service.js';

@Controller('deret-bilangan')
export class DeretBilanganController {
  constructor(private readonly deretBilanganService: DeretBilanganService) {}
}
