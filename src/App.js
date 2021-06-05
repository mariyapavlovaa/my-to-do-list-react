import React, { useState, useEffect } from "react";
import './App.css';
import FormUpperPart from "./components/FormUpperPart";
import ToDoListDownPart from "./components/ToDoListDownPart";

//Alt+Shift+F= Formatting
function App() {


  //State info
  const [inputVariable, setInputVariable] = useState("");
  const [toDoVariable, setToDoVariable] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDo, setFilteredToDo] = useState([]);


  //Use Effect
  useEffect(() => {
    //console.log('hey')
    filterHandler();
  }, [toDoVariable, status]);

  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDo(toDoVariable.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDo(toDoVariable.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredToDo(toDoVariable);
        break;
    }
  };


  return (
    <div className="App">
      <header>Welcome to Mariya's To Do List</header>
      <FormUpperPart
        inputVariable={inputVariable}
        toDoVariable={toDoVariable}
        setToDoVariable={setToDoVariable}
        setInputVariable={setInputVariable}
        setStatus={setStatus}
      />
      <ToDoListDownPart
        setToDoVariable={setToDoVariable}
        toDoVariable={toDoVariable}
        filteredToDo={filteredToDo} />
    </div>
  );
}

export default App;
