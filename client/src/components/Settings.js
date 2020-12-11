import React, { Component } from "react";
import { render } from 'react-dom';

import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';

export default class how extends Component {


render() {

  return (

<div className="coolest-page">
<SwipeableList clssName="cool-list">

  <SwipeableListItem className="cool-list-item"
    swipeLeft={{
      content: <div>DELETE</div>,
      action: () => console.info('swipe action triggered')
    }}
    swipeRight={{
      content: <div>Revealed content during swipe</div>,
      action: () => console.info('swipe action triggered')
    }}
  >
    <div class="cool-thing-yo">This is cool</div>
  </SwipeableListItem>


  <SwipeableListItem className="cool-list-item"
    swipeLeft={{
      content: <div>Revealed content during swipe</div>,
      action: () => console.info('swipe action triggered')
    }}
    swipeRight={{
      content: <div>Revealed content during swipe</div>,
      action: () => console.info('swipe action triggered')
    }}
  >
    <div>Item name</div>
  </SwipeableListItem>





</SwipeableList>
</div>





  )


}


}

