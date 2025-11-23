
import React, { useState, useMemo, useRef, useCallback, useEffect, Suspense } from 'react';
import { GradeLevel, Exam, UserAnswers, QuestionType } from './types';
import { EXAMS } from './data';
import { BookOpen, CheckCircle, Award, RotateCcw, ArrowDownCircle, Loader2 } from 'lucide-react';
import QuestionCard from './components/QuestionCard';

// Lazy load heavy/non-critical components for performance
const ExpertBookingCard = React.lazy(() => import('./components/ExpertBookingCard'));
const SubscriptionCard = React.lazy(() => import('./components/SubscriptionCard'));
const LockedExamModal = React.lazy(() => import('./components/LockedExamModal'));

// Reusable Exam Button Component - Memoized for performance
const ExamButton: React.FC<{ exam: Exam; onClick: (id: string) => void }> = React.memo(({ exam, onClick }) => (
  <button
    onClick={() => onClick(exam.id)}
    className="bg-white p-6 rounded-xl border-2 border-transparent hover:border-kuwait-green shadow-sm hover:shadow-md transition-all text-left group h-full flex flex-col animate-fade-in"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-kuwait-green group-hover:text-white transition-colors">
        <BookOpen size={24} />
      </div>
      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full uppercase">
        {exam.term}
      </span>
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-1">{exam.title}</h3>
    <p className="text-gray-500 text-sm mb-4">Academic Year: {exam.year}</p>
    <div className="mt-auto pt-4 border-t border-gray-50 w-full">
      <span className="text-kuwait-green font-medium text-sm flex items-center gap-1 group-hover:underline">
        Start Exam →
      </span>
    </div>
  </button>
));

const App: React.FC = () => {
  const [activeGrade, setActiveGrade] = useState<GradeLevel>(GradeLevel.G10);
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Subscription State
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [showLockModal, setShowLockModal] = useState<boolean>(false);

  const examTopRef = useRef<HTMLDivElement>(null);

  // Check localStorage for subscription status on mount
  useEffect(() => {
    const storedSub = localStorage.getItem('kuwait_exams_subscribed');
    if (storedSub === 'true') {
      setIsSubscribed(true);
    }
  }, []);

  const handleUnlock = () => {
    localStorage.setItem('kuwait_exams_subscribed', 'true');
    setIsSubscribed(true);
    setShowLockModal(false);
  };

  // Filter exams based on the active tab (Grade)
  const filteredExams = useMemo(() => EXAMS.filter(e => e.grade === activeGrade), [activeGrade]);
  
  // Get current exam object
  const currentExam = useMemo(() => EXAMS.find(e => e.id === selectedExamId), [selectedExamId]);

  const handleGradeChange = (grade: GradeLevel) => {
    setActiveGrade(grade);
    setSelectedExamId(null);
    setAnswers({});
    setIsSubmitted(false);
  };

  const handleExamSelect = useCallback((id: string) => {
    // Determine if the exam is locked
    const exam = EXAMS.find(e => e.id === id);
    if (!exam) return;

    // Safest is checking if it ends in 'mock-1' which is our convention for the free one
    const isFree = id.endsWith('mock-1');

    if (!isFree && !isSubscribed) {
      setShowLockModal(true);
      return;
    }

    setSelectedExamId(id);
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  }, [isSubscribed]);

  // Optimized with useCallback to maintain reference equality across renders
  const handleAnswer = useCallback((questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  }, []);

  const handleSubmit = () => {
    setIsSubmitted(true);
    
    // Scroll to top smoothly to show the result banner
    setTimeout(() => {
      examTopRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleScrollToQuestions = () => {
    const firstQuestion = document.getElementById('section-0');
    if (firstQuestion) {
      firstQuestion.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optimized Score Calculation with useMemo
  const score = useMemo(() => {
    if (!isSubmitted || !currentExam) return null;

    let correct = 0;
    let total = 0;

    currentExam.sections.forEach(section => {
      section.questions.forEach(q => {
        // Only grade auto-gradable questions for the percentage
        if (q.type === QuestionType.MCQ || 
            q.type === QuestionType.DO_AS_SHOWN || 
            q.type === QuestionType.FILL_IN_BLANKS) {
          total++;
          if (answers[q.id] === q.correctAnswer) {
            correct++;
          }
        }
      });
    });
    return { correct, total, percentage: total > 0 ? Math.round((correct / total) * 100) : 0 };
  }, [isSubmitted, currentExam, answers]);

  const resetExam = () => {
    setAnswers({});
    setIsSubmitted(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans" ref={examTopRef}>
      {/* Lock Modal */}
      {showLockModal && (
        <Suspense fallback={<div className="fixed inset-0 z-50 bg-black/50" />}>
          <LockedExamModal 
            onClose={() => setShowLockModal(false)} 
            onUnlock={handleUnlock} 
          />
        </Suspense>
      )}

      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-kuwait-black rounded flex items-center justify-center text-white font-bold">KW</div>
            <h1 className="text-xl font-bold text-gray-900 hidden sm:block">English Mock Exams</h1>
          </div>
          <nav className="flex bg-gray-100 rounded-lg p-1">
            {Object.values(GradeLevel).map((grade) => (
              <button
                key={grade}
                onClick={() => handleGradeChange(grade)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                  activeGrade === grade 
                    ? 'bg-white text-kuwait-green shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {grade}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Exam Selection View */}
        {!currentExam && (
          <div className="animate-fade-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Select an Exam</h2>
              <p className="text-gray-500">Practice with real mock exams for {activeGrade}</p>
            </div>
            
            {/* Grid Layout */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              
              {/* 1. First Exam Box */}
              {filteredExams.length > 0 && (
                <ExamButton exam={filteredExams[0]} onClick={handleExamSelect} />
              )}

              {/* 2. Marketing/Subscription Box */}
              <Suspense fallback={
                <div className="bg-white p-6 rounded-xl border-2 border-gray-100 h-full flex items-center justify-center min-h-[300px]">
                  <Loader2 className="animate-spin text-gray-300" size={32} />
                </div>
              }>
                <SubscriptionCard />
              </Suspense>

              {/* 3. Remaining Exams */}
              {filteredExams.slice(1).map(exam => (
                <ExamButton key={exam.id} exam={exam} onClick={handleExamSelect} />
              ))}
              
              {/* 4. Expert Teacher Booking Box */}
              <div className="md:col-span-2 lg:col-span-1 lg:col-start-2 h-full">
                <Suspense fallback={
                  <div className="bg-white p-6 rounded-xl border-2 border-gray-100 h-full flex items-center justify-center min-h-[300px]">
                     <Loader2 className="animate-spin text-gray-300" size={32} />
                  </div>
                }>
                  <ExpertBookingCard />
                </Suspense>
              </div>

            </div>
          </div>
        )}

        {/* Active Exam View */}
        {currentExam && (
          <div className="animate-fade-in relative max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setSelectedExamId(null)}
                className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
              >
                ← Back to Exams
              </button>
              <div className="text-sm font-bold text-kuwait-green px-3 py-1 bg-green-50 rounded-full border border-green-100">
                {currentExam.grade} • {currentExam.term}
              </div>
            </div>

            {/* Result Banner */}
            {isSubmitted && score && (
              <div className="bg-white rounded-xl shadow-lg border-2 border-green-500 p-8 mb-8 text-center animate-scale-in ring-4 ring-green-50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 shadow-sm">
                  <Award size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Exam Completed!</h2>
                <p className="text-gray-500 mb-6">You have finished the exam. See your results below.</p>
                
                <div className="flex justify-center gap-8 mb-8 bg-gray-50 p-4 rounded-xl inline-flex mx-auto">
                  <div className="text-center px-4">
                    <div className="text-4xl font-bold text-kuwait-green">{score.percentage}%</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wide mt-1">Score</div>
                  </div>
                  <div className="w-px bg-gray-300"></div>
                  <div className="text-center px-4">
                    <div className="text-4xl font-bold text-gray-900">{score.correct}/{score.total}</div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wide mt-1">Correct Answers</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleScrollToQuestions}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <ArrowDownCircle size={18} />
                    Review Answers
                  </button>
                  
                  <button 
                    onClick={resetExam}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors shadow-sm"
                  >
                    <RotateCcw size={18} />
                    Retake Exam
                  </button>
                </div>
                
                <div className="mt-6 text-xs text-gray-400 italic">
                  * Note: Only Vocabulary and Grammar sections are auto-graded. Review model answers for writing/open sections.
                </div>
              </div>
            )}

            <div className="space-y-8">
              {currentExam.sections.map((section, index) => (
                <div key={section.id} id={`section-${index}`} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                  <div className="mb-6 border-b border-gray-100 pb-4">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h2>
                    <p className="text-gray-600 font-medium text-sm">{section.instructions}</p>
                  </div>

                  {/* Context Passage (Reading or Word Bank) */}
                  {section.contextPassage && (
                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 mb-6 text-gray-800 leading-relaxed shadow-inner">
                      <h4 className="text-blue-800 font-bold mb-2 uppercase text-xs tracking-wide">Reference / Word Bank</h4>
                      <p className="font-medium">{section.contextPassage}</p>
                    </div>
                  )}

                  <div className="space-y-6">
                    {section.questions.map((question, idx) => (
                      <QuestionCard
                        key={question.id}
                        question={question}
                        selectedAnswer={answers[question.id]}
                        onAnswer={handleAnswer}
                        isSubmitted={isSubmitted}
                        questionIndex={idx}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Submit Button */}
            {!isSubmitted && (
              <div className="fixed bottom-6 left-0 right-0 flex justify-center z-50 pointer-events-none px-4">
                <button
                  onClick={handleSubmit}
                  className="pointer-events-auto bg-kuwait-green text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-green-700 hover:scale-105 transition-all flex items-center gap-3 border-2 border-white ring-2 ring-green-200"
                >
                  <CheckCircle size={24} />
                  Finish & Check Answers
                </button>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
