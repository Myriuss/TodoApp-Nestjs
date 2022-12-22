import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Injectable()
export class TodosService {
    todos = [
        {
            id :1,
            title : 'todos app', 
            description : 'Créer une todo app NestJS',
            done : false,
        },
        {
            id :2,
            title : 'croquette', 
            description : 'Chri croquette',
            done : true,
        },
        {
            id :3,
            title : 'patate', 
            description : 'Chri btata',
            done : true,
        },

    ];

    findOne(id: string){
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }
    create(todo: CreateTodoDto){
        this.todos = [...this.todos, todo];
    }
    update(id: string, todo: Todo){
        //recuperer le todo
        const todoToUpdate = this.todos.find(t => t.id === +id)// + permet de castrer en number
        if(!todoToUpdate){
            return new NotFoundException('est ce que tu as trouvé ce todo?');
        }
        //appliquer les modifications dans une propriete
        if(todo.hasOwnProperty('done')){
            todoToUpdate.done = todo.done;
        }
        if(todo.title){
            todoToUpdate.title = todo.title;
        }
        if(todo.description){
            todoToUpdate.description = todo.description;
        }
        const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
        this.todos = [...updatedTodos];
        return { updatedTodos: 1, todo: updatedTodos};
    }
}
