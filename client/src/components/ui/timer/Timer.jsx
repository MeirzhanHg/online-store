import React from "react";
import { useState, useEffect } from "react";

import "./Timer.scss";

const Timer = ({ deadline, ellipse }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    const time = Date.parse(deadline) - Date.now();

    if (time <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });

  return (
    <div className={`timer ${ellipse}`} role="timer">
      <div className="column">
        <div className="box">
          <span className="text">Days</span>
          <p className="label" id="day">
            {days < 10 ? "0" + days : days}
          </p>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <span className="text">Hours</span>
          <p className="label" id="hour">
            {hours < 10 ? "0" + hours : hours}
          </p>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <span className="text">Minutes</span>
          <p className="label" id="minute">
            {minutes < 10 ? "0" + minutes : minutes}
          </p>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <span className="text">Seconds</span>
          <p className="label" id="second">
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
