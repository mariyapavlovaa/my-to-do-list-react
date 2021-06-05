import React from 'react';
import Todo from './Todo';
const ToDoListDownPart = ({ toDoVariable, setToDoVariable, filteredToDo }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                { filteredToDo.map((todo) => (
                    <Todo
                        setToDoVariable={setToDoVariable}
                        toDoVariable={toDoVariable}
                        key={todo.id}
                        todo={todo}
                        text={todo.text} />
                ))}
            </ul>

        </div>

    );
};

export default ToDoListDownPart;