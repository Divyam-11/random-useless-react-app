import React, { Component } from "react";
class Counter extends Component {

  

  render() {
    return (
      <div>
        <h4>{this.props.id}</h4>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          type="button"
          class="badge m-2 text-bg-danger btn-outline-danger"
        >
          Delete
        </button>
      </div>
    ); 
  }
  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    if (this.props.counter.value === 0) return "Zero";
    else return this.props.counter.value;
  }
}

export default Counter;
