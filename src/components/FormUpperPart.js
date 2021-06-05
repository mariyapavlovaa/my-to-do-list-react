import React from "react";

const FormUpperPart = ({ setInputVariable, toDoVariable, setToDoVariable, inputVariable, setStatus }) => {
    // In this place I can write javaScript code and functions
    const inputVariableHandler = (e) => {
        //console.log(e.target.value);
        setInputVariable(e.target.value);
    };

    const submitToDoHandler = (e) => {
        e.preventDefault();
        setToDoVariable([
            ...toDoVariable,
            { text: inputVariable, completed: false, id: Math.random() * 1000 }]);
        setInputVariable("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input /*mistake here*/  value={inputVariable} onChange={inputVariableHandler}  type="text" className="todo-input" />
            <button onClick={submitToDoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

};

export default FormUpperPart;