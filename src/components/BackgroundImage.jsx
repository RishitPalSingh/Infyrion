import React from 'react';
import PropTypes from 'prop-types';

export const BackgroundImage = ({ 
  imageUrl, 
  overlayColor = 'rgba(0, 0, 0, 0.6)', 
  children 
}) => {
  return (
    <div className="relative w-full h-full">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat rounded-b-3xl"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: overlayColor }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  overlayColor: PropTypes.string,
  children: PropTypes.node.isRequired
};