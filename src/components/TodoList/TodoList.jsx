import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import s from './TodoList.module.css';

const TodoList = ({ list, onCloseTodo }) => {
  console.log('list of todos given by a prop:', list);
  return (
    <div>
      <ul className={s.card}>
        {list.map(item => {
          const { id, todo } = item;
          return (
            <li key={id}>
              <TodoItem
                todoItem={todo}
                onClickCloseButton={() => onCloseTodo(id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
