import React , { Component } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";

class TimerCountDown extends Component {
    render() {
        return (
            <div className="float-right">
              <FlipCountdown
                hideYear
                hideMonth
                theme='light'
                size='extra-small' 
                titlePosition='top'
                endAt={'2020-07-17 18:00:00'} // Date/Time
              />
            </div>
        )
    }
}

export default TimerCountDown;