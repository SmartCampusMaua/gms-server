import { Test, TestingModule } from '@nestjs/testing';
import { ReservatoryController } from './reservatory.controller';
import { ReservatoryService } from './reservatory.service';

describe('ReservatoryController', () => {
  let appController: ReservatoryController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ReservatoryController],
      providers: [ReservatoryService],
    }).compile();

    appController = app.get<ReservatoryController>(ReservatoryController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
