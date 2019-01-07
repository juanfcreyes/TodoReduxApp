import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { AddTodoAction } from '../todo.actions';

@Component({
	selector: 'app-todo-add',
	templateUrl: './todo-add.component.html',
	styles: []
})
export class TodoAddComponent implements OnInit {

	txtInput: FormControl;

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.txtInput = new FormControl('', Validators.required);
	}

	addTodo() {
		if(this.txtInput.invalid) {
			return;
		}
		this.store.dispatch(new AddTodoAction(this.txtInput.value));
		this.txtInput.setValue('');
	}

}
