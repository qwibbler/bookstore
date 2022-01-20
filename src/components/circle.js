import React from 'react';
import './css/circle.css';

const circle = ({ percentage }) => {
  const degrees = (percentage * 180) / 100;
  const cssProperties = { '--degrees': `${degrees}deg` };
  return (
    <div className="circle-wrap" style={cssProperties}>
      <div className="circle">
        <div className="mask full">
          <div className="fill"></div>
        </div>
        <div className="mask half">
          <div className="fill"></div>
        </div>
        <div className="inside-circle">
          {percentage}%
          <p className="complete">Complete</p>
        </div>
      </div>
    </div>
  );
};

export default circle;
