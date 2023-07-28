import { Module } from '@nestjs/common';
import { TodoItemModule } from 'src/todo-item/todo-item.module';
import { TodoListsController } from './todo_lists.controller';
import { TodoListsService } from './todo_lists.service';

@Module({
  imports: [TodoItemModule],
  controllers: [TodoListsController],
  providers: [
    { provide: TodoListsService, useValue: new TodoListsService([]) },
  ],
})
export class TodoListsModule {}
