import React, { useState } from 'react';
import s from './Form.module.css';

import { Button, Form } from 'react-bootstrap';

const TodoForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState(null);

  const onHandleChange = evt => {
    setFormState(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    return onSubmit({ formState });
  };

  return (
    <div className={s.form}>
      <Form onSubmit={onHandleSubmit}>
        <div className={s.group}>
          <div className={s.input}>
            <Form.Control
              type="text"
              placeholder="Enter todo"
              onChange={onHandleChange}
            />
          </div>

          <Button variant="primary" type="submit">
            Add Todo
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default TodoForm;
