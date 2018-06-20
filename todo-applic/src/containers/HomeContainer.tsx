import * as React from 'react';
import {Container} from 'flux/utils';
import TodoStores from '../stores/TodoStore';
import TodoList from '../components/TodoList';
import { deleteTodo } from '../actions/TodoActions';

interface IState {
    todos: string[]
}

// const getStores = () => {
//    return {
//        todos: TodoStores.getState().todos
//    };
// };

class HomeContainer extends React.Component<{}, IState>{
    public static getStores() {
        return [
            TodoStores
        ];
    }
    public static calculateState():IState{
        return{
            todos: TodoStores.getState().todos
        }
    }
    public render(){
        return(<TodoList
            deleteTodo={deleteTodo}
            todos={this.state.todos}
            />)
    }
}

export default Container.create(HomeContainer);
// export default Container.createFunctional(TodoList, getStores, getState);