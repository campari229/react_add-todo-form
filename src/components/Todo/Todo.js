import React from 'react';
import users from '../../api/users';
import todos from '../../api/todos';

import { TodoList } from '../TodoList/TodoList';
import { TodoForm } from '../TodoForm/TodoForm';

import './Todo.css';

export class Todo extends React.Component {
  state = {
    todos: [...todos],
    users: [...users],
    tempoId: todos.length,
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
      tempoUserId: prevState.users.find(user => user.name === name).id,
    }));
  }

  addTodo = (event) => {
    event.preventDefault();
    const input = event.target.children[0].children[0];
    const select = event.target.children[1].children[0];

    if (!this.state.tempoTitle) {
      input.className = 'form__input form__input--error';

      this.setState({
        inputIsValid: false,
      });
    } else if (!this.state.tempoUserId) {
      select.className = 'form__select form__select--error';

      this.setState({
        selectIsValid: false,
      });
    } else {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            userId: prevState.tempoUserId,
            id: prevState.tempoId + 1,
            title: prevState.tempoTitle,
            completed: false,
          },
        ],
        tempoId: prevState.tempoId + 1,
        tempoUserId: null,
        tempoTitle: '',
      }));
      event.target.reset();
    }
  }

  todoCheck = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      }),
    }));
  }

  render() {
    return (
      <div className="Todo">
        <TodoForm
          users={this.state.users}
          addTempoTitle={this.addTempoTitle}
          addTempoUser={this.addTempoUser}
          addTodo={this.addTodo}
          inputIsValid={this.state.inputIsValid}
          selectIsValid={this.state.selectIsValid}
        />
        <TodoList todos={this.state.todos} todoCheck={this.todoCheck} />
      </div>
    );
  }
}
