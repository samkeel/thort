import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoData } from '../../models/todo-data.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit, OnDestroy {
  newTodoForm = this.fb.group({
    description: '',
  });

  todos: TodoData[] = [];
  sub!: Subscription;

  initialValues = this.fb.group({});

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  ngOnInit(): void {
    this.initialValues = this.newTodoForm.value;
    this.sub = this.todoService
      .readTodos()
      .subscribe((todos) => (this.todos = todos));
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get newDescription() {
    return this.newTodoForm.controls['description'];
  }

  onSubmit(): void {
    console.log(this.newDescription.value);

    const description = this.newDescription.value;
    const isCompleted = false;
    const display = true;

    this.todoService.createNewTodo({
      description: description,
      display: display,
      isCompleted: isCompleted,
    });
    this.newTodoForm.reset(this.initialValues);
  }

  completedClick(todo: TodoData): void {
    todo.isCompleted = !todo.isCompleted;
    this.todoService.updateTodo(todo.id, todo);
  }

  deleteClick(todoID: string): void {
    this.todoService.deleteTodo(todoID);
  }
}
