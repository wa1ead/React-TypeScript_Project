//In this Checkpoint you will Convert the code below to Typescript.
{
  /*
import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
count: 0
};
increment = () => {
this.setState({ count: this.state.count + 1 });
};
render() {
return(
<div>
<p>Count: {this.state.count}</p>
<button onClick={this.increment}>Increment</button>
</div>
);
}
}
export default Counter;
*/
}

import { Component } from "react";

class Counter extends Component<{}, { count: number }> {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
