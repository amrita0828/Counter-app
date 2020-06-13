import React, { Component } from "react";

class value extends Component {
  render() {
    // console.log("props", this.props);
    // console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 ";
    classes +=
      this.props.counter.value === 0 ? "badge-warning" : "badge-primary";
    return classes;
  }
  formatvalue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default value;
