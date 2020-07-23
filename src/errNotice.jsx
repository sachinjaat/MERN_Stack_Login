import React from 'react';
import './errNotice.css';

function ErrNotice(props) {
 return (
   <div className="error-notice">
      <span>{props.message}</span>
      <button onClick={props.clearError}>x</button>
   </div>
 );
}

export default ErrNotice;
