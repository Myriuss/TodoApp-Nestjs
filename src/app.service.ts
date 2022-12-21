import { Injectable } from '@nestjs/common';

@Injectable() //une classe qu'on veut injecter comme service
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
