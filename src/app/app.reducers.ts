import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';
import { validFilters } from './filter/filter.actions';

export interface AppState {
    todos: Todo[];
    filter: validFilters;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}