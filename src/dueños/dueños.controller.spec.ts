import { Test, TestingModule } from '@nestjs/testing';
import { DueñosController } from './dueños.controller.js';
import { DueñosService } from './dueños.service.js';

describe('DueñosController', () => {
  let controller: DueñosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DueñosController],
      providers: [DueñosService],
    }).compile();

    controller = module.get<DueñosController>(DueñosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
