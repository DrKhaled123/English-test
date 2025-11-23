import React from 'react';
import { Crown, Check, ArrowRight, Gift } from 'lucide-react';

const SubscriptionCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl border-2 border-amber-200 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-amber-100 rounded-bl-full -mr-12 -mt-12 opacity-40 transition-transform group-hover:scale-110"></div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="p-3 bg-amber-500 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform animate-pulse">
          <Crown size={28} />
        </div>
        <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
          Premium
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-1">Distinguished Membership</h3>
      <p className="text-amber-600 font-bold text-lg mb-6 font-arabic">عضوية الطالب المتميز</p>

      <div className="space-y-4 mb-8 flex-1">
        <div className="flex gap-3">
          <div className="mt-1 text-amber-500 shrink-0"><Check size={18} /></div>
          <div>
            <p className="text-sm text-gray-600 font-medium">All questions & explanations with translation</p>
            <p className="text-xs text-gray-500 font-arabic mt-0.5">احصل على كل الأسئلة والشرح لها مع القراءة والترجمة</p>
          </div>
        </div>

        <div className="flex gap-3">
           <div className="mt-1 text-amber-500 shrink-0"><Check size={18} /></div>
           <div>
            <p className="text-sm text-gray-600 font-medium">No need for external books or notes</p>
            <p className="text-xs text-gray-500 font-arabic mt-0.5">لا حاجة للكتب الخارجية والمذكرات وكثرة تشتت المصادر</p>
           </div>
        </div>

        <div className="flex gap-3">
           <div className="mt-1 text-amber-500 shrink-0"><Check size={18} /></div>
           <div>
            <p className="text-sm text-gray-600 font-medium">Join before spots fill up</p>
            <p className="text-xs text-gray-500 font-arabic mt-0.5">احصل على عضوية الطالب المتميز والاختبارات التدريبية قبل امتلاء الأعداد</p>
           </div>
        </div>

        <div className="bg-green-50 border border-green-200 p-3 rounded-lg flex gap-3 mt-4">
           <div className="mt-1 text-green-600 shrink-0"><Gift size={20} /></div>
           <div>
            <p className="text-sm text-green-800 font-bold">5 KD Bonus / Discount</p>
            <p className="text-xs text-green-700 font-arabic mt-0.5">احصلى على فائض 5 دينار عندما تشاركه مع صديقك ويشترك معك</p>
           </div>
        </div>
      </div>

      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScdZUjA4nsWqdFKXLDLi15EF7oLeTtpqbxQl7FDqAQZ81agSQ/viewform?usp=header" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full mt-auto block text-center bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:ring-2 ring-amber-200 ring-offset-1"
      >
        <span>Subscribe Now / اشترك الآن</span>
        <ArrowRight size={18} />
      </a>
    </div>
  );
};

export default SubscriptionCard;