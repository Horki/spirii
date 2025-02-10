import { NestFactory } from '@nestjs/core';
import { AggregateModule } from './aggregate.module';

async function bootstrap() {
  const app = await NestFactory.create(AggregateModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
