import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import {Option} from '../components';

const Result = () => {

    const { options } = useContext(Context);

    console.log(options);

    return (
        <div className="container result">
            <h1 className="result-title">Result</h1>
            <div className="options">
                {options.map(option => (
                    <Option
                        op1={option.option1}
                        op2={option.option2}
                    />
                ))}
            </div>
        </div>
    )
}

export default Result;
