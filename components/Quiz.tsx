
import React from 'react';
import { QuizQuestion } from '../types';

interface QuizProps {
  question: QuizQuestion;
  onAnswer: (questionKey: string, answerValue: string) => void;
  progress: number;
}

const Quiz: React.FC<QuizProps> = ({ question, onAnswer, progress }) => {
  return (
    <div className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-lg transition-all duration-500">
      <div className="mb-6">
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-slate-700">{question.question}</h2>
      <div className="space-y-4">
        {question.options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(question.key, option.value)}
            className="w-full text-left p-5 border border-slate-200 rounded-lg hover:bg-indigo-50 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-200 group"
          >
            <p className="text-lg font-semibold text-slate-800 group-hover:text-indigo-700">{option.label}</p>
            <p className="text-sm text-slate-500">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
