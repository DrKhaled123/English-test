
import React from 'react';
import { X, Crown, Check, ExternalLink, Gift } from 'lucide-react';

interface LockedExamModalProps {
  onClose: () => void;
  onUnlock: () => void;
}

const LockedExamModal: React.FC<LockedExamModalProps> = ({ onClose, onUnlock }) => {
  const handleSubscribeClick = () => {
    // Open the form
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScdZUjA4nsWqdFKXLDLi15EF7oLeTtpqbxQl7FDqAQZ81agSQ/viewform?usp=header", "_blank");
    // Unlock the content (assuming user fulfills the action)
    onUnlock();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden">
        {/* Header Background */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="inline-flex p-3 bg-white/20 rounded-full mb-3 backdrop-blur-md ring-4 ring-white/10">
            <Crown size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-1">Unlock Full Access</h2>
          <p className="font-arabic text-lg opacity-90">اشترك الآن لفتح جميع الاختبارات</p>
        </div>

        <div className="p-8">
          <p className="text-gray-600 text-center mb-6">
            This content is available for <strong>Distinguished Members</strong> only. Subscribe now to access Mock Exam 2, the Question Bank, and more!
            <br/>
            <span className="text-sm text-gray-500 font-arabic mt-2 block">
              هذا المحتوى متاح للأعضاء المتميزين فقط. اشترك الآن لفتح الاختبار الثاني وبنك الأسئلة!
            </span>
          </p>

          <div className="space-y-4 mb-8">
             <div className="flex gap-3 items-start p-3 bg-amber-50 rounded-lg border border-amber-100">
               <div className="mt-1 text-amber-600 shrink-0"><Check size={18} /></div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Access all Mock Exams & Question Banks</p>
                 <p className="text-xs text-gray-600 font-arabic">فتح جميع الاختبارات وبنوك الأسئلة</p>
               </div>
             </div>

             <div className="flex gap-3 items-start p-3 bg-amber-50 rounded-lg border border-amber-100">
               <div className="mt-1 text-amber-600 shrink-0"><Check size={18} /></div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Detailed Explanations & Translation</p>
                 <p className="text-xs text-gray-600 font-arabic">شرح مفصل وترجمة لجميع الأسئلة</p>
               </div>
             </div>

             <div className="flex gap-3 items-start p-3 bg-green-50 rounded-lg border border-green-100">
               <div className="mt-1 text-green-600 shrink-0"><Gift size={18} /></div>
               <div>
                 <p className="text-sm font-bold text-gray-800">Exclusive Bonus Content</p>
                 <p className="text-xs text-gray-600 font-arabic">محتوى إضافي حصري وخصومات</p>
               </div>
             </div>
          </div>

          <button
            onClick={handleSubscribeClick}
            className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-amber-200 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Subscribe & Unlock</span>
            <span className="font-arabic mx-1">| اشترك وافتح الاختبار</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <p className="text-xs text-center text-gray-400 mt-4">
            Content will unlock automatically after you visit the subscription page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LockedExamModal;
