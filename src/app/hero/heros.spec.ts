import { Test } from '@nestjs/testing';
import { Mockgoose } from 'mockgoose';
import { Mongoose } from 'mongoose';

import { SharedModule } from '../../shared/shared.module';

import { HerosController } from './heros.controller';
import { HerosModel } from './heros.model';
import { HerosService } from './heros.service';
import { testHero0, testHero1 } from './heros.spec-data';

const mongoose = new Mongoose();
const mockgoose = new Mockgoose(mongoose);
const db = null;

beforeAll(async () => {
  await mockgoose.prepareStorage();
  this.db = mongoose.connect('mongodb://localhost/test');
  const instance = new HerosModel(this.db);
  const facilityRepo = instance.herosRepository();
  await facilityRepo.create(testHero0);
  await facilityRepo.create(testHero1);
  return this.db;
}, 20000);

afterAll(async () => {
  await mockgoose.helper.reset();
  return this.db.disconnect();
});

describe('Module: HerosModule', () => {
  describe('HerosRepository', () => {
    let herosService: HerosService;
    let herosController: HerosController;

    beforeEach(async () => {
      const module = await Test.createTestingModule({
        modules: [SharedModule],
        controllers: [HerosController],
        components: [HerosService, HerosModel],
      }).compile();

      herosService = module.get<HerosService>(HerosService);
      herosController = module.get<HerosController>(HerosController);
    });

    it('should find Hero by ObjectId', async () => {
      const instance = new HerosModel(this.db);
      const facilityRepo = instance.herosRepository();

      const result = await facilityRepo.findById('59b7f9b989be0533587b180d');

      expect(JSON.parse(JSON.stringify(result))).toMatchObject(testHero0);
    });
  });
});
