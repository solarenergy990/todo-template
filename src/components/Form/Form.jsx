import React, { useState } from 'react';
import s from './Form.module.css';

const Form = ({ onSetList }) => {
  const [formState, setFormState] = useState(null);

  const onHandleChange = evt => {
    // console.log(evt.target.value);
    setFormState(evt.target.value);
  };

  const onHandleSubmit = evt => {
    evt.preventDefault();

    return onSetList();
  };

  return (
    <div>
      <form className={s.form} onSubmit={onHandleSubmit}>
        <div className={s.group}>
          <div className={s.input}>
            <input
              type="text"
              className="form-control "
              id="formGroupExampleInput"
              placeholder="Example input"
              onChange={onHandleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
