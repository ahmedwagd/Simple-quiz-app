import { useState } from 'react'
import { questions } from '../constants/questions'

const GivenQuestions = ({ onShowScore, onRightAnswers }) => {
  const [questionsCount, setQuestionsCount] = useState(0)

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      onRightAnswers(prev => prev + 1)
    } else {
      onRightAnswers(prev => prev)
    }

    const nextQuestion = questionsCount + 1
    if (nextQuestion < questions.length) {
      setQuestionsCount(nextQuestion)
    } else {
      onShowScore(prev => !prev)
      setTimeout(() => {
        alert('you have reachted the end of the quiz')
      }, 1000)
    }
  }
  return (
    <div className="question-section">
      <div className="given">
        <h2>
          Question <span className='given-count'>{questions.indexOf(questions[questionsCount]) + 1}</span>
          <span className='given-total'>/ {questions.length}</span>
        </h2>
        <p>{questions[questionsCount].questionText}</p>
      </div>
      <div className="answer">
        {questions[questionsCount].answerOptions.map((answer, index) => (
          <button key={index.toString()} onClick={() => handleClick(answer.isCorrect)} >{answer.answerText}</button>
        ))}
      </div>
    </div>
  )
}

export default GivenQuestions