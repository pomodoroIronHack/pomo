import React, { Component } from "react";
import * as Icon from "react-feather";
import FixedNavbar from "./FixedNavbar";
import { Navbar as Nav } from "react-bootstrap";

const logicalFlow = [25, 5, 25, 5, 25, 20];
// const logicalFlow = [ 1,  2,  3,  4, 5,  6]

export default class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    seconds: "00",
    timer: null,
    minutes: 25,
  };

  startTimer = () => {
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
    // if (this.state.timerOn === false) {
    //   this.stopTimer();
    //   this.setState({
    //     timerStart: 0
    //   });
    // }
  };


  





  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    const COLOR_CODES = {
      info: {
        color: "green"
      }
    };
    
    let remainingPathColor = COLOR_CODES.info.color;

 
  

    return (
      <div class="container onetwo no-gutters">
      <div class="row onetwothree no-gutters">
      <div className="login-container col-sm no-gutters">
        <div className="divdiv">
          <div className="Countdown">
            <div className="Countdown-time">
              {this.state.minutes} : {this.state.seconds}
            </div>
            <div className="Countdown-btns">
              <button
                className="Button-start"
                onClick={this.state.timerOn ? this.stopTimer : this.startTimer}
              >
                {" "}
                {this.state.timerOn ? <Icon.Pause size={85}/>  : <Icon.Play size={85}/> }
              </button>
              <button className="btn-reset" onClick={this.resetTimer}>
                Reset
              </button>
            </div>
          </div>
          <FixedNavbar />
        </div>
      </div>
      </div>
      </div>

    );
  }
}
