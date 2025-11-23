
import { Exam, GradeLevel, QuestionType } from './types';

export const EXAMS: Exam[] = [
  // ==================================================================================
  //                                   GRADE 10
  // ==================================================================================
  {
    id: 'g10-mock-1',
    title: 'Grade 10 Mock Exam 1',
    grade: GradeLevel.G10,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g10-m1-vocab-mcq',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the most suitable word that best completes each of the following sentences:',
        questions: [
          {
            id: 'g10-m1-v1',
            text: "My grandfather’s health has improved a lot since he started taking this vitamin …………",
            type: QuestionType.MCQ,
            options: ['influx', 'supplement', 'discourse', 'virtue'],
            correctAnswer: 'supplement',
            explanation: "A supplement is something added to complete or enhance something else. \n(المكمل الغذائي يضاف لتحسين الصحة)."
          },
          {
            id: 'g10-m1-v2',
            text: "The number of nerve cells in the brain makes it the most …………… organ of the body.",
            type: QuestionType.MCQ,
            options: ['inspirational', 'atmospheric', 'spacious', 'convoluted'],
            correctAnswer: 'convoluted',
            explanation: "Convoluted describes the complex structure of the brain. \n(كلمة Convoluted تعني معقد أو متداخل، وهي تصف تركيبة الدماغ)."
          },
          {
            id: 'g10-m1-v3',
            text: "My elder brother was ………………. as a software engineer in a big computer company.",
            type: QuestionType.MCQ,
            options: ['employed', 'combated', 'metabolised', 'drilled'],
            correctAnswer: 'employed',
            explanation: "To be employed means to be given a job. \n(Employed تعني تم توظيفه)."
          },
          {
            id: 'g10-m1-v4',
            text: "Green tea is rich in antioxidants which help .................... diseases.",
            type: QuestionType.MCQ,
            options: ['combat', 'metabolise', 'appeal', 'cover'],
            correctAnswer: 'combat',
            explanation: "Combat means to fight against diseases. \n(Combat تعني يحارب أو يكافح الأمراض)."
          },
          {
            id: 'g10-m1-v5',
            text: "Earthquake victims were living in tents in the city's parks facing a lot of………………..",
            type: QuestionType.MCQ,
            options: ['council', 'creed', 'adversity', 'arcade'],
            correctAnswer: 'adversity',
            explanation: "'Adversity' means difficulties or misfortune. \n(Adversity تعني الشدائد أو المصاعب)."
          }
        ]
      },
      {
        id: 'g10-m1-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the spaces with the most suitable words from the list:',
        contextPassage: "richly / apprehensive / slightly / able-bodied / conduct / simulate",
        questions: [
          {
            id: 'g10-m1-v6',
            text: "It is surely the duty of the …………….. members in a society to help those who are weak.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['richly', 'apprehensive', 'slightly', 'able-bodied', 'conduct', 'simulate'],
            correctAnswer: 'able-bodied',
            explanation: "Able-bodied refers to people who are physically healthy. \n(Able-bodied تعني الأصحاء جسدياً)."
          },
          {
            id: 'g10-m1-v7',
            text: "My brother was so …………….. about his job interview that he couldn’t sleep well.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['richly', 'apprehensive', 'slightly', 'able-bodied', 'conduct', 'simulate'],
            correctAnswer: 'apprehensive',
            explanation: "Apprehensive means worried or anxious. \n(Apprehensive تعني قلق أو متوتر)."
          },
          {
            id: 'g10-m1-v8',
            text: "The national football team was …………….. rewarded for their great performance.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['richly', 'apprehensive', 'slightly', 'able-bodied', 'conduct', 'simulate'],
            correctAnswer: 'richly',
            explanation: "Richly rewarded means generously rewarded. \n(Richly تعني بسخاء أو بوفرة)."
          },
          {
            id: 'g10-m1-v9',
            text: "Some researchers refuse to …………….. scientific experiments on animals.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['richly', 'apprehensive', 'slightly', 'able-bodied', 'conduct', 'simulate'],
            correctAnswer: 'conduct',
            explanation: "To conduct experiments means to carry them out. \n(Conduct تعني يجري تجارب)."
          },
          {
            id: 'g10-m1-v10',
            text: "I always buy top quality products even if they were …………….. more expensive.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['richly', 'apprehensive', 'slightly', 'able-bodied', 'conduct', 'simulate'],
            correctAnswer: 'slightly',
            explanation: "Slightly modifies 'more expensive' (a little bit). \n(Slightly تعني قليلاً)."
          }
        ]
      },
      {
        id: 'g10-m1-grammar-mcq',
        title: 'II. Grammar (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g10-m1-g1',
            text: "………………… bags should be recycled for the sake of our environment.",
            type: QuestionType.MCQ,
            options: ['Black small plastic', 'Small black plastic', 'Plastic small black', 'Plastic black small'],
            correctAnswer: 'Small black plastic',
            explanation: "Adjective Order: Size (Small) -> Color (Black) -> Material (Plastic). \n(ترتيب الصفات: الحجم ثم اللون ثم المادة)."
          },
          {
            id: 'g10-m1-g2',
            text: "I like living in the countryside, it’s ………………. than living in a town.",
            type: QuestionType.MCQ,
            options: ['more peaceful', 'peaceful', 'most peaceful', 'the most peaceful'],
            correctAnswer: 'more peaceful',
            explanation: "Comparative form (more...than) is used to compare two things. \n(صيغة المقارنة نستخدم more peaceful لوجود than)."
          },
          {
            id: 'g10-m1-g3',
            text: "I have been waiting for you ...................... two hours.",
            type: QuestionType.MCQ,
            options: ['since', 'for', 'ago', 'yet'],
            correctAnswer: 'for',
            explanation: "For is used with a duration of time. \n(نستخدم For مع المدة الزمنية المحددة)."
          },
          {
            id: 'g10-m1-g4',
            text: "This is the man ...................... car was stolen.",
            type: QuestionType.MCQ,
            options: ['who', 'which', 'whose', 'whom'],
            correctAnswer: 'whose',
            explanation: "Whose indicates possession. \n(Whose تستخدم للملكية: الرجل الذي سيارته)."
          }
        ]
      },
      {
        id: 'g10-m1-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g10-m1-g5',
            text: "When you use more electricity, you will pay more money. (Begin with “The more…”)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'The more electricity you use, the more money you will pay.',
              'The more electricity you use, the more you will pay money.',
              'The more electricity you use, the money more you will pay.'
            ],
            correctAnswer: 'The more electricity you use, the more money you will pay.',
            explanation: "Double comparative structure: The more..., the more... \n(قاعدة كلما... كلما...)."
          },
          {
            id: 'g10-m1-g6',
            text: "My sister (watch) television when the phone rang. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['watches', 'was watching', 'is watching'],
            correctAnswer: 'was watching',
            explanation: "Past Continuous (was watching) interrupted by Past Simple (rang). \n(الماضي المستمر لحدث كان مستمراً وقاطعه حدث آخر)."
          },
          {
            id: 'g10-m1-g7',
            text: "He didn't go to school because he was sick. (Ask a question)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Why didn\'t he go to school?',
              'Why doesn\'t he go to school?',
              'Why he didn\'t go to school?'
            ],
            correctAnswer: 'Why didn\'t he go to school?',
            explanation: "Past simple question formation requires 'did'. \n(تكوين السؤال في الماضي البسيط)."
          },
          {
            id: 'g10-m1-g8',
            text: "I have already finished my homework. (Make negative)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'I have not finished my homework yet.',
              'I don\'t finish my homework yet.',
              'I didn\'t finish my homework yet.'
            ],
            correctAnswer: 'I have not finished my homework yet.',
            explanation: "Present perfect negative changes 'already' to 'yet'. \n(عند النفي في المضارع التام نستخدم yet في نهاية الجملة)."
          }
        ]
      },
      {
        id: 'g10-m1-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say in the following situations:',
        questions: [
          {
            id: 'g10-m1-lf1',
            text: "A friend of yours wants to know your plans for the next mid-year holiday.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am planning to travel to Dubai with my family.",
            explanation: "Expressing plans/intentions. \n(التعبير عن الخطط)."
          },
          {
            id: 'g10-m1-lf2',
            text: "Your younger brother is fond of watching scary movies.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I advise you not to watch them, they might give you nightmares.",
            explanation: "Giving advice. \n(إعطاء نصيحة)."
          },
          {
            id: 'g10-m1-lf3',
            text: "You want to borrow your friend's camera.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Can I please borrow your camera?",
            explanation: "Polite request. \n(طلب مؤدب)."
          },
          {
            id: 'g10-m1-lf4',
            text: "Your sister won a gold medal in the running race.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Congratulations! I am so proud of you.",
            explanation: "Congratulating. \n(التهنئة)."
          }
        ]
      },
      {
        id: 'g10-m1-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g10-m1-sb1',
            text: "Why should we eat homemade meals and avoid fast food?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because homemade meals are healthier, contain less fat, and bring the family together.",
            explanation: "Unit: Healthy Lifestyle. \n(الطعام المنزلي صحي أكثر ويجمع العائلة)."
          },
          {
            id: 'g10-m1-sb2',
            text: "What has Kuwait done to further the culture of peace?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Kuwait organizes conferences and seminars to promote understanding and respect between nations.",
            explanation: "Unit: Culture of Peace. \n(الكويت تنظم مؤتمرات لتعزيز التفاهم)."
          },
          {
            id: 'g10-m1-sb3',
            text: "What is the importance of the Paralympics?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It empowers disabled athletes, builds their confidence, and helps in their rehabilitation.",
            explanation: "Unit: Sports. \n(تعزز الثقة وتساعد في تأهيل المعاقين)."
          },
          {
            id: 'g10-m1-sb4',
            text: "Why is the National Assembly Building in Kuwait famous?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because of its unique Islamic design that reflects Kuwait's heritage and democracy.",
            explanation: "Unit: Famous Buildings. \n(بسبب تصميمه الإسلامي الفريد)."
          },
          {
            id: 'g10-m1-sb5',
            text: "How can we save energy in our homes?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By turning off lights when not in use and using energy-saving devices.",
            explanation: "Unit: Energy. \n(إطفاء الأنوار واستخدام أجهزة موفرة للطاقة)."
          }
        ]
      },
      {
        id: 'g10-m1-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Mobile is becoming not only the new digital centre, but also the bridge to the physical world.",
        questions: [
          {
            id: 'g10-m1-wr',
            text: "Write an essay (12 sentences) about the benefits of mobile applications and how they affect our daily behaviour.",
            type: QuestionType.WRITING,
            correctAnswer: "Outline: Intro (Mobile importance), Body 1 (Benefits: Communication, Information), Body 2 (Effects: Addiction, Efficiency), Conclusion.",
            explanation: "Expository Essay."
          }
        ]
      },
      {
        id: 'g10-m1-reading-comp',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "The World of Extreme Sports\n\nExtreme sports are activities perceived as having a high level of inherent danger. These activities often involve speed, height, a high level of physical exertion, and highly specialized gear. While traditional sports like football and basketball rely on rules and referees, extreme sports are often about an individual competing against nature or their own limits. Popular examples include mountain biking, snowboarding, and skydiving, which have all seen a surge in popularity over the last two decades.\n\nFor many participants, the main attraction is the 'adrenaline rush'. When facing danger, the body releases adrenaline, a hormone that increases heart rate and energy. This chemical reaction creates a feeling of excitement and heightened awareness that some people find addictive. Psychologists suggest that people who engage in these sports often have a personality type that seeks new and intense sensations. They are not necessarily reckless; rather, they are highly skilled individuals who prepare meticulously to manage the risks involved.\n\nHowever, the physical demands are significant. Athletes must be in peak physical condition to perform stunts or navigate treacherous terrains. Injuries are common, ranging from minor bruises to life-threatening accidents. Despite the risks, the mental benefits can be profound. Overcoming fear and mastering difficult skills builds immense self-confidence and resilience, qualities that are valuable in everyday life and business.\n\nThe commercialization of extreme sports has also transformed them from fringe activities into global entertainment phenomena. Major events like the X Games have brought these sports to living rooms worldwide, creating professional athletes who enjoy celebrity status. This media exposure has attracted sponsorships from major brands, pouring money into the industry. Consequently, what started as rebellious hobbies has evolved into a structured, multi-billion dollar business ecosystem.\n\nSafety technology has improved dramatically, allowing more people to try these sports. Equipment like helmets, pads, and GPS trackers have made activities like rock climbing safer than ever before. As technology advances, we see the emergence of new sports like wingsuit flying. Ultimately, extreme sports are less about courting death and more about celebrating the feeling of being fully alive through the aid of modern science.",
        questions: [
          {
            id: 'g10-m1-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The Dangers of Football', 'The World of Extreme Sports', 'How to Buy Sports Gear', 'Medical Treatments for Injuries'],
            correctAnswer: 'The World of Extreme Sports',
            explanation: "The passage covers the definition, psychology, risks, and future of extreme sports."
          },
          {
            id: 'g10-m1-rc-2',
            text: "The main idea of the 2nd paragraph is:",
            type: QuestionType.MCQ,
            options: ['The psychological reasons behind extreme sports', 'The cost of equipment', 'The rules of skydiving', 'The history of adrenaline'],
            correctAnswer: 'The psychological reasons behind extreme sports',
            explanation: "Paragraph 2 discusses the adrenaline rush and the personality type of participants."
          },
          {
            id: 'g10-m1-rc-3',
            text: "The underlined word 'meticulously' in the 2nd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['carelessly', 'quickly', 'carefully', 'badly'],
            correctAnswer: 'carefully',
            explanation: "Meticulously means with great care and attention to detail."
          },
          {
            id: 'g10-m1-rc-4',
            text: "The underlined pronoun 'They' in the 2nd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['psychologists', 'traditional sports', 'people who engage in extreme sports', 'chemical reactions'],
            correctAnswer: 'people who engage in extreme sports',
            explanation: "The sentence starts 'They are not necessarily reckless...', referring to the participants mentioned in the previous sentence."
          },
          {
            id: 'g10-m1-rc-5',
            text: "According to the passage, what makes extreme sports different from traditional sports?",
            type: QuestionType.MCQ,
            options: ['They use balls', 'They rely on referees', 'They involve competing against nature or limits', 'They are played indoors'],
            correctAnswer: 'They involve competing against nature or limits',
            explanation: "Found in paragraph 1."
          },
          {
            id: 'g10-m1-rc-6',
            text: "What is the 'adrenaline rush'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It is a chemical reaction where the body releases a hormone that increases heart rate and energy, creating excitement.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g10-m1-rc-7',
            text: "Why do psychologists think people engage in extreme sports?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because they have a personality type that seeks new and intense sensations.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g10-m1-rc-8',
            text: "What are the mental benefits of extreme sports?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They help build immense self-confidence and resilience by overcoming fear.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g10-m1-rc-9',
            text: "How has technology impacted extreme sports?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It has improved safety through better equipment like helmets and GPS trackers, and enabled new sports.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g10-m1-rc-10',
            text: "Give two examples of extreme sports mentioned in the text.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Mountain biking, snowboarding, skydiving, rock climbing, or wingsuit flying.",
            explanation: "Found in paragraphs 1 and 5."
          }
        ]
      },
      {
        id: 'g10-m1-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the LAST paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase how safety and technology have changed extreme sports.',
        questions: [
          {
            id: 'g10-m1-sum',
            text: "Summarize the role of technology in extreme sports.",
            type: QuestionType.WRITING,
            correctAnswer: "1. Safety technology has made these sports accessible to more people. 2. Modern gear like helmets and GPS has reduced the risks. 3. New technology has also led to the creation of entirely new sports. 4. Overall, these advancements focus on enjoying life rather than risking death.",
            explanation: "Summary of paragraph 5."
          }
        ]
      },
      {
        id: 'g10-m1-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g10-m1-tr1',
            text: "أحمد: لقد كانت دولة الكويت الدولة األولى في منطقة الخليج اهتماما بالمعاقين.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ahmed: Kuwait was the first country in the Gulf region to care for the disabled.",
            explanation: "Translation."
          },
          {
            id: 'g10-m1-tr2',
            text: "فهد: هذا صحيح فقد أسست ناديا رياضيا لهم عام 1977.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Fahd: That's right, it established a sports club for them in 1977.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  // ==================================================================================
  //                              GRADE 10 MOCK 2 (LOCKED & COMPREHENSIVE)
  // ==================================================================================
  {
    id: 'g10-mock-2',
    title: 'Grade 10 Mock Exam 2 (Comprehensive)',
    grade: GradeLevel.G10,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g10-m2-vocab-mcq',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g10-m2-v1',
            text: "Because my father is a football .................., he hasn’t missed any games for ten years.",
            type: QuestionType.MCQ,
            options: ['speciality', 'fanatic', 'metabolism', 'nutrition'],
            correctAnswer: 'fanatic',
            explanation: "A fanatic is a person filled with excessive and single-minded zeal. \n(المتعصب أو المهووس بالشيء)."
          },
          {
            id: 'g10-m2-v2',
            text: "While working in his garden, Harry’s ........................ caused his finger to ache and become stiff.",
            type: QuestionType.MCQ,
            options: ['protein', 'metabolism', 'arthritis', 'eatery'],
            correctAnswer: 'arthritis',
            explanation: "Arthritis causes pain and stiffness in joints. \n(التهاب المفاصل يسبب الألم والتيبس)."
          },
          {
            id: 'g10-m2-v3',
            text: "The imported products from Europe .................... many customers in the Gulf area.",
            type: QuestionType.MCQ,
            options: ['neutralise', 'appeal to', 'absorb', 'metabolise'],
            correctAnswer: 'appeal to',
            explanation: "To appeal to means to be attractive or interesting to someone. \n(تجذب اهتمام)."
          },
          {
            id: 'g10-m2-v4',
            text: "Tourism has acted as a .................... to the country's economy.",
            type: QuestionType.MCQ,
            options: ['stimulant', 'sodium', 'caffeine', 'calcium'],
            correctAnswer: 'stimulant',
            explanation: "A stimulant raises levels of activity; here it boosts the economy. \n(محفز أو منشط للاقتصاد)."
          },
          {
            id: 'g10-m2-v5',
            text: "We need to .................... the old system with a new, more efficient one.",
            type: QuestionType.MCQ,
            options: ['employ', 'combat', 'cover', 'replace'],
            correctAnswer: 'replace',
            explanation: "Replace fits the context of swapping old for new. \n(استبدال النظام القديم)."
          }
        ]
      },
      {
        id: 'g10-m2-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the spaces with the most suitable words from the list:',
        contextPassage: "grilled / probiotic / digestive / crammed / atmospheric / observe",
        questions: [
          {
            id: 'g10-m2-v6',
            text: "Instead of folding his clothes, my brother had his clothes ........... into a dresser drawer.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['grilled', 'probiotic', 'digestive', 'crammed', 'atmospheric', 'observe'],
            correctAnswer: 'crammed',
            explanation: "Crammed means forced into a space that is too small. \n(حشر الملابس)."
          },
          {
            id: 'g10-m2-v7',
            text: "You can get ........................ bacteria from many types of food such as yogurt.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['grilled', 'probiotic', 'digestive', 'crammed', 'atmospheric', 'observe'],
            correctAnswer: 'probiotic',
            explanation: "Probiotics are live bacteria/yeasts good for health. \n(بكتيريا نافعة)."
          },
          {
            id: 'g10-m2-v8',
            text: "When eating large meals, your ................. system will be overloaded.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['grilled', 'probiotic', 'digestive', 'crammed', 'atmospheric', 'observe'],
            correctAnswer: 'digestive',
            explanation: "Digestive system processes food. \n(الجهاز الهضمي)."
          },
          {
            id: 'g10-m2-v9',
            text: "My mother prepared some ………….. chicken sandwiches for lunch.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['grilled', 'probiotic', 'digestive', 'crammed', 'atmospheric', 'observe'],
            correctAnswer: 'grilled',
            explanation: "Grilled refers to food cooked on a grill. \n(مشوي)."
          },
          {
            id: 'g10-m2-v10',
            text: "Muslims .................... the holy month of Ramadan by fasting.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['grilled', 'probiotic', 'digestive', 'crammed', 'atmospheric', 'observe'],
            correctAnswer: 'observe',
            explanation: "To observe a religious occasion. \n(يحيي شعائر أو يلتزم بـ)."
          }
        ]
      },
      {
        id: 'g10-m2-grammar-mcq',
        title: 'II. Grammar (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g10-m2-g1',
            text: "While I ................. a story, the train stopped suddenly.",
            type: QuestionType.MCQ,
            options: ['am reading', 'have read', 'was reading', 'reading'],
            correctAnswer: 'was reading',
            explanation: "Past Continuous (was reading) for an action in progress interrupted by Past Simple. \n(بينما كنت أقرأ - حدث مستمر في الماضي)."
          },
          {
            id: 'g10-m2-g2',
            text: "We ..................... on the project when the teacher came into the room.",
            type: QuestionType.MCQ,
            options: ['work', 'were working', 'are working', 'worked'],
            correctAnswer: 'were working',
            explanation: "Past Continuous (were working) interrupted by Past Simple (came). \n(كنا نعمل عندما دخل المعلم)."
          },
          {
            id: 'g10-m2-g3',
            text: "I usually go to school ...................... bus.",
            type: QuestionType.MCQ,
            options: ['on', 'by', 'in', 'at'],
            correctAnswer: 'by',
            explanation: "By is used with means of transport (by bus). \n(حرف الجر by يستخدم مع وسائل المواصلات)."
          },
          {
            id: 'g10-m2-g4',
            text: "This is the ...................... building in the city.",
            type: QuestionType.MCQ,
            options: ['tall', 'taller', 'tallest', 'most tall'],
            correctAnswer: 'tallest',
            explanation: "Superlative adjective. \n(صيغة التفضيل العليا: الأطول)."
          }
        ]
      },
      {
        id: 'g10-m2-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g10-m2-g5',
            text: "She dropped the (old / green / beautiful) plate. (Reorder adjectives)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'She dropped the beautiful old green plate.',
              'She dropped the green beautiful old plate.',
              'She dropped the old beautiful green plate.'
            ],
            correctAnswer: 'She dropped the beautiful old green plate.',
            explanation: "Order: Opinion (beautiful) -> Age (old) -> Color (green). \n(الرأي ثم العمر ثم اللون)."
          },
          {
            id: 'g10-m2-g6',
            text: "If I were a scientist, I (do) my best to invent a vaccine. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'will do',
              'would do',
              'did'
            ],
            correctAnswer: 'would do',
            explanation: "Second Conditional: If + Past Simple -> Would + Infinitive. \n(الحالة الشر الثانية: للتخيل)."
          },
          {
            id: 'g10-m2-g7',
            text: "They have cleaned the room. (Change into Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'The room has been cleaned.',
              'The room have been cleaned.',
              'The room was cleaned.'
            ],
            correctAnswer: 'The room has been cleaned.',
            explanation: "Present Perfect Passive: has/have + been + V3. \n(المبني للمجهول في المضارع التام)."
          },
          {
            id: 'g10-m2-g8',
            text: "Ali plays football every Friday. (Ask a question)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'When does Ali play football?',
              'When is Ali playing football?',
              'When did Ali play football?'
            ],
            correctAnswer: 'When does Ali play football?',
            explanation: "Present simple question with 'does'. \n(السؤال في المضارع البسيط)."
          }
        ]
      },
      {
        id: 'g10-m2-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say in the following situations:',
        questions: [
          {
            id: 'g10-m2-lf1',
            text: "You want to persuade your sister to go with you to the concert.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Please come with me, it will be amazing! / You shouldn't miss it.",
            explanation: "Persuasion. \n(الإقناع)."
          },
          {
            id: 'g10-m2-lf2',
            text: "Your father refuses to let you go with your friends to the cinema.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Please dad, I promise to finish my homework first.",
            explanation: "Persuasion/Negotiation. \n(الإقناع والتفاوض)."
          },
          {
            id: 'g10-m2-lf3',
            text: "Your friend looks very tired.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "You should see a doctor. / Why don't you take a rest?",
            explanation: "Giving advice/Suggestion. \n(نصيحة أو اقتراح)."
          },
          {
            id: 'g10-m2-lf4',
            text: "You spilled coffee on your friend's shirt.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am so sorry. Let me clean it for you.",
            explanation: "Apology. \n(الاعتذار)."
          }
        ]
      },
      {
        id: 'g10-m2-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g10-m2-sb1',
            text: "What are the different ways that may help improve our health?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By adding probiotic drinks, drinking green tea, and eating healthy food.",
            explanation: "Unit: Healthy Lifestyle. \n(شرب البروبيوتيك والشاي الأخضر والطعام الصحي)."
          },
          {
            id: 'g10-m2-sb2',
            text: "Why is green tea useful?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It is rich in antioxidants, removes harmful substances, and lowers cholesterol.",
            explanation: "Unit: Healthy Lifestyle. \n(غني بمضادات الأكسدة ويقلل الكوليسترول)."
          },
          {
            id: 'g10-m2-sb3',
            text: "How do computer games affect young people?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They can improve imagination and skills, but too much can lead to isolation and health issues.",
            explanation: "Unit: Computer Games. \n(تنمي الخيال ولكن الإفراط يسبب العزلة)."
          },
          {
            id: 'g10-m2-sb4',
            text: "Why is it important to respect other cultures?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To promote peace, understanding, and avoid conflicts.",
            explanation: "Unit: Respecting Cultures. \n(لنشر السلام والتفاهم وتجنب النزاعات)."
          },
          {
            id: 'g10-m2-sb5',
            text: "How does modern technology help physically challenged people?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It provides devices like wheelchairs and hearing aids that help them live independently.",
            explanation: "Unit: Technology. \n(توفر أجهزة تساعدهم على العيش باستقلالية)."
          }
        ]
      },
      {
        id: 'g10-m2-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Computer games have become very popular among children nowadays.",
        questions: [
          {
            id: 'g10-m2-wr',
            text: "Write an essay (140 words) explaining why it is not recommended to spend too much time playing computer games and how they can be used wisely.",
            type: QuestionType.WRITING,
            correctAnswer: "Outline: Intro (Popularity), Body 1 (Negatives: health, social), Body 2 (Positive use: limits, educational games), Conclusion.",
            explanation: "Expository Essay."
          }
        ]
      },
      {
        id: 'g10-m2-reading-new',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "The Silent Health Crisis: Sleep Deprivation\n\nSleep is as essential to our bodies as food and water, yet in today's fast-paced world, it is often the first thing we sacrifice. Medical researchers have termed the current global situation a 'catastrophic sleep-loss epidemic.' Many people believe that they can function perfectly on just a few hours of rest, but science tells a different story. The average adult needs between seven and nine hours of sleep per night, while teenagers require significantly more, often up to ten hours to support their rapid development.\n\nWhen we sleep, our bodies undergo critical maintenance. Muscles are repaired, and the brain processes information gathered throughout the day, cementing memories. A lack of sleep, or insomnia, leads to immediate cognitive decline. Attention spans shorten, reaction times slow down, and the ability to make sound decisions is impaired. In fact, driving while exhausted has been shown to be as dangerous as driving under the influence of alcohol, leading to thousands of accidents annually.\n\nFurthermore, chronic sleep deprivation is linked to serious long-term health issues. It weakens the immune system, making the body more susceptible to infections. There is also a strong correlation between lack of sleep and weight gain. When the body is tired, it produces more ghrelin, the hormone that signals hunger, and less leptin, the hormone that tells us we are full. This hormonal imbalance often leads to overeating and obesity.\n\nThe economic impact of this crisis is also staggering. Sleep-deprived workers are less productive, more prone to errors, and have higher rates of absenteeism. Billions of dollars are lost every year due to the direct and indirect costs of fatigue in the workplace. Companies are now beginning to realize that encouraging rest is not just good for health, but good for business. Some innovative firms have even introduced 'nap pods' to help employees recharge during the day.\n\nTo combat this issue, experts recommend establishing a strict 'sleep hygiene' routine. This includes setting a consistent bedtime, avoiding screens (phones and tablets) for at least an hour before sleep, and ensuring the bedroom is dark and cool. Prioritizing sleep is not a sign of laziness, but a necessary step towards a healthy, productive life. We must shift our cultural mindset to value rest as a pillar of success rather than an obstacle to it.",
        questions: [
          {
            id: 'g10-m2-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The Dangers of Driving', 'The Importance of Sleep', 'How to Lose Weight', 'Modern Technology'],
            correctAnswer: 'The Importance of Sleep',
            explanation: "The entire passage discusses why sleep is important and the consequences of not getting enough."
          },
          {
            id: 'g10-m2-rc-2',
            text: "The main idea of the 3rd paragraph is:",
            type: QuestionType.MCQ,
            options: ['How sleep affects memory', 'The link between sleep and physical health', 'The definition of ghrelin', 'How to sleep better'],
            correctAnswer: 'The link between sleep and physical health',
            explanation: "The paragraph discusses the immune system and weight gain (physical health)."
          },
          {
            id: 'g10-m2-rc-3',
            text: "The underlined word 'impaired' in the 2nd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['damaged', 'improved', 'ignored', 'calculated'],
            correctAnswer: 'damaged',
            explanation: "Impaired means weakened or damaged."
          },
          {
            id: 'g10-m2-rc-4',
            text: "The underlined pronoun 'it' in the 3rd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['the immune system', 'sleep deprivation', 'weight gain', 'the body'],
            correctAnswer: 'the body',
            explanation: "In the sentence 'When the body is tired, it produces...', 'it' refers to the body."
          },
          {
            id: 'g10-m2-rc-5',
            text: "According to the passage, teenagers need:",
            type: QuestionType.MCQ,
            options: ['Less sleep than adults', '7 to 9 hours of sleep', 'Up to 10 hours of sleep', 'No sleep at all'],
            correctAnswer: 'Up to 10 hours of sleep',
            explanation: "The text states 'teenagers require significantly more, often up to ten hours'."
          },
          {
            id: 'g10-m2-rc-6',
            text: "Why is driving while exhausted considered dangerous?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because reaction times slow down and the ability to make decisions is impaired, similar to driving under the influence.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g10-m2-rc-7',
            text: "How does sleep deprivation lead to weight gain?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It causes a hormonal imbalance: increasing ghrelin (hunger) and decreasing leptin (fullness).",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g10-m2-rc-8',
            text: "What happens to the brain during sleep?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "The brain processes information gathered during the day and cements memories.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g10-m2-rc-9',
            text: "Mention two tips for better 'sleep hygiene' according to the passage.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Setting a consistent bedtime and avoiding screens before sleep.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g10-m2-rc-10',
            text: "What is the economic impact of sleep deprivation?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Billions of dollars are lost due to lower productivity, errors, and absenteeism.",
            explanation: "Found in paragraph 4."
          }
        ]
      },
      {
        id: 'g10-m2-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the LAST paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase the recommendations for better sleep.',
        questions: [
          {
            id: 'g10-m2-sum',
            text: "Summarize the recommendations for 'sleep hygiene'.",
            type: QuestionType.WRITING,
            correctAnswer: "1. We should establish a routine. 2. It is important to set a fixed time for bed. 3. We must avoid using phones before sleeping. 4. The bedroom should be kept dark and cool.",
            explanation: "Summary of paragraph 5."
          }
        ]
      },
      {
        id: 'g10-m2-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g10-m2-tr1',
            text: "علي: مضادات األكسدة الموجودة في الشاي األخضر مفيدة جدا.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ali: The antioxidants in green tea are very useful.",
            explanation: "Translation."
          },
          {
            id: 'g10-m2-tr2',
            text: "أحمد: يمكننا المحافظة على بشرتنا وقلبنا وعضالتنا عن طريق تناول الطعام الصحي.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ahmed: We can maintain our skin, heart and muscles by eating healthy food.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  {
    id: 'g10-comprehensive',
    title: 'Grade 10 Comprehensive Question Bank',
    grade: GradeLevel.G10,
    term: '1st Semester',
    year: 'Full Reference Revision',
    sections: [
      {
        id: 'g10-comp-vocab',
        title: 'Vocabulary Bank',
        instructions: 'Mixed Vocabulary Questions covering all Semester 1 Units',
        questions: [
          {
            id: 'g10-cp-v1',
            text: "We need to .................... our efforts to finish the project on time.",
            type: QuestionType.MCQ,
            options: ['absorb', 'double', 'neutralise', 'comprise'],
            correctAnswer: 'double',
            explanation: "To double means to increase twofold. \n(Double تعني يضاعف الجهود)."
          },
          {
            id: 'g10-cp-v2',
            text: "Vegetarians often suffer from iron .................... .",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['deficiency', 'metabolism', 'seminar', 'grill'],
            correctAnswer: 'deficiency',
            explanation: "Iron deficiency means a lack of iron. \n(Deficiency تعني نقص)."
          },
          {
            id: 'g10-cp-v3',
            text: "Modern computer games use a .................... to control movement.",
            type: QuestionType.MCQ,
            options: ['joystick', 'keypad', 'monitor', 'discourse'],
            correctAnswer: 'joystick',
            explanation: "A joystick is a control device for games. \n(عصا التحكم)."
          },
          {
            id: 'g10-cp-v4',
            text: "Green tea is rich in antioxidants which help......... diseases.",
            type: QuestionType.MCQ,
            options: ['combat', 'metabolise', 'appeal', 'cover'],
            correctAnswer: 'combat',
            explanation: "Antioxidants combat (fight) diseases. \n(يحارب الأمراض)."
          },
          {
            id: 'g10-cp-v5',
            text: "My brother has a .................... infection; he needs to see a doctor.",
            type: QuestionType.MCQ,
            options: ['spacious', 'viral', 'accountable', 'convoluted'],
            correctAnswer: 'viral',
            explanation: "Viral infection relates to viruses. \n(عدوى فيروسية)."
          },
          {
            id: 'g10-cp-v6',
            text: "The hotel we stayed in was ....................; it had large rooms and a great view.",
            type: QuestionType.MCQ,
            options: ['spacious', 'crammed', 'irrelevant', 'drowsy'],
            correctAnswer: 'spacious',
            explanation: "Spacious means having lots of space. \n(واسع أو رحب)."
          },
          {
            id: 'g10-cp-v7',
            text: "Drinking too much coffee affects your .................... and might keep you awake.",
            type: QuestionType.MCQ,
            options: ['metabolism', 'creed', 'deficiency', 'seminar'],
            correctAnswer: 'metabolism',
            explanation: "Caffeine affects metabolism (the chemical processes in the body). \n(عملية التمثيل الغذائي)."
          },
          {
            id: 'g10-cp-v8',
            text: "It is .................... to see a doctor if you feel persistent pain.",
            type: QuestionType.MCQ,
            options: ['advisable', 'grilled', 'global', 'interfaith'],
            correctAnswer: 'advisable',
            explanation: "Advisable means recommended or sensible. \n(ينصح به)."
          },
          {
            id: 'g10-cp-v9',
            text: "The shopping mall has a huge video .................... where kids can play games.",
            type: QuestionType.MCQ,
            options: ['arcade', 'council', 'creed', 'initiative'],
            correctAnswer: 'arcade',
            explanation: "Arcade is a place with video games. \n(صالة ألعاب)."
          },
          {
            id: 'g10-cp-v10',
            text: "Fast food is high in .................... fat which is bad for the heart.",
            type: QuestionType.MCQ,
            options: ['saturated', 'wireless', 'exclusive', 'hypocritical'],
            correctAnswer: 'saturated',
            explanation: "Saturated fat is unhealthy fat found in processed foods. \n(دهون مشبعة)."
          },
          {
            id: 'g10-cp-v11',
            text: "We should treat people with respect regardless of their ....................",
            type: QuestionType.MCQ,
            options: ['creed', 'polymer', 'protein', 'supplement'],
            correctAnswer: 'creed',
            explanation: "Creed refers to a system of religious belief. \n(المعتقد)."
          },
          {
            id: 'g10-cp-v12',
            text: "The government has launched a new .................... to reduce pollution.",
            type: QuestionType.MCQ,
            options: ['initiative', 'arcade', 'asthma', 'software'],
            correctAnswer: 'initiative',
            explanation: "Initiative is a new plan or action to solve a problem. \n(مبادرة)."
          },
          {
            id: 'g10-cp-v13',
            text: "You can buy this game .................... from the developer's website.",
            type: QuestionType.MCQ,
            options: ['exclusively', 'nervously', 'richly', 'slightly'],
            correctAnswer: 'exclusively',
            explanation: "Exclusively means only from one source and nowhere else. \n(حصرياً)."
          },
          {
            id: 'g10-cp-v14',
            text: "He gave an .................... performance that amazed the audience.",
            type: QuestionType.MCQ,
            options: ['inspirational', 'anaemic', 'cholesterol', 'probiotic'],
            correctAnswer: 'inspirational',
            explanation: "Inspirational means providing inspiration and motivation. \n(ملهم)."
          },
          {
            id: 'g10-cp-v15',
            text: "The company uses advanced .................... to protect its data.",
            type: QuestionType.MCQ,
            options: ['security', 'antioxidant', 'arthritis', 'seminar'],
            correctAnswer: 'security',
            explanation: "Security measures protect data and systems. \n(أمن المعلومات)."
          },
          {
            id: 'g10-cp-v16',
            text: "My phone has a voice .................... feature that allows me to dictate messages.",
            type: QuestionType.MCQ,
            options: ['recognition', 'incidence', 'virtue', 'cover'],
            correctAnswer: 'recognition',
            explanation: "Voice recognition is technology that identifies spoken words. \n(التعرف على الصوت)."
          },
          {
            id: 'g10-cp-v17',
            text: "The manager remained .................... even during the crisis.",
            type: QuestionType.MCQ,
            options: ['composed', 'convoluted', 'wireless', 'drowsy'],
            correctAnswer: 'composed',
            explanation: "Composed means calm and in control of one's feelings. \n(هادئ ومتماسك)."
          },
          {
            id: 'g10-cp-v18',
            text: "We must fight against .................... and inequality in society.",
            type: QuestionType.MCQ,
            options: ['injustice', 'supplement', 'protein', 'sensor'],
            correctAnswer: 'injustice',
            explanation: "Injustice refers to lack of fairness or justice. \n(الظلم)."
          },
          {
            id: 'g10-cp-v19',
            text: "He treated his parents with .................... which made them angry.",
            type: QuestionType.MCQ,
            options: ['insolence', 'virtue', 'pilgrimage', 'arcade'],
            correctAnswer: 'insolence',
            explanation: "Insolence means rude and disrespectful behavior. \n(الوقاحة أو سوء الأدب)."
          },
          {
            id: 'g10-cp-v20',
            text: "Muslims go to Makkah to perform ....................",
            type: QuestionType.MCQ,
            options: ['pilgrimage', 'enclave', 'discourse', 'review'],
            correctAnswer: 'pilgrimage',
            explanation: "Pilgrimage (Hajj) is a religious journey. \n(الحج)."
          },
          {
            id: 'g10-cp-v21',
            text: "The .................... of this diet are growing every day.",
            type: QuestionType.MCQ,
            options: ['adherents', 'consoles', 'sensors', 'accounts'],
            correctAnswer: 'adherents',
            explanation: "Adherents are people who support a particular set of ideas. \n(الأتباع أو المؤيدون)."
          },
          {
            id: 'g10-cp-v22',
            text: "You should be .................... to your parents for everything they do.",
            type: QuestionType.MCQ,
            options: ['grateful', 'irrelevant', 'fanatic', 'saturated'],
            correctAnswer: 'grateful',
            explanation: "Grateful means feeling or showing appreciation. \n(ممتن أو شاكر)."
          }
        ]
      },
      {
        id: 'g10-comp-grammar',
        title: 'Grammar Bank',
        instructions: 'Comprehensive Grammar Revision (All Rules)',
        questions: [
          {
            id: 'g10-cp-g1',
            text: "I’m learning English .................... I can study abroad.",
            type: QuestionType.MCQ,
            options: ['so that', 'because', 'to', 'in order to'],
            correctAnswer: 'so that',
            explanation: "Structure: So that + subject + can/could/will/would. \n(قاعدة so that يتبعها جملة كاملة لبيان الغرض)."
          },
          {
            id: 'g10-cp-g2',
            text: "You are coming to the party, ....................?",
            type: QuestionType.MCQ,
            options: ['aren’t you', 'are you', 'don’t you', 'didn’t you'],
            correctAnswer: 'aren’t you',
            explanation: "Tag question: Positive statement 'You are' -> Negative tag 'aren't you'. \n(السؤال المذيل: الجملة مثبتة، السؤال منفي)."
          },
          {
            id: 'g10-cp-g3',
            text: "He usually (walk) to school, but today he is taking the bus. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['walked', 'walks', 'is walking'],
            correctAnswer: 'walks',
            explanation: "Present Simple is used for habits/routines indicated by 'usually'. \n(المضارع البسيط للعادات)."
          },
          {
            id: 'g10-cp-g4',
            text: "She bought a (wooden / beautiful / brown) table. (Reorder adjectives)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'She bought a wooden beautiful brown table.',
              'She bought a beautiful brown wooden table.',
              'She bought a brown beautiful wooden table.'
            ],
            correctAnswer: 'She bought a beautiful brown wooden table.',
            explanation: "Adjective Order: Opinion (beautiful) -> Color (brown) -> Material (wooden). \n(ترتيب الصفات: الرأي ثم اللون ثم المادة)."
          },
          {
            id: 'g10-cp-g5',
            text: "How .................... books do you have in your bag?",
            type: QuestionType.MCQ,
            options: ['much', 'many', 'any', 'little'],
            correctAnswer: 'many',
            explanation: "'Books' is a countable noun, so we use 'many'. \n(كلمة books معدودة لذا نستخدم many)."
          },
          {
            id: 'g10-cp-g6',
            text: "I (travel) to London next week. I have my ticket. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['travel', 'am travelling', 'travelled'],
            correctAnswer: 'am travelling',
            explanation: "Present Continuous is used for arranged future plans (ticket bought). \n(المضارع المستمر للخطط المستقبلية المؤكدة)."
          },
          {
            id: 'g10-cp-g7',
            text: "We used to .................... in a small house.",
            type: QuestionType.MCQ,
            options: ['living', 'live', 'lived', 'lives'],
            correctAnswer: 'live',
            explanation: "Used to + Infinitive verb. \n(used to يتبعها الفعل بالمصدر)."
          },
          {
            id: 'g10-cp-g8',
            text: "If I .................... enough money, I would buy a car.",
            type: QuestionType.MCQ,
            options: ['have', 'had', 'has', 'having'],
            correctAnswer: 'had',
            explanation: "Second Conditional: If + Past Simple (had) -> Would + Infinitive. \n(الحالة الشرطية الثانية للتمني أو التخيل)."
          },
          {
            id: 'g10-cp-g9',
            text: "This is the school .................... I study.",
            type: QuestionType.MCQ,
            options: ['where', 'which', 'who', 'when'],
            correctAnswer: 'where',
            explanation: "Where refers to a place where an action happens (study). \n(where للمكان الذي يحدث فيه فعل)."
          },
          {
            id: 'g10-cp-g10',
            text: "I am hungry. I (not eat) since morning. (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['haven\'t eaten', 'didn\'t eat', 'don\'t eat'],
            correctAnswer: 'haven\'t eaten',
            explanation: "Present Perfect is used with 'since'. \n(المضارع التام يستخدم مع since)."
          },
          {
            id: 'g10-cp-g11',
            text: "I didn't use to .................... early when I was young.",
            type: QuestionType.MCQ,
            options: ['sleep', 'sleeping', 'slept', 'sleeps'],
            correctAnswer: 'sleep',
            explanation: "Negative form of used to: didn't use to + Infinitive. \n(صيغة النفي لـ used to يتبعها المصدر)."
          },
          {
            id: 'g10-cp-g12',
            text: "You can drive a car, ....................?",
            type: QuestionType.MCQ,
            options: ['can\'t you', 'can you', 'don\'t you', 'won\'t you'],
            correctAnswer: 'can\'t you',
            explanation: "Tag question with Modal: Positive 'can' -> Negative 'can't'. \n(السؤال المذيل مع الأفعال الناقصة)."
          },
          {
            id: 'g10-cp-g13',
            text: "My father has a (German / blue / new) car. (Reorder)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'My father has a new blue German car.',
              'My father has a blue new German car.',
              'My father has a German new blue car.'
            ],
            correctAnswer: 'My father has a new blue German car.',
            explanation: "Order: Age (new) -> Color (blue) -> Origin (German). \n(العمر ثم اللون ثم المنشأ)."
          },
          {
            id: 'g10-cp-g14',
            text: "I have been reading this book .................... 3 hours.",
            type: QuestionType.MCQ,
            options: ['for', 'since', 'ago', 'yet'],
            correctAnswer: 'for',
            explanation: "For is used with a period of time (3 hours). \n(for تستخدم مع المدة الزمنية)."
          },
          {
            id: 'g10-cp-g15',
            text: "The man .................... lives next door is a teacher.",
            type: QuestionType.MCQ,
            options: ['who', 'which', 'whose', 'where'],
            correctAnswer: 'who',
            explanation: "Who is used for people (The man). \n(who تستخدم للعاقل)."
          }
        ]
      },
      {
        id: 'g10-comp-functions',
        title: 'Language Functions Bank',
        instructions: 'What would you say in the following situations?',
        questions: [
          {
            id: 'g10-cp-lf1',
            text: "A friend invites you to dinner but you are busy.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I'd love to, but I am busy studying / I'm afraid I can't make it.",
            explanation: "Polite refusal. \n(رفض الدعوة بأدب)."
          },
          {
            id: 'g10-cp-lf2',
            text: "Your teacher asks about your opinion on online learning.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "In my opinion, it is very useful but lacks social interaction.",
            explanation: "Expressing opinion. \n(التعبير عن الرأي)."
          },
          {
            id: 'g10-cp-lf3',
            text: "You see someone throwing trash on the street.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Please don't do that, we should keep our city clean.",
            explanation: "Giving advice/Prohibition. \n(إسداء النصيحة)."
          },
          {
            id: 'g10-cp-lf4',
            text: "Your friend passed the driving test.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Well done! That's great news.",
            explanation: "Congratulating. \n(التهنئة)."
          },
          {
            id: 'g10-cp-lf5',
            text: "You want to ask your father for permission to go camping.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Dad, may I please go camping with my friends this weekend?",
            explanation: "Asking for permission. \n(طلب الإذن)."
          },
          {
            id: 'g10-cp-lf6',
            text: "Describe your last holiday to a friend.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It was amazing! We visited many historical sites.",
            explanation: "Describing past events. \n(وصف أحداث ماضية)."
          },
          {
            id: 'g10-cp-lf7',
            text: "You want to suggest playing football to your friends.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Let's play football this afternoon.",
            explanation: "Suggestion. \n(الاقتراح)."
          },
          {
            id: 'g10-cp-lf8',
            text: "Someone asks you for directions to the library.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Go straight, then turn left. It's on your right.",
            explanation: "Giving directions. \n(إعطاء الاتجاهات)."
          },
          {
            id: 'g10-cp-lf9',
            text: "Your friend is driving very fast.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Slow down! You are driving too fast.",
            explanation: "Warning. \n(التحذير)."
          },
          {
            id: 'g10-cp-lf10',
            text: "You broke your friend's pen by mistake.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am so sorry, I didn't mean to break it.",
            explanation: "Apology. \n(الاعتذار)."
          }
        ]
      },
      {
        id: 'g10-comp-setbook',
        title: 'Set Book Bank',
        instructions: 'Mixed Set Book Questions covering all Units',
        questions: [
          {
            id: 'g10-cp-sb1',
            text: "Why is it important to respect other cultures?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To promote peace, understanding, and coexistence among different nations.",
            explanation: "Unit: Culture of Peace. \n(لتعزيز السلام والتفاهم والتعايش)."
          },
          {
            id: 'g10-cp-sb2',
            text: "How can we keep our mind and body healthy?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By eating healthy food, exercising, and stimulating the mind with puzzles and reading.",
            explanation: "Unit: Healthy Lifestyle. \n(الغذاء الصحي والرياضة وتنشيط العقل)."
          },
          {
            id: 'g10-cp-sb3',
            text: "Why are Paralympics important for disabled athletes?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They build self-confidence, physical strength, and help in social integration.",
            explanation: "Unit: Sports. \n(بناء الثقة والقوة والاندماج الاجتماعي)."
          },
          {
            id: 'g10-cp-sb4',
            text: "What is the main purpose of the UN?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To maintain international peace and security and solve global problems.",
            explanation: "Unit: Peace. \n(حفظ السلام والأمن العالمي)."
          },
          {
            id: 'g10-cp-sb5',
            text: "Why should we avoid eating too much saturated fat?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because it increases cholesterol levels and causes heart diseases.",
            explanation: "Unit: Healthy Lifestyle. \n(يسبب الكوليسترول وأمراض القلب)."
          },
          {
            id: 'g10-cp-sb6',
            text: "How does Islam view the roles of men and women?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It views them as complementary, with shared responsibilities to build a strong society.",
            explanation: "Unit: Stories from the Quran. \n(أدوار تكاملية ومسؤوليات مشتركة)."
          },
          {
            id: 'g10-cp-sb7',
            text: "Why do people wear traditional clothes?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To show pride in their heritage, national identity, and culture.",
            explanation: "Unit: Culture. \n(الفخر بالتراث والهوية الوطنية)."
          },
          {
            id: 'g10-cp-sb8',
            text: "What moral lessons can we learn from Luqman's advice to his son?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "We learn modesty, patience, respect for parents, and avoiding arrogance.",
            explanation: "Unit: Stories from the Quran. \n(التواضع والصبر وبر الوالدين)."
          },
          {
            id: 'g10-cp-sb9',
            text: "What are the benefits of probiotic drinks?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They contain good bacteria that help digestion and boost the immune system.",
            explanation: "Unit: Healthy Lifestyle. \n(تساعد الهضم وتقوي المناعة)."
          },
          {
            id: 'g10-cp-sb10',
            text: "Why is the arcade a popular place for teenagers?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because it offers a variety of games and a chance to socialize with friends.",
            explanation: "Unit: Computer Games. \n(تنوع الألعاب والتواصل الاجتماعي)."
          },
          {
            id: 'g10-cp-sb11',
            text: "How can video games be educational?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They can teach problem-solving, languages, and historical facts.",
            explanation: "Unit: Computer Games. \n(تعليم حل المشكلات واللغات)."
          },
          {
            id: 'g10-cp-sb12',
            text: "Why is the date palm tree important in Arab culture?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It provides food, shelter materials, and is a symbol of hospitality.",
            explanation: "Unit: Culture. \n(الغذاء ومواد البناء ورمز الضيافة)."
          },
          {
            id: 'g10-cp-sb13',
            text: "What makes a building 'famous'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Its unique design, historical significance, or cultural importance.",
            explanation: "Unit: Famous Buildings. \n(التصميم الفريد أو الأهمية التاريخية)."
          },
          {
            id: 'g10-cp-sb14',
            text: "How should we treat our parents according to the Quran?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "We should treat them with kindness, respect, and obey them.",
            explanation: "Unit: Stories from the Quran. \n(يجب معاملتهم بلطف واحترام وطاعتهم)."
          },
          {
            id: 'g10-cp-sb15',
            text: "Why is Salah Al-Din considered a great leader?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because he was brave, wise, and treated his enemies with mercy.",
            explanation: "Unit: Stories from the Quran/History. \n(لأنه كان شجاعاً وحكيماً ورحيماً بأعدائه)."
          }
        ]
      },
      {
        id: 'g10-comp-translation',
        title: 'Translation Bank',
        instructions: 'Translate the following sentences into English:',
        questions: [
          {
            id: 'g10-cp-tr1',
            text: "أحمد: الكويت دولة حديثة ولكنها متمسكة بالتقاليد.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ahmed: Kuwait is a modern country, but it holds on to traditions.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr2',
            text: "علي: يجب علينا أن نتبع نظاما غذائيا متوازنا لنبقى بصحة جيدة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ali: We must follow a balanced diet to stay healthy.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr3',
            text: "سارة: لقد أصبح العالم قرية صغيرة بفضل التكنولوجيا.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Sara: The world has become a small village thanks to technology.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr4',
            text: "خالد: هل تعلم أن الشاي الأخضر مفيد للقلب؟",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Khaled: Do you know that green tea is good for the heart?",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr5',
            text: "منى: نعم، فهو يحتوي على مضادات الأكسدة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Mona: Yes, it contains antioxidants.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr6',
            text: "فهد: ألعاب الكمبيوتر يمكن أن تكون تعليمية ومفيدة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Fahd: Computer games can be educational and useful.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr7',
            text: "جاسم: لكن كثرة اللعب قد تضر بالعين.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Jassim: But playing too much may hurt the eyes.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr8',
            text: "نورة: يجب أن نحترم ثقافات الشعوب الأخرى.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Noura: We must respect other people's cultures.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr9',
            text: "سعاد: هذا يساعد على نشر السلام والمحبة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Souad: This helps spread peace and love.",
            explanation: "Translation."
          },
          {
            id: 'g10-cp-tr10',
            text: "عمر: المبنى الجديد للمطار ذو تصميم رائع.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Omar: The new airport building has a wonderful design.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },

  // ==================================================================================
  //                                   GRADE 11
  // ==================================================================================
  {
    id: 'g11-mock-1',
    title: 'Grade 11 Mock Exam 1',
    grade: GradeLevel.G11,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g11-m1-vocab-mcq',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the correct answer from a, b, c or d:',
        questions: [
          {
            id: 'g11-m1-v1',
            text: "We are going to …………………… the cleanup campaign tomorrow.",
            type: QuestionType.MCQ,
            options: ['inscribe', 'acquire', 'launch', 'commemorate'],
            correctAnswer: 'launch',
            explanation: "To 'launch' a campaign means to start it. \n(إطلاق حملة)."
          },
          {
            id: 'g11-m1-v2',
            text: "My brother works as an …………………… in an investment company.",
            type: QuestionType.MCQ,
            options: ['interlocutor', 'accountant', 'assumption', 'adjustment'],
            correctAnswer: 'accountant',
            explanation: "An accountant deals with financial records. \n(محاسب)."
          },
          {
            id: 'g11-m1-v3',
            text: "Our …………………… net-profit for the last three years is quite good.",
            type: QuestionType.MCQ,
            options: ['non-verbal', 'irritated', 'annual', 'weary'],
            correctAnswer: 'annual',
            explanation: "'Annual' means yearly. \n(سنوي)."
          },
          {
            id: 'g11-m1-v4',
            text: "One should be generous and …………………… to others.",
            type: QuestionType.MCQ,
            options: ['courteous', 'immediate', 'well-deserved', 'lonesome'],
            correctAnswer: 'courteous',
            explanation: "'Courteous' means polite and respectful. \n(مهذب)."
          },
          {
            id: 'g11-m1-v5',
            text: "During sandstorms, the dust in the atmosphere .................... the sunlight.",
            type: QuestionType.MCQ,
            options: ['blocks out', 'engages', 'transforms', 'designs'],
            correctAnswer: 'blocks out',
            explanation: "Blocks out means prevents light from passing. \n(يحجب ضوء الشمس)."
          }
        ]
      },
      {
        id: 'g11-m1-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the missing parts with a word from the list below:',
        contextPassage: "inaccessible - canopy - assumptions – adjustment - meticulously - import",
        questions: [
          {
            id: 'g11-m1-v6',
            text: "The project was …………………… planned.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['inaccessible', 'canopy', 'assumptions', 'adjustment', 'meticulously', 'import'],
            correctAnswer: 'meticulously',
            explanation: "Meticulously means very carefully. \n(بدقة متناهية)."
          },
          {
            id: 'g11-m1-v7',
            text: "This set is not working well, it needs ……………………",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['inaccessible', 'canopy', 'assumptions', 'adjustment', 'meticulously', 'import'],
            correctAnswer: 'adjustment',
            explanation: "Adjustment means a small change to fix something. \n(تعديل أو ضبط)."
          },
          {
            id: 'g11-m1-v8',
            text: "Internet service is …………………… in the remote areas of the country.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['inaccessible', 'canopy', 'assumptions', 'adjustment', 'meticulously', 'import'],
            correctAnswer: 'inaccessible',
            explanation: "Inaccessible means cannot be reached. \n(لا يمكن الوصول إليه)."
          },
          {
            id: 'g11-m1-v9',
            text: "We often judge people based on false .................... .",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['inaccessible', 'canopy', 'assumptions', 'adjustment', 'meticulously', 'import'],
            correctAnswer: 'assumptions',
            explanation: "Assumptions are beliefs without proof. \n(افتراضات)."
          },
          {
            id: 'g11-m1-v10',
            text: "The trees formed a leafy .................... over the road.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['inaccessible', 'canopy', 'assumptions', 'adjustment', 'meticulously', 'import'],
            correctAnswer: 'canopy',
            explanation: "Canopy is the upper layer of trees. \n(مظلة شجرية)."
          }
        ]
      },
      {
        id: 'g11-m1-grammar-mcq',
        title: 'II. Grammar (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g11-m1-g1',
            text: "Don't worry, I ……………. do the calculation, I'm good at Math.",
            type: QuestionType.MCQ,
            options: ['could', "can't", 'can', 'could have'],
            correctAnswer: 'can',
            explanation: "Can expresses present ability. \n(للتعبير عن القدرة في الحاضر)."
          },
          {
            id: 'g11-m1-g2',
            text: "The prices of oil are going ……………. all over the world.",
            type: QuestionType.MCQ,
            options: ['out', 'away', 'up', 'without'],
            correctAnswer: 'up',
            explanation: "Go up means to increase. \n(ترتفع)."
          },
          {
            id: 'g11-m1-g3',
            text: "The house ...................... was built last year is very big.",
            type: QuestionType.MCQ,
            options: ['who', 'which', 'whose', 'where'],
            correctAnswer: 'which',
            explanation: "Which is used for things/animals. \n(لغير العاقل)."
          },
          {
            id: 'g11-m1-g4',
            text: "I have been living here ...................... 2010.",
            type: QuestionType.MCQ,
            options: ['since', 'for', 'ago', 'yet'],
            correctAnswer: 'since',
            explanation: "Since + point in time. \n(منذ تاريخ محدد)."
          }
        ]
      },
      {
        id: 'g11-m1-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g11-m1-g5',
            text: "It’s a wonderful idea, …………………….. ? (Tag Question)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              "It’s a wonderful idea, isn’t it?",
              "It’s a wonderful idea, doesn’t it?",
              "It’s a wonderful idea, wasn’t it?"
            ],
            correctAnswer: "It’s a wonderful idea, isn’t it?",
            explanation: "Positive statement 'is' takes negative tag 'isn't'. \n(الجملة مثبتة فالسؤال منفي)."
          },
          {
            id: 'g11-m1-g6',
            text: "Either Ali or his brother is the caller. (Use: Neither….nor)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              "Neither Ali or his brother is the caller.",
              "Neither Ali nor his brother is the caller.",
              "Neither Ali nor his brother are the caller."
            ],
            correctAnswer: "Neither Ali nor his brother is the caller.",
            explanation: "Verb agrees with the second subject in neither/nor. \n(الفعل يتبع الفاعل الثاني)."
          },
          {
            id: 'g11-m1-g7',
            text: "If you study hard, you will pass. (Use: Unless)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Unless you study hard, you will pass.',
              'Unless you study hard, you won\'t pass.',
              'Unless you don\'t study hard, you will pass.'
            ],
            correctAnswer: 'Unless you study hard, you won\'t pass.',
            explanation: "Unless means 'if not', so the main clause usually becomes negative. \n(Unless تعني إذا لم)."
          },
          {
            id: 'g11-m1-g8',
            text: "He wrote the letter. (Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'The letter was written.',
              'The letter is written.',
              'The letter has been written.'
            ],
            correctAnswer: 'The letter was written.',
            explanation: "Past simple passive: was/were + V3. \n(المبني للمجهول في الماضي البسيط)."
          }
        ]
      },
      {
        id: 'g11-m1-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say in the following situations:',
        questions: [
          {
            id: 'g11-m1-lf1',
            text: "One of your friends thinks that fast foods are better than home-made ones.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I disagree. Homemade meals are much healthier.",
            explanation: "Disagreement. \n(الاعتراض)."
          },
          {
            id: 'g11-m1-lf2',
            text: "You are in a restaurant and you order something to eat.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "May I have the grilled chicken, please?",
            explanation: "Polite request. \n(طلب مهذب)."
          },
          {
            id: 'g11-m1-lf3',
            text: "Your friend is driving too fast.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "You should slow down, it's dangerous!",
            explanation: "Warning/Advice. \n(تحذير أو نصيحة)."
          },
          {
            id: 'g11-m1-lf4',
            text: "You want to know the way to the airport.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Excuse me, could you tell me the way to the airport?",
            explanation: "Asking for directions. \n(السؤال عن الاتجاهات)."
          }
        ]
      },
      {
        id: 'g11-m1-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g11-m1-sb1',
            text: "Can you assess the roles Diwaniyas play in Kuwait?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It is a gathering for men to discuss social and political issues and strengthen ties.",
            explanation: "Unit: Diwaniya. \n(مكان لتجمع الرجال ومناقشة القضايا)."
          },
          {
            id: 'g11-m1-sb2',
            text: "What are the hurdles to effective listening?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Distraction, lack of interest, interruption, and prejudice.",
            explanation: "Unit: Communication. \n(التشتت، عدم الاهتمام، المقاطعة، التحيز)."
          },
          {
            id: 'g11-m1-sb3',
            text: "Why is the Hala February festival important?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It promotes tourism, celebrates national pride, and boosts the economy.",
            explanation: "Unit: Festivals. \n(تنشيط السياحة والاقتصاد والاحتفال الوطني)."
          },
          {
            id: 'g11-m1-sb4',
            text: "How can we protect the environment?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By recycling, reducing waste, and planting more trees.",
            explanation: "Unit: Environment. \n(إعادة التدوير والتشجير)."
          },
          {
            id: 'g11-m1-sb5',
            text: "What are the benefits of mobile phones?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They allow instant communication, access to information, and entertainment.",
            explanation: "Unit: Phones. \n(تواصل فوري ومعلومات وترفيه)."
          }
        ]
      },
      {
        id: 'g11-m1-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Communication is the key to success in relationships and work.",
        questions: [
          {
            id: 'g11-m1-wr',
            text: "Write an e-mail (14 sentences) explaining why good communication is important and how the internet has changed it.",
            type: QuestionType.WRITING,
            correctAnswer: "E-mail format. Points: Clarity, understanding, speed of internet, global connection.",
            explanation: "E-mail Writing."
          }
        ]
      },
      {
        id: 'g11-m1-reading-comp',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "The Electric Vehicle Revolution\n\nThe concept of the electric car is not as modern as many people think. In fact, electric vehicles (EVs) appeared in the mid-19th century, long before the internal combustion engine dominated the roads. Early electric cars were popular because they were quiet, easy to drive, and did not emit smelly pollutants. However, the discovery of cheap crude oil and the invention of the electric starter for gas cars in 1912 led to the decline of EVs for nearly a century, pushing them to the margins of automotive history.\n\nToday, we are witnessing a massive resurgence of electric vehicles due to pressing environmental concerns. Climate change, driven by carbon emissions from fossil fuels, has pushed governments and manufacturers to seek cleaner alternatives. Modern EVs run on lithium-ion batteries, the same technology that powers smartphones. These batteries have become more efficient, allowing cars to travel longer distances on a single charge, addressing the 'range anxiety' that previously discouraged potential buyers.\n\nThe shift to electric transport involves more than just changing the engine; it requires a complete transformation of infrastructure. Countries are racing to build networks of charging stations to replace gas pumps, a massive logistical undertaking. Furthermore, the rise of EVs is closely linked to the development of autonomous driving technology. Electric cars are easier for computers to control, making them the ideal platform for the self-driving taxis of the future, which could revolutionize urban mobility.\n\nThis transition is also reshaping the global economy and job market. Traditional car manufacturing relies on thousands of moving parts, whereas electric motors are simpler and require less maintenance. This shift threatens jobs in traditional mechanics but creates new opportunities in battery technology, software development, and renewable energy sectors. Governments are now implementing policies to retrain workers, ensuring that the workforce is prepared for this green industrial revolution.\n\nDespite the benefits, challenges remain. The production of batteries requires mining rare minerals like cobalt and lithium, which has its own environmental and ethical impact. Additionally, the electricity used to charge these cars must come from renewable sources like wind or solar power to be truly green. If the electricity is generated by burning coal, the environmental benefit is significantly reduced. Nevertheless, the electric revolution is underway, promising a quieter, cleaner future for our cities.",
        questions: [
          {
            id: 'g11-m1-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The History of Oil', 'The Electric Vehicle Revolution', 'How to Drive a Car', 'Mining Rare Minerals'],
            correctAnswer: 'The Electric Vehicle Revolution',
            explanation: "The passage discusses the history, resurgence, infrastructure, and future of electric vehicles."
          },
          {
            id: 'g11-m1-rc-2',
            text: "The main idea of the 2nd paragraph is:",
            type: QuestionType.MCQ,
            options: ['The decline of gas cars', 'The resurgence of EVs due to environmental concerns', 'The invention of the starter', 'The cost of lithium'],
            correctAnswer: 'The resurgence of EVs due to environmental concerns',
            explanation: "Paragraph 2 discusses why EVs are coming back (climate change, battery tech)."
          },
          {
            id: 'g11-m1-rc-3',
            text: "The underlined word 'transformation' in the 3rd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['destruction', 'change', 'continuation', 'stagnation'],
            correctAnswer: 'change',
            explanation: "Transformation means a marked change in form or nature."
          },
          {
            id: 'g11-m1-rc-4',
            text: "The underlined pronoun 'them' in the 3rd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['computers', 'electric cars', 'gas pumps', 'taxis'],
            correctAnswer: 'electric cars',
            explanation: "The sentence says 'Electric cars are easier for computers to control, making them...'. Them refers to electric cars."
          },
          {
            id: 'g11-m1-rc-5',
            text: "Why did early electric cars decline in the 20th century?",
            type: QuestionType.MCQ,
            options: ['They were too fast', 'Electricity was dangerous', 'Discovery of cheap oil and electric starters for gas cars', 'They were too loud'],
            correctAnswer: 'Discovery of cheap oil and electric starters for gas cars',
            explanation: "Found in paragraph 1."
          },
          {
            id: 'g11-m1-rc-6',
            text: "What is 'range anxiety'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "The fear that an electric car will run out of battery before reaching its destination or a charging station.",
            explanation: "Context clue in paragraph 2: 'allowing cars to travel longer distances... addressing range anxiety'."
          },
          {
            id: 'g11-m1-rc-7',
            text: "Why are electric cars considered the ideal platform for self-driving technology?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because they are easier for computers to control than gas cars.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g11-m1-rc-8',
            text: "What is one environmental challenge related to EV batteries?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "The production of batteries requires mining rare minerals, which has an environmental impact.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g11-m1-rc-9',
            text: "How does the shift to EVs affect the job market?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It threatens traditional mechanic jobs but creates opportunities in battery tech and software.",
            explanation: "Found in paragraph 4."
          },
          {
            id: 'g11-m1-rc-10',
            text: "When did electric vehicles first appear?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "In the mid-19th century.",
            explanation: "Found in paragraph 1."
          }
        ]
      },
      {
        id: 'g11-m1-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the LAST paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase the challenges facing electric vehicles.',
        questions: [
          {
            id: 'g11-m1-sum',
            text: "Summarize the challenges of electric vehicles.",
            type: QuestionType.WRITING,
            correctAnswer: "1. Even with their benefits, electric cars face problems. 2. Making the batteries needs mining minerals, which hurts nature. 3. Also, the power to charge them must come from clean energy like wind or sun. 4. If we use dirty energy like coal, they aren't truly green.",
            explanation: "Summary of paragraph 5."
          }
        ]
      },
      {
        id: 'g11-m1-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g11-m1-tr1',
            text: "أحمد : للهواتف ميزات عديده منها انها تمكننا من التواصل مع االخرين.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ahmed: Phones have many advantages as they enable us to communicate with others.",
            explanation: "Translation."
          },
          {
            id: 'g11-m1-tr2',
            text: "محمد : و أيضا يمكنك أن تبيعها أو أن تهديها.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Mohamed: You can also sell them or gift them.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  // ==================================================================================
  //                              GRADE 11 MOCK 2 (LOCKED & COMPREHENSIVE)
  // ==================================================================================
  {
    id: 'g11-mock-2',
    title: 'Grade 11 Mock Exam 2 (Comprehensive)',
    grade: GradeLevel.G11,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g11-m2-vocab-mcq',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g11-m2-v1',
            text: "The trees in this jungle formed a leafy ...................... above us.",
            type: QuestionType.MCQ,
            options: ['canopy', 'discipline', 'bagpipe', 'carnival'],
            correctAnswer: 'canopy',
            explanation: "Canopy refers to the upper layer of a forest. \n(مظلة الغابة)."
          },
          {
            id: 'g11-m2-v2',
            text: "I like this hotel because it enjoys a/an ...................... location overlooking the sea.",
            type: QuestionType.MCQ,
            options: ['preoccupied', 'patriotic', 'unrivalled', 'intricate'],
            correctAnswer: 'unrivalled',
            explanation: "Unrivalled means better than everyone else. \n(لا يضاهى)."
          },
          {
            id: 'g11-m2-v3',
            text: "We need more cultural events that inspire the ...................... sense among the new generation.",
            type: QuestionType.MCQ,
            options: ['patriotic', 'intricate', 'exuberant', 'celebratory'],
            correctAnswer: 'patriotic',
            explanation: "Patriotic relates to love for one's country. \n(حس وطني)."
          },
          {
            id: 'g11-m2-v4',
            text: "My father had to ...................... a car because his car broke down.",
            type: QuestionType.MCQ,
            options: ['hire', 'gather', 'commemorate', 'launch'],
            correctAnswer: 'hire',
            explanation: "Hire means to rent. \n(يستأجر)."
          },
          {
            id: 'g11-m2-v5',
            text: "I added some ...................... to the coffee for a better taste.",
            type: QuestionType.MCQ,
            options: ['cardamom', 'porcelain', 'autograph', 'replica'],
            correctAnswer: 'cardamom',
            explanation: "Cardamom is a spice used in coffee. \n(الهيل)."
          }
        ]
      },
      {
        id: 'g11-m2-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the spaces with words from the list:',
        contextPassage: "capacity / nurture / originally / blocked out / courteous / weave",
        questions: [
          {
            id: 'g11-m2-v6',
            text: "The heavy curtains ...................... the sunlight completely.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['capacity', 'nurture', 'originally', 'blocked out', 'courteous', 'weave'],
            correctAnswer: 'blocked out',
            explanation: "Block out means to stop light or sound. \n(تحجب)."
          },
          {
            id: 'g11-m2-v7',
            text: "We must ...................... the talents of our young students.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['capacity', 'nurture', 'originally', 'blocked out', 'courteous', 'weave'],
            correctAnswer: 'nurture',
            explanation: "Nurture means to care for and encourage. \n(رعاية)."
          },
          {
            id: 'g11-m2-v8',
            text: "The stadium has a ...................... of 50,000 spectators.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['capacity', 'nurture', 'originally', 'blocked out', 'courteous', 'weave'],
            correctAnswer: 'capacity',
            explanation: "Capacity is the maximum amount that can be contained. \n(سعة)."
          },
          {
            id: 'g11-m2-v9',
            text: "He is always ...................... and respectful to his elders.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['capacity', 'nurture', 'originally', 'blocked out', 'courteous', 'weave'],
            correctAnswer: 'courteous',
            explanation: "Courteous means polite. \n(مهذب)."
          },
          {
            id: 'g11-m2-v10',
            text: "Bedouin women used to ...................... beautiful rugs.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['capacity', 'nurture', 'originally', 'blocked out', 'courteous', 'weave'],
            correctAnswer: 'weave',
            explanation: "Weave means to make fabric. \n(ينسج)."
          }
        ]
      },
      {
        id: 'g11-m2-grammar-mcq',
        title: 'II. Grammar (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g11-m2-g1',
            text: "The man ...................... lives next door is a doctor.",
            type: QuestionType.MCQ,
            options: ['who', 'which', 'where', 'whose'],
            correctAnswer: 'who',
            explanation: "Who is used for people. \n(للعاقل)."
          },
          {
            id: 'g11-m2-g2',
            text: "I am thinking ...................... buying a new car.",
            type: QuestionType.MCQ,
            options: ['of', 'in', 'at', 'on'],
            correctAnswer: 'of',
            explanation: "Think of + gerund. \n(حرف الجر المناسب)."
          },
          {
            id: 'g11-m2-g3',
            text: "They ...................... TV when the lights went out.",
            type: QuestionType.MCQ,
            options: ['watch', 'were watching', 'watched', 'are watching'],
            correctAnswer: 'were watching',
            explanation: "Past continuous interrupted action. \n(حدث كان مستمراً وتمت مقاطعته)."
          },
          {
            id: 'g11-m2-g4',
            text: "This car is ...................... than that one.",
            type: QuestionType.MCQ,
            options: ['fast', 'faster', 'fastest', 'more fast'],
            correctAnswer: 'faster',
            explanation: "Comparative adjective. \n(المقارنة)."
          }
        ]
      },
      {
        id: 'g11-m2-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g11-m2-g5',
            text: "I (not see) my friend since last week. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['haven\'t seen', 'didn\'t see', 'don\'t see'],
            correctAnswer: 'haven\'t seen',
            explanation: "Present Perfect is used with 'since'. \n(المضارع التام مع since)."
          },
          {
            id: 'g11-m2-g6',
            text: "The exam was very difficult. I managed to pass it. (Join: although)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Although the exam was very difficult, I managed to pass it.',
              'The exam was very difficult although I managed to pass it.',
              'I managed to pass it although the exam is very difficult.'
            ],
            correctAnswer: 'Although the exam was very difficult, I managed to pass it.',
            explanation: "Although introduces a concession. \n(للتناقض)."
          },
          {
            id: 'g11-m2-g7',
            text: "I watched the movie last night. (Make negative)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'I didn\'t watch the movie last night.',
              'I don\'t watch the movie last night.',
              'I haven\'t watched the movie last night.'
            ],
            correctAnswer: 'I didn\'t watch the movie last night.',
            explanation: "Past simple negative uses 'did not'. \n(نفي الماضي البسيط)."
          },
          {
            id: 'g11-m2-g8',
            text: "He plays tennis well, ......................? (Add a tag question)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'doesn\'t he?',
              'don\'t he?',
              'isn\'t he?'
            ],
            correctAnswer: 'doesn\'t he?',
            explanation: "Present simple 'plays' uses 'doesn't'. \n(السؤال المذيل)."
          }
        ]
      },
      {
        id: 'g11-m2-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say:',
        questions: [
          {
            id: 'g11-m2-lf1',
            text: "Your friend suggests going to the desert in summer.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "That's a bad idea. It's too hot.",
            explanation: "Disagreement / Rejection. \n(الرفض)."
          },
          {
            id: 'g11-m2-lf2',
            text: "You want to ask for directions to the hospital.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Excuse me, could you tell me the way to the hospital?",
            explanation: "Asking for directions. \n(السؤال عن الطريق)."
          },
          {
            id: 'g11-m2-lf3',
            text: "You broke your mother's favorite vase.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am terribly sorry, Mom. I didn't mean to.",
            explanation: "Apology. \n(الاعتذار)."
          },
          {
            id: 'g11-m2-lf4',
            text: "Your friend is going for a job interview.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Good luck! I hope you get the job.",
            explanation: "Wishing success. \n(تمني التوفيق)."
          }
        ]
      },
      {
        id: 'g11-m2-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g11-m2-sb1',
            text: "Why are festivals important for any country?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They attract tourists, increase national income, and preserve heritage.",
            explanation: "Unit: Festivals. \n(السياحة والدخل القومي والتراث)."
          },
          {
            id: 'g11-m2-sb2',
            text: "Why are family gatherings important?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They strengthen family ties and allow sharing of problems and joy.",
            explanation: "Unit: Family Celebrations. \n(تقوية الروابط العائلية)."
          },
          {
            id: 'g11-m2-sb3',
            text: "What is the main purpose of the Diwaniya?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It serves a social and political function, reinforcing ties.",
            explanation: "Unit: Diwaniya. \n(وظيفة اجتماعية وسياسية)."
          },
          {
            id: 'g11-m2-sb4',
            text: "Why do people drink coffee?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It gives energy, has a good taste, and is part of hospitality.",
            explanation: "Unit: Food/Drink. \n(الطاقة والضيافة)."
          },
          {
            id: 'g11-m2-sb5',
            text: "What makes a good listener?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Being patient, not interrupting, and maintaining eye contact.",
            explanation: "Unit: Communication. \n(الصبر وعدم المقاطعة)."
          }
        ]
      },
      {
        id: 'g11-m2-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Family gatherings are a vital part of Kuwaiti society.",
        questions: [
          {
            id: 'g11-m2-wr',
            text: "Write a descriptive essay (14 sentences) describing a family celebration you attended (occasion, preparations, feelings).",
            type: QuestionType.WRITING,
            correctAnswer: "Outline: Intro (Occasion), Body 1 (Preparations), Body 2 (The celebration/activities), Conclusion (Feelings).",
            explanation: "Descriptive Essay."
          }
        ]
      },
      {
        id: 'g11-m2-reading-new',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "The Rise of Artificial Intelligence\n\nArtificial Intelligence (AI) has moved from the realm of science fiction into our daily lives with astonishing speed. AI refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. From smartphone assistants like Siri to complex algorithms that recommend movies on streaming platforms, AI is reshaping how we live and work. Its growth has been fueled by the availability of massive amounts of data and the increasing power of computers to process this information effectively and affordably.\n\nOne of the most significant benefits of AI is its ability to improve efficiency in various sectors. In healthcare, AI-powered diagnostic tools can analyze medical images with greater accuracy than human doctors, leading to earlier detection of diseases like cancer. In the automotive industry, autonomous vehicles promise to reduce traffic accidents caused by human error. Furthermore, AI can handle repetitive tasks, freeing up humans to focus on more creative and complex problems. In education, AI tutors provide personalized learning experiences, adapting to the pace of individual students.\n\nHowever, the rapid advancement of AI also brings challenges and concerns. One major fear is the displacement of jobs. As machines become more capable, there is a risk that they will replace human workers in industries such as manufacturing, transportation, and even customer service. Ethical concerns also arise regarding privacy and the potential for bias in AI algorithms. If the data used to train these systems is biased, the decisions made by the AI will also be unfair, potentially discriminating against certain groups of people.\n\nBeyond the economic and ethical issues, there is a philosophical debate about the future of humanity in an AI-dominated world. Some experts warn of the 'singularity,' a hypothetical point in time when AI becomes smarter than humans, potentially leading to loss of control. Others argue that AI will always remain a tool subservient to human needs. This debate drives global discussions on how to align AI development with human values and safety standards.\n\nLooking ahead, the future of AI holds both promise and uncertainty. Experts agree that while AI will undoubtedly transform the global economy, it is crucial to establish regulations to ensure it is used responsibly. Collaboration between governments, technology companies, and ethicists is necessary to navigate this new era. The goal is to harness the power of AI to solve global problems while minimizing its risks to society.",
        questions: [
          {
            id: 'g11-m2-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The History of Computers', 'The Rise of Artificial Intelligence', 'How to Build a Robot', 'The Dangers of the Internet'],
            correctAnswer: 'The Rise of Artificial Intelligence',
            explanation: "The title reflects the main topic of the passage, covering its growth, benefits, and challenges."
          },
          {
            id: 'g11-m2-rc-2',
            text: "The main idea of the 2nd paragraph is:",
            type: QuestionType.MCQ,
            options: ['The dangers of AI', 'The history of AI', 'The benefits of AI in various sectors', 'How AI works'],
            correctAnswer: 'The benefits of AI in various sectors',
            explanation: "The paragraph discusses healthcare, automotive industry, and efficiency."
          },
          {
            id: 'g11-m2-rc-3',
            text: "The underlined word 'autonomous' in the 2nd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['self-driving', 'expensive', 'dangerous', 'manual'],
            correctAnswer: 'self-driving',
            explanation: "Autonomous vehicles function without human control (self-driving)."
          },
          {
            id: 'g11-m2-rc-4',
            text: "The underlined pronoun 'they' in the 3rd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['jobs', 'machines', 'human workers', 'industries'],
            correctAnswer: 'machines',
            explanation: "The sentence says 'As machines become more capable... they will replace human workers'. They refers to machines."
          },
          {
            id: 'g11-m2-rc-5',
            text: "According to the passage, AI growth is fueled by:",
            type: QuestionType.MCQ,
            options: ['Lack of human workers', 'Massive amounts of data and computer power', 'Government regulations', 'Science fiction movies'],
            correctAnswer: 'Massive amounts of data and computer power',
            explanation: "Found in the first paragraph."
          },
          {
            id: 'g11-m2-rc-6',
            text: "How can AI help in the healthcare sector?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "AI tools can analyze medical images with greater accuracy, leading to earlier detection of diseases.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g11-m2-rc-7',
            text: "What is one major fear regarding the advancement of AI?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "The displacement of jobs, where machines might replace human workers.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g11-m2-rc-8',
            text: "Why might AI algorithms be biased?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "If the data used to train the systems is biased, the decisions made by the AI will also be unfair.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g11-m2-rc-9',
            text: "What is necessary to navigate the future of AI responsibly?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Collaboration between governments, technology companies, and ethicists is necessary.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g11-m2-rc-10',
            text: "Define AI based on the text.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "The simulation of human intelligence in machines programmed to think and learn like humans.",
            explanation: "Found in paragraph 1."
          }
        ]
      },
      {
        id: 'g11-m2-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the 2nd paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase the benefits of AI.',
        questions: [
          {
            id: 'g11-m2-sum',
            text: "Summarize the benefits of AI mentioned in the text.",
            type: QuestionType.WRITING,
            correctAnswer: "1. AI improves efficiency across many sectors. 2. In medicine, it helps diagnose diseases early and accurately. 3. Self-driving cars can make roads safer by reducing human error. 4. It also takes over boring tasks, allowing humans to be creative.",
            explanation: "Summary of paragraph 2."
          }
        ]
      },
      {
        id: 'g11-m2-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g11-m2-tr1',
            text: "فهد: يعتبر مهرجان القرين الثقافي من أهم المهرجانات في الكويت.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Fahd: The Qurain Cultural Festival is considered one of the most important festivals in Kuwait.",
            explanation: "Translation."
          },
          {
            id: 'g11-m2-tr2',
            text: "عمر: بالتأكيد، فهو يرعى المواهب الشابة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Omar: Certainly, it nurtures young talents.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  {
    id: 'g11-comprehensive',
    title: 'Grade 11 Comprehensive Question Bank',
    grade: GradeLevel.G11,
    term: '1st Semester',
    year: 'Full Reference Revision',
    sections: [
      {
        id: 'g11-comp-vocab',
        title: 'Vocabulary Bank',
        instructions: 'Mixed Vocabulary Questions covering all Semester 1 Units',
        questions: [
          {
            id: 'g11-cp-v1',
            text: "I like this coffee; it is ......................, so it won't keep me awake.",
            type: QuestionType.MCQ,
            options: ['decaffeinated', 'spicy', 'sweet', 'instant'],
            correctAnswer: 'decaffeinated',
            explanation: "Decaffeinated means caffeine-free. \n(منزوع الكافيين)."
          },
          {
            id: 'g11-cp-v2',
            text: "The ...................... of the new restaurant is very welcoming.",
            type: QuestionType.MCQ,
            options: ['hospitality', 'hostility', 'fragrance', 'beverage'],
            correctAnswer: 'hospitality',
            explanation: "Hospitality refers to friendly reception of guests. \n(حسن الضيافة)."
          },
          {
            id: 'g11-cp-v3',
            text: "The trees in the jungle formed a leafy ...................... above us.",
            type: QuestionType.MCQ,
            options: ['canopy', 'boutique', 'discipline', 'stream'],
            correctAnswer: 'canopy',
            explanation: "Canopy refers to the upper layer or habitat zone formed by mature tree crowns. \n(مظلة الغابة)."
          },
          {
            id: 'g11-cp-v4',
            text: "We need to ...................... this special occasion with a party.",
            type: QuestionType.MCQ,
            options: ['commemorate', 'desert', 'weave', 'import'],
            correctAnswer: 'commemorate',
            explanation: "Commemorate means to recall and show respect for (someone or something) or celebrate. \n(يحيي ذكرى)."
          },
          {
            id: 'g11-cp-v5',
            text: "My grandfather likes to ...................... about the good old days.",
            type: QuestionType.MCQ,
            options: ['reminisce', 'socialise', 'fancy', 'nurture'],
            correctAnswer: 'reminisce',
            explanation: "Reminisce means to indulge in enjoyable recollection of past events. \n(يسترجع الذكريات)."
          },
          {
            id: 'g11-cp-v6',
            text: "We need to make a minor ...................... to the schedule.",
            type: QuestionType.MCQ,
            options: ['adjustment', 'assumption', 'capacity', 'category'],
            correctAnswer: 'adjustment',
            explanation: "Adjustment means a small change. \n(تعديل)."
          },
          {
            id: 'g11-cp-v7',
            text: "The interviewer was very ...................... and listened carefully.",
            type: QuestionType.MCQ,
            options: ['courteous', 'defensive', 'distracted', 'bubbly'],
            correctAnswer: 'courteous',
            explanation: "Courteous means polite and respectful. \n(مهذب)."
          },
          {
            id: 'g11-cp-v8',
            text: "He has an ...................... memory; he remembers everything.",
            type: QuestionType.MCQ,
            options: ['amazing', 'extensive', 'annual', 'cardiac'],
            correctAnswer: 'amazing',
            explanation: "Amazing means wonderful or astonishing. \n(مذهلة)."
          },
          {
            id: 'g11-cp-v9',
            text: "The stadium was filled with a/an ...................... crowd cheering for their team.",
            type: QuestionType.MCQ,
            options: ['exuberant', 'cardiac', 'enclosed', 'dazzling'],
            correctAnswer: 'exuberant',
            explanation: "Exuberant means filled with energy and excitement. \n(مفعم بالحيوية والحماس)."
          },
          {
            id: 'g11-cp-v10',
            text: "Doctors say that ...................... exercise is good for the heart.",
            type: QuestionType.MCQ,
            options: ['cardiac', 'annual', 'immediate', 'extensive'],
            correctAnswer: 'cardiac',
            explanation: "Cardiac relates to the heart. \n(قلبي/متعلق بالقلب)."
          },
          {
            id: 'g11-cp-v11',
            text: "The artist used a ...................... of colors to paint the sunset.",
            type: QuestionType.MCQ,
            options: ['multitude', 'branch', 'clan', 'phone'],
            correctAnswer: 'multitude',
            explanation: "Multitude means a large number. \n(عدد كبير)."
          },
          {
            id: 'g11-cp-v12',
            text: "We watched the ship ...................... for its first voyage.",
            type: QuestionType.MCQ,
            options: ['launch', 'gaze', 'hire', 'enhance'],
            correctAnswer: 'launch',
            explanation: "Launch refers to setting a ship in motion. \n(إطلاق السفينة)."
          },
          {
            id: 'g11-cp-v13',
            text: "This perfume has a wonderful ...................... of roses.",
            type: QuestionType.MCQ,
            options: ['fragrance', 'beverage', 'plaza', 'stadium'],
            correctAnswer: 'fragrance',
            explanation: "Fragrance means a pleasant smell. \n(عطر أو رائحة زكية)."
          },
          {
            id: 'g11-cp-v14',
            text: "We need to ...................... our skills to compete in the market.",
            type: QuestionType.MCQ,
            options: ['enhance', 'weave', 'block out', 'deem'],
            correctAnswer: 'enhance',
            explanation: "Enhance means to improve. \n(يعزز أو يحسن)."
          },
          {
            id: 'g11-cp-v15',
            text: "The villagers ...................... beautiful baskets from palm leaves.",
            type: QuestionType.MCQ,
            options: ['weave', 'import', 'reschedule', 'notify'],
            correctAnswer: 'weave',
            explanation: "Weave means to make fabric/baskets. \n(ينسج)."
          },
          {
            id: 'g11-cp-v16',
            text: "He gets very ...................... when someone criticizes his work.",
            type: QuestionType.MCQ,
            options: ['defensive', 'courteous', 'instant', 'precious'],
            correctAnswer: 'defensive',
            explanation: "Defensive means protecting oneself from criticism. \n(دفاعي)."
          },
          {
            id: 'g11-cp-v17',
            text: "We gathered in the town ...................... for the celebration.",
            type: QuestionType.MCQ,
            options: ['plaza', 'canopy', 'teapot', 'kettle'],
            correctAnswer: 'plaza',
            explanation: "Plaza is a public square. \n(ساحة عامة)."
          },
          {
            id: 'g11-cp-v18',
            text: "Reading improves your ...................... skills significantly.",
            type: QuestionType.MCQ,
            options: ['literacy', 'cardamom', 'stadium', 'autograph'],
            correctAnswer: 'literacy',
            explanation: "Literacy is the ability to read and write. \n(محو الأمية/القراءة والكتابة)."
          },
          {
            id: 'g11-cp-v19',
            text: "The view from the top of the mountain was ......................",
            type: QuestionType.MCQ,
            options: ['dazzling', 'irritated', 'preoccupied', 'lonesome'],
            correctAnswer: 'dazzling',
            explanation: "Dazzling means extremely impressive or beautiful. \n(مبهر)."
          },
          {
            id: 'g11-cp-v20',
            text: "We camped near a small ...................... that flowed into the river.",
            type: QuestionType.MCQ,
            options: ['stream', 'canopy', 'plaza', 'chain'],
            correctAnswer: 'stream',
            explanation: "Stream is a small, narrow river. \n(جدول ماء)."
          },
          {
            id: 'g11-cp-v21',
            text: "Parents should enforce strict ...................... on their children's screen time.",
            type: QuestionType.MCQ,
            options: ['discipline', 'gossip', 'nurture', 'adjustment'],
            correctAnswer: 'discipline',
            explanation: "Discipline means the practice of training people to obey rules. \n(انضباط)."
          },
          {
            id: 'g11-cp-v22',
            text: "Fear of failure is the biggest ...................... to success.",
            type: QuestionType.MCQ,
            options: ['obstacle', 'fragrance', 'celebration', 'canopy'],
            correctAnswer: 'obstacle',
            explanation: "Obstacle is a thing that blocks one's way or prevents progress. \n(عقبة)."
          },
          {
            id: 'g11-cp-v23',
            text: "We must ...................... young people to read more books.",
            type: QuestionType.MCQ,
            options: ['encourage', 'weave', 'import', 'hibernate'],
            correctAnswer: 'encourage',
            explanation: "Encourage means give support, confidence, or hope. \n(يشجع)."
          },
          {
            id: 'g11-cp-v24',
            text: "The children were full of ...................... ideas about dragons and castles.",
            type: QuestionType.MCQ,
            options: ['fanciful', 'digital', 'remote', 'valuable'],
            correctAnswer: 'fanciful',
            explanation: "Fanciful means over-imaginative and unrealistic. \n(خيالي)."
          },
          {
            id: 'g11-cp-v25',
            text: "We live in a ...................... age where everything is connected online.",
            type: QuestionType.MCQ,
            options: ['digital', 'fanciful', 'ready-made', 'instant'],
            correctAnswer: 'digital',
            explanation: "Digital refers to the use of computer technology. \n(رقمي)."
          }
        ]
      },
      {
        id: 'g11-comp-grammar',
        title: 'Grammar Bank',
        instructions: 'Comprehensive Grammar Revision (All Rules)',
        questions: [
          {
            id: 'g11-cp-g1',
            text: "She is not only clever but also beautiful. (Begin with: Not only)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Not only is she clever but also beautiful.',
              'Not only she is clever but also beautiful.',
              'Not only clever she is but also beautiful.'
            ],
            correctAnswer: 'Not only is she clever but also beautiful.',
            explanation: "Inversion rules apply when starting with 'Not only'. \n(التقديم والتأخير عند البدء بـ Not only)."
          },
          {
            id: 'g11-cp-g2',
            text: "The movie started. We arrived at the cinema. (Join using: By the time)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'By the time we arrived at the cinema, the movie had started.',
              'By the time the movie started, we arrived at the cinema.',
              'We arrived at the cinema by the time the movie started.'
            ],
            correctAnswer: 'By the time we arrived at the cinema, the movie had started.',
            explanation: "Past action before another past action uses Past Perfect (had started). \n(الحدث الأول في الماضي يكون في زمن الماضي التام)."
          },
          {
            id: 'g11-cp-g3',
            text: "If I were you, I (study) harder. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['will study', 'would study', 'studied'],
            correctAnswer: 'would study',
            explanation: "Second conditional for advice (If I were you, I would...). \n(الحالة الثانية للنصيحة)."
          },
          {
            id: 'g11-cp-g4',
            text: "The report (write) by the secretary yesterday. (Correct/Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['is written', 'was written', 'wrote'],
            correctAnswer: 'was written',
            explanation: "Past simple passive: was/were + V3. \n(المبني للمجهول في الماضي)."
          },
          {
            id: 'g11-cp-g5',
            text: "She didn't pass the exam. She didn't study well. (Join: Because)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'She didn\'t pass the exam because she didn\'t study well.',
              'Because she didn\'t pass the exam, she didn\'t study well.',
              'She didn\'t study well because she didn\'t pass the exam.'
            ],
            correctAnswer: 'She didn\'t pass the exam because she didn\'t study well.',
            explanation: "Because introduces the reason. \n(لربط السبب بالنتيجة)."
          },
          {
            id: 'g11-cp-g6',
            text: "You are from Kuwait, ......................? (Tag Question)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['aren\'t you', 'don\'t you', 'won\'t you'],
            correctAnswer: 'aren\'t you',
            explanation: "Present simple 'are' -> 'aren't'. \n(السؤال المذيل)."
          },
          {
            id: 'g11-cp-g7',
            text: "He asked me, \"Where do you live?\" (Reported Speech)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'He asked me where I lived.',
              'He asked me where did I live.',
              'He asked me where do I live.'
            ],
            correctAnswer: 'He asked me where I lived.',
            explanation: "Change tense back one step (present -> past) and use statement word order. \n(تحويل الكلام المباشر إلى غير مباشر مع تغيير الزمن)."
          },
          {
            id: 'g11-cp-g8',
            text: "I should have (study) harder for the test. (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['studied', 'study', 'studying'],
            correctAnswer: 'studied',
            explanation: "Modal perfect: should have + V3. \n(should have تستخدم للتعبير عن الندم)."
          },
          {
            id: 'g11-cp-g9',
            text: "The tea is too hot to drink. (Use: so...that)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'The tea is so hot that I can\'t drink it.',
              'The tea is so hot to drink it.',
              'So hot the tea is that I can\'t drink.'
            ],
            correctAnswer: 'The tea is so hot that I can\'t drink it.',
            explanation: "Structure: so + adj + that + clause. \n(قاعدة so...that)."
          },
          {
            id: 'g11-cp-g10',
            text: "I (wait) for you for two hours. (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['have been waiting', 'am waiting', 'waited'],
            correctAnswer: 'have been waiting',
            explanation: "Present Perfect Continuous for duration leading up to present. \n(للمدة المستمرة حتى الحاضر)."
          },
          {
            id: 'g11-cp-g11',
            text: "Neither Ali nor his friends (be) at school yesterday. (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['were', 'was', 'are'],
            correctAnswer: 'were',
            explanation: "With 'neither...nor', the verb agrees with the closest subject (friends -> plural). \n(الفعل يتبع الفاعل الأقرب)."
          },
          {
            id: 'g11-cp-g12',
            text: "I like reading. My brother likes reading. (Use: Both...and)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Both I and my brother like reading.',
              'Both I and my brother likes reading.',
              'I and my brother both likes reading.'
            ],
            correctAnswer: 'Both I and my brother like reading.',
            explanation: "Both...and always takes a plural verb. \n(Both...and تأخذ فعل جمع)."
          },
          {
            id: 'g11-cp-g13',
            text: "If it rains, we ...................... cancel the match.",
            type: QuestionType.MCQ,
            options: ['will', 'would', 'could', 'should'],
            correctAnswer: 'will',
            explanation: "First Conditional (If + Present -> Will). \n(الحالة الشرطية الأولى)."
          },
          {
            id: 'g11-cp-g14',
            text: "This is the book ...................... I bought yesterday.",
            type: QuestionType.MCQ,
            options: ['which', 'who', 'where', 'when'],
            correctAnswer: 'which',
            explanation: "Which is used for things. \n(لغير العاقل)."
          },
          {
            id: 'g11-cp-g15',
            text: "Can you tell me where ......................?",
            type: QuestionType.MCQ,
            options: ['the post office is', 'is the post office', 'the post office was', 'was the post office'],
            correctAnswer: 'the post office is',
            explanation: "Indirect question word order (subject + verb). \n(ترتيب الجملة في السؤال غير المباشر)."
          },
          {
            id: 'g11-cp-g16',
            text: "He is ...................... tired to walk.",
            type: QuestionType.MCQ,
            options: ['too', 'so', 'very', 'enough'],
            correctAnswer: 'too',
            explanation: "Structure: too + adj + to + infinitive. \n(قاعدة too...to)."
          },
          {
            id: 'g11-cp-g17',
            text: "Do you mind ...................... the window?",
            type: QuestionType.MCQ,
            options: ['opening', 'open', 'opened', 'to open'],
            correctAnswer: 'opening',
            explanation: "Do you mind is followed by Gerund (-ing). \n(يتبعها الفعل مضاف له ing)."
          },
          {
            id: 'g11-cp-g18',
            text: "The work must (finish) by tomorrow. (Change to passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['be finished', 'finish', 'have finished'],
            correctAnswer: 'be finished',
            explanation: "Passive with modals: Modal + be + V3. \n(المبني للمجهول مع الأفعال الناقصة)."
          },
          {
            id: 'g11-cp-g19',
            text: "This is the place ...................... we met.",
            type: QuestionType.MCQ,
            options: ['where', 'which', 'who', 'when'],
            correctAnswer: 'where',
            explanation: "Where is used for places. \n(where للمكان)."
          },
          {
            id: 'g11-cp-g20',
            text: "Although he is rich, ...................... he is humble.",
            type: QuestionType.MCQ,
            options: ['-', 'but', 'so', 'and'],
            correctAnswer: '-',
            explanation: "Although connects two clauses; we do not use 'but' in the second clause. \n(لا نستخدم but مع although)."
          }
        ]
      },
      {
        id: 'g11-comp-functions',
        title: 'Language Functions Bank',
        instructions: 'What would you say in the following situations?',
        questions: [
          {
            id: 'g11-cp-lf1',
            text: "A friend invites you to dinner but you are busy.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I'd love to, but I am busy studying / I'm afraid I can't make it.",
            explanation: "Polite refusal. \n(رفض الدعوة بأدب)."
          },
          {
            id: 'g11-cp-lf2',
            text: "Your teacher asks about your opinion on online learning.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "In my opinion, it is very useful but lacks social interaction.",
            explanation: "Expressing opinion. \n(التعبير عن الرأي)."
          },
          {
            id: 'g11-cp-lf3',
            text: "You see someone throwing trash on the street.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Please don't do that, we should keep our city clean.",
            explanation: "Giving advice/Prohibition. \n(إسداء النصيحة)."
          },
          {
            id: 'g11-cp-lf4',
            text: "Your friend passed the driving test.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Well done! That's great news.",
            explanation: "Congratulating. \n(التهنئة)."
          },
          {
            id: 'g11-cp-lf5',
            text: "You want to ask your father for permission to go camping.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Dad, may I please go camping with my friends this weekend?",
            explanation: "Asking for permission. \n(طلب الإذن)."
          },
          {
            id: 'g11-cp-lf6',
            text: "Describe your last holiday to a friend.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It was amazing! We visited many historical sites.",
            explanation: "Describing past events. \n(وصف أحداث ماضية)."
          },
          {
            id: 'g11-cp-lf7',
            text: "You want to suggest playing football to your friends.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Let's play football this afternoon.",
            explanation: "Suggestion. \n(الاقتراح)."
          },
          {
            id: 'g11-cp-lf8',
            text: "Someone asks you for directions to the library.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Go straight, then turn left. It's on your right.",
            explanation: "Giving directions. \n(إعطاء الاتجاهات)."
          },
          {
            id: 'g11-cp-lf9',
            text: "Your friend is driving very fast.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Slow down! You are driving too fast.",
            explanation: "Warning. \n(التحذير)."
          },
          {
            id: 'g11-cp-lf10',
            text: "You broke your friend's pen by mistake.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am so sorry, I didn't mean to break it.",
            explanation: "Apology. \n(الاعتذار)."
          },
          {
            id: 'g11-cp-lf11',
            text: "Your brother says that English is difficult.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I disagree, if you study hard it becomes easy.",
            explanation: "Disagreement. \n(الاعتراض)."
          },
          {
            id: 'g11-cp-lf12',
            text: "You see an old man trying to cross the street.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Let me help you cross the street, sir.",
            explanation: "Offering help. \n(عرض المساعدة)."
          },
          {
            id: 'g11-cp-lf13',
            text: "A friend asks you what you would do if you were a millionaire.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "If I were a millionaire, I would help the poor.",
            explanation: "Imaginary situation. \n(موقف تخيلي)."
          }
        ]
      },
      {
        id: 'g11-comp-setbook',
        title: 'Set Book Bank',
        instructions: 'Mixed Set Book Questions covering all Units',
        questions: [
          {
            id: 'g11-cp-sb1',
            text: "Why is it important to respect other cultures?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To promote peace, understanding, and coexistence among different nations.",
            explanation: "Unit: Culture of Peace. \n(لتعزيز السلام والتفاهم والتعايش)."
          },
          {
            id: 'g11-cp-sb2',
            text: "How can we keep our mind and body healthy?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By eating healthy food, exercising, stimulating the mind with puzzles/reading.",
            explanation: "Unit: Healthy Lifestyle. \n(الغذاء الصحي والرياضة وتنشيط العقل)."
          },
          {
            id: 'g11-cp-sb3',
            text: "Why are Paralympics important for disabled athletes?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They build self-confidence, physical strength, and social integration.",
            explanation: "Unit: Sports. \n(بناء الثقة والقوة والاندماج الاجتماعي)."
          },
          {
            id: 'g11-cp-sb4',
            text: "What is the main purpose of the UN?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To maintain international peace and security and solve global problems.",
            explanation: "Unit: Peace. \n(حفظ السلام والأمن العالمي)."
          },
          {
            id: 'g11-cp-sb5',
            text: "Why should we avoid eating too much saturated fat?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because it increases cholesterol and causes heart diseases.",
            explanation: "Unit: Healthy Lifestyle. \n(يسبب الكوليسترول وأمراض القلب)."
          },
          {
            id: 'g11-cp-sb6',
            text: "How does Islam view the roles of men and women?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It views them as complementary, with shared responsibilities to build a strong society.",
            explanation: "Unit: Stories from the Quran. \n(أدوار تكاملية ومسؤوليات مشتركة)."
          },
          {
            id: 'g11-cp-sb7',
            text: "Why do people wear traditional clothes?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To show pride in their heritage and national identity.",
            explanation: "Unit: Culture. \n(الفخر بالتراث والهوية الوطنية)."
          },
          {
            id: 'g11-cp-sb8',
            text: "What moral lessons can we learn from Luqman's advice to his son?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "We learn modesty, patience, respect for parents, and avoiding arrogance.",
            explanation: "Unit: Stories from the Quran. \n(التواضع والصبر وبر الوالدين)."
          },
          {
            id: 'g11-cp-sb9',
            text: "What are the benefits of probiotic drinks?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They contain good bacteria that help digestion and boost the immune system.",
            explanation: "Unit: Healthy Lifestyle. \n(تساعد الهضم وتقوي المناعة)."
          },
          {
            id: 'g11-cp-sb10',
            text: "Why is the arcade a popular place for teenagers?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because it offers a variety of games and a chance to socialize with friends.",
            explanation: "Unit: Computer Games. \n(تنوع الألعاب والتواصل الاجتماعي)."
          },
          {
            id: 'g11-cp-sb11',
            text: "How can video games be educational?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They can teach problem-solving, languages, and historical facts.",
            explanation: "Unit: Computer Games. \n(تعليم حل المشكلات واللغات)."
          },
          {
            id: 'g11-cp-sb12',
            text: "Why is the date palm tree important in Arab culture?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It provides food, shelter materials, and is a symbol of hospitality.",
            explanation: "Unit: Culture. \n(الغذاء ومواد البناء ورمز الضيافة)."
          },
          {
            id: 'g11-cp-sb13',
            text: "What makes a building 'famous'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Its unique design, historical significance, or cultural importance.",
            explanation: "Unit: Famous Buildings. \n(التصميم الفريد أو الأهمية التاريخية)."
          },
          {
            id: 'g11-cp-sb14',
            text: "How can we show respect to the disabled?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By treating them equally, offering help when needed, and providing facilities.",
            explanation: "Unit: Sports/Values. \n(المعاملة المتساوية وتوفير التسهيلات)."
          },
          {
            id: 'g11-cp-sb15',
            text: "What are the dangers of driving fast?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It causes accidents, injuries, and death.",
            explanation: "Unit: Safety. \n(الحوادث والإصابات)."
          },
          {
            id: 'g11-cp-sb16',
            text: "How does the media influence public opinion?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It can shape opinions by focusing on certain issues or presenting biased information.",
            explanation: "Unit: Media. \n(تشكيل الرأي العام عبر التركيز على قضايا معينة)."
          },
          {
            id: 'g11-cp-sb17',
            text: "What are the barriers to effective communication?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Poor listening, defensiveness, and lack of interest.",
            explanation: "Unit: Communication. \n(سوء الاستماع، الدفاعية، عدم الاهتمام)."
          },
          {
            id: 'g11-cp-sb18',
            text: "Why is the Diwaniya considered a democratic forum?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because it allows freedom of speech and discussion of political and social issues.",
            explanation: "Unit: Diwaniya. \n(حرية التعبير ومناقشة القضايا)."
          }
        ]
      },
      {
        id: 'g11-comp-translation',
        title: 'Translation Bank',
        instructions: 'Translate the following sentences into English:',
        questions: [
          {
            id: 'g11-cp-tr1',
            text: "سالم: تعتبر الديوانية جزءا هاما من التقاليد الكويتية.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Salem: The Diwaniya is considered an important part of Kuwaiti traditions.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr2',
            text: "ناصر: نعم، فهي مكان يجتمع فيه الرجال لمناقشة القضايا المختلفة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Nasser: Yes, it is a place where men gather to discuss different issues.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr3',
            text: "منى: يجب أن نستخدم وسائل التواصل الاجتماعي بحكمة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Mona: We must use social media wisely.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr4',
            text: "هدى: هل تعلمين أن الكتابة بدأت في بلاد الرافدين؟",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Huda: Do you know that writing began in Mesopotamia?",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr5',
            text: "ليلى: نعم، لقد استخدموا الرموز الطينية.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Laila: Yes, they used clay symbols.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr6',
            text: "يوسف: المهرجانات الثقافية تساهم في تنشيط السياحة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Yousef: Cultural festivals contribute to boosting tourism.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr7',
            text: "علي: هذا صحيح، كما أنها تحافظ على التراث.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ali: That's true, and they also preserve heritage.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr8',
            text: "فاطمة: الهواتف الذكية أصبحت ضرورة في حياتنا.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Fatima: Smartphones have become a necessity in our lives.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr9',
            text: "نور: ولكن يجب ألا نعتمد عليها كلياً.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Nour: But we should not rely on them completely.",
            explanation: "Translation."
          },
          {
            id: 'g11-cp-tr10',
            text: "خالد: التسامح صفة مهمة لبناء مجتمع مسالم.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Khaled: Tolerance is an important quality for building a peaceful society.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },

  // ==================================================================================
  //                                   GRADE 12
  // ==================================================================================
  {
    id: 'g12-mock-1',
    title: 'Grade 12 Mock Exam 1',
    grade: GradeLevel.G12,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g12-m1-vocab',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the best answer from a, b, c and d:',
        questions: [
          {
            id: 'g12-m1-v1',
            text: "Minorities should be protected against abuse and……………..….worldwide.",
            type: QuestionType.MCQ,
            options: ['commitment', 'suffrage', 'discrimination', 'empathy'],
            correctAnswer: 'discrimination',
            explanation: "Discrimination fits the context of abuse/protection. \n(التمييز العنصري)."
          },
          {
            id: 'g12-m1-v2',
            text: "Money is so……………….in our life. On the other hand, it's just a means to an end.",
            type: QuestionType.MCQ,
            options: ['humid', 'frigid', 'vital', 'productive'],
            correctAnswer: 'vital',
            explanation: "Vital means absolutely necessary. \n(حيوي وضروري)."
          },
          {
            id: 'g12-m1-v3',
            text: "A/An……………… …of violence in our area has been linked to increased unemployment.",
            type: QuestionType.MCQ,
            options: ['constituent', 'trend', 'quantity', 'upsurge'],
            correctAnswer: 'upsurge',
            explanation: "Upsurge means a sudden increase. \n(زيادة مفاجئة)."
          },
          {
            id: 'g12-m1-v4',
            text: "The removal of …………………….. restrictions has made life easier.",
            type: QuestionType.MCQ,
            options: ['mass', 'meticulous', 'foreign', 'petty'],
            correctAnswer: 'petty',
            explanation: "Petty restrictions are trivial or unimportant. \n(قيود تافهة)."
          },
          {
            id: 'g12-m1-v5',
            text: "I usually………..……with people who present their views quietly and logically.",
            type: QuestionType.MCQ,
            options: ['go along with', 'put up with', 'come up against', 'get rid of'],
            correctAnswer: 'go along with',
            explanation: "Go along with means to agree. \n(يتفق مع)."
          }
        ]
      },
      {
        id: 'g12-m1-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the spaces with words from the list below:',
        contextPassage: "constant / judiciary / afford / charitable / crisis / climate",
        questions: [
          {
            id: 'g12-m1-v6',
            text: "The…… ………….…..is the government branch dispensing justice all over the country.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['constant', 'judiciary', 'afford', 'charitable', 'crisis', 'climate'],
            correctAnswer: 'judiciary',
            explanation: "Judiciary relates to the system of justice. \n(السلطة القضائية)."
          },
          {
            id: 'g12-m1-v7',
            text: "Tonight's feature film will……… ………………..you too much pleasure.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['constant', 'judiciary', 'afford', 'charitable', 'crisis', 'climate'],
            correctAnswer: 'afford',
            explanation: "Afford means to provide or supply. \n(يمنح)."
          },
          {
            id: 'g12-m1-v8',
            text: "Rich people, worldwide, should donate a part of their income to… ……… …causes.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['constant', 'judiciary', 'afford', 'charitable', 'crisis', 'climate'],
            correctAnswer: 'charitable',
            explanation: "Charitable causes help those in need. \n(خيرية)."
          },
          {
            id: 'g12-m1-v9',
            text: "He who makes…. ………….…..complaint gets little compassion.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['constant', 'judiciary', 'afford', 'charitable', 'crisis', 'climate'],
            correctAnswer: 'constant',
            explanation: "Constant means continuous or occurring repeatedly. \n(مستمر)."
          },
          {
            id: 'g12-m1-v10',
            text: "The Mediterranean… ……… …is good for citrus fruits and grapes.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['constant', 'judiciary', 'afford', 'charitable', 'crisis', 'climate'],
            correctAnswer: 'climate',
            explanation: "Climate is weather patterns. \n(المناخ)."
          }
        ]
      },
      {
        id: 'g12-m1-grammar',
        title: 'II. Grammar',
        instructions: 'Choose the correct answer or do as required:',
        questions: [
          {
            id: 'g12-m1-g1',
            text: "I like listening to classical music…………..……..….my brother prefers western music.",
            type: QuestionType.MCQ,
            options: ['instead of', 'whereas', 'so that', 'despite'],
            correctAnswer: 'whereas',
            explanation: "Whereas is used to contrast two facts. \n(للمقارنة بين شيئين مختلفين)."
          },
          {
            id: 'g12-m1-g2',
            text: "This test is for students ………………………… language is not English.",
            type: QuestionType.MCQ,
            options: ['who', 'whose', 'which', 'where'],
            correctAnswer: 'whose',
            explanation: "Whose is used for possession. \n(للملكية)."
          },
          {
            id: 'g12-m1-g3',
            text: "I wish I ……………….. help all the poor.",
            type: QuestionType.MCQ,
            options: ['should', 'able to', 'could', 'could have'],
            correctAnswer: 'could',
            explanation: "Wish + could for present ability/desire. \n(للتمني في الحاضر)."
          },
          {
            id: 'g12-m1-g4',
            text: "She has been doing this project …………………………. more than 2 years.",
            type: QuestionType.MCQ,
            options: ['since', 'yet', 'already', 'for'],
            correctAnswer: 'for',
            explanation: "For is used with duration. \n(للمدة الزمنية)."
          }
        ]
      },
      {
        id: 'g12-m1-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g12-m1-g5',
            text: "Before I came here, I had already bought the gift. (Use: After)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'After I had bought the gift, I came here.',
              'After I came, I had already bought the gift here.',
              'After I had come here, I had bought the gift.'
            ],
            correctAnswer: 'After I had bought the gift, I came here.',
            explanation: "After is followed by Past Perfect (had bought). \n(بعد أن اشتريت الهدية، أتيت)."
          },
          {
            id: 'g12-m1-g6',
            text: "We should hold newborn babies very carefully. (Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Newborn babies should hold very carefully.',
              'Newborn babies should be held very carefully.',
              'Newborn babies should have been hold very carefully.'
            ],
            correctAnswer: 'Newborn babies should be held very carefully.',
            explanation: "Passive with modals: Modal + be + V3. \n(المبني للمجهول مع الأفعال الناقصة)."
          },
          {
            id: 'g12-m1-g7',
            text: "Let’s go to the beach, …………………………? (Tag Question)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['will we?', 'can we?', 'shall we?'],
            correctAnswer: 'shall we?',
            explanation: "Tag for Let's is 'shall we?'. \n(السؤال المذيل لـ Let's)."
          },
          {
            id: 'g12-m1-g8',
            text: "I studied good for the exam. (Correct the underlined)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['better', 'well', 'good'],
            correctAnswer: 'well',
            explanation: "Adverb of good is well. \n(الحال من good هو well)."
          }
        ]
      },
      {
        id: 'g12-m1-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say in the following situations:',
        questions: [
          {
            id: 'g12-m1-lf1',
            text: "You were asked to tell why you couldn't pass the English test.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I couldn’t pass the English test as I was very ill.",
            explanation: "Giving reasons. \n(إعطاء أسباب)."
          },
          {
            id: 'g12-m1-lf2',
            text: "Your friend asked you to suggest something interesting to do in the weekend.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Let's go camping in the desert.",
            explanation: "Making a suggestion. \n(تقديم اقتراح)."
          },
          {
            id: 'g12-m1-lf3',
            text: "Your brother didn't drive so carefully, so he had a terrible accident.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I am so sorry to hear that.",
            explanation: "Sympathy. \n(التعاطف)."
          },
          {
            id: 'g12-m1-lf4',
            text: "Pandas are about to disappear, suggest a solution.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I suggest building natural reserves for them.",
            explanation: "Solutions. \n(اقتراح حلول)."
          }
        ]
      },
      {
        id: 'g12-m1-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g12-m1-sb1',
            text: "How important are human values?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They protect minorities, reduce violence, and spread peace.",
            explanation: "Unit: Human Values. \n(حماية الأقليات ونشر السلام)."
          },
          {
            id: 'g12-m1-sb2',
            text: "How could people solve their problems away from courts?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Through amicable settlement or seeking wisdom from elders.",
            explanation: "Unit: Law. \n(الصلح الودي أو اللجوء للحكماء)."
          },
          {
            id: 'g12-m1-sb3',
            text: "What can the Public Authority for Agriculture do to change the desert into green lands?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They can grow more trees, provide modern farming systems, and stop cutting trees.",
            explanation: "Unit: The Earth. \n(زراعة الأشجار وتوفير نظم الري)."
          },
          {
            id: 'g12-m1-sb4',
            text: "Kuwait's great interest in recycling waste is obvious. Explain.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "There are many collection points and recycling centers in Kuwait.",
            explanation: "Unit: Recycling. \n(وجود مراكز إعادة التدوير)."
          },
          {
            id: 'g12-m1-sb5',
            text: "Why are some people against utilizing wetlands for construction?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Because rare birds lose their habitat, and it increases competition.",
            explanation: "Unit: Migration/Earth. \n(فقدان موائل الطيور)."
          }
        ]
      },
      {
        id: 'g12-m1-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Human values are part and parcel of our culture.",
        questions: [
          {
            id: 'g12-m1-wr',
            text: "Write a report (14 sentences) about the importance of human values and the role of the government to protect basic human rights.",
            type: QuestionType.WRITING,
            correctAnswer: "Report format. Points: Universal values, legislation, equality, justice.",
            explanation: "Report Writing."
          }
        ]
      },
      {
        id: 'g12-m1-reading-comp',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "The Silent Crime: Identity Theft\n\nIdentity theft is often called the crime of the 21st century. It occurs when someone steals your personal information—such as your ID number, credit card details, or passwords—to commit fraud or other crimes. In the past, a thief had to physically steal a wallet to get this information. Today, in our interconnected digital world, cybercriminals can steal the identities of thousands of people instantly without ever leaving their homes, operating across borders with alarming ease.\n\nThe methods used by identity thieves are becoming increasingly sophisticated. 'Phishing' is a common technique where criminals send fake emails pretending to be legitimate banks or companies, tricking victims into revealing their passwords. Another method involves hacking into the databases of large retailers to steal customer data. Once they have this information, thieves can drain bank accounts, open new credit cards in the victim's name, or even claim government benefits, leaving the victim with little recourse.\n\nA significant factor aiding these criminals is the phenomenon of social engineering and oversharing on social media. People often post detailed personal information—birthdays, pet names, mother's maiden name—on platforms like Facebook or Instagram. These details are frequently used as answers to security questions for bank accounts. Thieves scour these profiles to build a dossier on their targets, bypassing technical security measures by exploiting human psychology and carelessness rather than computer code.\n\nThe consequences for victims can be devastating and long-lasting. Beyond the immediate financial loss, which banks may sometimes cover, victims often face a nightmare of bureaucracy to restore their reputation. Their credit score may be ruined, making it impossible to get a loan or a mortgage. The emotional toll is also significant; victims often feel violated, anxious, and paranoid about their digital security long after the crime has occurred. It can take years to fully clear one's name.\n\nPreventing identity theft requires constant vigilance. Cybersecurity experts recommend using strong, unique passwords for every account and enabling two-factor authentication whenever possible. It is also crucial to monitor bank statements regularly for any suspicious activity and to be skeptical of unsolicited requests for information. While laws are being updated to punish these digital crimes more severely, the best defense remains an educated and cautious user. We must treat our personal data with the same care as we treat the keys to our homes.",
        questions: [
          {
            id: 'g12-m1-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The History of Wallets', 'The Silent Crime: Identity Theft', 'How to Hack a Database', 'Government Benefits'],
            correctAnswer: 'The Silent Crime: Identity Theft',
            explanation: "The title perfectly summarizes the topic of the passage."
          },
          {
            id: 'g12-m1-rc-2',
            text: "The main idea of the 4th paragraph is:",
            type: QuestionType.MCQ,
            options: ['How to prevent identity theft', 'The definition of phishing', 'The devastating consequences for victims', 'The history of cybercrime'],
            correctAnswer: 'The devastating consequences for victims',
            explanation: "Paragraph 4 discusses financial loss, ruined credit scores, and emotional toll."
          },
          {
            id: 'g12-m1-rc-3',
            text: "The underlined word 'sophisticated' in the 2nd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['simple', 'advanced', 'boring', 'cheap'],
            correctAnswer: 'advanced',
            explanation: "Sophisticated means advanced or complex."
          },
          {
            id: 'g12-m1-rc-4',
            text: "The underlined pronoun 'they' in the 2nd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['victims', 'databases', 'thieves', 'banks'],
            correctAnswer: 'thieves',
            explanation: "The sentence says 'Once they have this information, thieves can...'. They refers to thieves."
          },
          {
            id: 'g12-m1-rc-5',
            text: "How is modern identity theft different from the past?",
            type: QuestionType.MCQ,
            options: ['It is less common', 'It requires physical theft', 'It can happen instantly and remotely', 'It only affects rich people'],
            correctAnswer: 'It can happen instantly and remotely',
            explanation: "Found in paragraph 1."
          },
          {
            id: 'g12-m1-rc-6',
            text: "What is 'phishing'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "A technique where criminals send fake emails pretending to be legitimate companies to trick victims into revealing passwords.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g12-m1-rc-7',
            text: "How does social media contribute to identity theft?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "People overshare personal details like birthdays or pet names, which thieves use to answer security questions.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g12-m1-rc-8',
            text: "Besides financial loss, what is another consequence for victims?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Their credit score may be ruined, or they may suffer emotional distress like anxiety.",
            explanation: "Found in paragraph 4."
          },
          {
            id: 'g12-m1-rc-9',
            text: "What is the best defense against identity theft according to the passage?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "An educated and cautious user.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g12-m1-rc-10',
            text: "What can thieves do with stolen information?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Drain bank accounts, open new credit cards, or claim government benefits.",
            explanation: "Found in paragraph 2."
          }
        ]
      },
      {
        id: 'g12-m1-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the LAST paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase how to prevent identity theft.',
        questions: [
          {
            id: 'g12-m1-sum',
            text: "Summarize the prevention methods for identity theft.",
            type: QuestionType.WRITING,
            correctAnswer: "1. We must be constantly alert to protect our data. 2. Experts advise using strong passwords and two-factor authentication. 3. It is also important to check bank statements for any strange activity. 4. Finally, users need to be educated and careful with their personal information.",
            explanation: "Summary of paragraph 5."
          }
        ]
      },
      {
        id: 'g12-m1-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g12-m1-tr1',
            text: "النباتات توفر لنا الغذاء و تغذي التربة وتحميها من االنجراف وتنتج االكسجين الذي نحتاجه للتنفس.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Plants provide us with food, enrich the soil, and protect it from erosion.",
            explanation: "Translation."
          },
          {
            id: 'g12-m1-tr2',
            text: "مثل كل بقية دول العالم فان القوانين في الكويت سنت لحماية الحقوق اإلنسانية األساسية.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Like all other countries, laws in Kuwait are enacted to protect basic human rights.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  // ==================================================================================
  //                              GRADE 12 MOCK 2 (LOCKED & COMPREHENSIVE)
  // ==================================================================================
  {
    id: 'g12-mock-2',
    title: 'Grade 12 Mock Exam 2 (Comprehensive)',
    grade: GradeLevel.G12,
    term: '1st Semester',
    year: '2024-2025',
    sections: [
      {
        id: 'g12-m2-vocab-mcq',
        title: 'I. Vocabulary (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g12-m2-v1',
            text: "The lawyer presented a strong ...................... in court.",
            type: QuestionType.MCQ,
            options: ['defence', 'property', 'row', 'brief'],
            correctAnswer: 'defence',
            explanation: "Defence is the case presented by the lawyer. \n(الدفاع)."
          },
          {
            id: 'g12-m2-v2',
            text: "We need to ...................... water consumption to avoid shortages.",
            type: QuestionType.MCQ,
            options: ['curtail', 'prosecute', 'contend', 'claim'],
            correctAnswer: 'curtail',
            explanation: "Curtail means to reduce. \n(يقلل أو يحد من)."
          },
          {
            id: 'g12-m2-v3',
            text: "...................... is a major environmental problem in arid regions.",
            type: QuestionType.MCQ,
            options: ['Desertification', 'Proportion', 'Competence', 'Administration'],
            correctAnswer: 'Desertification',
            explanation: "Desertification is the process of land becoming desert. \n(التصحر)."
          },
          {
            id: 'g12-m2-v4',
            text: "Some animals are threatened with ...................... due to hunting.",
            type: QuestionType.MCQ,
            options: ['extinction', 'adoption', 'consultation', 'refuge'],
            correctAnswer: 'extinction',
            explanation: "Extinction means a species dying out. \n(الانقراض)."
          },
          {
            id: 'g12-m2-v5',
            text: "We must show ...................... to the victims of the disaster.",
            type: QuestionType.MCQ,
            options: ['empathy', 'season', 'cookery', 'thread'],
            correctAnswer: 'empathy',
            explanation: "Empathy is sharing others' feelings. \n(التعاطف)."
          }
        ]
      },
      {
        id: 'g12-m2-vocab-fill',
        title: 'I. Vocabulary (Fill in the Blanks)',
        instructions: 'Fill in the spaces with words from the list:',
        contextPassage: "compost / hibernate / penalty / ultimately / afford / grievance",
        questions: [
          {
            id: 'g12-m2-v6',
            text: "We decided to make ...................... from our kitchen waste.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['compost', 'hibernate', 'penalty', 'ultimately', 'afford', 'grievance'],
            correctAnswer: 'compost',
            explanation: "Compost is recycled organic matter used as fertilizer. \n(سماد عضوي)."
          },
          {
            id: 'g12-m2-v7',
            text: "Some bears ...................... during the winter months.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['compost', 'hibernate', 'penalty', 'ultimately', 'afford', 'grievance'],
            correctAnswer: 'hibernate',
            explanation: "Hibernate means to sleep through winter. \n(بيات شتوي)."
          },
          {
            id: 'g12-m2-v8',
            text: "There is a severe ...................... for speeding.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['compost', 'hibernate', 'penalty', 'ultimately', 'afford', 'grievance'],
            correctAnswer: 'penalty',
            explanation: "Penalty means punishment. \n(عقوبة)."
          },
          {
            id: 'g12-m2-v9',
            text: "We tried many solutions, but ...................... we had to buy a new machine.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['compost', 'hibernate', 'penalty', 'ultimately', 'afford', 'grievance'],
            correctAnswer: 'ultimately',
            explanation: "Ultimately means finally or in the end. \n(في النهاية)."
          },
          {
            id: 'g12-m2-v10',
            text: "The employee filed a formal ...................... against his manager.",
            type: QuestionType.FILL_IN_BLANKS,
            options: ['compost', 'hibernate', 'penalty', 'ultimately', 'afford', 'grievance'],
            correctAnswer: 'grievance',
            explanation: "Grievance is a complaint. \n(تظلم أو شكوى)."
          }
        ]
      },
      {
        id: 'g12-m2-grammar-mcq',
        title: 'II. Grammar (MCQ)',
        instructions: 'Choose the correct answer:',
        questions: [
          {
            id: 'g12-m2-g1',
            text: "If I had known about the meeting, I ...................... attended.",
            type: QuestionType.MCQ,
            options: ['would have', 'will have', 'would', 'can'],
            correctAnswer: 'would have',
            explanation: "3rd Conditional: If + Past Perfect -> Would have + V3. \n(الحالة الشرطية الثالثة للندم)."
          },
          {
            id: 'g12-m2-g2',
            text: "The police officer asked him where ...................... live.",
            type: QuestionType.MCQ,
            options: ['he did', 'did he', 'does he', 'he does'],
            correctAnswer: 'he did',
            explanation: "Reported speech: Statement word order. \n(ترتيب الجملة الخبرية في الكلام المنقول)."
          },
          {
            id: 'g12-m2-g3',
            text: "...................... he is rich, he lives a simple life.",
            type: QuestionType.MCQ,
            options: ['However', 'Although', 'Despite', 'In spite of'],
            correctAnswer: 'Although',
            explanation: "Although + subject + verb. \n(بالرغم من - يتبعها فاعل وفعل)."
          },
          {
            id: 'g12-m2-g4',
            text: "Both Ali and his brother ...................... good at swimming.",
            type: QuestionType.MCQ,
            options: ['is', 'are', 'was', 'has'],
            correctAnswer: 'are',
            explanation: "Both ... and takes a plural verb. \n(Both تعامل معاملة الجمع)."
          }
        ]
      },
      {
        id: 'g12-m2-grammar-do',
        title: 'II. Grammar (Do as shown)',
        instructions: 'Choose the correct answer based on the instruction in brackets:',
        questions: [
          {
            id: 'g12-m2-g5',
            text: "Never (I have) seen such a mess. (Correct the word order)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['have I', 'I had', 'had I'],
            correctAnswer: 'have I',
            explanation: "Inversion after negative adverb 'Never'. \n(التقديم والتأخير بعد الظروف المنفية)."
          },
          {
            id: 'g12-m2-g6',
            text: "The report (finish) by the manager yesterday. (Correct/Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['was finished', 'finished', 'is finished'],
            correctAnswer: 'was finished',
            explanation: "Past simple passive. \n(المبني للمجهول في الماضي البسيط)."
          },
          {
            id: 'g12-m2-g7',
            text: "I wish I (study) harder for the last exam. (Correct the verb)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['had studied', 'studied', 'study'],
            correctAnswer: 'had studied',
            explanation: "Regret about the past uses Past Perfect. \n(الندم على الماضي باستخدام الماضي التام)."
          },
          {
            id: 'g12-m2-g8',
            text: "He is very strong. He can lift the heavy box. (Join: so...that)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'He is so strong that he can lift the heavy box.',
              'He is strong so that he can lift the heavy box.',
              'So strong is he that he can lift the heavy box.'
            ],
            correctAnswer: 'He is so strong that he can lift the heavy box.',
            explanation: "Structure: so + adjective + that + clause. \n(قاعدة so...that)."
          }
        ]
      },
      {
        id: 'g12-m2-functions',
        title: 'III. Language Functions',
        instructions: 'Write what you would say:',
        questions: [
          {
            id: 'g12-m2-lf1',
            text: "Your friend believes that recycling is a waste of time.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I disagree. Recycling helps save the environment.",
            explanation: "Disagreement. \n(الاعتراض)."
          },
          {
            id: 'g12-m2-lf2',
            text: "You want to persuade your father to buy a new car.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Dad, the old car is unsafe. A new one would be better.",
            explanation: "Persuasion. \n(الإقناع)."
          },
          {
            id: 'g12-m2-lf3',
            text: "You see smoke coming out of a house.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Call the fire department immediately!",
            explanation: "Alarm/Emergency. \n(الطوارئ)."
          },
          {
            id: 'g12-m2-lf4',
            text: "Your friend suggests going to a restaurant, but you are tired.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I'd rather not. I'm really exhausted.",
            explanation: "Refusal. \n(الرفض)."
          }
        ]
      },
      {
        id: 'g12-m2-setbook',
        title: 'IV. Set Book Questions',
        instructions: 'Answer the questions:',
        questions: [
          {
            id: 'g12-m2-sb1',
            text: "What are the benefits of migration?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Better job opportunities, improved lifestyle, and cultural exchange.",
            explanation: "Unit: Migration. \n(فرص عمل وأسلوب حياة أفضل)."
          },
          {
            id: 'g12-m2-sb2',
            text: "How can we reduce water consumption?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By fixing leaks, using modern irrigation, and turning off taps.",
            explanation: "Unit: The Earth. \n(إصلاح التسريبات والري الحديث)."
          },
          {
            id: 'g12-m2-sb3',
            text: "Why should we treat minorities with respect?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To ensure equality, justice, and a peaceful society.",
            explanation: "Unit: Human Values. \n(لضمان المساواة والعدالة والسلام)."
          },
          {
            id: 'g12-m2-sb4',
            text: "Why are trees important for the planet?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They provide oxygen, absorb carbon dioxide, and prevent soil erosion.",
            explanation: "Unit: Environment. \n(الأكسجين ومنع انجراف التربة)."
          },
          {
            id: 'g12-m2-sb5',
            text: "How does litigation affect society?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It solves disputes legally but can be expensive and time-consuming.",
            explanation: "Unit: Law. \n(حل النزاعات قانونياً)."
          }
        ]
      },
      {
        id: 'g12-m2-writing',
        title: 'V. Writing',
        instructions: 'Write on the following topic:',
        contextPassage: "Laws are essential for a peaceful society.",
        questions: [
          {
            id: 'g12-m2-wr1',
            text: "Write an essay (14 sentences) explaining the importance of laws and what would happen without them.",
            type: QuestionType.WRITING,
            correctAnswer: "Outline: Intro (Definition of law), Body 1 (Importance: Order, Rights), Body 2 (Without laws: Chaos, Crime), Conclusion.",
            explanation: "Expository Essay."
          }
        ]
      },
      {
        id: 'g12-m2-reading-new',
        title: 'VI. Reading Comprehension',
        instructions: 'Read the following passage then answer the questions below:',
        contextPassage: "Modern Forensics: Solving Crimes with Science\n\nFor centuries, solving crimes was largely a matter of eyewitness accounts and confessions. However, the field of forensics has revolutionized law enforcement, using science to uncover the truth. The word 'forensic' comes from the Latin 'forensis', meaning 'of or before the forum', reflecting its historical roots in public debate. Today, it refers to the critical application of scientific methods to investigate crimes, providing objective evidence that can stand up in a court of law.\n\nThe biggest breakthrough in modern forensics is undoubtedly DNA profiling. Every human being has a unique genetic code, except for identical twins. By analyzing biological material found at a crime scene—such as hair, skin cells, or blood—investigators can identify a suspect with near-certainty. This technology has not only helped convict violent criminals but has also exonerated innocent people who were wrongly imprisoned before DNA testing was available, correcting past injustices.\n\nIn addition to biology, digital forensics has become increasingly important in our technology-driven world. Criminals often leave behind a 'digital footprint' on computers, smartphones, and the internet. Forensic experts can recover deleted files, trace emails, and track locations through GPS data. This digital evidence is often crucial in cases involving fraud, cyberbullying, and organized crime, providing clues that would be impossible to find in the physical world.\n\nAnother fascinating area is forensic anthropology, which helps identify human remains when they are decomposed or damaged. By studying bones, these experts can determine the age, gender, and stature of a victim, and sometimes even the cause of death. This field is particularly vital in solving 'cold cases'—crimes that happened decades ago—providing closure to families who have waited years for answers.\n\nDespite these advancements, forensics faces challenges. It requires highly trained professionals and expensive equipment. Furthermore, the interpretation of evidence must be handled with extreme care to avoid errors. There are also privacy concerns regarding the collection and storage of DNA and digital data. Balancing the need for security with the right to privacy is an ongoing debate in the legal world. Nevertheless, science remains the most powerful tool in the pursuit of justice.",
        questions: [
          {
            id: 'g12-m2-rc-1',
            text: "The best title for this passage is:",
            type: QuestionType.MCQ,
            options: ['The History of Latin', 'Modern Forensics: Science and Justice', 'How to Commit a Crime', 'Digital Privacy Laws'],
            correctAnswer: 'Modern Forensics: Science and Justice',
            explanation: "The title captures the essence of the text: using science (forensics) to solve crimes and ensure justice."
          },
          {
            id: 'g12-m2-rc-2',
            text: "The main idea of the 2nd paragraph is:",
            type: QuestionType.MCQ,
            options: ['The meaning of the word forensic', 'The impact of DNA profiling', 'How to recover deleted files', 'The cost of forensic equipment'],
            correctAnswer: 'The impact of DNA profiling',
            explanation: "Paragraph 2 focuses entirely on DNA profiling and its ability to identify suspects or exonerate the innocent."
          },
          {
            id: 'g12-m2-rc-3',
            text: "The underlined word 'exonerated' in the 2nd paragraph is closest in meaning to:",
            type: QuestionType.MCQ,
            options: ['cleared of blame', 'punished severely', 'arrested immediately', 'interviewed'],
            correctAnswer: 'cleared of blame',
            explanation: "To exonerate means to prove someone is innocent (clear them of blame)."
          },
          {
            id: 'g12-m2-rc-4',
            text: "The underlined word 'This' in the 2nd paragraph refers to:",
            type: QuestionType.MCQ,
            options: ['biological material', 'human being', 'DNA profiling technology', 'crime scene'],
            correctAnswer: 'DNA profiling technology',
            explanation: "'This technology' refers back to the subject of the paragraph: DNA profiling."
          },
          {
            id: 'g12-m2-rc-5',
            text: "According to the passage, what does 'forensic' come from?",
            type: QuestionType.MCQ,
            options: ['Greek word for science', 'Latin word forensis', 'French word for forum', 'English word for before'],
            correctAnswer: 'Latin word forensis',
            explanation: "Found in paragraph 1."
          },
          {
            id: 'g12-m2-rc-6',
            text: "How has DNA profiling helped innocent people?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It has exonerated innocent people who were wrongly imprisoned before DNA testing was available.",
            explanation: "Found in paragraph 2."
          },
          {
            id: 'g12-m2-rc-7',
            text: "What is a 'digital footprint'?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Traces left behind by criminals on computers, smartphones, and the internet.",
            explanation: "Found in paragraph 3."
          },
          {
            id: 'g12-m2-rc-8',
            text: "What is the role of forensic anthropology?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It helps identify human remains by studying bones to determine age, gender, and cause of death.",
            explanation: "Found in paragraph 4."
          },
          {
            id: 'g12-m2-rc-9',
            text: "Mention two challenges facing modern forensics.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It requires highly trained professionals/expensive equipment, and there are privacy concerns.",
            explanation: "Found in paragraph 5."
          },
          {
            id: 'g12-m2-rc-10',
            text: "What determines solving crimes in the past before forensics?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It was largely a matter of eyewitness accounts and confessions.",
            explanation: "Found in paragraph 1."
          }
        ]
      },
      {
        id: 'g12-m2-summary',
        title: 'VII. Summary Making',
        instructions: 'Read the 2nd paragraph of the reading passage above again. In FOUR sentences, summarize and paraphrase the importance of DNA profiling.',
        questions: [
          {
            id: 'g12-m2-sum',
            text: "Summarize the importance of DNA profiling.",
            type: QuestionType.WRITING,
            correctAnswer: "1. DNA profiling is a major breakthrough in fighting crime. 2. Everyone has a unique genetic code that can be identified from biological material. 3. Investigators use samples like hair or blood to find suspects. 4. This technology helps catch criminals and free innocent people.",
            explanation: "Summary of paragraph 2."
          }
        ]
      },
      {
        id: 'g12-m2-translation',
        title: 'VIII. Translation',
        instructions: 'Translate into English:',
        questions: [
          {
            id: 'g12-m2-tr1',
            text: "علي: يجب أن نحافظ على الموارد الطبيعية لأجيال المستقبل.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Ali: We must preserve natural resources for future generations.",
            explanation: "Translation."
          },
          {
            id: 'g12-m2-tr2',
            text: "حمد: صحيح، فالمياه والطاقة ضروريان للحياة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Hamad: That's true, and they also preserve heritage.",
            explanation: "Translation."
          }
        ]
      }
    ]
  },
  {
    id: 'g12-comprehensive',
    title: 'Grade 12 Comprehensive Question Bank',
    grade: GradeLevel.G12,
    term: '1st Semester',
    year: 'Full Reference Revision',
    sections: [
      {
        id: 'g12-comp-vocab',
        title: 'Vocabulary Bank',
        instructions: 'Mixed Vocabulary Questions covering all Semester 1 Units',
        questions: [
          {
            id: 'g12-cp-v1',
            text: "He filed a ...................... against his employer for unfair dismissal.",
            type: QuestionType.MCQ,
            options: ['grievance', 'adoption', 'biography', 'diversity'],
            correctAnswer: 'grievance',
            explanation: "Grievance is a formal complaint about something believed to be wrong or unfair. \n(تظلم)."
          },
          {
            id: 'g12-cp-v2',
            text: "We need to ...................... water consumption.",
            type: QuestionType.MCQ,
            options: ['curtail', 'precipitate', 'misbehave', 'necessitate'],
            correctAnswer: 'curtail',
            explanation: "Curtail means to reduce in extent or quantity; impose a restriction on. \n(يقلل)."
          },
          {
            id: 'g12-cp-v3',
            text: "We should treat people with ...................... regardless of their nationality.",
            type: QuestionType.MCQ,
            options: ['compassion', 'litigation', 'adoption', 'value'],
            correctAnswer: 'compassion',
            explanation: "Compassion means pity and concern for the sufferings or misfortunes of others. \n(الرحمة والتعاطف)."
          },
          {
            id: 'g12-cp-v4',
            text: "Many people ...................... from their home countries to find better jobs.",
            type: QuestionType.MCQ,
            options: ['migrate', 'define', 'reside', 'avert'],
            correctAnswer: 'migrate',
            explanation: "Migrate means to move from one region or habitat to another. \n(يهاجر)."
          },
          {
            id: 'g12-cp-v5',
            text: "The judge ruled that the contract was ...................... and binding.",
            type: QuestionType.MCQ,
            options: ['civil', 'petty', 'incapable', 'foreign'],
            correctAnswer: 'civil',
            explanation: "Civil law relates to private relations between members of a community. \n(مدني)."
          },
          {
            id: 'g12-cp-v6',
            text: "...................... is a major environmental problem in arid regions.",
            type: QuestionType.MCQ,
            options: ['Desertification', 'Proportion', 'Competence', 'Administration'],
            correctAnswer: 'Desertification',
            explanation: "Desertification is the process by which fertile land becomes desert. \n(التصحر)."
          },
          {
            id: 'g12-cp-v7',
            text: "The government aims to ...................... its income sources.",
            type: QuestionType.MCQ,
            options: ['diversify', 'graduate', 'pose', 'hibernate'],
            correctAnswer: 'diversify',
            explanation: "Diversify means to enlarge or vary the range of products/sources. \n(ينوع)."
          },
          {
            id: 'g12-cp-v8',
            text: "They reached a ...................... after hours of negotiation.",
            type: QuestionType.MCQ,
            options: ['consensus', 'disturbance', 'migration', 'production'],
            correctAnswer: 'consensus',
            explanation: "Consensus means general agreement. \n(إجماع)."
          },
          {
            id: 'g12-cp-v9',
            text: "The ...................... of the new law will be discussed in parliament.",
            type: QuestionType.MCQ,
            options: ['legislation', 'empathy', 'minority', 'season'],
            correctAnswer: 'legislation',
            explanation: "Legislation refers to laws, considered collectively. \n(التشريعات)."
          },
          {
            id: 'g12-cp-v10',
            text: "We must protect our ...................... resources from depletion.",
            type: QuestionType.MCQ,
            options: ['scarce', 'humid', 'reverse', 'pale'],
            correctAnswer: 'scarce',
            explanation: "Scarce means insufficient for the demand. \n(نادر)."
          },
          {
            id: 'g12-cp-v11',
            text: "It is a ...................... issue that affects everyone.",
            type: QuestionType.MCQ,
            options: ['vital', 'drowsy', 'fast', 'sleepy'],
            correctAnswer: 'vital',
            explanation: "Vital means absolutely necessary or important. \n(حيوي)."
          },
          {
            id: 'g12-cp-v12',
            text: "The bank is responsible for the ...................... of funds.",
            type: QuestionType.MCQ,
            options: ['administration', 'litigation', 'supposition', 'adoption'],
            correctAnswer: 'administration',
            explanation: "Administration refers to the management of public affairs or business. \n(إدارة)."
          },
          {
            id: 'g12-cp-v13',
            text: "The company's profits have shown a significant ...................... this year.",
            type: QuestionType.MCQ,
            options: ['upsurge', 'refuge', 'defence', 'penalty'],
            correctAnswer: 'upsurge',
            explanation: "Upsurge means a sudden increase. \n(زيادة مفاجئة)."
          },
          {
            id: 'g12-cp-v14',
            text: "We should not discriminate against people based on their ......................",
            type: QuestionType.MCQ,
            options: ['ethnicity', 'compost', 'climate', 'soil'],
            correctAnswer: 'ethnicity',
            explanation: "Ethnicity refers to belonging to a social group with a common tradition. \n(العرق)."
          },
          {
            id: 'g12-cp-v15',
            text: "The panda is an example of a/an ...................... species.",
            type: QuestionType.MCQ,
            options: ['endangered', 'productive', 'incapable', 'petty'],
            correctAnswer: 'endangered',
            explanation: "Endangered means seriously at risk of extinction. \n(مهدد بالانقراض)."
          },
          {
            id: 'g12-cp-v16',
            text: "He showed no ...................... for his crimes.",
            type: QuestionType.MCQ,
            options: ['remorse', 'property', 'competence', 'trend'],
            correctAnswer: 'remorse',
            explanation: "Remorse means deep regret or guilt. \n(الندم)."
          },
          {
            id: 'g12-cp-v17',
            text: "The government plans to ...................... tougher laws against speeding.",
            type: QuestionType.MCQ,
            options: ['enact', 'hibernate', 'graze', 'erode'],
            correctAnswer: 'enact',
            explanation: "Enact means to put into practice (a law). \n(يسن قانون)."
          },
          {
            id: 'g12-cp-v18',
            text: "Regular exercise is ...................... to good health.",
            type: QuestionType.MCQ,
            options: ['intrinsic', 'unproductive', 'foreign', 'guilty'],
            correctAnswer: 'intrinsic',
            explanation: "Intrinsic means belonging naturally; essential. \n(جوهري)."
          },
          {
            id: 'g12-cp-v19',
            text: "We need to ...................... awareness about global warming.",
            type: QuestionType.MCQ,
            options: ['raise', 'cultivate', 'present', 'contend'],
            correctAnswer: 'raise',
            explanation: "To raise awareness. \n(نشر الوعي)."
          },
          {
            id: 'g12-cp-v20',
            text: "The lawyer prepared a detailed ...................... for the case.",
            type: QuestionType.MCQ,
            options: ['brief', 'climate', 'boom', 'decade'],
            correctAnswer: 'brief',
            explanation: "A brief is a written document explaining a legal case. \n(مذكرة قانونية)."
          },
          {
            id: 'g12-cp-v21',
            text: "The company plans to ...................... the manager for fraud.",
            type: QuestionType.MCQ,
            options: ['sue', 'impose', 'govern', 'avert'],
            correctAnswer: 'sue',
            explanation: "To sue means to institute legal proceedings against a person. \n(يقاضي)."
          },
          {
            id: 'g12-cp-v22',
            text: "The ...................... of the state is to protect its citizens.",
            type: QuestionType.MCQ,
            options: ['welfare', 'hardship', 'tolerance', 'migration'],
            correctAnswer: 'welfare',
            explanation: "Welfare refers to the health, happiness, and fortunes of a person or group. \n(رفاهية/مصلحة)."
          },
          {
            id: 'g12-cp-v23',
            text: "He made a false ...................... against his neighbor.",
            type: QuestionType.MCQ,
            options: ['accusation', 'consultation', 'property', 'expansion'],
            correctAnswer: 'accusation',
            explanation: "Accusation is a charge or claim that someone has done something illegal. \n(اتهام)."
          }
        ]
      },
      {
        id: 'g12-comp-grammar',
        title: 'Grammar Bank',
        instructions: 'Comprehensive Grammar Revision (All Rules)',
        questions: [
          {
            id: 'g12-cp-g1',
            text: "I regret not studying harder. (Use: wish)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'I wish I study harder.',
              'I wish I had studied harder.',
              'I wish I studied harder.'
            ],
            correctAnswer: 'I wish I had studied harder.',
            explanation: "Regret about past -> Past Perfect. \n(الندم على الماضي بالماضي التام)."
          },
          {
            id: 'g12-cp-g2',
            text: "He is tired. He is sick. (Join with: Both)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'He is both tired and sick.',
              'Both he is tired and sick.',
              'He both is tired and sick.'
            ],
            correctAnswer: 'He is both tired and sick.',
            explanation: "Both ... and joins adjectives. \n(Both لربط الصفتين)."
          },
          {
            id: 'g12-cp-g3',
            text: "He has been working here for ten years. (Ask a question)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'How long has he been working here?',
              'How long is he working here?',
              'When he worked here?'
            ],
            correctAnswer: 'How long has he been working here?',
            explanation: "Present Perfect Continuous question asks about duration. \n(السؤال عن المدة)."
          },
          {
            id: 'g12-cp-g4',
            text: "She is (tall) than her sister. (Correct the adjective)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['tall', 'taller', 'tallest'],
            correctAnswer: 'taller',
            explanation: "Comparative form (adjective + er + than). \n(المقارنة)."
          },
          {
            id: 'g12-cp-g5',
            text: "Instead of buying a new car, he fixed the old one. (Use: but)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'He didn\'t buy a new car, but he fixed the old one.',
              'He bought a new car but he fixed the old one.',
              'He fixed the old one but he bought a new car.'
            ],
            correctAnswer: 'He didn\'t buy a new car, but he fixed the old one.',
            explanation: "Instead of implies not doing one thing but doing another. \n(بدلاً من)."
          },
          {
            id: 'g12-cp-g6',
            text: "I have never seen such a beautiful view. (Begin with: Never)",
            type: QuestionType.DO_AS_SHOWN,
            options: [
              'Never have I seen such a beautiful view.',
              'Never I have seen such a beautiful view.',
              'Never saw I such a beautiful view.'
            ],
            correctAnswer: 'Never have I seen such a beautiful view.',
            explanation: "Inversion with negative adverbials (Never + auxiliary + subject). \n(التقديم والتأخير)."
          },
          {
            id: 'g12-cp-g7',
            text: "The report (finish) by the manager yesterday. (Correct verb / Passive)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['was finished', 'finished', 'is finished'],
            correctAnswer: 'was finished',
            explanation: "Past Simple Passive: was/were + V3. \n(المبني للمجهول في الماضي البسيط)."
          },
          {
            id: 'g12-cp-g8',
            text: "If it hadn't rained, we (go) to the park. (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['would go', 'will go', 'would have gone'],
            correctAnswer: 'would have gone',
            explanation: "Third Conditional: If + Past Perfect -> Would have + V3. \n(الحالة الشرطية الثالثة)."
          },
          {
            id: 'g12-cp-g9',
            text: "This is the man .................... helped me.",
            type: QuestionType.MCQ,
            options: ['who', 'which', 'whose', 'whom'],
            correctAnswer: 'who',
            explanation: "Who is used for people (subject). \n(للعاقل)."
          },
          {
            id: 'g12-cp-g10',
            text: "By the time we arrived, the show ....................",
            type: QuestionType.MCQ,
            options: ['started', 'has started', 'had started', 'starts'],
            correctAnswer: 'had started',
            explanation: "Past Perfect (had started) happens before Past Simple (arrived). \n(الماضي التام للحدث الأول)."
          },
          {
            id: 'g12-cp-g11',
            text: "I will call you as soon as I .................... home.",
            type: QuestionType.MCQ,
            options: ['arrive', 'arrived', 'will arrive', 'arriving'],
            correctAnswer: 'arrive',
            explanation: "Time clause: As soon as + Present Simple -> Future. \n(بعد as soon as نستخدم المضارع)."
          },
          {
            id: 'g12-cp-g12',
            text: "He is the student .................... marks are the highest.",
            type: QuestionType.MCQ,
            options: ['whose', 'who', 'which', 'whom'],
            correctAnswer: 'whose',
            explanation: "Whose shows possession. \n(للملكية)."
          },
          {
            id: 'g12-cp-g13',
            text: "The box is .................... heavy to lift.",
            type: QuestionType.MCQ,
            options: ['too', 'so', 'enough', 'very'],
            correctAnswer: 'too',
            explanation: "Structure: too + adj + to + infinitive. \n(قاعدة too...to)."
          },
          {
            id: 'g12-cp-g14',
            text: "I prefer drinking tea .................... drinking coffee.",
            type: QuestionType.MCQ,
            options: ['to', 'than', 'from', 'on'],
            correctAnswer: 'to',
            explanation: "Prefer (doing something) to (doing something else). \n(يفضل ... على ...)."
          },
          {
            id: 'g12-cp-g15',
            text: "Unless you study, you .................... fail.",
            type: QuestionType.MCQ,
            options: ['will', 'would', 'could', 'might'],
            correctAnswer: 'will',
            explanation: "Unless = If not (First Conditional). \n(Unless بمعنى إذا لم)."
          },
          {
            id: 'g12-cp-g16',
            text: "Scarcely had he entered the room .................... the phone rang.",
            type: QuestionType.MCQ,
            options: ['when', 'than', 'then', 'after'],
            correctAnswer: 'when',
            explanation: "Scarcely ... when ... \n(قاعدة Scarcely...when)."
          },
          {
            id: 'g12-cp-g17',
            text: "The car needs ....................",
            type: QuestionType.MCQ,
            options: ['fixing', 'fix', 'fixed', 'to fix'],
            correctAnswer: 'fixing',
            explanation: "Need + -ing (Gerund) implies passive meaning. \n(يحتاج إلى إصلاح)."
          },
          {
            id: 'g12-cp-g18',
            text: "Had I known about the party, I (come). (Correct)",
            type: QuestionType.DO_AS_SHOWN,
            options: ['would come', 'would have come', 'will come'],
            correctAnswer: 'would have come',
            explanation: "Inverted Third Conditional (Had I known = If I had known). \n(الحالة الشرطية الثالثة بصيغة التقديم)."
          },
          {
            id: 'g12-cp-g19',
            text: "No sooner had we eaten .................... we felt sick.",
            type: QuestionType.MCQ,
            options: ['than', 'when', 'then', 'that'],
            correctAnswer: 'than',
            explanation: "No sooner ... than ... \n(قاعدة No sooner...than)."
          },
          {
            id: 'g12-cp-g20',
            text: "I wish I .................... speak French.",
            type: QuestionType.MCQ,
            options: ['could', 'can', 'will', 'shall'],
            correctAnswer: 'could',
            explanation: "Wish + could refers to ability/desire in the present. \n(للتمني في الحاضر)."
          }
        ]
      },
      {
        id: 'g12-comp-functions',
        title: 'Language Functions Bank',
        instructions: 'What would you say in the following situations?',
        questions: [
          {
            id: 'g12-cp-lf1',
            text: "Your friend blames you for losing his book.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I'm terribly sorry, I will buy you a new one.",
            explanation: "Apology. \n(الاعتذار)."
          },
          {
            id: 'g12-cp-lf2',
            text: "You regret wasting your time on video games.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I wish I hadn't wasted my time on video games.",
            explanation: "Expressing regret. \n(الندم)."
          },
          {
            id: 'g12-cp-lf3',
            text: "Suggest a solution to the traffic problem.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I suggest building more metro lines and encouraging public transport.",
            explanation: "Suggesting solutions. \n(اقتراح حلول)."
          },
          {
            id: 'g12-cp-lf4',
            text: "You strongly agree with your friend's opinion.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I couldn't agree more. / You are absolutely right.",
            explanation: "Strong agreement. \n(الموافقة التامة)."
          },
          {
            id: 'g12-cp-lf5',
            text: "Someone asks you about your future plans.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I intend to study medicine abroad.",
            explanation: "Expressing intention/plans. \n(الخطط المستقبلية)."
          },
          {
            id: 'g12-cp-lf6',
            text: "Your friend failed the exam.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Don't give up. You should study harder next time.",
            explanation: "Encouragement. \n(التشجيع)."
          },
          {
            id: 'g12-cp-lf7',
            text: "You want to persuade your father to let you travel alone.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Please dad, I am responsible enough to take care of myself.",
            explanation: "Persuasion. \n(الإقناع)."
          },
          {
            id: 'g12-cp-lf8',
            text: "Your friend says that space exploration is a waste of money.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I see your point, but it helps us advance technology.",
            explanation: "Polite disagreement/Partial agreement. \n(الاختلاف بأدب)."
          },
          {
            id: 'g12-cp-lf9',
            text: "Someone asks for your opinion on the new law.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I think it is fair and will reduce crime.",
            explanation: "Giving opinion. \n(إبداء الرأي)."
          },
          {
            id: 'g12-cp-lf10',
            text: "You see someone wasting water while washing their car.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "You shouldn't waste water; it is a precious resource.",
            explanation: "Criticism/Advice. \n(النقد أو النصيحة)."
          },
          {
            id: 'g12-cp-lf11',
            text: "Your friend is nervous about an interview.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Relax and be confident. You will do great.",
            explanation: "Reassurance. \n(الطمأنة)."
          },
          {
            id: 'g12-cp-lf12',
            text: "You want to complain about the noise in the library.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Excuse me, could you please keep your voice down?",
            explanation: "Making a complaint. \n(الشكوى)."
          },
          {
            id: 'g12-cp-lf13',
            text: "Predict the weather for tomorrow.",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "I think it will be sunny and hot.",
            explanation: "Prediction. \n(التنبؤ)."
          }
        ]
      },
      {
        id: 'g12-comp-setbook',
        title: 'Set Book Bank',
        instructions: 'Mixed Set Book Questions covering all Units',
        questions: [
          {
            id: 'g12-cp-sb1',
            text: "Why is recycling important?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It reduces waste, saves energy, and protects natural resources.",
            explanation: "Unit: Recycling. \n(تقليل النفايات وحفظ الطاقة)."
          },
          {
            id: 'g12-cp-sb2',
            text: "How can we protect rare animals?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By building nature reserves, banning illegal hunting, and raising awareness.",
            explanation: "Unit: The Environment. \n(المحميات الطبيعية ومنع الصيد)."
          },
          {
            id: 'g12-cp-sb3',
            text: "What defines a tolerant society?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Acceptance of others, freedom of belief, and equality under the law.",
            explanation: "Unit: Human Values. \n(التسامح والمساواة)."
          },
          {
            id: 'g12-cp-sb4',
            text: "Why do people migrate?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To escape war, find better jobs, or seek a better quality of life.",
            explanation: "Unit: Migration. \n(للهروب من الحروب أو البحث عن عمل)."
          },
          {
            id: 'g12-cp-sb5',
            text: "How can we help the elderly in our society?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By visiting them, helping with daily chores, and showing them respect.",
            explanation: "Unit: Human Values. \n(زيارتهم ومساعدتهم واحترامهم)."
          },
          {
            id: 'g12-cp-sb6',
            text: "What are the qualities of a good judge?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "A judge must be fair, wise, impartial, and knowledgeable about the law.",
            explanation: "Unit: Law. \n(العدل والحكمة والحيادية)."
          },
          {
            id: 'g12-cp-sb7',
            text: "Why is voluntary work important?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It strengthens community bonds and helps those in need without expecting reward.",
            explanation: "Unit: Human Values. \n(تقوية الروابط ومساعدة المحتاجين)."
          },
          {
            id: 'g12-cp-sb8',
            text: "What should be considered when planning a new town?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Residential areas, commercial zones, green spaces, and traffic flow.",
            explanation: "Unit: Town Planning. \n(المناطق السكنية والتجارية والحدائق)."
          },
          {
            id: 'g12-cp-sb9',
            text: "What are the causes of desertification?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Overgrazing, deforestation, and lack of rain.",
            explanation: "Unit: The Earth. \n(الرعي الجائر وقطع الأشجار وقلة المطر)."
          },
          {
            id: 'g12-cp-sb10',
            text: "How can we solve the problem of water shortage?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By desalination of sea water and recycling wastewater.",
            explanation: "Unit: The Earth. \n(تحلية المياه وإعادة تدوير المياه)."
          },
          {
            id: 'g12-cp-sb11',
            text: "Why are pandas endangered?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Due to habitat loss and low birth rates.",
            explanation: "Unit: The Environment. \n(فقدان الموائل وانخفاض معدلات الولادة)."
          },
          {
            id: 'g12-cp-sb12',
            text: "What is the purpose of laws?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "To maintain order, protect rights, and ensure justice.",
            explanation: "Unit: Law. \n(حفظ النظام وحماية الحقوق)."
          },
          {
            id: 'g12-cp-sb13',
            text: "How does migration affect the host country?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It can boost the economy with cheap labor but may strain public services.",
            explanation: "Unit: Migration. \n(دعم الاقتصاد ولكن ضغط على الخدمات)."
          },
          {
            id: 'g12-cp-sb14',
            text: "Why is it important to preserve old buildings?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They are part of our heritage and attract tourists.",
            explanation: "Unit: Town Planning. \n(جزء من التراث وتجذب السياح)."
          },
          {
            id: 'g12-cp-sb15',
            text: "What can individuals do to help the environment?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "Reduce waste, reuse items, and recycle materials.",
            explanation: "Unit: Recycling. \n(تقليل النفايات وإعادة الاستخدام والتدوير)."
          },
          {
            id: 'g12-cp-sb16',
            text: "Why is water vital for life?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "It is essential for drinking, agriculture, and hygiene.",
            explanation: "Unit: The Earth. \n(ضروري للشرب والزراعة والنظافة)."
          },
          {
            id: 'g12-cp-sb17',
            text: "How does the law protect the innocent?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "By presuming innocence until proven guilty and providing a fair trial.",
            explanation: "Unit: Law. \n(البراءة حتى تثبت الإدانة والمحاكمة العادلة)."
          },
          {
            id: 'g12-cp-sb18',
            text: "What is the importance of green belts around cities?",
            type: QuestionType.OPEN_ENDED,
            correctAnswer: "They reduce pollution, provide recreation areas, and limit urban sprawl.",
            explanation: "Unit: Town Planning. \n(تقليل التلوث وتوفير أماكن للترفيه)."
          }
        ]
      },
      {
        id: 'g12-comp-translation',
        title: 'Translation Bank',
        instructions: 'Translate the following sentences into English:',
        questions: [
          {
            id: 'g12-cp-tr1',
            text: "عبدالله: تهتم الكويت بحماية حقوق الإنسان.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Abdullah: Kuwait is interested in protecting human rights.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr2',
            text: "جاسم: نعم، فالقانون يطبق على الجميع دون تمييز.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Jassim: Yes, the law applies to everyone without discrimination.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr3',
            text: "سارة: يجب أن نحمي البيئة من التلوث.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Sara: We must protect the environment from pollution.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr4',
            text: "فهد: الهجرة لها آثار إيجابية وسلبية.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Fahd: Migration has positive and negative effects.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr5',
            text: "عمر: هذا صحيح، فهي تزيد التبادل الثقافي.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Omar: That's true, as it increases cultural exchange.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr6',
            text: "منى: إعادة التدوير تساعد في تقليل النفايات.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Mona: Recycling helps in reducing waste.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr7',
            text: "نورة: لذلك يجب علينا فصل القمامة.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Noura: So, we must separate rubbish.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr8',
            text: "خالد: التصحر مشكلة خطيرة تواجه العالم.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Khaled: Desertification is a serious problem facing the world.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr9',
            text: "يوسف: يجب أن نزرع المزيد من الأشجار لمحاربته.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Yousef: We must plant more trees to fight it.",
            explanation: "Translation."
          },
          {
            id: 'g12-cp-tr10',
            text: "ليلى: القانون هو أساس العدل في المجتمع.",
            type: QuestionType.TRANSLATION,
            correctAnswer: "Laila: The law is the basis of justice in society.",
            explanation: "Translation."
          }
        ]
      }
    ]
  }
];
