import React, { PureComponent } from "react";
import Habit from "./habit";
import HabitAdd from "./habitAdd";

export default class Habits extends PureComponent {
  render() {
    return (
      <>
        <HabitAdd onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.props.onIncrese}
              onDecrement={this.props.onDecrese}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="button-reset" onClick={this.props.onReset}>
          Reset
        </button>
      </>
    );
  }
}
