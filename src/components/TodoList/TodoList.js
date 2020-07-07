import React from 'react';
import PropTypes from 'prop-types';

import './TodoList.css';

export const TodoList = ({ todos, todoCheck }) => (
  <ul className="Todo__list list">
    {todos.map(item => (
      <li
        className={item.completed
          ? 'list__item list__item--completed'
          : 'list__item'
        }
        key={item.id}
      >
        <div className="list__item-info">
          <p className="list__item-text">{item.title}</p>
          <p className="list__item-id">
            User ID:
            {item.userId}
          </p>
        </div>
        <div className="list__check-wrapper">
          <p>Done?</p>
          <input type="checkbox" onChange={() => todoCheck(item.id)} />
        </div>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      userId: PropTypes.number.isRequired,
      id: PropTypes.number,
      completed: PropTypes.bool,
    }).isRequired,
  ).isRequired,
  todoCheck: PropTypes.func.isRequired,
};
