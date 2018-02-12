import { Get, Controller } from '@nestjs/common';

@Controller('demo')
export class DemoController {
  constructor() {}

  @Get()
  root(): string {
    return 'Demo';
  }
}
