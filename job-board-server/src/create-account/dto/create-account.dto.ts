import { IsString, IsInt, isString, IsIn } from 'class-validator';


export class CreateAccountDto {
    @IsInt()
    username : string;
    @IsString()
    password : string;
    @IsString()
    confirmPassword : string;
}