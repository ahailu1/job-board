import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express'
import { CreateAccountService } from './create-account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { CreateAccountInterface } from './interfaces/create-account.interface';
import { CreateAccountPipe } from './pipes/create-account.pipe';
@Controller('create-account')
export class CreateAccount {
    constructor(private createUserService : CreateAccountService ) {

    }
    @Post()
    testt(@Body(new CreateAccountPipe()) createAccountDto : CreateAccountDto) {
        this.createUserService.createAccount(createAccountDto)
    }
    
}