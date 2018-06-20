import * as React from 'react';


interface IProps {
    todos: string[],
    deleteTodo: (todoIndex: number) => void
}

const TodoList: React.SFC<IProps> = ({todos, deleteTodo}: IProps) => {

    const btnClick =(todoIndex: number) => {
        // console.log(todoIndex),
        deleteTodo(todoIndex)
    };
    const items = todos.map((item: string, index: number) => {
        return (
            <li key={index}>
                {item} 
                <button onClick={btnClick.bind(null, index)}>X</button>
            </li>
        )
        
    });
        return(
            <div>
                Home Page
                <ul>
                    {items}
                </ul>
            </div>
        );
}

export default TodoList;
