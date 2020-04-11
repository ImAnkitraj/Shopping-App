import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types'
const Counter = props => {
  return (
    <Countdown toDate={new Date(2020, 11, 18, 0, 0, 0)}>
      {props => (
        <CountdownDisplay
          years={props.years}
          months={props.months}
          days={props.days}
          asDays={props.asDays}
          hours={props.hours}
          minutes={props.minutes}
          seconds={props.seconds}
        />
      )}
    </Countdown>
  );
};

const CountdownDisplay = props => {
  const {days, asDays, hours, minutes, seconds } = props;

  return (
    <div className="row clock-wrap">
        <div className="col clockinner1 clockinner">
            <h1 className="days">
              {String(days).padStart(2, 0)}
            </h1>
            <span className="smalltext">Days</span>
        </div>
        <div className="col clockinner clockinner1">
            <h1 className="hours">
              {String(hours).padStart(2, 0)}
            </h1>
            <span className="smalltext">Hours</span>
        </div>
        <div className="col clockinner clockinner1">
            <h1 className="minutes">
              {String(minutes).padStart(2, 0)}
            </h1>
            <span className="smalltext">Mins</span>
        </div>
        <div className="col clockinner clockinner1">
            <h1 className="seconds">
              {String(seconds).padStart(2, 0)}
            </h1>
            <span className="smalltext">Secs</span>
        </div>
    </div>
  );
};

CountdownDisplay.propTypes = {
  years: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  asDays: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
};

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { now: new Date() };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date() });
    }, this.props.intervalDelay);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    const { now } = this.state;
    const { toDate } = this.props;
    const delta = toDate - now;

    return this.props.children({
      years: Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12),
      months: Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12),
      days: Math.floor((delta / 1000 / 60 / 60 / 24) % 30)+ Math.floor((delta / 1000 / 60 / 60 / 24 / 30) % 12)*30+Math.floor(delta / 1000 / 60 / 60 / 24 / 30 / 12)*365,
      hours: Math.floor((delta / 1000 / 60 / 60) % 24),
      minutes: Math.floor((delta / 1000 / 60) % 60),
      seconds: Math.floor((delta / 1000) % 60),
      milliseconds: delta,
      asDays: Math.floor(delta / 1000 / 60 / 60 / 24)
    });
  }
}

Countdown.propTypes = {
  toDate: PropTypes.instanceOf(Date).isRequired,
  intervalDelay: PropTypes.number
};

Countdown.defaultProps = {
  intervalDelay: 1000
};

export default  Counter;
