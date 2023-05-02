import { Controller, Get, Injectable } from "@nestjs/common";
import { FetchStockService } from "./fetch-stock.service";
@Controller('fetch-stock-request')
export class FetchStockRequest {
        constructor(private fetchStockService : FetchStockService ) {

        }
        @Get('fetch-stock:id')
        requestStockPrice() {
                console.log('here');
        }
}