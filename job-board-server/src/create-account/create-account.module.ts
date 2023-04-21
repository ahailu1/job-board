import { Module } from '@nestjs/common';
import { CreateAccount } from './create-account.controller';
import { CreateAccountService } from './create-account.service';

@Module({
    controllers : [CreateAccount],
    providers : [CreateAccountService],
    exports : [CreateAccountService]
})
export class CreateAccountModule {}