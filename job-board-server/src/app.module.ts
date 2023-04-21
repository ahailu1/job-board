import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateAccount } from './create-account/create-account.controller';

import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, CreateAccount],
  providers: [AppService],
})
export class AppModule {}
