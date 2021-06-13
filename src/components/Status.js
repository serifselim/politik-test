import React from 'react'

const Status = ({now,total}) => {
    return (
        <div className="status">
            <h1 className="status-title">Politik Test</h1>
            <span className="status-count">{now}/{total}</span>
        </div>
    )
}

export default Status;
