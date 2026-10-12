import { Test, TestingModule } from '@nestjs/testing';
import { BuatBelajarNesrService } from './buat_belajar_nesr.service.js';

describe('BuatBelajarNesrService', () => {
  let service: BuatBelajarNesrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuatBelajarNesrService],
    }).compile();

    service = module.get<BuatBelajarNesrService>(BuatBelajarNesrService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
