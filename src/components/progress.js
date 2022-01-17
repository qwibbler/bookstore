import React from 'react';

const Progress = props => (
  <div className="progress-wrapper">
    <div class="show-progress">
      <img src={} alt={'Progress' + props.progress} />
      <p>{props.progress}</p>
      <p>Completed</p>
    </div>
    <div className="update-progress">
      <p>Current chapter</p>
      <p>Chapter {props.progress}</p>
      <button type="button" className="update">Update Progress</button>"
    </div>
  </div>
);
export default Progress