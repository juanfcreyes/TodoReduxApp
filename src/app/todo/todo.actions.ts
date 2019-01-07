import { Action } from '@ngrx/store'

export const ADD_TODO = '[Todo] Agregar todo';
export const TOGGLE_TODO = "[Todo] Cambiar estado";
export const TOGGLE_ALL_TODO = "[Todo] Cambiar todos estado";
export const Edit_TODO = "[Todo] Editar todo";
export const DELETE_TODO = "[Todo] Eliminar todo";
export const DELETE_ALL_TODO = "[Todo] Eliminar todos";

export class AddTodoAction implements Action {
    readonly type: string = ADD_TODO;   
    constructor (public payload: any) {}
}

export class ToggleTodoAction implements Action {
    readonly type: string = TOGGLE_TODO;   
    constructor (public payload: any) {}
}

export class ToggleAllTodoAction implements Action {
    readonly type: string = TOGGLE_ALL_TODO;   
    constructor (public payload: any) {}
}

export class EditTodoAction implements Action {
    readonly type: string = Edit_TODO;   
    constructor (public payload: any) {}
}

export class DeleteTodoAction implements Action {
    readonly type: string = DELETE_TODO;   
    constructor (public payload: any) {}
}

export class DeleteAllTodoAction implements Action {
    readonly type: string = DELETE_ALL_TODO;  
    payload? : any;
}

export type Actions = AddTodoAction | ToggleAllTodoAction
 | ToggleTodoAction | EditTodoAction | DeleteTodoAction | DeleteAllTodoAction;
