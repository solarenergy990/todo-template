import React, { useState } from 'react';
import s from './TodoItem.module.css';

import { Button, Card, Form } from 'react-bootstrap';

const TodoItem = ({ todoItem }) => {
  const [activeCheck, setActiveCheck] = useState(false);
  console.log(activeCheck);

  const onHandleChange = () => {
    if (activeCheck) {
      setActiveCheck(false);
    }
    if (!activeCheck) {
      setActiveCheck(true);
    }
  };

  return (
    <div>
      <Card className={activeCheck ? `${s.card} ${s.active}` : s.card}>
        <Card.Body>
          <div className={s.content}>
            <Form.Check
              className={s.check}
              aria-label="option 1"
              onChange={() => onHandleChange()}
              checked={activeCheck}
            />

            {todoItem}
            <button type="button" className={s.close} aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TodoItem;
