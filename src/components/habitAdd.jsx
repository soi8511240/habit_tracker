import React, { Component } from "react";

class HabitAdd extends Component {
  inputRef = React.createRef();

  submit = (e) => {
    e.preventDefault();

    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.submit} className="add-form">
        {console.log("added")}
        <br />
        <input type="text" ref={this.inputRef} />
        <button onClick={this.props.onAddNew}>Add</button>
      </form>
    );
  }
}

export default HabitAdd;
