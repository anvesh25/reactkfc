import AppDispatcher from '../AppDispatcher';

export const addTodo = (todoItem: string) => {
    AppDispatcher.dispatch({
        payload: todoItem,
        type: 'ADD_TODO'        
    });
};

export const deleteTodo = (indexOfItem: number) => {
    AppDispatcher.dispatch({
        payload: indexOfItem,
        type: 'DELETE_Todo'
    });
};