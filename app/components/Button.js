import { ArrowOutward, NorthEast } from '@mui/icons-material';
import React from 'react';

const Button = ({ onClick, text, type = 'button', className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`flex items-center gap-2  rounded-full bg-secondary px-6 cursor-pointer hover:shadow-2xl hover:bg-primary transition-all duration-300 py-3 ${className}`}>
      <p className='capitalize text-background'>{text}</p>
      <div className="text-background flex items-center">
        <ArrowOutward fontSize='small' />
      </div>
    </button>
  );
};

export default Button;