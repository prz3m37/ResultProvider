import React, { Component } from "react";
import { IState, TimeDataHolder } from "../dataHolder/timeDataHolder";

export default class Counter extends Component<{}, IState> {
  myInterval: NodeJS.Timeout | undefined;
  private timeDataHolder: TimeDataHolder;
  constructor(props: {}) {
    super(props);
    this.timeDataHolder = new TimeDataHolder();
  }
  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.timeDataHolder.updateTick();
      this.setState(this.timeDataHolder.getTimeData());
    }, 1000);
  }

  render() {
    console.log(this.timeDataHolder);
    const { seconds, minutes, hours } = this.timeDataHolder.state;
    return (
      <div className="countdown-timer__text">
        <div className="timer">
          PASSED{hours}h:{minutes}m:{seconds}s
        </div>
      </div>
    );
  }
}
