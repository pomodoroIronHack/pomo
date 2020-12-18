import React, { Component } from "react";
import * as Icon from "react-feather";
import { render } from 'react-dom';



const logicalFlow = [20, 5, 20, 5, 20, 20];
// const logicalFlow = [ 1,  2,  3,  4, 5,  6]


export default class Animated extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    seconds: "00",
    timer: null,
    minutes: 20,
  };



  startTimer = () => {
    this.setCircleDasharray();
    this.setState({
      timerOn: true,
      timer: setInterval(() => {
        if (!this.state.timerOn) {
          this.setState({
            timerOn: true,
          });
          return;
        }
        if (this.state.timerOn) {
          console.log(this.state.timerTime);
          if (this.state.seconds === "00" && this.state.minutes >= 1) {
            return this.setState({
              minutes: this.state.minutes - 1,
              seconds: 59,
            });
          }
          if (this.state.seconds === 0 && this.state.minutes > 0) {
            this.setState({
              minutes: this.state.minutes - 1,
              seconds: 59,
            });
          }
          if (this.state.seconds >= 1) {
            this.setState({
              seconds: this.state.seconds - 1,
            });
          }
          if (this.state.seconds === 0 && this.state.minutes === 0) {
            this.setState(
              {
                timerStart:
                  this.state.timerStart == logicalFlow.length - 1
                    ? 0
                    : this.state.timerStart + 1,
              },
              () => {
                this.setState({
                  minutes: logicalFlow[this.state.timerStart] - 1,
                  seconds: 59,
                });
              }
            );
          }
        }
      }, 1000),
    });
  };

  stopTimer = () => {
    clearInterval(this.state.timer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    // return this.stopTimer()
    this.stopTimer();
    this.setState({
      minutes: logicalFlow[this.state.timerStart],
      seconds: "00",
    });
  };


  
calculateTimeFraction = () => {
  return 20 / 20;
}

setCircleDasharray = () => {
  const circleDasharray = `${(
    this.calculateTimeFraction() * 283
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}


  render() {

    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    // Start with an initial value of 20 seconds
    const TIME_LIMIT = 20;

    // Initially, no time has passed, but this will count up
    // and subtract from the TIME_LIMIT
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;


    return (

      <div>

          <div class="base-timer">
            <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
                <path className="countdown-path"
                  id="base-timer-path-remaining"
                  stroke-dasharray="283" style={{color: "tomato"}}
                  class="base-timer__path-remaining ${remainingPathColor}"
                  d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0
                  "
                ></path>
              </g>
            </svg>
            <span id="base-timer-label" class="base-timer__label">
            {this.state.minutes} : {this.state.seconds}
            </span>
          </div>

          <div className="Countdown-btns">
              <button
                className="Button-start"
                onClick={this.state.timerOn ? this.stopTimer : this.startTimer  }
                // onClick={this.state.timerOn ? this.stopTimer : console.log("animation works!") }
              >
                {" "}
                {this.state.timerOn ? "Pause" : "Start"}
              </button>
              <button className="btn-reset" onClick={this.resetTimer}>
                Reset
              </button>
            </div>

      </div>

   

    )

  }

}

