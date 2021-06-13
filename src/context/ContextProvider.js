import React, { createContext, useState, useEffect } from 'react';
import data from '../data/db.json';

export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [options, setOptions] = useState(data.getOptions);
    const [questions, setQuestions] = useState(data.getQuestions);
    const [question, setQuestion] = useState(questions[0]);
    const [count, setCount] = useState(1);
    const [isQuestion , setIsQuestion] = useState(true);


    const setNextQuestion = (userValue, userOption) => {
        setCount(count + 1);
        if(questions.length > count){
            setQuestion(questions[count]);
            enterOptionsValue(userValue, userOption);
        }else{
            totalCalculate();
            setIsQuestion(false);
        }
    }

    const enterOptionsValue = (userValue, userOption) => {
        options.map((option) => {

            if (option.option1.optionText === userOption) {

                if (userValue > 0) option.option1.optionValue += userValue;
                else option.option2.optionValue += -userValue;
                if (option.option1.optionValue < 0) option.option1.optionValue = 0;

            } else if (option.option2.optionText === userOption) {

                if (userValue > 0) option.option2.optionValue += userValue;
                else option.option1.optionValue += -userValue;
                if (option.option2.optionValue < 0) option.option1.optionValue = 0;

            }
        })
    }

    const totalCalculate = () => {
        for (const key in options) {
            let v1 = options[key].option1.optionValue;
            let v2 = options[key].option2.optionValue;
            let total = v1 + v2;

            let left = (v1 / total) * 100;
            let right = (v2 / total) * 100;

            options[key].option1.optionValue = left.toFixed(1);
            options[key].option2.optionValue = right.toFixed(1);
        }
    }

    return (
        <Context.Provider value={{
            options,
            questions,
            question,
            count,
            isQuestion,
            setNextQuestion
        }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
