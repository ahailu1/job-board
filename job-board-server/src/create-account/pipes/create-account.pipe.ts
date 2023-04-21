import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';


@Injectable
export class ValidateCreateAccount implements PipeTransform<any> {

}