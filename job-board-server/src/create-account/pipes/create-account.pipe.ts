import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';


@Injectable()
export class CreateAccountPipe implements PipeTransform<any> {

private validateInput(metatype : Function) : boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);

}
async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.validateInput(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
        console.log(errors);
        console.log('hello world');
      throw new HttpException('forbidden', HttpStatus.FORBIDDEN);
    } else {
        console.log('nope');
    }
    return value;
  }

    
}