import AppDispatcher from '../AppDispatcher';

export const addTodo = (todoItem: string) => {
    AppDispatcher.dispatch({
        payload: todoItem,
        type: 'ADD_TODO'        
    });
};