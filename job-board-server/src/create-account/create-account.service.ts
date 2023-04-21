import { Injectable } from "@nestjs/common";
import { CreateAccountInterface } from "./interfaces/create-account.interface";


@Injectable()
export class CreateAccountService {
    private readonly UserAccounts : CreateAccountInterface[] = [];
    createAccount(CreateNewUser : CreateAccountInterface) {
        this.UserAccounts.push(CreateNewUser);
    }
    getAllAccounts() : CreateAccountInterface[] {
        return this.UserAccounts;
    }
}