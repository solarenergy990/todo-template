import React, { useState } from 'react';
import Container from '../Container/Container';
import TodoList from '../TodoList/TodoList';
import TodoForm from '../TodoForm/TodoForm';

import initialData from '../../mock/todo.json';
import shortid from 'shortid';

function App() {
  const [todoList, setTodoList] = useState(initialData);

  const addTodo = data => {
    const { formState } = data;
    console.log(data);
    const todoItem = {
      id: shortid.generate(),
      todo: formState,
    };

    setTodoList(prevTodoList => {
      return [...prevTodoList, todoItem];
    });
  };

  const closeTodo = todoId => {
    setTodoList(todoList.filter(todo => todoId !== todo.id));
  };

  return (
    <div>
      <Container>
        <TodoForm onSubmit={addTodo} />
      </Container>
      <Container>
        <TodoList list={todoList} onCloseTodo={closeTodo} />
      </Container>
    </div>
  );
}

export default App;
