import React from 'react';
import PuffLoader from 'react-spinners/PuffLoader';


const Spinner = ({ loading }) => {
  return (
    <div className={`spinner-overlay ${loading ? 'visiblle' : 'hiden'}`}>
      <PuffLoader size={120} color="white" />
    </div>
  );
};

export default Spinner;