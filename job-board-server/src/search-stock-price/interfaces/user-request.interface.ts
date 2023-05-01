import {string} from 'joi';

export interface FetchStockRequestInterface  {
    username: string | null;
    token : string;
    isAuthenticated : boolean;
}