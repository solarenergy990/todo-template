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

  // const completeTodo = todoId => {
  //   const todoToComplete = todoList.find(todo => todoId === todo.id);

  //   if (!todoToComplete.done) {
  //     todoToComplete.done = true;
  //     console.log(todoList);
  //   } else {
  //     todoToComplete.done = false;
  //   }

  //   setTodoList(prevTodoList => {
  //     return [...prevTodoList];
  //   });
  // };

  return (
    <div>
      <Container>
        <TodoForm onSubmit={addTodo} />
      </Container>
      <Container>
        <TodoList list={todoList} />
      </Container>
    </div>
  );
}

export default App;
