import React from 'react';
import users from '../../api/users';
import todos from '../../api/todos';

import { TodoList } from '../TodoList/TodoList';
import { TodoForm } from '../NewTodo/NewTodo';

import './Todo.css';

export class Todo extends React.Component {
  state = {
    todos: [...todos],
    users: [...users],
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

  addTodo = (text, todoId, TodoUserId) => {
    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          userId: TodoUserId,
          id: todoId,
          title: text,
          completed: false,
        },
      ],
    }));
  }

  render() {
    return (
      <div className="Todo">
        <TodoForm
          users={this.state.users}
          todoLength={this.state.todos.length}
          addTodo={this.addTodo}
        />
        <TodoList todos={this.state.todos} todoCheck={this.todoCheck} />
      </div>
    );
  }
}
