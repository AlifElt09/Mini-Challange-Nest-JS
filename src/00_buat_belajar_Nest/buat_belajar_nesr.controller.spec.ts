import { Test, TestingModule } from '@nestjs/testing';
import { BuatBelajarNesrController } from './buat_belajar_nesr.controller.js';
import { BuatBelajarNesrService } from './buat_belajar_nesr.service.js';

describe('BuatBelajarNesrController', () => {
  let controller: BuatBelajarNesrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuatBelajarNesrController],
      providers: [BuatBelajarNesrService],
    }).compile();

    controller = module.get<BuatBelajarNesrController>(BuatBelajarNesrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
