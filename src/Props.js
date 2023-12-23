import React, { Component } from "react";
import Panel from "./Panel";

class Props extends Component {
  constructor(props) {
    super(props);

    const { attr, attr2, attr3 } = this.props;

    console.log(attr, attr2, attr3);
  }

  render() {
    const { attr, attr2, attr3 } = this.props;

    return (
      // eslint-disable-next-line
      <div>
        {attr === "p" ? <p>PROPS</p> : <h1>PROPS</h1>}
        <Panel
          headerColor="red"
          borderColor="blue"
          headerText="This is a header"
          data="Test"
        />
      </div>
    );
  }
}

export default Props;
