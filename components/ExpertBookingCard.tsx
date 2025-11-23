import React from 'react';
import { Star, CheckCircle, GraduationCap, CalendarCheck, Trophy, Users } from 'lucide-react';

const REVIEWS = [
  { name: "Student", text: "يعطيه العافية الأستاذ أحمد، الشرح كان وايد مبسط وفهمت القواعد عدل." },
  { name: "Student", text: "كنت ساقط بالدور الأول، وبفضل الله ثم مراجعة الأستاذ نجحت بالدور الثاني." },
  { name: "Student", text: "خوش أستاذ، فاهم المنهج وحيل ساعدني بالأسئلة المهمة للامتحان." },
  { name: "Student", text: "الصراحة كنت خايف من الإنجليزي، بس المذكرة والشرح خلوني أضمن النجاح." },
  { name: "Student", text: "أنصحكم فيه، الأستاذ خبرة ١٥ سنة وشرحه يدش المخ بسرعة." },
  { name: "Student", text: "رسبت أول مرة، بس مع الأستاذ يبت درجة زينة بالدور الثاني، ما قصر." },
  { name: "Student", text: "جزاه الله خير، المراجعة كانت بالصميم والأسئلة يت نفسها." }
];

const ExpertBookingCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border-2 border-indigo-100 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden flex flex-col h-full animate-fade-in">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-bl-full -mr-10 -mt-10 opacity-50 transition-transform group-hover:scale-110"></div>
      
      <div className="flex items-start justify-between mb-4 relative z-10">
        <div className="p-3 bg-indigo-600 rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform">
          <GraduationCap size={28} />
        </div>
        <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
          <Trophy size={12} /> Top Rated
        </span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-1">Book an Expert Teacher</h3>
      <p className="text-indigo-600 font-bold text-lg mb-4 font-arabic">احجز مدرس خبير</p>

      <div className="space-y-3 mb-6">
        <div className="flex items-start gap-2 text-gray-700">
          <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm font-medium leading-tight">Head of Dept & Exam Supervisor (رئيس قسم ومشرف)</span>
        </div>
        <div className="flex items-start gap-2 text-gray-700">
          <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm font-medium leading-tight">15+ Years Experience (خبرة أكثر من ١٥ سنة)</span>
        </div>
        <div className="flex items-start gap-2 text-gray-700">
          <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
          <span className="text-sm font-medium leading-tight">Specialized in 2nd Round Success (متخصص دور ثاني)</span>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-indigo-50 mb-6 shadow-inner flex-1 overflow-hidden flex flex-col min-h-[200px]">
        <div className="bg-gray-50 px-4 py-2 border-b border-gray-100 flex justify-between items-center">
            <h4 className="text-xs font-bold text-gray-500 uppercase">Student Reviews</h4>
            <div className="flex items-center gap-1 text-xs text-indigo-600 font-bold">
              <Users size={12} />
              <span>اراء الطلاب</span>
            </div>
        </div>
        <div className="p-4 overflow-y-auto custom-scrollbar flex-1 max-h-[200px]">
            <div className="space-y-4">
            {REVIEWS.map((review, i) => (
                <div key={i} className="text-right border-b border-gray-50 pb-3 last:border-0 last:pb-0">
                <div className="flex items-center justify-end gap-1 mb-1">
                    <div className="flex">
                    {[...Array(5)].map((_, j) => (
                        <Star key={j} size={10} className="text-yellow-400 fill-yellow-400" />
                    ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">{review.name}</span>
                </div>
                <p className="text-sm text-gray-700 font-arabic leading-relaxed bg-gray-50 p-2 rounded-r-lg rounded-bl-lg inline-block shadow-sm">{review.text}</p>
                </div>
            ))}
            </div>
        </div>
      </div>

      <a 
        href="https://docs.google.com/forms/d/e/1FAIpQLScdZUjA4nsWqdFKXLDLi15EF7oLeTtpqbxQl7FDqAQZ81agSQ/viewform?usp=header" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full mt-auto block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group-hover:ring-2 ring-indigo-200 ring-offset-1"
      >
        <CalendarCheck size={20} />
        <span>Book Now / احجز الآن</span>
      </a>
    </div>
  );
};

export default ExpertBookingCard;