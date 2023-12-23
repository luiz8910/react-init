import React, { Component } from "react";

export default class Events2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      data: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log("Name: " + this.state.name);
  };

  insertToData = () => {
    const arr = this.state.data;
    arr.push(this.state.name);

    this.setState({
      name: "",
      data: arr,
    });

    console.log(this.state);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Name"
          id="name"
          name="name"
        />

        <button type="button" onClick={this.insertToData}>
          Ok
        </button>

        <ul>
          {data.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}
