import React from 'react';
import PropTypes from 'prop-types';

import './TodoFormSelect.css';

export const TodoFormSelect = ({ users, addTempoUser }) => (
  <select
    onChange={addTempoUser}
    className="form__select"
  >
    <option>
      Sellect User
    </option>
    {users.map(user => (
      <option key={user.id}>
        {user.name}
      </option>
    ))}
  </select>
);

TodoFormSelect.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string.isRequired,
      username: PropTypes.string,
      email: PropTypes.string,
      address: PropTypes.object,
    }).isRequired,
  ).isRequired,
  addTempoUser: PropTypes.func.isRequired,
};
