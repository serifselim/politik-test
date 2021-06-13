import React from 'react';

const Buttons = ({ handleClick }) => {

    return (
        <div className="btn-div">
            <button className="btn btn-dg" onClick={() => handleClick(1)} >Kesinlikle Katılıyorum</button>
            <button className="btn btn-lgr" onClick={() => handleClick(0.5)}>Katılıyorum</button>
            <button className="btn btn-lg" onClick={() => handleClick(0)}>Kararsızım</button>
            <button className="btn btn-lr" onClick={() => handleClick(-0.5)}>Katılmıyorum</button>
            <button className="btn btn-dr" onClick={() => handleClick(-1)}>Kesinlikle Katılmıyorum</button>
        </div>
    )
}

export default Buttons
