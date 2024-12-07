import React from 'react';
import PropTypes from 'prop-types';

export const SectionTitle = ({ title, highlightedWords }) => {
  const words = title.split(' ');
  
  return (
    <div className="mb-2">
      <h6 className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-1">
        About Us
      </h6>
      <h2 className="text-3xl font-bold">
        {words.map((word, index) => (
          <span
            key={index}
            className={highlightedWords.includes(word) 
              ? 'text-teal-500 mx-1' 
              : 'text-gray-900 mx-1'
            }
          >
            {word}
          </span>
        ))}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  highlightedWords: PropTypes.arrayOf(PropTypes.string).isRequired
};