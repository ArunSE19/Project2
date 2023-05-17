import React from 'react'
import './Quiz.css'
function QuizResult(props) {
  return (
    <>
    <div className='show-score' id='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button className="next-button" id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult