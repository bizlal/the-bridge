import { SceneData } from '../types';

/**
 * ACT 3: UNIVERSITY CHAOS (Scenes 13-19)
 * University struggles, Aman friendship, CP104 failures, dean reversal
 * NOTE: Scenes 13-14 have been fixed (Aman as friend, not romance)
 */

export const act3Scenes: SceneData[] = [
  {
    id: 13,
    title: "AMAN - THE FRIEND",
    audioScripts: {
      urdu: "[grateful] Fall ٢٠١٦۔ ایک لڑکا تھا جس کا نام Aman تھا۔ [warm] وہ مجھے message کرتا کہ میں class کیوں miss کر رہا ہوں۔ [emotional] وہ مجھے جانے کی ترغیب دیتا۔ [soft] ایک دن ہم فلم دیکھنے چلے۔ میں نے اسے سب کچھ بتایا۔ [crying] پیسوں کے بارے میں۔ بھوک کے بارے میں۔ میں رو پڑا۔ [thankful] Aman نے مجھے McDonald's لے جا کر کھانا خریدا۔ [gentle] اس کی امی کی بنائی ہوئی pizza share کی۔ [amazed] اس نے میرا کام کیا اور مجھے credit دیا۔ [overwhelmed] Aman نے مجھے اپنی پیٹھ پر اٹھا لیا۔ مجھے زندہ رکھا۔ مجھے school میں رکھا۔ [reflective] جب میں خود میں کچھ نہیں دیکھ سکتا تھا، Aman نے کچھ دیکھا۔",

      english: "[grateful] Fall two thousand sixteen. There was a guy named Aman. [warm] He would message me asking why I was missing class. [emotional] He motivated me to go. [soft] One day we walked to the movies. I told him everything. [crying] About the money. About the hunger. I cried. [thankful] Aman took me to McDonald's and bought me meals. [gentle] He shared pizzas his mom made. [amazed] He did my work for me and gave me credit. [overwhelmed] Aman carried me on his back. Kept me alive. Kept me in school. [reflective] When I couldn't see anything in myself, Aman saw something.",

      punjabi: "[grateful] Fall ੨੦੧੬। ਇੱਕ ਮੁੰਡਾ ਸੀ ਜਿਸ ਦਾ ਨਾਮ Aman ਸੀ। [warm] ਉਹ ਮੈਨੂੰ message ਕਰਦਾ ਕਿ ਮੈਂ class ਕਿਉਂ miss ਕਰ ਰਿਹਾ ਹਾਂ। [emotional] ਉਸਨੇ ਮੈਨੂੰ ਜਾਣ ਦੀ ਤਰਗੀਬ ਦਿੱਤੀ। [soft] ਇੱਕ ਦਿਨ ਅਸੀਂ ਫ਼ਿਲਮ ਦੇਖਣ ਚਲੇ ਗਏ। ਮੈਂ ਉਸਨੂੰ ਸਭ ਕੁਝ ਦੱਸਿਆ। [crying] ਪੈਸਿਆਂ ਬਾਰੇ। ਭੁੱਖ ਬਾਰੇ। ਮੈਂ ਰੋ ਪਿਆ। [thankful] Aman ਨੇ ਮੈਨੂੰ McDonald's ਲੈ ਜਾ ਕੇ ਖਾਣਾ ਖਰੀਦਿਆ। [gentle] ਉਸਦੀ ਮਾਂ ਦੀ ਬਣਾਈ ਹੋਈ pizza share ਕੀਤੀ। [amazed] ਉਸਨੇ ਮੇਰਾ ਕੰਮ ਕੀਤਾ ਅਤੇ ਮੈਨੂੰ credit ਦਿੱਤਾ। [overwhelmed] Aman ਨੇ ਮੈਨੂੰ ਆਪਣੀ ਪਿੱਠ 'ਤੇ ਚੁੱਕਿਆ। ਮੈਨੂੰ ਜ਼ਿੰਦਾ ਰੱਖਿਆ। ਮੈਨੂੰ school ਵਿੱਚ ਰੱਖਿਆ। [reflective] ਜਦੋਂ ਮੈਂ ਆਪਣੇ ਅੰਦਰ ਕੁਝ ਨਹੀਂ ਦੇਖ ਸਕਦਾ ਸੀ, Aman ਨੇ ਕੁਝ ਦੇਖਿਆ।",

      danish: "[grateful] Efterår to tusind og seksten. Der var en fyr ved navn Aman. [warm] Han sendte mig beskeder og spurgte hvorfor jeg missede undervisning. [emotional] Han motiverede mig til at gå. [soft] En dag gik vi til biografen. Jeg fortalte ham alt. [crying] Om pengene. Om sulten. Jeg græd. [thankful] Aman tog mig med til McDonald's og købte mad til mig. [gentle] Han delte pizzaer hans mor havde lavet. [amazed] Han lavede mit arbejde og gav mig credit. [overwhelmed] Aman bar mig på sin ryg. Holdt mig i live. Holdt mig i skole. [reflective] Da jeg ikke kunne se noget i mig selv, så Aman noget."
    },
    textLines: [
      {
        urdu: "Aman - دوست جس نے بچایا",
        english: "Aman - the friend who saved me",
        punjabi: "Aman - ਦੋਸਤ ਜਿਸਨੇ ਬਚਾਇਆ",
        danish: "Aman - vennen der reddede mig"
      },
      {
        urdu: "McDonald's میں کھانا خریدا",
        english: "Bought me McDonald's meals",
        punjabi: "McDonald's ਵਿੱਚ ਖਾਣਾ ਖਰੀਦਿਆ",
        danish: "Købte McDonald's måltider",
        delay: 400
      },
      {
        urdu: "امی کی pizza share کی",
        english: "Shared his mom's pizzas",
        punjabi: "ਮਾਂ ਦੀ pizza share ਕੀਤੀ",
        danish: "Delte hans mors pizzaer",
        delay: 800
      },
      {
        urdu: "مجھے زندہ رکھا۔ School میں رکھا۔",
        english: "Kept me alive. Kept me in school.",
        punjabi: "ਮੈਨੂੰ ਜ਼ਿੰਦਾ ਰੱਖਿਆ। School ਵਿੱਚ ਰੱਖਿਆ।",
        danish: "Holdt mig i live. Holdt mig i skole.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-13-aman.jpg',
    textOverlay: 'AMAN - THE FRIEND',
    timePeriod: 'FALL 2016'
  },

  // Scene 14: FIGHTING TO STAY,

  {
    id: 14,
    title: "FIGHTING TO STAY",
    audioScripts: {
      urdu: "[determined] Aman کی مدد سے... میں نے لڑائی جاری رکھی۔ [struggling] میں classes میں جا رہا تھا۔ کبھی کبھی۔ [honest] Aman میرا کام کر رہا تھا اور مجھے credit دے رہا تھا۔ [emotional] وہ جانتا تھا میں struggle کر رہا ہوں۔ [grateful] لیکن وہ نہیں چھوڑا۔ [reflective] پتہ ہے یہ کیسا لگتا ہے جب کوئی آپ میں کچھ دیکھتا ہے؟ [soft] جب آپ خود نہیں دیکھ سکتے؟ [emotional] Aman نے دیکھا۔",

      english: "[determined] With Aman's help... I kept fighting. [struggling] I was going to classes. Sometimes. [honest] Aman was doing my work and giving me credit. [emotional] He knew I was struggling. [grateful] But he didn't give up. [reflective] Do you know what it's like when someone sees something in you? [soft] When you can't see it yourself? [emotional] Aman saw it.",

      punjabi: "[determined] Aman ਦੀ ਮਦਦ ਨਾਲ... ਮੈਂ ਲੜਾਈ ਜਾਰੀ ਰੱਖੀ। [struggling] ਮੈਂ classes ਵਿੱਚ ਜਾ ਰਿਹਾ ਸੀ। ਕਈ ਵਾਰ। [honest] Aman ਮੇਰਾ ਕੰਮ ਕਰ ਰਿਹਾ ਸੀ ਅਤੇ ਮੈਨੂੰ credit ਦੇ ਰਿਹਾ ਸੀ। [emotional] ਉਹ ਜਾਣਦਾ ਸੀ ਮੈਂ struggle ਕਰ ਰਿਹਾ ਹਾਂ। [grateful] ਪਰ ਉਸਨੇ ਹਾਰ ਨਹੀਂ ਮੰਨੀ। [reflective] ਪਤਾ ਹੈ ਇਹ ਕਿਹੋ ਜਿਹਾ ਲੱਗਦਾ ਹੈ ਜਦੋਂ ਕੋਈ ਤੁਹਾਡੇ ਅੰਦਰ ਕੁਝ ਦੇਖਦਾ ਹੈ? [soft] ਜਦੋਂ ਤੁਸੀਂ ਖੁਦ ਨਹੀਂ ਦੇਖ ਸਕਦੇ? [emotional] Aman ਨੇ ਦੇਖਿਆ।",

      danish: "[determined] Med Amans hjælp... blev jeg ved med at kæmpe. [struggling] Jeg gik til undervisning. Nogle gange. [honest] Aman lavede mit arbejde og gav mig credit. [emotional] Han vidste jeg kæmpede. [grateful] Men han opgav ikke. [reflective] Ved du hvordan det er når nogen ser noget i dig? [soft] Når du ikke selv kan se det? [emotional] Aman så det."
    },
    textLines: [
      {
        urdu: "Aman کی مدد سے لڑتے رہے",
        english: "Kept fighting with Aman's help",
        punjabi: "Aman ਦੀ ਮਦਦ ਨਾਲ ਲੜਦੇ ਰਹੇ",
        danish: "Blev ved med at kæmpe med Amans hjælp"
      },
      {
        urdu: "وہ میرا کام کرتا۔ مجھے credit دیتا۔",
        english: "He did my work. Gave me credit.",
        punjabi: "ਉਹ ਮੇਰਾ ਕੰਮ ਕਰਦਾ। ਮੈਨੂੰ credit ਦਿੰਦਾ।",
        danish: "Han lavede mit arbejde. Gav mig credit.",
        delay: 400
      },
      {
        urdu: "وہ نہیں چھوڑا۔",
        english: "He didn't give up.",
        punjabi: "ਉਸਨੇ ਹਾਰ ਨਹੀਂ ਮੰਨੀ।",
        danish: "Han opgav ikke.",
        delay: 800
      },
      {
        urdu: "اس نے مجھ میں کچھ دیکھا۔",
        english: "He saw something in me.",
        punjabi: "ਉਸਨੇ ਮੇਰੇ ਅੰਦਰ ਕੁਝ ਦੇਖਿਆ।",
        danish: "Han så noget i mig.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-14-mcdonalds-confession.jpg',
    textOverlay: 'AMAN\'S HELP',
    timePeriod: 'FALL-WINTER 2016'
  },

  // Scene 14.5: ZAID AND THE MDMA

  {
    id: 14.5,
    title: "ZAID AND THE MDMA",
    audioScripts: {
      urdu: "[hesitant] یہ university کے وہ chaotic دن تھے۔ [nervous] Zaid نے مجھے MDMA introduce کیا۔ پہلی بار۔ [honest] میں نے کیا... اور یہ fun تھا۔ [confused] لیکن مجھے احساس نہیں تھا... یہ میری medication کی طرح تھا۔ میری ADHD medication۔ [realization] شاید... شاید اسی لیے یہ Adderall addiction میں تبدیل ہو گیا۔ [defeated] میں نے connection نہیں دیکھا۔ میں سمجھا نہیں۔ [reflective] میں side projects پے کام کر رہا تھا۔ اپنے apps بنا رہا تھا۔ [hurt] اور میں نے اپنے roommates کو dailyrapfacts کے بارے میں بتایا۔ [bitter] Zaid اور Saajan ہنس پڑے۔ میرے خواب پے ہنسے۔ [defeated] ہر جگہ... میں overlooked تھا۔ کہیں بھی... کوئی مجھے seriously نہیں لیتا تھا۔",

      english: "[hesitant] These were the chaotic university days. [nervous] Zaid introduced me to MDMA. First time. [honest] I did it... and it was fun. [confused] But I didn't realize... it was similar to my medication. My ADHD medication. [realization] Maybe... maybe that's why it turned into an Adderall addiction. [defeated] I didn't see the connection. I didn't understand. [reflective] I was working on side projects. Building my apps. [hurt] And I told my roommates about dailyrapfacts. [bitter] Zaid and Saajan laughed. Laughed at my dreams. [defeated] Everywhere I went... I was overlooked. Anywhere... nobody took me seriously.",

      punjabi: "[hesitant] ਇਹ university ਦੇ ਉਹ chaotic ਦਿਨ ਸਨ। [nervous] Zaid ਨੇ ਮੈਨੂੰ MDMA introduce ਕੀਤੀ। ਪਹਿਲੀ ਵਾਰ। [honest] ਮੈਂ ਕੀਤਾ... ਅਤੇ ਇਹ fun ਸੀ। [confused] ਪਰ ਮੈਨੂੰ ਅਹਿਸਾਸ ਨਹੀਂ ਸੀ... ਇਹ ਮੇਰੀ medication ਵਰਗੀ ਸੀ। ਮੇਰੀ ADHD medication। [realization] ਸ਼ਾਇਦ... ਸ਼ਾਇਦ ਇਸੇ ਲਈ ਇਹ Adderall addiction 'ਚ ਬਦਲ ਗਈ। [defeated] ਮੈਂ connection ਨਹੀਂ ਦੇਖਿਆ। ਮੈਂ ਸਮਝਿਆ ਨਹੀਂ। [reflective] ਮੈਂ side projects 'ਤੇ ਕੰਮ ਕਰ ਰਿਹਾ ਸੀ। ਆਪਣੇ apps ਬਣਾ ਰਿਹਾ ਸੀ। [hurt] ਅਤੇ ਮੈਂ ਆਪਣੇ roommates ਨੂੰ dailyrapfacts ਬਾਰੇ ਦੱਸਿਆ। [bitter] Zaid ਅਤੇ Saajan ਹੱਸ ਪਏ। ਮੇਰੇ ਸੁਪਨਿਆਂ 'ਤੇ ਹੱਸੇ। [defeated] ਹਰ ਥਾਂ... ਮੈਨੂੰ overlook ਕੀਤਾ ਗਿਆ। ਕਿਤੇ ਵੀ... ਕੋਈ ਮੈਨੂੰ seriously ਨਹੀਂ ਲੈਂਦਾ ਸੀ।",

      danish: "[hesitant] Det var de kaotiske universitetsдage. [nervous] Zaid introducerede mig til MDMA. Første gang. [honest] Jeg gjorde det... og det var sjovt. [confused] Men jeg indså ikke... det lignede min medicin. Min ADHD-medicin. [realization] Måske... måske var det derfor det blev til en Adderall-afhængighed. [defeated] Jeg så ikke forbindelsen. Jeg forstod ikke. [reflective] Jeg arbejdede på sideprojekter. Byggede mine apps. [hurt] Og jeg fortalte mine roommates om dailyrapfacts. [bitter] Zaid og Saajan lo. Lo ad mine drømme. [defeated] Alle steder jeg gik... blev jeg overset. Hvor som helst... ingen tog mig seriøst."
    },
    textLines: [
      {
        urdu: "Zaid نے MDMA introduce کیا۔ پہلی بار۔",
        english: "Zaid introduced me to MDMA. First time.",
        punjabi: "Zaid ਨੇ MDMA introduce ਕੀਤੀ। ਪਹਿਲੀ ਵਾਰ।",
        danish: "Zaid introducerede mig til MDMA. Første gang."
      },
      {
        urdu: "احساس نہیں تھا - میری medication جیسی۔",
        english: "Didn't realize - similar to my medication.",
        punjabi: "ਅਹਿਸਾਸ ਨਹੀਂ ਸੀ - ਮੇਰੀ medication ਵਰਗੀ।",
        danish: "Indså ikke - lignede min medicin.",
        delay: 400
      },
      {
        urdu: "Dailyrapfacts بتایا۔ Zaid اور Saajan ہنسے۔",
        english: "Told them about dailyrapfacts. Zaid and Saajan laughed.",
        punjabi: "Dailyrapfacts ਦੱਸਿਆ। Zaid ਅਤੇ Saajan ਹੱਸੇ।",
        danish: "Fortalte om dailyrapfacts. Zaid og Saajan lo.",
        delay: 800
      },
      {
        urdu: "ہر جگہ overlooked۔ کبھی seriously نہیں لیا۔",
        english: "Everywhere overlooked. Never taken seriously.",
        punjabi: "ਹਰ ਥਾਂ overlook ਕੀਤਾ। ਕਦੇ seriously ਨਹੀਂ ਲਿਆ।",
        danish: "Alle steder overset. Aldrig taget seriøst.",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-14.5-zaid-MDMA.jpg',
    textOverlay: 'THE PATTERN REPEATS',
    timePeriod: 'UNIVERSITY YEARS 2015-2016'
  },

  // Scene 15: THE TOUGHEST YEAR
  {
    id: 15,
    title: "THE TOUGHEST YEAR",
    audioScripts: {
      urdu: "[heavy] Winter ٢٠١٧۔ Aman co-op پے تھا۔ میں اکیلا تھا۔ [desperate] میرے پاس پیسے نہیں تھے۔ میں بھوکا رہا... جب تک میرا دماغ کام کرنا بند نہ کر دیتا۔ [survival] میں نے زندہ رہنے کے لیے phones flip کیے۔ [focused] ایک فون کا $١٠٠ ملتا... وہی کھانے کا خرچہ ہوتا۔ Peanut butter کھا کے دن گزارتا۔ [proud] لیکن... اس سب کے دوران... gambling active نہیں تھی۔ [determined] میں غریب تھا... لیکن میں جوا نہیں کھیل رہا تھا۔",
      english: "[heavy] Winter two thousand seventeen. Aman was on co-op. I was alone. [desperate] I had no money. I would literally starve... until I couldn't think straight. [survival] I flipped iPhones to survive. [focused] Hundred dollars a flip... that paid for food. Peanut butter got me through the days. [proud] But... during this entire period... gambling was not active. [determined] I was poor... but I wasn't gambling.",
      punjabi: "[heavy] Winter ੨੦੧੭। Aman co-op 'ਤੇ ਸੀ। ਮੈਂ ਇਕੱਲਾ ਸੀ। [desperate] ਮੇਰੇ ਕੋਲ ਪੈਸੇ ਨਹੀਂ ਸਨ। ਮੈਂ ਭੁੱਖਾ ਰਿਹਾ... ਜਦੋਂ ਤੱਕ ਮੇਰਾ ਦਿਮਾਗ ਕੰਮ ਕਰਨਾ ਬੰਦ ਨਾ ਕਰ ਦਿੰਦਾ। [survival] ਮੈਂ ਜ਼ਿੰਦਾ ਰਹਿਣ ਲਈ phones flip ਕੀਤੇ। [focused] ਇੱਕ ਫੋਨ ਦਾ $੧੦٠ ਮਿਲਦਾ... ਉਹੀ ਖਾਣੇ ਦਾ ਖਰਚਾ ਹੁੰਦਾ। Peanut butter ਖਾ ਕੇ ਦਿਨ ਗੁਜ਼ਾਰਦਾ। [proud] ਪਰ... ਇਸ ਸਭ ਦੇ ਦੌਰਾਨ... gambling active ਨਹੀਂ ਸੀ। [determined] ਮੈਂ ਗਰੀਬ ਸੀ... ਪਰ ਮੈਂ ਜੂਆ ਨਹੀਂ ਖੇਡ ਰਿਹਾ ਸੀ।",
      danish: "[heavy] Vinter to tusind og sytten. Aman var i praktik. Jeg var alene. [desperate] Jeg havde ingen penge. Jeg sultede bogstaveligt talt... indtil jeg ikke kunne tænke klart. [survival] Jeg solgte iPhones for at overleve. [focused] Hundrede dollars per salg... det betalte for mad. Peanutbutter fik mig gennem dagene. [proud] Men... under hele denne periode... var gambling ikke aktivt. [determined] Jeg var fattig... men jeg spillede ikke."
    },
    textLines: [
      {
        urdu: "Winter ٢٠١٧: اکیلا اور بھوکا",
        english: "Winter 2017: Alone & Starving",
        punjabi: "Winter ੨੦੧੭: ਇਕੱਲਾ ਅਤੇ ਭੁੱਖਾ",
        danish: "Vinter 2017: Alene & Sulten"
      },
      {
        urdu: "Phones flip کیے زندہ رہنے کے لیے",
        english: "Flipped iPhones to survive",
        punjabi: "Phones flip ਕੀਤੇ ਜ਼ਿੰਦਾ ਰਹਿਣ ਲਈ",
        danish: "Solgte iPhones for at overleve",
        delay: 400
      },
      {
        urdu: "Peanut Butter survival",
        english: "Peanut Butter survival",
        punjabi: "Peanut Butter survival",
        danish: "Peanut Butter overlevelse",
        delay: 800
      },
      {
        urdu: "غریب تھا... لیکن جوا نہیں کھیل رہا تھا۔",
        english: "Poor... but NOT gambling.",
        punjabi: "ਗਰੀਬ ਸੀ... ਪਰ ਜੂਆ ਨਹੀਂ।",
        danish: "Fattig... men INGEN gambling.",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-15-starvation-year.jpg',
    textOverlay: 'SURVIVAL MODE',
    timePeriod: 'WINTER 2017'
  },

  // Scene 16: THE FINAL FAILURE
  {
    id: 16,
    title: "THE FINAL FAILURE",
    audioScripts: {
      urdu: "[desperate] Winter ٢٠١٧۔ میرا آخری chance تھا Intro to Programming پاس کرنے کا۔ [sacrifice] میں نے اپنا laptop بیچ دیا تاکہ exams کے لیے پڑھ سکوں۔ [devastated] لیکن... میں پھر بھی پاس نہیں کر سکا۔ [heavy] میں نے تیسری بار fail کیا۔ [final] میں university سے expel ہو گیا۔",
      english: "[desperate] Winter two thousand seventeen. My last chance to pass Intro to Programming. [sacrifice] I sold my laptop just to study for exams. [devastated] But... I still couldn't pass. [heavy] I failed for the third time. [final] I was expelled from university.",
      punjabi: "[desperate] Winter ੨੦੧੭। ਮੇਰਾ ਆਖਰੀ ਮੌਕਾ ਸੀ Intro to Programming ਪਾਸ ਕਰਨ ਦਾ। [sacrifice] ਮੈਂ ਆਪਣਾ laptop ਵੇਚ ਦਿੱਤਾ ਤਾਂ ਜੋ exams ਲਈ ਪੜ੍ਹ ਸਕਾਂ। [devastated] ਪਰ... ਮੈਂ ਫਿਰ ਵੀ ਪਾਸ ਨਹੀਂ ਕਰ ਸਕਿਆ। [heavy] ਮੈਂ ਤੀਵੀਂ ਵਾਰ fail ਕੀਤਾ। [final] ਮੈਂ university ਤੋਂ expel ਹੋ ਗਿਆ।",
      danish: "[desperate] Vinter to tusind og sytten. Min sidste chance for at bestå Intro to Programming. [sacrifice] Jeg solgte min laptop for at læse til eksamen. [devastated] Men... jeg kunne stadig ikke bestå. [heavy] Jeg dumpede for tredje gang. [final] Jeg blev bortvist fra universitetet."
    },
    textLines: [
      {
        urdu: "Laptop بیچا پڑھنے کے لیے",
        english: "Sold laptop to study",
        punjabi: "Laptop ਵੇਚਿਆ ਪੜ੍ਹਨ ਲਈ",
        danish: "Solgte laptop for at læse"
      },
      {
        urdu: "CP١٠٤: تیسری بار فیل",
        english: "CP104: Failed 3rd time",
        punjabi: "CP١٠੪: ਤੀਜੀ ਵਾਰ fail",
        danish: "CP104: Dumpet 3. gang",
        delay: 400
      },
      {
        urdu: "University سے نکالا گیا",
        english: "Expelled from university",
        punjabi: "University ਤੋਂ ਕੱਢ ਦਿੱਤਾ",
        danish: "Bortvist fra universitetet",
        delay: 800
      },
      {
        urdu: "ماحول: Independent = No Gambling",
        english: "Env: Independent = No Gambling",
        punjabi: "ਮਾਹੌਲ: Independent = No Gambling",
        danish: "Miljø: Uafhængig = Ingen spil",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-16-failed-three-times.jpg',
    textOverlay: 'EXPELLED',
    timePeriod: 'WINTER 2017'
  },

  // Scene 18: DEAN REVERSAL,

  {
    id: 18,
    title: "DEAN REVERSAL",
    audioScripts: {
      urdu: "[relieved] Dean نے میری بات سن لی۔ [hopeful] انہوں نے کہا میں ایک اور موقع لے سکتا ہوں۔ [grateful] میں expelled نہیں ہوا۔ [determined] میں نے دوبارہ کوشش کرنے کا فیصلہ کیا۔ Spring ٢٠١٧۔ [nervous] آخری موقع۔",

      english: "[relieved] The dean listened to me. [hopeful] They said I could take one more chance. [grateful] I wasn't expelled. [determined] I decided to try again. Spring two thousand seventeen. [nervous] Last chance.",

      punjabi: "[relieved] Dean ਨੇ ਮੇਰੀ ਗੱਲ ਸੁਣੀ। [hopeful] ਉਨ੍ਹਾਂ ਨੇ ਕਿਹਾ ਮੈਂ ਇੱਕ ਹੋਰ ਮੌਕਾ ਲੈ ਸਕਦਾ ਹਾਂ। [grateful] ਮੈਨੂੰ expel ਨਹੀਂ ਕੀਤਾ ਗਿਆ। [determined] ਮੈਂ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰਨ ਦਾ ਫ਼ੈਸਲਾ ਕੀਤਾ। Spring ੨੦੧੭। [nervous] ਆਖਰੀ ਮੌਕਾ।",

      danish: "[relieved] Dekanen lyttede til mig. [hopeful] De sagde jeg kunne få én chance til. [grateful] Jeg blev ikke bortvist. [determined] Jeg besluttede at prøve igen. Forår to tusind og sytten. [nervous] Sidste chance."
    },
    textLines: [
      {
        urdu: "Dean نے سنا۔ ایک اور موقع۔",
        english: "Dean listened. One more chance.",
        punjabi: "Dean ਨੇ ਸੁਣਿਆ। ਇੱਕ ਹੋਰ ਮੌਕਾ।",
        danish: "Dekanen lyttede. Én chance mere."
      },
      {
        urdu: "Expelled نہیں ہوا۔",
        english: "Not expelled.",
        punjabi: "Expel ਨਹੀਂ ਹੋਇਆ।",
        danish: "Ikke bortvist.",
        delay: 400
      },
      {
        urdu: "Spring ٢٠١٧: آخری موقع",
        english: "Spring 2017: Last chance",
        punjabi: "Spring ੨੦੧੭: ਆਖਰੀ ਮੌਕਾ",
        danish: "Forår 2017: Sidste chance",
        delay: 800
      },
      {
        urdu: "دوبارہ کوشش۔",
        english: "Try again.",
        punjabi: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼।",
        danish: "Prøv igen.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-18-dean-reversal.jpg',
    textOverlay: 'ONE MORE CHANCE',
    timePeriod: 'SPRING 2017'
  },

  // Scene 19: PASSED EVERYTHING,

  {
    id: 19,
    title: "PASSED EVERYTHING",
    audioScripts: {
      urdu: "[hopeful] Fall ٢٠١٦۔ میں نے بہت محنت کی۔ [determined] میں نے CP١٠٤ لیا۔ چوتھی بار۔ [proud] میں نے پاس کیا۔ [relieved] میں نے ہر چیز پاس کی۔ سارے کورسز۔ [emotional] میں نے سوچا شاید... شاید یہ شروعات ہے۔",

      english: "[hopeful] Fall two thousand sixteen. I worked so hard. [determined] I took CP one oh four. Fourth time. [proud] I passed. [relieved] I passed everything. All courses. [emotional] I thought maybe... maybe this was the beginning.",

      punjabi: "[hopeful] Fall ੨੦੧੬। ਮੈਂ ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ। [determined] ਮੈਂ CP੧੦੪ ਲਿਆ। ਚੌਥੀ ਵਾਰ। [proud] ਮੈਂ ਪਾਸ ਕੀਤਾ। [relieved] ਮੈਂ ਹਰ ਚੀਜ਼ ਪਾਸ ਕੀਤੀ। ਸਾਰੇ courses। [emotional] ਮੈਂ ਸੋਚਿਆ ਸ਼ਾਇਦ... ਸ਼ਾਇਦ ਇਹ ਸ਼ੁਰੂਆਤ ਸੀ।",

      danish: "[hopeful] Efterår to tusind og seksten. Jeg arbejdede så hårdt. [determined] Jeg tog CP et nul fire. Fjerde gang. [proud] Jeg bestod. [relieved] Jeg bestod alt. Alle fag. [emotional] Jeg troede måske... måske var dette begyndelsen."
    },
    textLines: [
      {
        urdu: "Fall ٢٠١٦: بہت محنت کی",
        english: "Fall 2016: Worked very hard",
        punjabi: "Fall ੨੦੧੬: ਬਹੁਤ ਮਿਹਨਤ ਕੀਤੀ",
        danish: "Efterår 2016: Arbejdede meget hårdt"
      },
      {
        urdu: "CP١٠٤ چوتھی بار: پاس",
        english: "CP104 fourth time: Passed",
        punjabi: "CP੧੦੪ ਚੌਥੀ ਵਾਰ: ਪਾਸ",
        danish: "CP104 fjerde gang: Bestået",
        delay: 400
      },
      {
        urdu: "سارے کورسز پاس۔",
        english: "All courses passed.",
        punjabi: "ਸਾਰੇ courses ਪਾਸ।",
        danish: "Alle fag bestået.",
        delay: 800
      },
      {
        urdu: "نئی شروعات۔",
        english: "New beginning.",
        punjabi: "ਨਵੀਂ ਸ਼ੁਰੂਆਤ।",
        danish: "Ny begyndelse.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-19-passed-everything.jpg',
    textOverlay: 'SUCCESS',
    timePeriod: 'FALL 2016'
  },

];
