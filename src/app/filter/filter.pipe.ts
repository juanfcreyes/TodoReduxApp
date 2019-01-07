import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { validFilters, ALL, COMPLETED, PENDING_TASKS } from './filter.actions';

@Pipe({
	name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

	transform(todos: Todo[], filter: validFilters): Todo[] {
		switch (filter) {
			case ALL: 
				return todos;
			case COMPLETED: 
				return todos.filter(todo => todo.completed);
			case PENDING_TASKS: 
				return todos.filter(todo => !todo.completed);
		}
	}

}
