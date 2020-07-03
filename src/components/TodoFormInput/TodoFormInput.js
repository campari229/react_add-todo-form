import React from 'react';
import PropTypes from 'prop-types';

import './TodoFormInput.css';

export const TodoFormInput = ({ addTempoTitle }) => (
  <input
    className="form__input"
    type="text"
    id="formInput"
    onChange={addTempoTitle}
    placeholder="Type task here"
  />
);

TodoFormInput.propTypes = {
  addTempoTitle: PropTypes.func.isRequired,
};
