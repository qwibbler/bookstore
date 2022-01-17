import React from 'react';

const Progress = (props) => {
  const percentage = (props.progress.current / props.progress.total) * 100;
  return (
    <div className="progress-wrapper">
      <div className="show-progress">
        {/* <img src={} alt={'Progress' + props.progress} /> */}
        <p>{`${percentage}%`}</p>
        <p>Complete</p>
      </div>
      <div className="update-progress">
        <p>Current chapter</p>
        <p>
          Chapter
          {props.progress.current}
        </p>
        <button type="button" className="update">Update Progress</button>
        "
      </div>
    </div>
  );
};
export default Progress;
