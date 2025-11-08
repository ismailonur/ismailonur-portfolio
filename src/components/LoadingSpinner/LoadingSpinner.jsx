import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = ({ 
  size = 'medium', 
  fullScreen = false,
  message = 'Loading...' 
}) => {
  const spinnerClasses = `loading-spinner ${size} ${fullScreen ? 'fullscreen' : ''}`;

  const SpinnerContent = () => (
    <div className="spinner-container">
      <div className="spinner" role="status" aria-live="polite">
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
        <div className="spinner-circle"></div>
      </div>
      {message && <p className="spinner-message">{message}</p>}
      <span className="sr-only">{message}</span>
    </div>
  );

  if (fullScreen) {
    return (
      <div className={spinnerClasses}>
        <SpinnerContent />
      </div>
    );
  }

  return (
    <div className={spinnerClasses}>
      <SpinnerContent />
    </div>
  );
};

export default LoadingSpinner;
