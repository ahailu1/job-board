import { Module } from '@nestjs/common';
import { FetchStockService } from './fetch-stock.service';
import {FetchStockController} from './fetch-stock.controller';

@Module({
controllers : [FetchStockController],
providers : [FetchStockService],
exports : [FetchStockService],
})

export class FetchStockModule { }