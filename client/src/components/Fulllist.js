import React, { Component } from 'react'
class Fulllist extends Component {
  state = {
    lists: this.props.lists
  }
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.render()
    }
  }
  render() {
    return (
      <div>
        {this.props.lists.map((task) => (
          <div>
            <span onClick={() => this.props.deleteList(task._id)}>&times;</span>
            <h1>{task.title}</h1>
            <span>{task.description}</span>
          </div>
        ))}
      </div>
    )
  }
}
export default Fulllist