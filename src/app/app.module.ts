import { DemoModule } from './demo/demo.module';
import { Module } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';

@Module({
  modules: [SharedModule, DemoModule],
  controllers: [],
  components: [],
  exports: [],
})
export class AppModule {}
