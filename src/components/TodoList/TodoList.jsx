import React, { useState } from 'react';
import ListOfTodos from './ListOfTodos/ListOfTodos';

import initialData from '../../mock/todo.json';

const TodoList = () => {
  const [todoList, setTodoList] = useState(initialData);

  return (
    <div>
      <ul>
        <li>
          <ListOfTodos todo={todoList} />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
