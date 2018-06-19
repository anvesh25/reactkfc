import * as React from 'react';

interface Iprops {
    onAddTodo: (todoItem: string) => void
}

const AddTodoComponent: React.SFC<Iprops> = ({onAddTodo}: Iprops) => {
    let inputEl :HTMLInputElement;
    const setInputEl = (el:HTMLInputElement) => {
        inputEl = el;
    };
    const onBtnClick = () => {
        onAddTodo(inputEl.value);
    }
    return(
        <div>
            <input type="text" ref={setInputEl}/>
            <button onClick={onBtnClick}>AddTodo</button>
        </div>
    );
}

export default AddTodoComponent;