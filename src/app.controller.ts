import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//le controller c'est un décorateur et ça comment par @

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //decorateur qui permet d'ecouter les requettes entrante
  getHello(): string { //typage 
    return this.appService.getHello();
  }
}
