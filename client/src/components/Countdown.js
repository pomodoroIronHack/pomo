import React from "react";
import CountdownTimer from "react-component-countdown-timer";
import FixedNavBar from './FixedNavbar'
 
export default class SimpleCountdownTimer extends React.Component {
  render() 
  {
    var settings = {
      count: 5432,
      border: true,
      showTitle: true,
      noPoints: true,
    };
    return (
      <>
        <CountdownTimer {...settings} />
        <FixedNavBar />
      </>
    );
  }
}