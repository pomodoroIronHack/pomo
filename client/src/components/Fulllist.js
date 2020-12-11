import React, { Component } from "react";
import * as Icon from "react-feather";
import { render } from 'react-dom';
// Import the react-swipe-to-delete-component
import SwipeToDelete from 'react-swipe-to-delete-component';

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


          


          
          
        
          
           


            <h3 className='moon'>{task.title} <span onClick={() => this.props.deleteList(task._id)}>&times;</span> </h3> 
           
          


        ))}
      </div>
    );
  }
}
export default Fulllist;