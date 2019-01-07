import { Component, OnInit } from '@angular/core';
import { validFilters, SetFilterAction } from '../../filter/filter.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';
import { DeleteAllTodoAction } from '../todo.actions';

@Component({
	selector: 'app-todo-footer',
	templateUrl: './todo-footer.component.html',
	styles: []
})
export class TodoFooterComponent implements OnInit {

	filters: validFilters [] = ['todos' , 'completados' , 'pendientes'];
	currentFilter: validFilters;
	pendingTasks: number;

	constructor(private store: Store<AppState>) { }

	ngOnInit() {
		this.store.subscribe((state) => {
			this.countPendingTasks(state.todos);
			this.currentFilter = state.filter;
		})
	}

	changeFilter(filter: validFilters) {
		this.store.dispatch(new SetFilterAction(filter));
	}

	countPendingTasks(todos: Todo[]) {
		this.pendingTasks = todos.filter((todo) =>{
			return !todo.completed
		}).length;
	}

	deleteAllTodos() {
		this.store.dispatch(new DeleteAllTodoAction());
	}

}
