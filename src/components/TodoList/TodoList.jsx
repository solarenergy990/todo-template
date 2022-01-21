import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import s from './TodoList.module.css';

const TodoList = ({ list }) => {
  console.log('list of todos given by a prop:', list);
  return (
    <div>
      <ul className={s.card}>
        {list.map(item => {
          const { id, todo } = item;
          return (
            <li key={id}>
              <TodoItem todoItem={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
