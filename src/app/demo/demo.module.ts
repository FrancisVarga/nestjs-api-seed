import { Module, RequestMethod, MiddlewaresConsumer } from '@nestjs/common';

import { SharedModule } from '../../shared/shared.module';
import { AuthMiddleware } from '../../shared/middlewares';

import { DemoController } from './demo.controller';

@Module({
  components: [],
  controllers: [DemoController],
  modules: [SharedModule],
  exports: [],
})
export class DemoModule {
  public configure(consumer: MiddlewaresConsumer) {
    consumer
      .apply(AuthMiddleware)
      .with([])
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
