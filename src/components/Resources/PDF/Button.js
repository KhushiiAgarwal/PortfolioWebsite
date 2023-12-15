import React from 'react';

export const Button = ({ onClick }) => {
  return (
    <button className='btn btn-primary btn-md' onClick={onClick}>
      View my Resume
    </button>
  );
};
