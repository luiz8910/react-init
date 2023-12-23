import React, { Component } from "react";

export default class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: 0,
    };
  }

  clickMethod = () => {
    console.log(this.state.clicked);

    this.setState({
      clicked: this.state.clicked + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.clickMethod} type="button">
          Click Me
        </button>
      </div>
    );
  }
}
