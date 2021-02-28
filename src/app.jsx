import React, { Component } from "react";
import "./app.css";
import NavBar from "./components/navBar";
import Habits from "./components/habits";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Conding", count: 0 },
    ],
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      {
        id: Date.now(),
        name,
        count: 0,
      },
    ];

    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });

    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return null;
      }
      return item;
    });
    // const habits = this.state.habits.filter(item => item.id !== habit.id);
    console.log(habits);

    this.setState({ habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return {
          ...habit,
          count: 0,
        };
      }
      return habit;
    });

    this.setState({ habits });
  };

  render() {
    return (
      <>
        <NavBar
          habits={this.state.habits}
          habitsCount={this.state.habits.filter((v) => v.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onIncrese={this.handleIncrement}
          onDecrese={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
