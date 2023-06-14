import "./TimeoutModal.scss";
import React, { useEffect, useRef, useState } from "react";
import videoBg from "../../assets/video/videoBg.mp4";
import Footer from "../footer/Footer";

const TimeoutModal = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMin, setTimerMin] = useState("00");
  const [timerSec, setTimerSec] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("August 30 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //stop
        clearInterval(interval.current);
      } else {
        //update
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMin(min);
        setTimerSec(sec);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="timer-container ">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted className="video-bg" />
      <div className="text-zone list-unstyled">
        <h1 className="timer-h">Finest Copy - Digital Marketing Solution</h1>
        <p className="timer-p">
          Сайтът е в процес на <span className="bolder">ОБНОВЯВАНЕ</span>
        </p>
      </div>
      <div className="timer">
        <div>
          <section>
            <p>{timerDays}</p>
            <p>Days</p>
          </section>
        </div>
        <span>:</span>
        <div>
          <section>
            <p>{timerHours}</p>
            <p>Hours</p>
          </section>
        </div>
        <span>:</span>
        <div>
          <section>
            <p>{timerMin}</p>
            <p>Min</p>
          </section>
        </div>
        <span>:</span>
        <div>
          <section>
            <p>{timerSec}</p>
            <p>Sec</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TimeoutModal;
