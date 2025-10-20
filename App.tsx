
import React, { useState, useCallback } from 'react';
import { QuizQuestion, Answers, Bundle } from './types';
import { QUIZ_QUESTIONS } from './constants';
import { generateProductBundles } from './services/geminiService';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Results from './components/Results';
import LoadingSpinner from './components/LoadingSpinner';

type AppState = 'quiz' | 'loading' | 'results' | 'error';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<Bundle[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = useCallback(async (questionKey: string, answerValue: string) => {
    const newAnswers = { ...answers, [questionKey]: answerValue };
    setAnswers(newAnswers);

    const isLastQuestion = currentQuestionIndex === QUIZ_QUESTIONS.length - 1;
    if (isLastQuestion) {
      setAppState('loading');
      setError(null);
      try {
        const bundles = await generateProductBundles(newAnswers);
        setResults(bundles);
        setAppState('results');
      } catch (err) {
        console.error('Error generating bundles:', err);
        setError('Sorry, we couldn\'t generate bundles at this time. Please try again.');
        setAppState('error');
      }
    } else {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  }, [answers, currentQuestionIndex]);

  const handleReset = () => {
    setAppState('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResults([]);
    setError(null);
  };

  const renderContent = () => {
    switch (appState) {
      case 'quiz':
        return (
          <Quiz
            question={QUIZ_QUESTIONS[currentQuestionIndex]}
            onAnswer={handleAnswer}
            progress={(currentQuestionIndex + 1) / QUIZ_QUESTIONS.length}
          />
        );
      case 'loading':
        return <LoadingSpinner />;
      case 'results':
        return <Results bundles={results} onReset={handleReset} />;
      case 'error':
        return (
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-red-500 mb-4">An Error Occurred</h2>
            <p className="text-slate-600 mb-6">{error}</p>
            <button
              onClick={handleReset}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-colors"
            >
              Start Over
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
