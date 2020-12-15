import React, { Component } from "react";
import * as Icon from "react-feather";
import { render } from 'react-dom';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';


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


          


          
          
        
          <SwipeableList clssName="cool-list">

              <SwipeableListItem className="cool-list-item"

                      swipeLeft={{
                            content: <div>DELETE</div>,
                            action: () => this.props.deleteList(task._id)
                          }}
                          swipeRight={{
                            content: <div>Revealed content during swipe</div>,
                            action: () => this.props.deleteList(task._id)
                          }}

              >

                        <div class="cool-thing-yo">{task.title}</div>
           

              </SwipeableListItem>



          </SwipeableList>

                            



        ))}
      </div>
    );
  }
}
export default Fulllist;









{/* <h3 className='moon'>{task.title} <span onClick={() => this.props.deleteList(task._id)}>&times;</span> </h3>  */}