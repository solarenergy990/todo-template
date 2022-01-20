import React from 'react';
import s from './Form.module.css';

const Form = () => {
  return (
    <div>
      <form className={s.form}>
        <div className={s.group}>
          {/* <label for="formGroupExampleInput">Example label</label> */}
          <div className={s.input}>
            <input
              type="text"
              class="form-control "
              id="formGroupExampleInput"
              placeholder="Example input"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
