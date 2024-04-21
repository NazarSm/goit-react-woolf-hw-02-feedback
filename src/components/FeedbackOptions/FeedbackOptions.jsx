import { Button } from '../Button/Button';
import React from 'react';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {Object.keys(options).map(option => (
          <button key={option} type="button" onClick={onLeaveFeedback}>
            {option}
          </button>
        ),
      )}
    </div>
  );
};
