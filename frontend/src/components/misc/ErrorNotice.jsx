import React from 'react';

function ErrorNotice (props) {
    return (
        <div className="error-notice">
            <span>{props.message}</span>
            <button  type="button" class="btn-close" aria-label="Close" onClick={props.clearError}>   </button>
        </div>
    );
}

export default ErrorNotice;