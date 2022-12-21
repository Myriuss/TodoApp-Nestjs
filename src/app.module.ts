import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; //ecouter les requettes entrantes et envoyer une réponse
import { AppService } from './app.service'; //donner des fonctionnalités au controller
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
