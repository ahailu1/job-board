import { Controller, Get, Injectable, Param, Query } from "@nestjs/common";
import { FetchStockService } from "./fetch-stock.service";
@Controller('fetch-stock')
export class FetchStockController {
        constructor(private fetchStockService : FetchStockService ) {

        }
        @Get()
        requestStockPrice(@Query('id') query: any) : string {
                //validate id;;


                let stockInfo = this.fetchStockService.getStockPrice(query);
                console.log('qqq');
                console.log(query);
                return 'hello there';
        }
}