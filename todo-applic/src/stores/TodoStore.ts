import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

interface IState {
    todos: string[]
}

interface IAction {
    type:string,
    payload: string
}

class TodoStore extends ReduceStore<IState, IAction>{
    constructor() {
        super(AppDispatcher);
    }
    public getInitialState(): IState{
        return{
            todos: []
        };
    }
    public reduce(state: IState, action: IAction): IState {
        switch(action.type.toUpperCase()){
            case 'ADD_TODO' :
                return{
                    ...state,
                    todos: [...state.todos, action.payload]
                }
            default:
                return state;
        } 
    }
}
export default new TodoStore();