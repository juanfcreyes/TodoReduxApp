import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from 'src/app/app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';


@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styles: []
})
export class TodoItemComponent implements OnInit {

	@Input() todo: Todo;
	@ViewChild('txtInputTodo') txtInputTodo: ElementRef;

	checkField: FormControl;
	txtInput: FormControl;
	editing: boolean = false;

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.checkField = new FormControl(this.todo.completed);
		this.txtInput = new FormControl(this.todo.text, Validators.required);
		this.checkField.valueChanges.subscribe(() => {
			this.store.dispatch(new ToggleTodoAction(this.todo.id));
		});
	}

	edit() {
		this.editing = true;
		setTimeout(() => {
			this.txtInputTodo.nativeElement.select();
		}, 1);
	}

	finishEdition() {
		this.editing = false;
		if (this.txtInput.invalid) {
			return;
		}
		if (this.txtInput.value === this.todo.text) {
			return;
		}
		this.store.dispatch(new EditTodoAction({
			id: this.todo.id,
			text: this.txtInput.value
		}));
	}

	deleteTodo() {
		this.store.dispatch(new DeleteTodoAction(this.todo.id));
	}


}
