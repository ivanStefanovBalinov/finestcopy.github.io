import "./TimeoutModal.scss";
import React from "react";

const TimeoutModal = () => {
  return (
    <div className="timer-container">
      <div className="text-zone">
        <h1>Finest Copy Agency</h1>
        <p>
          Сайтът е в процес на <span className="bolder">ОБНОВЯВАНЕ</span>
        </p>
      </div>
      <div>
        <section>
          <p>10</p>
          <p>Days</p>
        </section>
        <span>:</span>
      </div>
      <div>
        <section>
          <p>10</p>
          <p>Hours</p>
        </section>
        <span>:</span>
      </div>
      <div>
        <section>
          <p>10</p>
          <p>Minutes</p>
        </section>
        <span>:</span>
      </div>
      <div>
        <section>
          <p>10</p>
          <p>Seconds</p>
        </section>
      </div>
    </div>
  );
};

export default TimeoutModal;
