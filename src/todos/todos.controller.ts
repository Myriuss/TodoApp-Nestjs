import { Body, Controller, Get, Param, Post } from '@nestjs/common'; //post permet de gerer le post vers un chemin specifique
import { Todo } from './interfaces/todo.interface';
import { TodosService } from './todos.service';

// localhost:3000/todos
@Controller('todos')
export class TodosController {
    constructor (private readonly todoService: TodosService ){}
/**
 * le decorateur get indique que la methode findallgere les requette
 * http GET sur la route /todos.
 * cette methode appelle la methode findall du service todoService
 * et renvoie le résultat
 * 
 * Le décorateur post indique que la méthode createTodo gere les requettes
 * http post sur la route /todos
 * cette methode utilise le decorateur body pour recuperer le corps de la requette
 * et passe la valeur a todoService pour la creation de la tache a effectuer (todo)
 */

    @Get(':id')
    findOne(@Param('id') id: string){
        return this.todoService.findOne(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todoService.findAll(); // findall retourne toute les taches a effectuer
    } 
    @Post()
    createTodo(@Body() newTodo){ // crer une nouvelle tache avec createTodo et récuperer le body de la requette
        console.log('newTodo', newTodo);
        this.todoService.create(newTodo);
    }
}
