import React, { Component } from "react";
import * as Icon from "react-feather";

class Fulllist extends Component {
  state = {
    lists: this.props.lists,
  };
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.render();
    }
  }
  render() {
    return (
      <div>
        {this.props.lists.map((task) => (
          <div>
            <h3 className='moon'>{task.title} <span onClick={() => this.props.deleteList(task._id)}>&times;</span> </h3>
            {/* <span className='moon'>{task.description}</span> */}
          </div>
        ))}
      </div>
    );
  }
}
export default Fulllist;