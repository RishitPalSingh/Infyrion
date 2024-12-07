import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ 
  text, 
  variant = 'gradient',
  className = ''
}) => {
  const baseStyles = "px-6 py-2 rounded-full font-medium transition-all duration-300";
  const variants = {
    primary: "bg-teal-500 text-white hover:bg-teal-600",
    gradient: "bg-gradient-to-r from-[#26908A] to-[#011769] text-white hover:opacity-90"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'gradient']),
  className: PropTypes.string
};