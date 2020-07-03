import React from 'react';
import PropTypes from 'prop-types';

import { TodoFormInput } from '../TodoFormInput/TodoFormInput';
import { TodoFormSelect } from '../TodoFormSelect/TodoFormSelect';
import './TodoForm.css';

export const TodoForm = ({
  users,
  addTempoTitle,
  addTempoUser,
  addTodo,
  inputIsValid,
  selectIsValid,
}) => (
  <form className="Todo__form form" onSubmit={addTodo}>
    <div className="form__input-wrapper">
      <TodoFormInput addTempoTitle={addTempoTitle} />
      {!inputIsValid
        ? <p className="form__error_message">Enter your task</p>
        : <></>
      }
    </div>
    <div className="form__select-wrapper">
      <TodoFormSelect
        users={users}
        addTempoUser={addTempoUser}
      />
      {!selectIsValid
        ? <p className="form__error_message">Please, sellect a user</p>
        : <></>
      }
    </div>
    <button className="btn" type="submit">
      Add Todo
    </button>
  </form>
);

TodoForm.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      username: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.object,
    }).isRequired,
  ).isRequired,
  addTempoTitle: PropTypes.func.isRequired,
  addTempoUser: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  inputIsValid: PropTypes.func.isRequired,
  selectIsValid: PropTypes.func.isRequired,
};
