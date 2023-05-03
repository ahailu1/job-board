import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateAccountModule } from './create-account/create-account.module';
import { AppService } from './app.service';
import { FetchStockModule } from './search-stock-price/fetch-stock.module';

@Module({
  imports: [CreateAccountModule, FetchStockModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
