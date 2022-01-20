import React, { useState } from 'react';
import Container from '../Container/Container';
import TodoList from '../TodoList/TodoList';
import Form from '../Form/Form';

import initialData from '../../mock/todo.json';

function App() {
  const [todoList, setTodoList] = useState(initialData);

  return (
    <div>
      <Container>
        <Form onSetList={setTodoList} />
      </Container>
      <Container>
        <TodoList list={todoList} />
      </Container>
    </div>
  );
}

export default App;
