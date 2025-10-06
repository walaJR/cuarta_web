import React, { useEffect } from 'react';

function Toast({ show, message, type, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const getBackgroundClass = () => {
    switch (type) {
      case 'success':
        return 'bg-success';
      case 'error':
        return 'bg-danger';
      case 'warning':
        return 'bg-warning';
      default:
        return 'bg-info';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return 'fa-check';
      case 'error':
        return 'fa-exclamation-triangle';
      case 'warning':
        return 'fa-exclamation-circle';
      default:
        return 'fa-info-circle';
    }
  };

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1060 }}>
      <div 
        className={`toast show align-items-center text-white ${getBackgroundClass()} border-0`}
        role="alert"
      >
        <div className="d-flex">
          <div className="toast-body">
            <i className={`fas ${getIcon()} me-2`}></i>
            {message}
          </div>
          <button 
            type="button" 
            className="btn-close btn-close-white me-2 m-auto"
            onClick={onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Toast;