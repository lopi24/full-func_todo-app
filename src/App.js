import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  // when rendering a list and distributing it to other component. It is necessary to put it into the main component(App.js), so that we can pass it as props to any component that we want because, all of the component is connected to the main component. That's why the todoList is here.

  const [ todo, setTodo ] = useState('');
  const [ todoList, setTodoList ] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <Todo />
    </div>
  );
}

export default App;
