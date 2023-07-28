import { Injectable } from '@nestjs/common';
import { TodoItem } from './interfaces/todo_item.interface';

@Injectable()
export class TodoItemService {
  private readonly todosItem: TodoItem;

  constructor(todosItem: TodoItem) {
    this.todosItem = todosItem;
  }

  public getItem(): TodoItem {
    return this.todosItem;
  }
}
