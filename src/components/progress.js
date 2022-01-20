import React from 'react';
import PropTypes from 'prop-types';
import './css/progress.css'

const Progress = (props) => {
  const { progress } = props;
  const percentage = (progress.current / progress.total) * 100 || 0;
  return (
    <div className="progress-wrapper">
      <div className="show-progress">
        <div className="progress-pic" />
        <p className="percentage">{`${percentage}%`}</p>
        <p className="complete">Complete</p>
      </div>
      <hr />
      <div className="update-progress">
        <p className="current">Current chapter</p>
        <p className="chapter">
          Chapter &nbsp;
          {progress.current}
        </p>
        <button type="button" className="update">
          Update Progress
        </button>
      </div>
    </div>
  );
};
Progress.propTypes = {
  progress: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Progress;
