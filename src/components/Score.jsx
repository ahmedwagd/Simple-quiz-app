import React from 'react'

const Score = ({ questions, rightAnswers }) => {

  const handleReload = () => {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  return (
    <div className="score-section" onClick={handleReload}>
      <h2>You scored {rightAnswers} out of {questions}</h2>
    </div>
  )
}

export default Score