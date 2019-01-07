import { Action } from '@ngrx/store';

export const SET_FILTER = "[Filter] Set filtro";

export const ALL: string = 'todos';
export const COMPLETED: string = 'completados';
export const PENDING_TASKS: string = 'pendientes';

export type validFilters =  'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action {
    readonly type = SET_FILTER;
    constructor(public filtro: validFilters) {}
}

export type filterActions = SetFilterAction;