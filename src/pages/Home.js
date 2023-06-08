import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let new_list = [...this.state.todos, todo];
    this.setState({
      todos: new_list,

    });
  };
  render() {
    return (
      <div className="Home">
      <Todos todos={this.state.todos}/>
      <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Home;
