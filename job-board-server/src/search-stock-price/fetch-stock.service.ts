import { Injectable } from "@nestjs/common";
import {FetchStockRequestInterface} from './interfaces/user-request.interface';

@Injectable()
export class FetchStockService {
    private readonly fetchStockRequest : FetchStockRequestInterface[] = [];
    
    requestStockPrice(getRequestDetails : FetchStockRequestInterface) {
        this.fetchStockRequest.push(getRequestDetails);
    }


}
