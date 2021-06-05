import React from 'react';


const Todo = ({ text, todo, setToDoVariable, toDoVariable }) => {
    //new event
    const deleteHandler = () => {
        //save again all of the elements in the list with the todos except the deleted one
        setToDoVariable(toDoVariable.filter(el => el.id !== todo.id));
    };
    //new event
    const completeHandler = () => {
        setToDoVariable(toDoVariable.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }));
    };
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className='fas fa-check'></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className='fas fa-trash'></i></button>
        </div>
    );
}

export default Todo;