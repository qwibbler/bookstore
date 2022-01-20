import React from 'react';
import PropTypes from 'prop-types';

const Progress = (props) => {
  const { progress } = props;
  const percentage = (progress.current / progress.total) * 100 || 0;
  return (
    <div className="progress-wrapper">
      <div className="show-progress">
        <p>{`${percentage}%`}</p>
        <p>Complete</p>
      </div>
      <div className="update-progress">
        <p>Current chapter</p>
        <p>
          Chapter
          {progress.current}
        </p>
        <button type="button" className="update">Update Progress</button>
      </div>
    </div>
  );
};
Progress.propTypes = {
  progress: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default Progress;
