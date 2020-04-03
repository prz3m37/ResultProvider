export interface IState {
  seconds: number;
  minutes: number;
  hours: number;
}

export class TimeDataHolder {
  public state: IState;
  constructor() {
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    };
  }

  public getTimeData(): IState {
    return this.state;
  }

  public updateTick(): void {
    if (this.state.seconds !== -1) {
      this.state.seconds += 1;
    }
    if (this.state.seconds === 60) {
      this.state.minutes += 1;
      this.state.seconds = 0;
    }
    if (this.state.minutes === 60) {
      this.state.hours += 1;
      this.state.minutes = 0;
    }
  }
}

// const timeDataHolder: TimeDataHolder = new TimeDataHolder();
