import { Injectable } from '@nestjs/common';
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
    create(todo: Todo){
        todo.description = todo.description || '';
        this.todos = [...this.todos, todo];
    }
}
