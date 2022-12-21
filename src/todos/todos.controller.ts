import { Body, Controller, Get, Post } from '@nestjs/common'; //post permet de gerer le post vers un chemin specifique
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor (private readonly todoService: TodosService ){}

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAll();
    } 
    @Post()
    createTodo(@Body() newTodo){ // récuperer le body de la requette
        console.log('newTodo', newTodo);
        this.todoService.create(newTodo);
    }
}
