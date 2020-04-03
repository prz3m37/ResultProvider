import React, { useState, Dispatch, SetStateAction } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  RouteComponentProps
} from "react-router-dom";
import Projects from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import Navbar from "./components/Navbar";
import CountDownTimer from "./components/CountDownTimer";
import StartPage from "./components/StartPage";
import { IState } from "./dataHolder/timeDataHolder";

export interface FormInputState {
  value: IState;
}

interface StateAccess<T> {
  set: Dispatch<SetStateAction<T>>;
  get: T;
}

interface TimeData {
  time: StateAccess<FormInputState>;
}

const timeData = (): TimeData => {
  const [timerState, setTimerState] = useState<FormInputState>({
    value: { seconds: 0, minutes: 0, hours: 0 }
  });
  return { time: { set: setTimerState, get: timerState } };
};

const App: React.FC<RouteComponentProps> = props => {
  const timeDataState = timeData();
  return (
    <BrowserRouter>
      <div className="App">
        <CountDownTimer {...timeDataState} />
        <Navbar />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/:post_id" component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
