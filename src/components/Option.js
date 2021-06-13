import React from 'react'

const Option = ({op1,op2}) => {

    const leftWidth = {
        width: op1.optionValue + "%",
    };

    return (
        <div className="options-item">
            <span className="options-side">{op1.optionText}(%{op1.optionValue})</span>
            <div className="options-persent">
                <div className="options-left" style={leftWidth}>
                </div>
            </div>
            <span className="options-side">(%{op2.optionValue}){op2.optionText}</span>
        </div>
    )
}

export default Option
