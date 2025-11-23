import React, { useState, Suspense } from 'react';
import { Question, QuestionType } from '../types';
import { Volume2, Languages, Info, CheckCircle2, XCircle, Loader2 } from 'lucide-react';

// Lazy load the modal component
const TranslationModal = React.lazy(() => import('./TranslationModal'));

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | undefined;
  onAnswer: (questionId: string, answer: string) => void;
  isSubmitted: boolean;
  questionIndex: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  selectedAnswer, 
  onAnswer, 
  isSubmitted,
  questionIndex 
}) => {
  const [showTranslate, setShowTranslate] = useState(false);

  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(question.text);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  const handleTranslate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowTranslate(true);
  };

  const renderInput = () => {
    // MCQ, Do as Shown, Fill in the Blanks (List selection)
    if (question.type === QuestionType.MCQ || 
        question.type === QuestionType.DO_AS_SHOWN || 
        question.type === QuestionType.FILL_IN_BLANKS) {
      return (
        <div className="grid gap-3 mt-4">
          {question.options?.map((option) => {
            const isSelected = selectedAnswer === option;
            const isCorrect = question.correctAnswer === option;
            
            let borderClass = "border-gray-200 hover:border-blue-400";
            let bgClass = "bg-white";
            let indicator = null;

            if (isSubmitted) {
              if (isCorrect) {
                borderClass = "border-green-500 ring-2 ring-green-100";
                bgClass = "bg-green-50";
                indicator = <CheckCircle2 size={20} className="text-green-600 ml-auto" />;
              } else if (isSelected && !isCorrect) {
                borderClass = "border-red-500";
                bgClass = "bg-red-50";
                indicator = <XCircle size={20} className="text-red-500 ml-auto" />;
              } else if (!isSelected && !isCorrect) {
                borderClass = "border-gray-200 opacity-60";
              }
            } else if (isSelected) {
              borderClass = "border-blue-600 ring-2 ring-blue-100";
              bgClass = "bg-blue-50";
            }

            return (
              <button
                key={option}
                onClick={() => !isSubmitted && onAnswer(question.id, option)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center ${borderClass} ${bgClass}`}
              >
                <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center shrink-0 ${isSelected ? 'border-blue-600' : 'border-gray-300'}`}>
                  {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
                </div>
                <span className="font-medium text-gray-800">{option}</span>
                {indicator}
              </button>
            );
          })}
        </div>
      );
    } else {
      // Open Ended, Writing, Translation, Set Book
      const isWriting = question.type === QuestionType.WRITING;
      return (
        <div className="mt-4 space-y-4">
          <textarea
            value={selectedAnswer || ''}
            onChange={(e) => onAnswer(question.id, e.target.value)}
            disabled={isSubmitted}
            placeholder="Type your answer here..."
            className={`w-full p-4 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none text-gray-800 ${isWriting ? 'min-h-[200px]' : 'min-h-[100px]'} ${isSubmitted ? 'bg-gray-50' : 'bg-white'}`}
          />
        </div>
      );
    }
  };

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 relative overflow-hidden">
      {/* Card styling wrapper */}
      <div className="absolute top-0 left-0 w-1 h-full bg-gray-200"></div>
      
      {showTranslate && (
        <Suspense fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
             <div className="bg-white p-4 rounded-full shadow-lg">
               <Loader2 className="animate-spin text-blue-600" size={32} />
             </div>
          </div>
        }>
          <TranslationModal 
            text={question.text} 
            onClose={() => setShowTranslate(false)} 
          />
        </Suspense>
      )}
      
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <span className="text-xs font-bold text-gray-400 mb-1 block uppercase tracking-wider">Question {questionIndex + 1}</span>
          {question.type === QuestionType.TRANSLATION ? (
             <h3 className="text-lg font-bold text-gray-900 leading-relaxed font-arabic text-right py-2" dir="rtl">
               {question.text}
             </h3>
          ) : (
             <h3 className="text-lg font-bold text-gray-900 leading-relaxed">
               {question.text}
             </h3>
          )}
        </div>
        <div className="flex gap-2 shrink-0">
          <button 
            onClick={handleSpeak}
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
            title="Read Aloud"
          >
            <Volume2 size={20} />
          </button>
          <button 
            onClick={handleTranslate}
            className="p-2 text-gray-500 hover:text-kuwait-green hover:bg-green-50 rounded-full transition-colors"
            title="Translate to Arabic"
          >
            <Languages size={20} />
          </button>
        </div>
      </div>

      {renderInput()}

      {/* Explanation / Model Answer Block */}
      {isSubmitted && (
        <div className="mt-6 animate-fade-in">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-emerald-100/50 px-4 py-2 border-b border-emerald-200 flex items-center gap-2">
              <Info size={18} className="text-emerald-700" />
              <h4 className="font-bold text-emerald-800 uppercase tracking-wide text-xs">
                {(question.type === QuestionType.MCQ || question.type === QuestionType.DO_AS_SHOWN || question.type === QuestionType.FILL_IN_BLANKS) 
                  ? "Answer & Explanation" 
                  : "Model Answer"}
              </h4>
            </div>
            
            <div className="p-4">
              <div className="text-emerald-900 font-bold text-lg mb-2">
                {Array.isArray(question.correctAnswer) ? question.correctAnswer.join(' / ') : question.correctAnswer}
              </div>
              
              {question.explanation && (
                <div className="text-emerald-800 text-sm leading-relaxed border-t border-emerald-200 pt-2 mt-2">
                  {question.explanation}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(QuestionCard);