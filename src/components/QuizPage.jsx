import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getQuizDetails } from '../services/quizService';

const QuizPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    if (id) {
      getQuizDetails(parseInt(id)).then(setQuiz);
    }
  }, [id]);

  const handleAnswer = (answerIndex) => {
    setUserAnswers([...userAnswers, answerIndex]);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate('/score', { state: { quiz, userAnswers: [...userAnswers, answerIndex] } });
    }
  };

  if (!quiz) return <div>Loading...</div>;

  const question = quiz.questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{quiz.title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">
          Question {currentQuestion + 1} of {quiz.questions.length}
        </h2>
        <p className="text-lg mb-6">{question.text}</p>
        <div className="space-y-4">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full text-left p-4 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-300"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;