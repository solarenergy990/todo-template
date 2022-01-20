import React, { useState } from 'react';
import ListOfTodos from './ListOfTodos/ListOfTodos';

const TodoList = () => {
  return (
    <div>
      <ul>
        <li>
          <ListOfTodos />
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
