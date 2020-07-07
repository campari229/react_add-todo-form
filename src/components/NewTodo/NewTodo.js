import React from 'react';
import PropTypes from 'prop-types';

import { TodoFormInput } from '../TodoFormInput/TodoFormInput';
import { TodoFormSelect } from '../TodoFormSelect/TodoFormSelect';
import './NewTodo.css';

export class TodoForm extends React.Component {
  state = {
    tempoId: this.props.todoLength,
    tempoTitle: '',
    tempoUserId: null,
    inputIsValid: true,
    selectIsValid: true,
  }

  addTempoTitle = (event) => {
    const input = event.target;

    input.className = 'form__input';

    this.setState({
      inputIsValid: true,
    });

    this.setState({
      tempoTitle: event.target.value,
    });
  }

  addTempoUser = (event) => {
    const name = event.target.value;
    const select = event.target;

    select.className = 'form__select';

    this.setState({
      selectIsValid: true,
    });

    this.setState(prevState => ({
      tempoUserId: this.props.users.find(user => user.name === name).id,
    }));
  }

  todoMaker = (event) => {
    event.preventDefault();
    const input = event.target.children[0].children[0];
    const select = event.target.children[1].children[0];
    const title = this.state.tempoTitle;
    const userId = this.state.tempoUserId;
    const id = this.state.tempoId + 1;

    if (!title.trim()) {
      input.className = 'form__input form__input--error';

      this.setState({
        inputIsValid: false,
      });
    } else if (!userId) {
      select.className = 'form__select form__select--error';

      this.setState({
        selectIsValid: false,
      });
    } else {
      this.props.addTodo(title, id, userId);

      this.setState(prevState => ({
        tempoId: prevState.tempoId + 1,
        tempoUserId: null,
        tempoTitle: '',
      }));
    }

    event.target.reset();
  }

  render() {
    return (
      <form className="Todo__form form" onSubmit={this.todoMaker}>
        <div className="form__input-wrapper">
          <TodoFormInput addTempoTitle={this.addTempoTitle} />
          {!this.state.inputIsValid
            ? <p className="form__error_message">Enter your task</p>
            : <></>
          }
        </div>
        <div className="form__select-wrapper">
          <TodoFormSelect
            users={this.props.users}
            addTempoUser={this.addTempoUser}
          />
          {!this.state.selectIsValid
            ? <p className="form__error_message">Please, sellect a user</p>
            : <></>
          }
        </div>
        <button className="btn" type="submit">
          Add Todo
        </button>
      </form>
    );
  }
}

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
  addTodo: PropTypes.func.isRequired,
  todoLength: PropTypes.func.isRequired,
};
