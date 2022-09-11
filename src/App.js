import { useState } from 'react';
import './App.css';
import GivenQuestions from './components/GivenQuestions';
import Score from './components/Score';
import { questions } from './constants/questions';

function App() {
  const [showScore, setShowScore] = useState(false)
  const [rightAnswers, setRightAnswers] = useState(0)
  return (
    <div className="quiz">
      {showScore
        ? <Score questions={questions.length} rightAnswers={rightAnswers} />
        : <GivenQuestions onShowScore={setShowScore} onRightAnswers={setRightAnswers} />
      }
    </div>
  );
}

export default App;
