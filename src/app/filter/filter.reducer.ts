import * as fromFilter from './filter.actions';

const initialState: fromFilter.validFilters = 'todos';

export function filterReducer(state = initialState, 
    action: fromFilter.filterActions): fromFilter.validFilters {
        switch (action.type) {
            case fromFilter.SET_FILTER:
                return action.filtro;
            default: 
                return state
        }
    }