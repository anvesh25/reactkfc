import * as React from 'react';


interface IProps {
    todos: string[]
}

const TodoList: React.SFC<IProps> = ({todos}) => {
    const items = todos.map((item: string, index: number) => <li key={index}>{item} </li>);
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
