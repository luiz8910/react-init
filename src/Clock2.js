import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateClock() {
    this.setState({
      time: new Date().toLocaleDateString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }),
    });
  }

  render() {
    const { time } = this.state;

    return <h1>{time}</h1>;
  }
}

export default Clock;
