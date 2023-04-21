import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateAccountModule } from './create-account/create-account.module';

import { AppService } from './app.service';

@Module({
  imports: [CreateAccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
