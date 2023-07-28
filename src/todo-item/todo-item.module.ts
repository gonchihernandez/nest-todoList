import { Module } from '@nestjs/common';
import { TodoItemController } from './todo-item.controller';
import { TodoItemService } from './todo-item.service';

@Module({
  controllers: [TodoItemController],
  providers: [
    {
      provide: TodoItemService,
      useValue: new TodoItemService({
        description: 'firstItem', // I dont know why I have to initializate this
        completed: false,
      }),
    },
  ],
  exports: [TodoItemService],
})
export class TodoItemModule {}
