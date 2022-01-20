import React from 'react';
import PropTypes from 'prop-types';
import Circle from './circle';
import './css/progress.css';

const Progress = (props) => {
  // const { progress } = props;
  const current = Math.floor(Math.random() * 100);
  const total = current + Math.floor(Math.random() * 100);
  const percentage = Math.round((current / total) * 100) || 0;
  return (
    <div className="progress-wrapper">
      <div className="show-progress">
        <Circle percentage={percentage} />
      </div>
      <hr />
      <div className="update-progress">
        <p className="current">Current Chapter</p>
        <p className="chapter">
          Chapter &nbsp;
          {current} of {total}
        </p>
        <button type="button" className="update">
          Update Progress
        </button>
      </div>
    </div>
  );
};
// Progress.propTypes = {
//   progress: PropTypes.objectOf(PropTypes.number).isRequired,
// };
export default Progress;
