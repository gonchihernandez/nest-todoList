import { TodoItem } from 'src/todo-item/interfaces/todo_item.interface';

export interface TodoList {
  id: number;
  name: string;
  todo_items?: TodoItem[];
}
