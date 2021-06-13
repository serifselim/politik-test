import React, { useContext,useEffect } from 'react'
import { Status, Question, Buttons } from '../components';
import { Context } from '../context/ContextProvider';
import { useHistory } from 'react-router-dom';


const Test = () => {

    const { setNextQuestion, questions, count, question, isQuestion } = useContext(Context);

    let history = useHistory();

    const handleClick = (value) => {
        setNextQuestion(value, question.questionOption);
    }

    useEffect(() => {
        if(!isQuestion) history.push('/result');
    }, [isQuestion])

    return (
        <div className="container">
            <Status now={count} total={questions.length} />
            <Question text={question.questionText} />
            <Buttons handleClick={handleClick} />
        </div>
    )
}

export default Test;