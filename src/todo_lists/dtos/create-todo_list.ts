import { TodoItem } from 'src/todo-item/interfaces/todo_item.interface';

export class CreateTodoListDto {
  name: string;
  todo_items?: TodoItem[];
}
