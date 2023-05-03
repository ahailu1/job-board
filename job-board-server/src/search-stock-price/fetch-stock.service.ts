import { Injectable } from "@nestjs/common";
import {FetchStockRequestInterface} from './interfaces/user-request.interface';
const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "ch84941r01qhapm5k6i0ch84941r01qhapm5k6ig" // Replace this
const finnhubClient = new finnhub.DefaultApi()


@Injectable()
export class FetchStockService {
    private readonly fetchStockRequest : FetchStockRequestInterface[] = [];

    requestStockPrice(getRequestDetails : FetchStockRequestInterface) {
        console.log(getRequestDetails);
        this.fetchStockRequest.push(getRequestDetails);
    }
    
    getStockInfo(){

    }

    returnAllStockRequests() : FetchStockRequestInterface[] {
        return this.fetchStockRequest;
    }


}
