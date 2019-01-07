import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const estadoInicial: Todo[] = [
    new Todo('Acabar pantalla asignación'),
    new Todo('Revisar Ajustes')
];

export function todoReducer(state = estadoInicial, action: fromTodo.Actions) : Todo[] {
    
    switch(action.type) {
        
        case fromTodo.ADD_TODO:
            const todo = new Todo(action.payload);
            return [...state, todo];

        case fromTodo.TOGGLE_TODO:
            return state.map(modifyTodo(action.payload, action.payload, toogleTodo));

        case fromTodo.TOGGLE_ALL_TODO:
            return state.map((todo) => {
                return {
                    ...todo,
                    completed: action.payload
                }
            });

        case fromTodo.Edit_TODO:
            return state.map(modifyTodo(action.payload.id, action.payload, editTodo));
       
        case fromTodo.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        
        case fromTodo.DELETE_ALL_TODO:
            return state.filter(todo => !todo.completed);
       
        default: 
            return state;
    }
}

function modifyTodo(id:number, payload: any, callback: Function) {
    return (todo: Todo) => {
        if(todo.id === id) {
            return callback(todo, payload)
        } else {
            return todo;
        }
    }
}

function toogleTodo(todo: Todo): Todo {
    return {
        ...todo,
        completed: !todo.completed
    }
}

function editTodo(todo: Todo, payload): Todo {
    return {
        ...todo,
        text: payload.text
    }
}

