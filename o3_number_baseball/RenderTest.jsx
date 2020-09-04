import React, { PureComponent } from "react";

class Test extends PureComponent {
  state = {
    counter: 0,
    string: "hello",
    number: 1,
    boolean: true,
    object: {},
		// array: [{ inside: [3] }], // NG, simple is best for avoid the miss
		array: [100, 200, 300],
  };

  onClick = () => {
		const obj = this.state.array[0].inside;
		object.push(4);
    this.setState({
			object: {...this.state.object},
      array: [...this.state.array, 1],
    });
  };

  render() {
    console.log("Rendering", this.state);
    return (
      <div>
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

export default Test;
