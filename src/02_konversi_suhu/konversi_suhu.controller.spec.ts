import { Test, TestingModule } from '@nestjs/testing';
import { KonversiSuhuController } from './konversi_suhu.controller.js';
import { KonversiSuhuService } from './konversi_suhu.service.js';

describe('KonversiSuhuController', () => {
  let controller: KonversiSuhuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KonversiSuhuController],
      providers: [KonversiSuhuService],
    }).compile();

    controller = module.get<KonversiSuhuController>(KonversiSuhuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
