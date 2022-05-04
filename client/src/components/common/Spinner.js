import React from 'react';
import spinnerImage from './spinner.gif';

const spinner = () => {
  return (
    <div>
      <img
        src={spinnerImage}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};
export default  spinner;