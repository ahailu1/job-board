import { IsString, IsInt, isString } from 'class-validator';


export class CreateAccountDto {
    @IsString()
    username : string;
    @IsString()
    password : string;
    @IsString()
    confirmPassword : string;
}