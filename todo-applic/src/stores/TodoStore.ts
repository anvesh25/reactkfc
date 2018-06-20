import {ReduceStore} from 'flux/utils';
import AppDispatcher from '../AppDispatcher';

interface IState {
    todos: string[]
}

interface IAction {
    type:string,
    payload: string | number    // Union or a number 
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
                    todos: [...state.todos, action.payload as string]
                }
            case 'DELETE_Todo' :
                return{
                    ...state,
                    todos: [
                        ...state.todos.slice(0, action.payload as number),
                        ...state.todos.slice(action.payload as number + 1,  state.todos.length)
                    ]
                };
            default:
                return state;
        } 
    }
}
export default new TodoStore();