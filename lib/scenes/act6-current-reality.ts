import { SceneData } from '../types';

/**
 * ACT 6: CURRENT REALITY (Scenes 35-39)
 * TODO: REWRITE with current truth:
 * - Arrow Transportation $120K, age 28, still at home, still gambling
 * - $14K bailout (father: "ruined your life" but was 2 weeks of income)
 * - Dr. Slataroff suspended August 2024 (lost doctor after 12 years)
 * - Hypertensive crisis (BP 225/122, brief mention)
 * - Criminal charge (wrote 20+ page brief, forgot to print)
 */

export const act6Scenes: SceneData[] = [
  {
    id: 35,
    title: "WHAT I LEARNED",
    audioScripts: {
      urdu: "[thoughtful] میں نے بہت کچھ سیکھا۔ [gentle] addiction ایک بیماری ہے۔ شرم نہیں۔ [determined] recovery ممکن ہے۔ لیکن یہ مشکل ہے۔ [hopeful] آپ کو مدد کی ضرورت ہے۔ آپ کو محبت کی ضرورت ہے۔ [grateful] اور کبھی کبھی... آپ کو دوسرا موقع ملتا ہے۔",

      english: "[thoughtful] I learned a lot. [gentle] Addiction is a disease. Not shame. [determined] Recovery is possible. But it's hard. [hopeful] You need help. You need love. [grateful] And sometimes... you get a second chance.",

      punjabi: "[thoughtful] ਮੈਂ ਬਹੁਤ ਕੁਝ ਸਿੱਖਿਆ। [gentle] Addiction ਇੱਕ ਬਿਮਾਰੀ ਹੈ। ਸ਼ਰਮ ਨਹੀਂ। [determined] Recovery ਸੰਭਵ ਹੈ। ਪਰ ਇਹ ਮੁਸ਼ਕਿਲ ਹੈ। [hopeful] ਤੁਹਾਨੂੰ ਮਦਦ ਦੀ ਲੋੜ ਹੈ। ਤੁਹਾਨੂੰ ਪਿਆਰ ਦੀ ਲੋੜ ਹੈ। [grateful] ਅਤੇ ਕਦੇ ਕਦੇ... ਤੁਹਾਨੂੰ ਦੂਜਾ ਮੌਕਾ ਮਿਲਦਾ ਹੈ।",

      danish: "[thoughtful] Jeg lærte meget. [gentle] Afhængighed er en sygdom. Ikke skam. [determined] Bedring er mulig. Men det er svært. [hopeful] Du har brug for hjælp. Du har brug for kærlighed. [grateful] Og nogle gange... får du en anden chance."
    },
    textLines: [
      {
        urdu: "Addiction بیماری ہے، شرم نہیں۔",
        english: "Addiction is disease, not shame.",
        punjabi: "Addiction ਬਿਮਾਰੀ ਹੈ, ਸ਼ਰਮ ਨਹੀਂ।",
        danish: "Afhængighed er sygdom, ikke skam."
      },
      {
        urdu: "Recovery ممکن ہے۔",
        english: "Recovery is possible.",
        punjabi: "Recovery ਸੰਭਵ ਹੈ।",
        danish: "Bedring er mulig.",
        delay: 400
      },
      {
        urdu: "مدد اور محبت ضروری ہیں۔",
        english: "Help and love are necessary.",
        punjabi: "ਮਦਦ ਅਤੇ ਪਿਆਰ ਜ਼ਰੂਰੀ ਹਨ।",
        danish: "Hjælp og kærlighed er nødvendig.",
        delay: 800
      },
      {
        urdu: "دوسرا موقع۔",
        english: "Second chance.",
        punjabi: "ਦੂਜਾ ਮੌਕਾ।",
        danish: "Anden chance.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-35-what-i-learned.jpg',
    textOverlay: 'LESSONS',
    timePeriod: 'PRESENT'
  },

  // Scene 35.5: THE REBOUND
  {
    id: 35.5,
    title: "THE REBOUND",
    audioScripts: {
      urdu: "[determined] میں نے ہار نہیں مانی۔ ٢٦ جنوری، ٢٠٢٣۔ [proud] مجھے Arrow Transportation میں job مل گئی۔ ١ لاکھ ٢٠ ہزار ڈالر سالانہ۔ [thoughtful] نومبر میں ڈگری نہ ہونے پر نکالا گیا۔ جنوری میں میری skills پر رکھا گیا۔ [strong] میں نے خود کو ثابت کیا۔ میں اس کے قابل ہوں۔ [sad] لیکن... میں اب بھی basement میں رہتا ہوں۔ مجھے اب بھی ناکامی کا احساس ہوتا ہے۔",
      english: "[determined] I didn't give up. January 26, 2023. [proud] I got hired at Arrow Transportation. One hundred and twenty thousand dollars a year. [thoughtful] Fired for no degree in November. Hired for my skills in January. [strong] I proved it to myself. I am worth it. [sad] But... I still live in the basement. I still feel like a failure.",
      punjabi: "[determined] ਮੈਂ ਹਾਰ ਨਹੀਂ ਮੰਨੀ। ٢٦ ਜਨਵਰੀ, ٢٠٢٣। [proud] ਮੈਨੂੰ Arrow Transportation 'ਚ job ਮਿਲ ਗਈ। ١ ਲੱਖ ٢٠ ਹਜ਼ਾਰ ਡਾਲਰ ਸਾਲਾਨਾ। [thoughtful] ਨਵੰਬਰ 'ਚ degree ਨਾ ਹੋਣ 'ਤੇ ਕੱਢਿਆ ਗਿਆ। ਜਨਵਰੀ 'ਚ ਮੇਰੇ skills 'ਤੇ ਰੱਖਿਆ ਗਿਆ। [strong] ਮੈਂ ਆਪਣੇ ਆਪ ਨੂੰ ਸਾਬਤ ਕੀਤਾ। ਮੈਂ ਇਸ ਦੇ ਕਾਬਲ ਹਾਂ। [sad] ਪਰ... ਮੈਂ ਹਾਲੇ ਵੀ basement 'ਚ ਰਹਿੰਦਾ ਹਾਂ। ਮੈਨੂੰ ਹਾਲੇ ਵੀ ਨਾਕਾਮੀ ਦਾ ਅਹਿਸਾਸ ਹੁੰਦਾ ਹੈ।",
      danish: "[determined] Jeg gav ikke op. 26. januar 2023. [proud] Jeg blev ansat hos Arrow Transportation. Hundrede og tyve tusinde dollars om året. [thoughtful] Fyret for ingen grad i november. Ansat for mine færdigheder i januar. [strong] Jeg beviste det for mig selv. Jeg er det værd. [sad] Men... jeg bor stadig i kælderen. Jeg føler mig stadig som en fiasko."
    },
    textLines: [
      {
        urdu: "Jan 26, 2023: Arrow Transportation",
        english: "Jan 26, 2023: Arrow Transportation",
        punjabi: "Jan 26, 2023: Arrow Transportation",
        danish: "26. jan. 2023: Arrow Transportation"
      },
      {
        urdu: "$120,000 سالانہ تنخواہ",
        english: "$120,000 / year Salary",
        punjabi: "$120,000 ਸਾਲਾਨਾ ਤਨਖਾਹ",
        danish: "$120,000 / år Løn",
        delay: 400
      },
      {
        urdu: "Nomber: Fired -> Jan: Hired",
        english: "Nov: Fired -> Jan: Hired",
        punjabi: "Nov: Fired -> Jan: Hired",
        danish: "Nov: Fyret -> Jan: Ansat",
        delay: 800
      },
      {
        urdu: "Skills > Degree",
        english: "Skills > Degree",
        punjabi: "Skills > Degree",
        danish: "Færdigheder > Grad",
        delay: 1200
      },
      {
        urdu: "پھر بھی ناکام محسوس کرتا ہوں۔",
        english: "Still feel like a failure.",
        punjabi: "ਫਿਰ ਵੀ ਨਾਕਾਮ ਮਹਿਸੂਸ ਕਰਦਾ ਹਾਂ।",
        danish: "Føler mig stadig som en fiasko.",
        delay: 1600
      }
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-35.5-arrow-rebound.jpg',
    textOverlay: 'THE REBOUND',
    timePeriod: 'JAN 2023'
  },

  // Scene 35.75: THE SAFETY NET
  {
    id: 35.75,
    title: "THE SAFETY NET",
    audioScripts: {
      urdu: "[thoughtful] ٢٠٢٣۔ Papa نے کہا school واپس جاؤ۔ [determined] میں نے سوچا... ٹھیک ہے۔ یہ ایک safety net ہو سکتا ہے۔ [hopeful] اگر کچھ غلط ہو جائے... کم از کم میرے پاس degree ہوگی۔ [struggling] لیکن میں Arrow میں کام کر رہا تھا۔ ہر دن۔ [defeated] اور میں school manage نہیں کر سکا۔ [sad] میں fail ہو گیا۔ [vulnerable] اب... safety net نہیں ہے۔ [scared] اگر Arrow ختم ہو جائے... تو کچھ نہیں۔",
      english: "[thoughtful] 2023. Papa said go back to school. [determined] I thought... okay. This could be a safety net. [hopeful] If something goes wrong... at least I'll have a degree. [struggling] But I was working at Arrow. Every day. [defeated] And I couldn't manage school. [sad] I failed. [vulnerable] Now... there's no safety net. [scared] If Arrow ends... there's nothing.",
      punjabi: "[thoughtful] ٢٠٢٣। Papa ਨੇ ਕਿਹਾ school ਵਾਪਸ ਜਾਓ। [determined] ਮੈਂ ਸੋਚਿਆ... ਠੀਕ ਹੈ। ਇਹ ਇੱਕ safety net ਹੋ ਸਕਦਾ ਹੈ। [hopeful] ਜੇ ਕੁਝ ਗਲਤ ਹੋ ਜਾਵੇ... ਘੱਟੋ ਘੱਟ ਮੇਰੇ ਕੋਲ degree ਹੋਵੇਗੀ। [struggling] ਪਰ ਮੈਂ Arrow 'ਚ ਕੰਮ ਕਰ ਰਿਹਾ ਸੀ। ਹਰ ਦਿਨ। [defeated] ਅਤੇ ਮੈਂ school manage ਨਹੀਂ ਕਰ ਸਕਿਆ। [sad] ਮੈਂ fail ਹੋ ਗਿਆ। [vulnerable] ਹੁਣ... safety net ਨਹੀਂ ਹੈ। [scared] ਜੇ Arrow ਖਤਮ ਹੋ ਜਾਵੇ... ਤਾਂ ਕੁਝ ਨਹੀਂ।",
      danish: "[thoughtful] 2023. Papa sagde gå tilbage til skole. [determined] Jeg tænkte... okay. Det kunne være et sikkerhedsnet. [hopeful] Hvis noget går galt... har jeg i det mindste en grad. [struggling] Men jeg arbejdede hos Arrow. Hver dag. [defeated] Og jeg kunne ikke klare skolen. [sad] Jeg dumpede. [vulnerable] Nu... er der intet sikkerhedsnet. [scared] Hvis Arrow slutter... er der intet."
    },
    textLines: [
      {
        urdu: "2023: Papa کا مشورہ - school واپس جاؤ",
        english: "2023: Papa's advice - go back to school",
        punjabi: "2023: Papa ਦੀ ਸਲਾਹ - school ਵਾਪਸ ਜਾਓ",
        danish: "2023: Papas råd - gå tilbage til skole"
      },
      {
        urdu: "میں نے سوچا: safety net",
        english: "I thought: safety net",
        punjabi: "ਮੈਂ ਸੋਚਿਆ: safety net",
        danish: "Jeg tænkte: sikkerhedsnet",
        delay: 400
      },
      {
        urdu: "Arrow + School = ناکامی",
        english: "Arrow + School = Failure",
        punjabi: "Arrow + School = ਨਾਕਾਮੀ",
        danish: "Arrow + School = Fiasko",
        delay: 800
      },
      {
        urdu: "backup plan ختم",
        english: "Backup plan gone",
        punjabi: "Backup plan ਖਤਮ",
        danish: "Backup plan væk",
        delay: 1200
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-35.75-safety-net.jpg',
    textOverlay: 'NO SAFETY NET',
    timePeriod: '2023'
  },

  // Scene 36: THE FAMILY DINNER
  {
    id: 36,
    title: "THE FAMILY DINNER",
    audioScripts: {
      urdu: "[quiet] ٢٠٢٤۔ خاندانی کھانا۔ [resentful] Papa نے سب کو بتایا کہ Fardeen اور Haris نے ایک ecommerce کمپنی شروع کی ہے۔ [amazed] انہوں نے اس کے بارے میں سب کچھ سیکھا تھا۔ وہ پرجوش تھے۔ [silence] میں وہاں بیٹھا... خاموشی سے کھا رہا تھا۔ [internal monologue] \"اگر آپ میرے خیالات کا ایک چوتھائی بھی explore کرتے... تو آج ہم امیر ہوتے۔\" [bitter] اس کے بجائے، انہوں نے ٹائر شاپ خریدی۔ میرے خیالات ان کے لیے خطرناک ہیں۔ ان کے خیالات genius ہیں۔ [isolated] میں banned builder ہوں۔ Invisible expert۔ میز پر بیٹھا... یقین کے لیے بھوکا۔",
      english: "[quiet] 2024. Family dinner. [resentful] Papa told everyone that Fardeen and Haris started an ecommerce company. [amazed] He learned everything about it. He was excited. [silence] I sat there... eating in silence. [internal monologue] \"If you explored even a quarter of my ideas... we would be rich today.\" [bitter] Instead, he bought a tire shop. My ideas are dangerous to him. Theirs are genius. [isolated] I am the banned builder. The invisible expert. Sitting at the table... starving for belief.",
      punjabi: "[quiet] ٢٠٢٤। ਪਰਿਵਾਰਕ ਰੋਟੀ। [resentful] Papa ਨੇ ਸਭ ਨੂੰ ਦੱਸਿਆ ਕਿ Fardeen ਅਤੇ Haris ਨੇ ਇੱਕ ecommerce ਕੰਪਨੀ ਸ਼ੁਰੂ ਕੀਤੀ ਹੈ। [amazed] ਉਨ੍ਹਾਂ ਨੇ ਇਸ ਬਾਰੇ ਸਭ ਕੁਝ ਸਿੱਖਿਆ ਸੀ। ਉਹ ਉਤਸ਼ਾਹਿਤ ਸਨ। [silence] ਮੈਂ ਉੱਥੇ ਬੈਠਾ... ਚੁੱਪਚਾਪ ਖਾ ਰਿਹਾ ਸੀ। [internal monologue] \"ਜੇ ਤੁਸੀਂ ਮੇਰੇ ਵਿਚਾਰਾਂ ਦਾ ਚੌਥਾ ਹਿੱਸਾ ਵੀ explore ਕਰਦੇ... ਤਾਂ ਅੱਜ ਅਸੀਂ ਅਮੀਰ ਹੁੰਦੇ।\" [bitter] ਇਸ ਦੀ ਬਜਾਏ, ਉਨ੍ਹਾਂ ਨੇ ਟਾਇਰ ਸ਼ਾਪ ਖਰੀਦੀ। ਮੇਰੇ ਵਿਚਾਰ ਉਨ੍ਹਾਂ ਲਈ ਖਤਰਨਾਕ ਹਨ। ਉਨ੍ਹਾਂ ਦੇ ਵਿਚਾਰ genius ਹਨ। [isolated] ਮੈਂ banned builder ਹਾਂ। Invisible expert। ਮੇਜ਼ 'ਤੇ ਬੈਠਾ... ਵਿਸ਼ਵਾਸ ਲਈ ਭੁੱਖਾ।",
      danish: "[quiet] 2024. Familiemiddag. [resentful] Papa fortalte alle, at Fardeen og Haris startede et e-handelsfirma. [amazed] Han lærte alt om det. Han var spændt. [silence] Jeg sad der... spiste i stilhed. [internal monologue] \"Hvis du udforskede selv en fjerdedel af mine ideer... ville vi være rige i dag.\" [bitter] I stedet købte han en dækbutik. Mine ideer er farlige for ham. Deres er geniale. [isolated] Jeg er den bannede bygger. Den usynlige ekspert. Sidder ved bordet... sulten efter tro."
    },
    textLines: [
      {
        urdu: "2024: خاندانی کھانا (Fardeen کی تعریف)",
        english: "2024: Family Dinner (Praising Fardeen)",
        punjabi: "2024: ਪਰਿਵਾਰਕ ਰੋਟੀ (Fardeen ਦੀ ਤਾਰੀਫ਼)",
        danish: "2024: Familiemiddag (Ros til Fardeen)"
      },
      {
        urdu: "Papa پرجوش تھے (میرے لیے kabhi nahi)",
        english: "He was excited (Never for me)",
        punjabi: "ਉਹ ਉਤਸ਼ਾਹਿਤ ਸਨ (ਮੇਰੇ ਲਈ ਕਦੇ ਨਹੀਂ)",
        danish: "Han var spændt (Aldrig for mig)",
        delay: 400
      },
      {
        urdu: "اگر آپ میرے خیالات سنتے...",
        english: "If you explored my ideas...",
        punjabi: "ਜੇ ਤੁਸੀਂ ਮੇਰੇ ਵਿਚਾਰ ਸੁਣਦੇ...",
        danish: "Hvis du udforskede mine ideer...",
        delay: 800
      },
      {
        urdu: "تو آج ہم امیر ہوتے۔",
        english: "We would be rich today.",
        punjabi: "ਤਾਂ ਅੱਜ ਅਸੀਂ ਅਮੀਰ ਹੁੰਦੇ।",
        danish: "Vi ville være rige i dag.",
        delay: 1200
      },
      {
        urdu: "یقین کے لیے بھوکا۔",
        english: "Starving for belief.",
        punjabi: "ਵਿਸ਼ਵਾਸ ਲਈ ਭੁੱਖਾ।",
        danish: "Sulten efter tro.",
        delay: 1600
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36-family-dinner.jpg',
    textOverlay: 'STARVING FOR BELIEF',
    timePeriod: '2024'
  },

  // Scene 36.5: THE BAILOUT TRAP
  {
    id: 36.5,
    title: "THE BAILOUT TRAP",
    audioScripts: {
      urdu: "[grateful] ٢٠٢٤۔ Papa نے مجھے دوبارہ bail out کیا۔ چودہ ہزار ڈالر۔ [relieved] انہوں نے ٢٠٢١ کا mortgage debt ادا کیا۔ انچاس فیصد سود۔ [happy] میں خوش تھا۔ شکر گزار۔ [confused] لیکن پھر... انہوں نے میرے Capital One credit cards بند کر دیے۔ [panicked] میرے پاس ایک plan تھا۔ ان cards سے اپنی credit ٹھیک کرنے کا۔ [defeated] اب... کوئی راستہ نہیں۔ [desperate] انہوں نے کہا secured card لو۔ لیکن میرے پاس پیسے نہیں۔ [rejected] انہوں نے کہا \"میں مزید مدد نہیں کر سکتا۔ جو مرضی کرو۔\" [trapped] اب وہ میری ساری تنخواہ مانگتے ہیں۔ کہتے ہیں ٢٠٢٥ میں میں کچھ نہیں کر سکتا۔ [bitter] جب میں کہتا ہوں cards بند کرنے سے میرا plan برباد ہوا... [misunderstood] وہ کہتے ہیں \"تم وہی غلطیاں دوبارہ کرتے ہو۔\" [sad] انہیں نہیں پتہ... ان کی نیک نیتی پھر backfire ہوئی۔",
      english: "[grateful] 2024. Papa bailed me out again. Fourteen thousand dollars. [relieved] He paid off the 2021 mortgage debt. Forty-nine percent interest. [happy] I was happy. Grateful. [confused] But then... he closed my Capital One credit cards. [panicked] I had a plan. To fix my credit with those cards. [defeated] Now... there's no path. [desperate] He said get a secured card. But I have no money. [rejected] He said \"I can't help you anymore. Do whatever you want.\" [trapped] Now he wants all my paychecks. Says I can't do anything in 2025. [bitter] When I tell him closing the cards derailed my plan... [misunderstood] He says \"You just make the same mistakes again.\" [sad] He doesn't realize... his good intention backfired again.",
      punjabi: "[grateful] ٢٠٢٤। Papa ਨੇ ਮੈਨੂੰ ਦੁਬਾਰਾ bail out ਕੀਤਾ। ਚੌਦਾਂ ਹਜ਼ਾਰ ਡਾਲਰ। [relieved] ਉਸਨੇ ٢٠٢١ ਦਾ mortgage debt ਅਦਾ ਕੀਤਾ। ਉਣਜਾਂ ਫੀਸਦੀ ਵਿਆਜ। [happy] ਮੈਂ ਖੁਸ਼ ਸੀ। ਸ਼ੁਕਰਗੁਜ਼ਾਰ। [confused] ਪਰ ਫਿਰ... ਉਸਨੇ ਮੇਰੇ Capital One credit cards ਬੰਦ ਕਰ ਦਿੱਤੇ। [panicked] ਮੇਰੇ ਕੋਲ ਇੱਕ plan ਸੀ। ਉਨ੍ਹਾਂ cards ਨਾਲ ਆਪਣੀ credit ਠੀਕ ਕਰਨ ਦਾ। [defeated] ਹੁਣ... ਕੋਈ ਰਸਤਾ ਨਹੀਂ। [desperate] ਉਸਨੇ ਕਿਹਾ secured card ਲਓ। ਪਰ ਮੇਰੇ ਕੋਲ ਪੈਸੇ ਨਹੀਂ। [rejected] ਉਸਨੇ ਕਿਹਾ \"ਮੈਂ ਹੋਰ ਮਦਦ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਜੋ ਮਰਜ਼ੀ ਕਰੋ।\" [trapped] ਹੁਣ ਉਹ ਮੇਰੀਆਂ ਸਾਰੀਆਂ ਤਨਖਾਹਾਂ ਮੰਗਦਾ ਹੈ। ਕਹਿੰਦਾ ਹੈ ਮੈਂ ٢٠٢٥ 'ਚ ਕੁਝ ਨਹੀਂ ਕਰ ਸਕਦਾ। [bitter] ਜਦੋਂ ਮੈਂ ਦੱਸਦਾ ਹਾਂ cards ਬੰਦ ਕਰਨ ਨਾਲ ਮੇਰਾ plan ਖਰਾਬ ਹੋਇਆ... [misunderstood] ਉਹ ਕਹਿੰਦਾ ਹੈ \"ਤੁਸੀਂ ਉਹੀ ਗਲਤੀਆਂ ਦੁਬਾਰਾ ਕਰਦੇ ਹੋ।\" [sad] ਉਸਨੂੰ ਪਤਾ ਨਹੀਂ... ਉਸਦੀ ਨੇਕ ਨੀਅਤ ਫੇਰ backfire ਹੋਈ।",
      danish: "[grateful] 2024. Papa bailede mig ud igen. Fjorten tusind dollars. [relieved] Han betalte 2021 realkreditgælden. Niogfyrre procent rente. [happy] Jeg var glad. Taknemmelig. [confused] Men så... lukkede han mine Capital One kreditkort. [panicked] Jeg havde en plan. At reparere min kredit med de kort. [defeated] Nu... er der ingen vej. [desperate] Han sagde få et sikret kort. Men jeg har ingen penge. [rejected] Han sagde \"Jeg kan ikke hjælpe dig mere. Gør hvad du vil.\" [trapped] Nu vil han have alle mine lønsedler. Siger jeg ikke kan gøre noget i 2025. [bitter] Når jeg fortæller ham at lukning af kortene ødelagde min plan... [misunderstood] Han siger \"Du laver bare de samme fejl igen.\" [sad] Han indser ikke... hans gode hensigt slog fejl igen."
    },
    textLines: [
      {
        urdu: "2024: $14K Bailout (49% debt ادا)",
        english: "2024: $14K Bailout (49% debt paid)",
        punjabi: "2024: $14K Bailout (49% debt ਅਦਾ)",
        danish: "2024: $14K Bailout (49% gæld betalt)"
      },
      {
        urdu: "خوشی → خوف (cards بند)",
        english: "Gratitude → Panic (cards closed)",
        punjabi: "ਖੁਸ਼ੀ → ਡਰ (cards ਬੰਦ)",
        danish: "Taknemmelighed → Panik (kort lukket)",
        delay: 400
      },
      {
        urdu: "credit ٹھیک کرنے کا plan برباد",
        english: "Credit repair plan destroyed",
        punjabi: "Credit ਠੀਕ ਕਰਨ ਦਾ plan ਖਤਮ",
        danish: "Kreditreparationsplan ødelagt",
        delay: 800
      },
      {
        urdu: "\"تم وہی غلطیاں کرتے ہو\"",
        english: "\"You make the same mistakes\"",
        punjabi: "\"ਤੁਸੀਂ ਉਹੀ ਗਲਤੀਆਂ ਕਰਦੇ ਹੋ\"",
        danish: "\"Du laver de samme fejl\"",
        delay: 1200
      },
      {
        urdu: "pattern نظر نہیں آتا",
        english: "Pattern unseen",
        punjabi: "Pattern ਨਜ਼ਰ ਨਹੀਂ",
        danish: "Mønster uset",
        delay: 1600
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36.5-bailout-trap.jpg',
    textOverlay: 'TRAPPED BY LOVE',
    timePeriod: '2024'
  },

  // Scene 36.75: THE CYCLE REPEATS
  {
    id: 36.75,
    title: "THE CYCLE REPEATS",
    audioScripts: {
      urdu: "[hopeful] ستمبر ٢٠٢٥۔ میں نے آخر کار باہر جانا کامیاب کر لیا۔ [excited] Fardeen کے ساتھ رہنے کے لیے۔ میرے cousin۔ [relieved] آخر کار... آزاد۔ [trusting] میں نے Fardeen کو سب کچھ بتایا۔ وہ shocked تھا۔ سمجھ گیا کہ میں کیوں باہر رہنا چاہتا تھا۔ [determined] میں نے کہا \"میرا payment آنے والا ہے۔ ہمیں یہ یقینی بنانا ہے کہ میرے پیسے صحیح طریقے سے خرچ ہوں۔ اپنی صورتحال ٹھیک کرنے کے لیے۔\" [confused] لیکن Fardeen نے کہا... Papa کو دو۔ save کرنے کے لیے۔ [hesitant] میں نے پندرہ سو دینے کی پیشکش کی۔ [coerced] پھر Papa نے کہا \"بس میری بات سنو۔ تین ہزار دو۔\" [defeated] مجبور محسوس کر کے... میں نے دے دیا۔ [panicked] پھر میں اپنے bills ادا نہیں کر سکا۔ [desperate] تو میں نے... دوبارہ EasyFinancial سے قرض لیا۔ انچاس فیصد سود۔ [broken] وہی قرض جو Papa نے ابھی ادا کیا تھا۔ [ashamed] میں نے جوا کھیلا۔ [bitter] پھر Papa نے کہا \"دیکھو، تم ایک مہینے سے آزاد ہو لیکن ابھی بھی تمہارے پاس پیسے نہیں۔\" [frustrated] انہیں احساس نہیں... انہوں نے خود تین ہزار لیے تھے۔ [sad] ہر کوشش پر... رکاوٹیں۔ بغیر احساس کے۔ [vulnerable] میں نے Fardeen کو بتایا... میں پچھلے سال سے ice کر رہا ہوں۔ [trembling] court case کے بارے میں۔ سب کچھ۔ [pleading] میں نے کہا \"اگر میں دوبارہ کروں... تو Papa کو بتا دینا۔\" [hopeful] میں جانتا تھا... آزاد ہونا... یہ واقعی آخری موقع تھا۔ [determined] واقعی آخری بار۔",
      english: "[hopeful] September 2025. I finally managed to move out. [excited] To live with Fardeen. My cousin. [relieved] Finally... independent. [trusting] I told Fardeen everything. He was shocked. He understood why I wanted to move out. [determined] I said \"I'm about to get paid. We need to make sure my money is properly spent. To fix my situation.\" [confused] But Fardeen said... give it to Papa. To save. [hesitant] I offered to give fifteen hundred. [coerced] Then Papa said \"Just listen to me. Give three thousand.\" [defeated] Feeling forced... I did. [panicked] Then I couldn't pay my bills. [desperate] So I... got another EasyFinancial loan. Forty-nine percent interest. [broken] The exact debt Papa just paid off. [ashamed] I gambled. [bitter] Then Papa said \"Look, you've been living independently for a month but you still have no money.\" [frustrated] He doesn't realize... he took the three thousand. [sad] Every attempt... obstacles. Without even realizing. [vulnerable] I told Fardeen... I've been doing ice for the past year. [trembling] About the court case. Everything. [pleading] I said \"If I do it again... tell Papa.\" [hopeful] I knew... being independent... this was truly the last chance. [determined] Truly the last time.",
      punjabi: "[hopeful] ਸਤੰਬਰ ٢٠٢٥। ਮੈਂ ਆਖਰਕਾਰ ਬਾਹਰ ਜਾਣ ਵਿੱਚ ਕਾਮਯਾਬ ਹੋ ਗਿਆ। [excited] Fardeen ਨਾਲ ਰਹਿਣ ਲਈ। ਮੇਰਾ cousin। [relieved] ਆਖਰਕਾਰ... ਆਜ਼ਾਦ। [trusting] ਮੈਂ Fardeen ਨੂੰ ਸਭ ਕੁਝ ਦੱਸਿਆ। ਉਹ shocked ਸੀ। ਸਮਝ ਗਿਆ ਕਿ ਮੈਂ ਕਿਉਂ ਬਾਹਰ ਰਹਿਣਾ ਚਾਹੁੰਦਾ ਸੀ। [determined] ਮੈਂ ਕਿਹਾ \"ਮੇਰੀ payment ਆਉਣ ਵਾਲੀ ਹੈ। ਸਾਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ ਹੈ ਕਿ ਮੇਰੇ ਪੈਸੇ ਸਹੀ ਤਰੀਕੇ ਨਾਲ ਖਰਚ ਹੋਣ। ਆਪਣੀ ਸਥਿਤੀ ਠੀਕ ਕਰਨ ਲਈ।\" [confused] ਪਰ Fardeen ਨੇ ਕਿਹਾ... Papa ਨੂੰ ਦੇ ਦੇ। save ਕਰਨ ਲਈ। [hesitant] ਮੈਂ ਪੰਦਰਾਂ ਸੌ ਦੇਣ ਦੀ ਪੇਸ਼ਕਸ਼ ਕੀਤੀ। [coerced] ਫਿਰ Papa ਨੇ ਕਿਹਾ \"ਬੱਸ ਮੇਰੀ ਗੱਲ ਸੁਣੋ। ਤਿੰਨ ਹਜ਼ਾਰ ਦੇ ਦੇ।\" [defeated] ਮਜਬੂਰ ਮਹਿਸੂਸ ਕਰਕੇ... ਮੈਂ ਦੇ ਦਿੱਤਾ। [panicked] ਫਿਰ ਮੈਂ ਆਪਣੇ bills ਅਦਾ ਨਹੀਂ ਕਰ ਸਕਿਆ। [desperate] ਤਾਂ ਮੈਂ... ਦੁਬਾਰਾ EasyFinancial ਤੋਂ ਕਰਜ਼ਾ ਲਿਆ। ਉਣਜਾਂ ਫੀਸਦੀ ਵਿਆਜ। [broken] ਉਹੀ ਕਰਜ਼ਾ ਜੋ Papa ਨੇ ਹੁਣੇ ਅਦਾ ਕੀਤਾ ਸੀ। [ashamed] ਮੈਂ ਜੂਆ ਖੇਡਿਆ। [bitter] ਫਿਰ Papa ਨੇ ਕਿਹਾ \"ਦੇਖੋ, ਤੁਸੀਂ ਇੱਕ ਮਹੀਨੇ ਤੋਂ ਆਜ਼ਾਦ ਹੋ ਪਰ ਅਜੇ ਵੀ ਤੁਹਾਡੇ ਕੋਲ ਪੈਸੇ ਨਹੀਂ।\" [frustrated] ਉਸਨੂੰ ਅਹਿਸਾਸ ਨਹੀਂ... ਉਸਨੇ ਖੁਦ ਤਿੰਨ ਹਜ਼ਾਰ ਲਏ ਸਨ। [sad] ਹਰ ਕੋਸ਼ਿਸ਼ 'ਤੇ... ਰੁਕਾਵਟਾਂ। ਬਿਨਾਂ ਅਹਿਸਾਸ ਦੇ। [vulnerable] ਮੈਂ Fardeen ਨੂੰ ਦੱਸਿਆ... ਮੈਂ ਪਿਛਲੇ ਸਾਲ ਤੋਂ ice ਕਰ ਰਿਹਾ ਹਾਂ। [trembling] Court case ਬਾਰੇ। ਸਭ ਕੁਝ। [pleading] ਮੈਂ ਕਿਹਾ \"ਜੇ ਮੈਂ ਦੁਬਾਰਾ ਕਰਾਂ... ਤਾਂ Papa ਨੂੰ ਦੱਸ ਦੇਣਾ।\" [hopeful] ਮੈਂ ਜਾਣਦਾ ਸੀ... ਆਜ਼ਾਦ ਹੋਣਾ... ਇਹ ਸੱਚਮੁੱਚ ਆਖਰੀ ਮੌਕਾ ਸੀ। [determined] ਸੱਚਮੁੱਚ ਆਖਰੀ ਵਾਰ।",
      danish: "[hopeful] September 2025. Jeg lykkedes endelig med at flytte ud. [excited] For at bo med Fardeen. Min fætter. [relieved] Endelig... uafhængig. [trusting] Jeg fortalte Fardeen alt. Han var chokeret. Han forstod, hvorfor jeg ville flytte ud. [determined] Jeg sagde \"Jeg skal snart have løn. Vi skal sikre, at mine penge bruges rigtigt. For at rette min situation.\" [confused] Men Fardeen sagde... giv dem til Papa. For at spare. [hesitant] Jeg tilbød at give femten hundrede. [coerced] Så sagde Papa \"Bare lyt til mig. Giv tre tusind.\" [defeated] Følte mig tvunget... jeg gjorde det. [panicked] Så kunne jeg ikke betale mine regninger. [desperate] Så jeg... tog endnu et EasyFinancial lån. Niogfyrre procent rente. [broken] Præcis den gæld Papa lige havde betalt. [ashamed] Jeg spillede. [bitter] Så sagde Papa \"Se, du har levet uafhængigt i en måned, men du har stadig ingen penge.\" [frustrated] Han indser ikke... han tog de tre tusind. [sad] Hvert forsøg... forhindringer. Uden selv at indse det. [vulnerable] Jeg fortalte Fardeen... jeg har taget ice det sidste år. [trembling] Om retssagen. Alt. [pleading] Jeg sagde \"Hvis jeg gør det igen... så fortæl Papa.\" [hopeful] Jeg vidste... at være uafhængig... det var virkelig den sidste chance. [determined] Virkelig sidste gang."
    },
    textLines: [
      {
        urdu: "ستمبر 2025: Fardeen کے ساتھ رہائش",
        english: "Sept 2025: Moved in with Fardeen",
        punjabi: "ਸਤੰਬਰ 2025: Fardeen ਨਾਲ ਰਿਹਾਇਸ਼",
        danish: "Sept 2025: Flyttede ind hos Fardeen"
      },
      {
        urdu: "آخرکار آزاد → Fardeen: \"Papa کو دو\"",
        english: "Finally independent → Fardeen: \"Give to Papa\"",
        punjabi: "ਆਖਰਕਾਰ ਆਜ਼ਾਦ → Fardeen: \"Papa ਨੂੰ ਦੇ\"",
        danish: "Endelig uafhængig → Fardeen: \"Giv til Papa\"",
        delay: 400
      },
      {
        urdu: "$3000 دیا → bills ادا نہیں کر سکا",
        english: "Gave $3000 → couldn't pay bills",
        punjabi: "$3000 ਦਿੱਤਾ → bills ਅਦਾ ਨਹੀਂ",
        danish: "Gav $3000 → kunne ikke betale",
        delay: 800
      },
      {
        urdu: "Papa: \"ابھی بھی پیسے نہیں\"",
        english: "Papa: \"Still no money\"",
        punjabi: "Papa: \"ਅਜੇ ਵੀ ਪੈਸੇ ਨਹੀਂ\"",
        danish: "Papa: \"Stadig ingen penge\"",
        delay: 1200
      },
      {
        urdu: "49% قرض... دوبارہ (وہی جو Papa نے ادا کیا)",
        english: "49% loan... again (the one Papa paid)",
        punjabi: "49% ਕਰਜ਼ਾ... ਦੁਬਾਰਾ (ਉਹੀ ਜੋ Papa ਨੇ ਅਦਾ ਕੀਤਾ)",
        danish: "49% lån... igen (det Papa betalte)",
        delay: 1600
      },
      {
        urdu: "Fardeen کو بتایا: ice، court case",
        english: "Told Fardeen: ice, court case",
        punjabi: "Fardeen ਨੂੰ ਦੱਸਿਆ: ice, court case",
        danish: "Fortalte Fardeen: ice, retssag",
        delay: 2000
      },
      {
        urdu: "\"اگر دوبارہ کروں... Papa کو بتا دینا\"",
        english: "\"If I do it again... tell Papa\"",
        punjabi: "\"ਜੇ ਦੁਬਾਰਾ ਕਰਾਂ... Papa ਨੂੰ ਦੱਸ ਦੇਣਾ\"",
        danish: "\"Hvis jeg gør det igen... fortæl Papa\"",
        delay: 2400
      },
      {
        urdu: "واقعی آخری بار",
        english: "Truly the last time",
        punjabi: "ਸੱਚਮੁੱਚ ਆਖਰੀ ਵਾਰ",
        danish: "Virkelig sidste gang",
        delay: 2800
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36.75-cycle-repeats.jpg',
    textOverlay: 'THE CYCLE REPEATS',
    timePeriod: 'SEPT 2025'
  },

  // Scene 36.85: THE BETRAYAL
  {
    id: 36.85,
    title: "THE BETRAYAL",
    audioScripts: {
      urdu: "[hopeful] میری زندگی پھر سے شاندار ہو رہی تھی۔ [excited] ہر روز gym۔ [happy] میں ٹھیک ہو رہا تھا۔ [shocked] پھر... Fardeen نے Papa کو ice کے بارے میں بتا دیا۔ [betrayed] اس نے ہمارا pact توڑ دیا۔ میں نے اس پر اعتماد کیا تھا۔ [hurt] اس نے سب سے بڑی رکاوٹ ڈال دی۔ [desperate] شاید... غلطی سے مجھے مار دیا۔ میرے رکنے کے plan کو برباد کر کے۔ [angry] میں Fardeen پر چلایا۔ [ashamed] غصے میں... میں نے کہا \"میں تمہیں deport کروا دوں گا۔\" [fighting] ہم نے لڑائی کی۔ [crushing] Papa نے چلایا۔ کہا \"تم اب کبھی ان کے خاندان سے بات نہیں کر سکتے۔\" [defeated] انہوں نے میرا سارا سامان اس گھر سے واپس لے آئے۔ [trapped] اب میں پھر سے گھر میں قید ہوں۔ [bitter] Papa پھر سے مجھے save کرنے پر مجبور کر رہے ہیں۔ [ironic] انہوں نے کہا وہ خوش ہیں کہ Fardeen نے انہیں بتایا۔ [imprisoned] اب... جب بھی میں باہر جاتا ہوں... [paranoid] وہ سوچتے ہیں میں drugs کر رہا ہوں۔ [hollow] میں نے آخر کار اپنا گھر چھوڑ دیا تھا۔ [defeated] لیکن کسی طرح... [resigned] کسی طرح مجھے واپس لایا گیا۔ [hopeless] میں کچھ بھی کروں... چکر مجھے واپس کھینچ لیتا ہے۔",
      english: "[hopeful] My life was going amazing again. [excited] Gym every day. [happy] I was getting better. [shocked] Then... Fardeen told Papa about the ice. [betrayed] He broke our pact. I trusted him. [hurt] He created the biggest hurdle. [desperate] Maybe... accidentally killed me. By ruining my plan to stop. [angry] I yelled at Fardeen. [ashamed] In anger... I said \"I will get you deported.\" [fighting] We had a fight. [crushing] Papa yelled. Said \"You can never talk to his side of the family again.\" [defeated] He brought all my stuff back from that house. [trapped] Now I'm imprisoned at home again. [bitter] Papa is forcing me to save again. [ironic] He told me he's happy Fardeen told him. [imprisoned] Now... every time I go outside... [paranoid] They think I'm doing drugs. [hollow] I finally escaped my house. [defeated] But somehow... [resigned] Somehow I was brought back. [hopeless] No matter what I do... the cycle pulls me back.",
      punjabi: "[hopeful] ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਫੇਰ ਸ਼ਾਨਦਾਰ ਹੋ ਰਹੀ ਸੀ। [excited] ਹਰ ਰੋਜ਼ gym। [happy] ਮੈਂ ਠੀਕ ਹੋ ਰਿਹਾ ਸੀ। [shocked] ਫਿਰ... Fardeen ਨੇ Papa ਨੂੰ ice ਬਾਰੇ ਦੱਸ ਦਿੱਤਾ। [betrayed] ਉਸਨੇ ਸਾਡਾ pact ਤੋੜ ਦਿੱਤਾ। ਮੈਂ ਉਸ 'ਤੇ ਭਰੋਸਾ ਕੀਤਾ ਸੀ। [hurt] ਉਸਨੇ ਸਭ ਤੋਂ ਵੱਡੀ ਰੁਕਾਵਟ ਪਾ ਦਿੱਤੀ। [desperate] ਸ਼ਾਇਦ... ਗਲਤੀ ਨਾਲ ਮੈਨੂੰ ਮਾਰ ਦਿੱਤਾ। ਮੇਰੇ ਰੁਕਣ ਦੇ plan ਨੂੰ ਬਰਬਾਦ ਕਰਕੇ। [angry] ਮੈਂ Fardeen 'ਤੇ ਚਿੱਲਾਇਆ। [ashamed] ਗੁੱਸੇ 'ਚ... ਮੈਂ ਕਿਹਾ \"ਮੈਂ ਤੁਹਾਨੂੰ deport ਕਰਵਾ ਦਿਆਂਗਾ।\" [fighting] ਅਸੀਂ ਲੜਾਈ ਕੀਤੀ। [crushing] Papa ਨੇ ਚਿੱਲਾਇਆ। ਕਿਹਾ \"ਤੁਸੀਂ ਹੁਣ ਕਦੇ ਉਸਦੇ ਪਰਿਵਾਰ ਨਾਲ ਗੱਲ ਨਹੀਂ ਕਰ ਸਕਦੇ।\" [defeated] ਉਸਨੇ ਮੇਰਾ ਸਾਰਾ ਸਮਾਨ ਉਸ ਘਰ ਤੋਂ ਵਾਪਸ ਲੈ ਆਇਆ। [trapped] ਹੁਣ ਮੈਂ ਫੇਰ ਘਰ 'ਚ ਕੈਦ ਹਾਂ। [bitter] Papa ਫੇਰ ਮੈਨੂੰ save ਕਰਨ 'ਤੇ ਮਜਬੂਰ ਕਰ ਰਿਹਾ ਹੈ। [ironic] ਉਸਨੇ ਦੱਸਿਆ ਉਹ ਖੁਸ਼ ਹੈ ਕਿ Fardeen ਨੇ ਉਸਨੂੰ ਦੱਸਿਆ। [imprisoned] ਹੁਣ... ਜਦੋਂ ਵੀ ਮੈਂ ਬਾਹਰ ਜਾਂਦਾ ਹਾਂ... [paranoid] ਉਹ ਸੋਚਦੇ ਹਨ ਮੈਂ drugs ਕਰ ਰਿਹਾ ਹਾਂ। [hollow] ਮੈਂ ਆਖਰਕਾਰ ਆਪਣਾ ਘਰ ਛੱਡ ਦਿੱਤਾ ਸੀ। [defeated] ਪਰ ਕਿਸੇ ਤਰ੍ਹਾਂ... [resigned] ਕਿਸੇ ਤਰ੍ਹਾਂ ਮੈਨੂੰ ਵਾਪਸ ਲਿਆਂਦਾ ਗਿਆ। [hopeless] ਮੈਂ ਕੁਝ ਵੀ ਕਰਾਂ... ਚੱਕਰ ਮੈਨੂੰ ਵਾਪਸ ਖਿੱਚਦਾ ਹੈ।",
      danish: "[hopeful] Mit liv var fantastisk igen. [excited] Fitness hver dag. [happy] Jeg blev bedre. [shocked] Så... fortalte Fardeen Papa om ice'en. [betrayed] Han brød vores pagt. Jeg stolede på ham. [hurt] Han skabte den største forhindring. [desperate] Måske... dræbte mig ved et uheld. Ved at ødelægge min plan om at stoppe. [angry] Jeg råbte ad Fardeen. [ashamed] I vrede... sagde jeg \"Jeg får dig deporteret.\" [fighting] Vi skændtes. [crushing] Papa råbte. Sagde \"Du må aldrig tale med hans side af familien igen.\" [defeated] Han hentede alle mine ting fra det hus. [trapped] Nu er jeg fængslet hjemme igen. [bitter] Papa tvinger mig til at spare igen. [ironic] Han fortalte mig, han er glad for, at Fardeen fortalte ham det. [imprisoned] Nu... hver gang jeg går udenfor... [paranoid] De tror, jeg tager stoffer. [hollow] Jeg endelig undslap mit hus. [defeated] Men på en eller anden måde... [resigned] På en eller anden måde blev jeg bragt tilbage. [hopeless] Uanset hvad jeg gør... cyklussen trækker mig tilbage."
    },
    textLines: [
      {
        urdu: "زندگی شاندار تھی: gym ہر روز",
        english: "Life was amazing: gym every day",
        punjabi: "ਜ਼ਿੰਦਗੀ ਸ਼ਾਨਦਾਰ ਸੀ: gym ਹਰ ਰੋਜ਼",
        danish: "Livet var fantastisk: fitness hver dag"
      },
      {
        urdu: "Fardeen نے pact توڑا → Papa کو بتایا",
        english: "Fardeen broke pact → told Papa",
        punjabi: "Fardeen ਨੇ pact ਤੋੜਿਆ → Papa ਨੂੰ ਦੱਸਿਆ",
        danish: "Fardeen brød pagten → fortalte Papa",
        delay: 400
      },
      {
        urdu: "غصے میں: \"تمہیں deport کروا دوں گا\"",
        english: "In anger: \"I'll get you deported\"",
        punjabi: "ਗੁੱਸੇ 'ਚ: \"ਤੁਹਾਨੂੰ deport ਕਰਵਾ ਦਿਆਂਗਾ\"",
        danish: "I vrede: \"Jeg får dig deporteret\"",
        delay: 800
      },
      {
        urdu: "Papa: \"ان کے خاندان سے کبھی بات نہیں\"",
        english: "Papa: \"Never talk to his family\"",
        punjabi: "Papa: \"ਉਸਦੇ ਪਰਿਵਾਰ ਨਾਲ ਕਦੇ ਗੱਲ ਨਹੀਂ\"",
        danish: "Papa: \"Tal aldrig til hans familie\"",
        delay: 1200
      },
      {
        urdu: "سامان واپس لایا → گھر میں قید",
        english: "Brought stuff back → imprisoned at home",
        punjabi: "ਸਮਾਨ ਵਾਪਸ ਲਿਆਇਆ → ਘਰ 'ਚ ਕੈਦ",
        danish: "Hentede ting → fængslet hjemme",
        delay: 1600
      },
      {
        urdu: "Papa: \"خوش ہوں Fardeen نے بتایا\"",
        english: "Papa: \"Happy Fardeen told me\"",
        punjabi: "Papa: \"ਖੁਸ਼ ਹਾਂ Fardeen ਨੇ ਦੱਸਿਆ\"",
        danish: "Papa: \"Glad Fardeen fortalte\"",
        delay: 2000
      },
      {
        urdu: "باہر جاتا ہوں → \"drugs کر رہا ہے\"",
        english: "Go outside → \"He's doing drugs\"",
        punjabi: "ਬਾਹਰ ਜਾਂਦਾ ਹਾਂ → \"Drugs ਕਰ ਰਿਹਾ\"",
        danish: "Går udenfor → \"Han tager stoffer\"",
        delay: 2400
      },
      {
        urdu: "escape نے سب کچھ بدتر بنایا",
        english: "Escape made everything worse",
        punjabi: "Escape ਨੇ ਸਭ ਕੁਝ ਬਦਤਰ ਬਣਾਇਆ",
        danish: "Flugt gjorde alt værre",
        delay: 2800
      },
      {
        urdu: "کسی طرح... واپس لایا گیا",
        english: "Somehow... brought back",
        punjabi: "ਕਿਸੇ ਤਰ੍ਹਾਂ... ਵਾਪਸ ਲਿਆਂਦਾ",
        danish: "På en eller anden måde... bragt tilbage",
        delay: 3200
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36.85-betrayal.jpg',
    textOverlay: 'IMPRISONED',
    timePeriod: 'LATE 2025'
  },

  // Scene 36.9: MOM'S TRUTH
  {
    id: 36.9,
    title: "MOM'S TRUTH",
    voiceId: 'mom',
    audioScripts: {
      urdu: "[gentle] ماما نے مجھے ایک شام ایک طرف کھینچا۔ [supportive] اس نے کہا، \"بیٹا، تمہیں مضبوط ہونا ہوگا۔ خود کو بنا لو۔\"\n\n[calm, wise] \"تمہارے والد... وہ جیسے ہیں ویسے ہیں۔ وہ نہیں بدلیں گے۔\" [matter-of-fact] غصے کے ساتھ نہیں۔ بس... سچائی۔ وہ سچائی جو صرف ماں کہہ سکتی ہے۔\n\n[encouraging] \"ان کی منظوری کا انتظار مت کرو۔ ان کے تمہیں دیکھنے کا انتظار مت کرو۔\" [determined] \"خود کو بناؤ۔ اپنے لیے۔\"\n\n[soft] اس نے یہ نہیں کہا کہ یہ منصفانہ ہے۔ [thoughtful] اس نے یہ نہیں کہا کہ یہ تکلیف نہیں دیتا۔ [grounding] اس نے بس کہا... یہ حقیقت ہے۔ اب تم اس کے ساتھ کیا کروگے؟\n\n[hopeful] اور کسی طرح... اس نے مدد کی۔ [exhales] انتظار نہیں۔ امید نہیں۔ [strong] بس... تعمیر۔",

      english: "[gentle] Mama pulled me aside one evening. [supportive] She said, \"Beta, you need to be strong. Build yourself up.\"\n\n[calm, wise] \"Your father... he is the way he is. He won't change.\" [matter-of-fact] Not with anger. Just... truth. The kind of truth only a mother can say.\n\n[encouraging] \"Don't wait for his approval. Don't wait for him to see you.\" [determined] \"Build yourself. For yourself.\"\n\n[soft] She didn't say it was fair. [thoughtful] She didn't say it didn't hurt. [grounding] She just said... this is reality. Now what will you do with it?\n\n[hopeful] And somehow... that helped. [exhales] Not waiting. Not hoping. [strong] Just... building.",

      punjabi: "[gentle] ਮਾਮਾ ਨੇ ਮੈਨੂੰ ਇੱਕ ਸ਼ਾਮ ਇੱਕ ਪਾਸੇ ਖਿੱਚਿਆ। [supportive] ਉਸਨੇ ਕਿਹਾ, \"ਬੇਟਾ, ਤੁਹਾਨੂੰ ਮਜ਼ਬੂਤ ਹੋਣਾ ਪਵੇਗਾ। ਆਪਣੇ ਆਪ ਨੂੰ ਬਣਾ ਲਓ।\"\n\n[calm, wise] \"ਤੁਹਾਡੇ ਪਿਤਾ... ਉਹ ਜਿਹੇ ਹਨ ਉਹੋ ਜਿਹੇ ਹਨ। ਉਹ ਨਹੀਂ ਬਦਲਣਗੇ।\" [matter-of-fact] ਗੁੱਸੇ ਨਾਲ ਨਹੀਂ। ਬੱਸ... ਸੱਚਾਈ। ਉਹ ਸੱਚਾਈ ਜੋ ਸਿਰਫ਼ ਮਾਂ ਕਹਿ ਸਕਦੀ ਹੈ۔\n\n[encouraging] \"ਉਨ੍ਹਾਂ ਦੀ ਮਨਜ਼ੂਰੀ ਦਾ ਇੰਤਜ਼ਾਰ ਨਾ ਕਰੋ। ਉਨ੍ਹਾਂ ਦੇ ਤੁਹਾਨੂੰ ਦੇਖਣ ਦਾ ਇੰਤਜ਼ਾਰ ਨਾ ਕਰੋ।\" [determined] \"ਆਪਣੇ ਆਪ ਨੂੰ ਬਣਾਓ। ਆਪਣੇ ਲਈ।\"\n\n[soft] ਉਸਨੇ ਇਹ ਨਹੀਂ ਕਿਹਾ ਕਿ ਇਹ ਨਿਰਪੱਖ ਹੈ। [thoughtful] ਉਸਨੇ ਇਹ ਨਹੀਂ ਕਿਹਾ ਕਿ ਇਹ ਦੁੱਖ ਨਹੀਂ ਦਿੰਦਾ। [grounding] ਉਸਨੇ ਬੱਸ ਕਿਹਾ... ਇਹ ਹਕੀਕਤ ਹੈ। ਹੁਣ ਤੁਸੀਂ ਇਸ ਨਾਲ ਕੀ ਕਰੋਗੇ?\n\n[hopeful] ਅਤੇ ਕਿਸੇ ਤਰ੍ਹਾਂ... ਇਸ ਨੇ ਮਦਦ ਕੀਤੀ। [exhales] ਇੰਤਜ਼ਾਰ ਨਹੀਂ। ਉਮੀਦ ਨਹੀਂ। [strong] ਬੱਸ... ਉਸਾਰੀ।",

      danish: "[gentle] Mama tog mig til side en aften. [supportive] Hun sagde, \"Beta, du skal være stærk. Byg dig selv op.\"\n\n[calm, wise] \"Din far... han er som han er. Han vil ikke ændre sig.\" [matter-of-fact] Ikke med vrede. Bare... sandhed. Den slags sandhed kun en mor kan sige.\n\n[encouraging] \"Vent ikke på hans godkendelse. Vent ikke på at han ser dig.\" [determined] \"Byg dig selv. For dig selv.\"\n\n[soft] Hun sagde ikke det var retfærdigt. [thoughtful] Hun sagde ikke det ikke gjorde ondt. [grounding] Hun sagde bare... dette er virkeligheden. Hvad vil du gøre med det nu?\n\n[hopeful] Og på en eller anden måde... hjalp det. [exhales] Ikke vente. Ikke håbe. [strong] Bare... bygge."
    },
    textLines: [
      {
        urdu: "ماما: \"خود کو بنا لو، بیٹا۔\"",
        english: "Mama: \"Build yourself, beta.\"",
        punjabi: "ਮਾਮਾ: \"ਆਪਣੇ ਆਪ ਨੂੰ ਬਣਾ ਲਓ, ਬੇਟਾ।\"",
        danish: "Mama: \"Byg dig selv, beta.\""
      },
      {
        urdu: "\"والد جیسے ہیں ویسے ہیں۔\"",
        english: "\"Dad is the way he is.\"",
        punjabi: "\"ਪਿਤਾ ਜੀ ਜਿਹੇ ਹਨ ਉਹੋ ਜਿਹੇ ਹਨ।\"",
        danish: "\"Far er som han er.\"",
        delay: 400
      },
      {
        urdu: "\"منظوری کا انتظار مت کرو۔\"",
        english: "\"Don't wait for approval.\"",
        punjabi: "\"ਮਨਜ਼ੂਰੀ ਦਾ ਇੰਤਜ਼ਾਰ ਨਾ ਕਰੋ।\"",
        danish: "\"Vent ikke på godkendelse.\"",
        delay: 800
      },
      {
        urdu: "\"اپنے لیے بناؤ۔\"",
        english: "\"Build for yourself.\"",
        punjabi: "\"ਆਪਣੇ ਲਈ ਬਣਾਓ।\"",
        danish: "\"Byg for dig selv.\"",
        delay: 1200
      },
      {
        urdu: "قبولیت طاقت ہے۔",
        english: "Acceptance is strength.",
        punjabi: "ਸਵੀਕਾਰ ਤਾਕਤ ਹੈ।",
        danish: "Accept er styrke.",
        delay: 1600
      }
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-36.9-moms-truth.jpg',
    textOverlay: 'BUILD YOURSELF',
    timePeriod: '2024'
  },

  // Scene 36.95: THE SISTERS
  {
    id: 36.95,
    title: "THE SISTERS",
    voiceId: 'sisters',
    audioScripts: {
      urdu: "\"تم ہر چیز کے لیے ابا کو الزام دیتے ہو۔ اپنی تمام کمیوں کے لیے۔\"\n\n\"تم victim کی طرح کام کرتے ہو۔ جیسے کچھ بھی تمہاری غلطی نہیں۔\"\n\n\"تم ہمیشہ بہانے بناتے ہو۔\"",

      english: "\"You blame Dad for everything. For all your shortfalls.\"\n\n\"You act like a victim. Like nothing is your fault.\"\n\n\"You always make excuses.\"",

      punjabi: "\"ਤੁਸੀਂ ਹਰ ਚੀਜ਼ ਲਈ ਪਾਪਾ ਨੂੰ ਦੋਸ਼ ਦਿੰਦੇ ਹੋ। ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਕਮੀਆਂ ਲਈ।\"\n\n\"ਤੁਸੀਂ ਇੱਕ victim ਵਾਂਗ ਕੰਮ ਕਰਦੇ ਹੋ। ਜਿਵੇਂ ਕੁਝ ਵੀ ਤੁਹਾਡੀ ਗਲਤੀ ਨਹੀਂ।\"\n\n\"ਤੁਸੀਂ ਹਮੇਸ਼ਾ ਬਹਾਨੇ ਬਣਾਉਂਦੇ ਹੋ।\"",

      danish: "\"Du giver far skylden for alt. For alle dine mangler.\"\n\n\"Du opfører dig som et offer. Som om intet er din skyld.\"\n\n\"Du finder altid undskyldninger.\""
    },
    textLines: [
      {
        urdu: "\"تم ابا کو ہر چیز کا الزام دیتے ہو۔\"",
        english: "\"You blame Dad for everything.\"",
        punjabi: "\"ਤੁਸੀਂ ਪਾਪਾ ਨੂੰ ਹਰ ਚੀਜ਼ ਦਾ ਦੋਸ਼ ਦਿੰਦੇ ਹੋ।\"",
        danish: "\"Du giver far skylden for alt.\""
      },
      {
        urdu: "\"اپنی تمام کمیوں کے لیے۔\"",
        english: "\"All your shortfalls.\"",
        punjabi: "\"ਆਪਣੀਆਂ ਸਾਰੀਆਂ ਕਮੀਆਂ ਲਈ।\"",
        danish: "\"For alle dine mangler.\"",
        delay: 400
      },
      {
        urdu: "\"تم victim کی طرح کام کرتے ہو۔\"",
        english: "\"You act like a victim.\"",
        punjabi: "\"ਤੁਸੀਂ victim ਵਾਂਗ ਕੰਮ ਕਰਦੇ ਹੋ।\"",
        danish: "\"Du opfører dig som et offer.\"",
        delay: 800
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36.95-the-sisters.jpg',
    textOverlay: 'CONFRONTATION',
    timePeriod: '2024'
  },

  // Scene 36.96: MY RESPONSE
  {
    id: 36.96,
    title: "NOT BLAMING ANYBODY",
    voiceId: 'bilal',
    audioScripts: {
      urdu: "[hurt] ان کے الفاظ سخت لگے۔ [defensive] لیکن اندر... میں چیخ رہا ہوں۔\n\n[urgent] \"میں کسی کو الزام نہیں دے رہا!\" [exhausted] \"میں بس... سمجھنے کی کوشش کر رہا ہوں۔\"\n\n[isolated] لیکن وہ سمجھ نہیں سکتیں۔ [resigned] وہ pattern نہیں دیکھتیں۔ invisible child۔ banned builder۔\n\n[whispers] وہ بہانے دیکھتی ہیں... جہاں میں زخم دیکھتا ہوں۔\n\n[thoughtful] شاید وہ صحیح ہیں۔ [conflicted] شاید میں victim کی طرح لگتا ہوں۔\n\n[determined] لیکن یہ سمجھنا کہ میں کیوں گرا... [gentle] اس کا مطلب یہ نہیں کہ میں کھڑے ہونے کی کوشش نہیں کر رہا۔",

      english: "[hurt] Their words hit hard. [defensive] But inside... I'm screaming.\n\n[urgent] \"I'm not blaming anybody!\" [exhausted] \"I'm just... trying to understand.\"\n\n[isolated] But they don't get it. [resigned] They don't see the pattern. The invisible child. The banned builder.\n\n[whispers] They see excuses... where I see wounds.\n\n[thoughtful] Maybe they're right. [conflicted] Maybe I do sound like a victim.\n\n[determined] But understanding why I fell... [gentle] doesn't mean I'm not trying to stand up.",

      punjabi: "[hurt] ਉਨ੍ਹਾਂ ਦੇ ਸ਼ਬਦ ਸਖ਼ਤ ਲੱਗੇ। [defensive] ਪਰ ਅੰਦਰ... ਮੈਂ ਚੀਕ ਰਿਹਾ ਹਾਂ।\n\n[urgent] \"ਮੈਂ ਕਿਸੇ ਨੂੰ ਦੋਸ਼ ਨਹੀਂ ਦੇ ਰਿਹਾ!\" [exhausted] \"ਮੈਂ ਬੱਸ... ਸਮਝਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਹਾਂ।\"\n\n[isolated] ਪਰ ਉਹ ਸਮਝ ਨਹੀਂ ਸਕਦੀਆਂ। [resigned] ਉਹ pattern ਨਹੀਂ ਦੇਖਦੀਆਂ। invisible child। banned builder।\n\n[whispers] ਉਹ ਬਹਾਨੇ ਦੇਖਦੀਆਂ ਹਨ... ਜਿੱਥੇ ਮੈਂ ਜ਼ਖ਼ਮ ਦੇਖਦਾ ਹਾਂ।\n\n[thoughtful] ਸ਼ਾਇਦ ਉਹ ਸਹੀ ਹਨ। [conflicted] ਸ਼ਾਇਦ ਮੈਂ ਸੱਚਮੁੱਚ victim ਵਾਂਗ ਲੱਗਦਾ ਹਾਂ।\n\n[determined] ਪਰ ਇਹ ਸਮਝਣਾ ਕਿ ਮੈਂ ਕਿਉਂ ਡਿੱਗਿਆ... [gentle] ਦਾ ਮਤਲਬ ਇਹ ਨਹੀਂ ਕਿ ਮੈਂ ਖੜ੍ਹੇ ਹੋਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨਹੀਂ ਕਰ ਰਿਹਾ।",

      danish: "[hurt] Deres ord ramte hårdt. [defensive] Men indeni... skriger jeg.\n\n[urgent] \"Jeg giver ikke nogen skylden!\" [exhausted] \"Jeg prøver bare... at forstå.\"\n\n[isolated] Men de forstår det ikke. [resigned] De ser ikke mønsteret. Det usynlige barn. Den forbudte bygger.\n\n[whispers] De ser undskyldninger... hvor jeg ser sår.\n\n[thoughtful] Måske har de ret. [conflicted] Måske lyder jeg som et offer.\n\n[determined] Men at forstå hvorfor jeg faldt... [gentle] betyder ikke jeg ikke prøver at rejse mig."
    },
    textLines: [
      {
        urdu: "\"میں کسی کو الزام نہیں دے رہا...\"",
        english: "\"I'm not blaming anybody...\"",
        punjabi: "\"ਮੈਂ ਕਿਸੇ ਨੂੰ ਦੋਸ਼ ਨਹੀਂ ਦੇ ਰਿਹਾ...\"",
        danish: "\"Jeg giver ikke nogen skylden...\""
      },
      {
        urdu: "وہ سمجھ نہیں سکتے۔",
        english: "They don't understand.",
        punjabi: "ਉਹ ਸਮਝ ਨਹੀਂ ਸਕਦੇ।",
        danish: "De forstår det ikke.",
        delay: 400
      },
      {
        urdu: "بہانے... یا زخم؟",
        english: "Excuses... or wounds?",
        punjabi: "ਬਹਾਨੇ... ਜਾਂ ਜ਼ਖ਼ਮ?",
        danish: "Undskyldninger... eller sår?",
        delay: 800
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-36.96-my-response.jpg',
    textOverlay: 'MISUNDERSTOOD',
    timePeriod: '2024'
  },

  // Scene 39: THE HOUSE PARADOX
  {
    id: 39,
    title: "THE HOUSE PARADOX",
    audioScripts: {
      urdu: "[frustrated] Papa اپنی ٹائر شاپ بیچ رہے ہیں۔ [hopeful] پہلی بار گھر خریدنے کا موقع۔ ٢٠٢٥-٢٠٢٦۔ [excited] میں نے کہا... \"Papa، مجھے condo خرید دیں۔ میں downpayment ڈالیں۔ میں mortgage ادا کروں گا۔\" [defensive] انہوں نے کہا \"نہیں۔ تمہیں پہلے پیسے جمع کرنے چاہیے۔\" [bitter] یہ ایک paradox ہے۔ [trapped] گھر پر رہنے سے... میں جوا کھیلتا ہوں۔ پیسے نہیں بچا سکتا۔ [desperate] لیکن باہر رہنے کے لیے... مجھے پیسے بچانے پڑیں گے۔ جو میں یہاں نہیں کر سکتا۔ [pleading] یا تو آپ کو مجھ پر trust کرنا ہوگا، مجھے support کرنا ہوگا، مجھے سمجھنا ہوگا۔ [resigned] یا مجھے جانا ہوگا۔ [sad] اور کم سے کم... downpayment ڈال دیں اور گھر co-sign کریں۔ تاکہ میں rent کرنے کی بجائے own کر سکوں۔ [defeated] لیکن وہ کہتے ہیں پہلے save کرو۔ [hollow] میں یہاں save نہیں کر سکتا۔ یہ impossible ہے۔",

      english: "[frustrated] Papa is selling his tire shop. [hopeful] First time to buy a home. Two thousand twenty-five to two thousand twenty-six. [excited] I said... \"Papa, buy me a condo. You put the downpayment. I'll pay the mortgage.\" [defensive] He said \"No. You need to save up money first.\" [bitter] It's a paradox. [trapped] Living at home... I gamble. Can't save money. [desperate] But to live out... I need to save money. Which I can't do here. [pleading] Either you need to trust me, support me, understand me. [resigned] Or I have to leave. [sad] And the least... put a downpayment down and cosign a house so I can own it instead of renting. [defeated] But they say save first. [hollow] I can't save here. It's impossible.",

      punjabi: "[frustrated] Papa ਆਪਣੀ ਟਾਇਰ ਦੀ ਦੁਕਾਨ ਵੇਚ ਰਿਹਾ ਹੈ। [hopeful] ਪਹਿਲੀ ਵਾਰ ਘਰ ਖਰੀਦਣ ਦਾ ਮੌਕਾ। ੨੦੨੫-੨੦੨੬। [excited] ਮੈਂ ਕਿਹਾ... \"Papa, ਮੈਨੂੰ condo ਖਰੀਦ ਦੇ। ਤੁਸੀਂ downpayment ਪਾਓ। ਮੈਂ mortgage ਅਦਾ ਕਰਾਂਗਾ।\" [defensive] ਉਸਨੇ ਕਿਹਾ \"ਨਹੀਂ। ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਪੈਸੇ ਬਚਾਉਣੇ ਚਾਹੀਦੇ ਹਨ।\" [bitter] ਇਹ ਇੱਕ paradox ਹੈ। [trapped] ਘਰ 'ਤੇ ਰਹਿਣ ਨਾਲ... ਮੈਂ ਜੂਆ ਖੇਡਦਾ ਹਾਂ। ਪੈਸੇ ਨਹੀਂ ਬਚਾ ਸਕਦਾ। [desperate] ਪਰ ਬਾਹਰ ਰਹਿਣ ਲਈ... ਮੈਨੂੰ ਪੈਸੇ ਬਚਾਉਣੇ ਪੈਣਗੇ। ਜੋ ਮੈਂ ਇੱਥੇ ਨਹੀਂ ਕਰ ਸਕਦਾ। [pleading] ਜਾਂ ਤਾਂ ਤੁਹਾਨੂੰ ਮੇਰੇ 'ਤੇ trust ਕਰਨਾ ਪਵੇਗਾ, ਮੈਨੂੰ support ਕਰਨਾ ਪਵੇਗਾ, ਮੈਨੂੰ ਸਮਝਣਾ ਪਵੇਗਾ। [resigned] ਜਾਂ ਮੈਨੂੰ ਜਾਣਾ ਪਵੇਗਾ। [sad] ਅਤੇ ਘੱਟੋ ਘੱਟ... downpayment ਪਾਓ ਅਤੇ ਘਰ co-sign ਕਰੋ। ਤਾਂ ਜੋ ਮੈਂ rent ਦੀ ਬਜਾਏ own ਕਰ ਸਕਾਂ। [defeated] ਪਰ ਉਹ ਕਹਿੰਦੇ ਹਨ ਪਹਿਲਾਂ save ਕਰੋ। [hollow] ਮੈਂ ਇੱਥੇ save ਨਹੀਂ ਕਰ ਸਕਦਾ। ਇਹ impossible ਹੈ।",

      danish: "[frustrated] Papa sælger sin dækbutik. [hopeful] Første gang at købe et hjem. To tusind og femogtyve til to tusind og seksogtyve. [excited] Jeg sagde... \"Papa, køb mig en lejlighed. Du betaler udbetalingen. Jeg betaler realkreditlånet.\" [defensive] Han sagde \"Nej. Du skal spare penge op først.\" [bitter] Det er et paradoks. [trapped] At bo hjemme... jeg gambler. Kan ikke spare penge. [desperate] Men for at bo ude... skal jeg spare penge. Hvilket jeg ikke kan gøre her. [pleading] Enten skal du stole på mig, støtte mig, forstå mig. [resigned] Eller jeg er nødt til at forlade. [sad] Og mindst... sæt en udbetaling og medul underskriv et hus, så jeg kan eje det i stedet for at leje. [defeated] Men de siger spar først. [hollow] Jeg kan ikke spare her. Det er umuligt."
    },
    textLines: [
      {
        urdu: "Papa: ٹائر شاپ بیچ رہے → گھر خریدیں گے",
        english: "Papa: Selling tire shop → buying house",
        punjabi: "Papa: ਟਾਇਰ ਸ਼ਾਪ ਵੇਚ ਰਿਹਾ → ਘਰ ਖਰੀਦੇਗਾ",
        danish: "Papa: Sælger dækbutik → køber hus"
      },
      {
        urdu: "میں: \"Condo خریدیں۔ میں mortgage دوں گا\"",
        english: "Me: \"Buy me condo. I'll pay mortgage\"",
        punjabi: "ਮੈਂ: \"Condo ਖਰੀਦੋ। ਮੈਂ mortgage ਦਿਆਂਗਾ\"",
        danish: "Mig: \"Køb mig lejlighed. Jeg betaler realkreditlån\"",
        delay: 400
      },
      {
        urdu: "Papa: \"پہلے پیسے save کرو\"",
        english: "Papa: \"Save money first\"",
        punjabi: "Papa: \"ਪਹਿਲਾਂ ਪੈਸੇ save ਕਰੋ\"",
        danish: "Papa: \"Spar penge først\"",
        delay: 800
      },
      {
        urdu: "Paradox: گھر پر = جوا = کوئی savings نہیں",
        english: "Paradox: at home = gambling = no savings",
        punjabi: "Paradox: ਘਰ 'ਤੇ = ਜੂਆ = ਕੋਈ savings ਨਹੀਂ",
        danish: "Paradoks: hjemme = gambling = ingen opsparing",
        delay: 1200
      },
      {
        urdu: "باہر رہنے کے لیے save چاہیے۔ یہاں save نہیں ہو سکتا۔",
        english: "Need savings to live out. Can't save here.",
        punjabi: "ਬਾਹਰ ਰਹਿਣ ਲਈ ਬਚਤ ਚਾਹੀਦੀ। ਇੱਥੇ save ਨਹੀਂ ਹੋ ਸਕਦਾ।",
        danish: "Behøver opsparing for at bo ude. Kan ikke spare her.",
        delay: 1600
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-39-house-paradox.jpg',
    textOverlay: 'THE PARADOX',
    timePeriod: '2025-2026'
  },

  // Scene 39.1: MEDICAL CRISIS
  {
    id: 39.1,
    title: "MEDICAL CRISIS",
    audioScripts: {
      urdu: "[strained] ٢٠٢٤۔ میرا blood pressure... ٢٢٥ over ١٢٢۔ [scared] Hypertensive crisis۔ [quiet] یہ مجھے مار سکتا تھا۔ [defeated] ایک اور نشان کہ میں ٹوٹ رہا ہوں۔",

      english: "[strained] Two thousand twenty-four. My blood pressure... two twenty-five over one twenty-two. [scared] Hypertensive crisis. [quiet] It could have killed me. [defeated] Another sign I'm breaking.",

      punjabi: "[strained] ੨੦੨੪। ਮੇਰਾ blood pressure... ੨੨੫ over ੧੨੨। [scared] Hypertensive crisis। [quiet] ਇਹ ਮੈਨੂੰ ਮਾਰ ਸਕਦਾ ਸੀ। [defeated] ਇੱਕ ਹੋਰ ਨਿਸ਼ਾਨ ਕਿ ਮੈਂ ਟੁੱਟ ਰਿਹਾ ਹਾਂ।",

      danish: "[strained] To tusind og fireogtyve. Mit blodtryk... to hundrede og femogtyve over et hundrede og toogtyve. [scared] Hypertensiv krise. [quiet] Det kunne have dræbt mig. [defeated] Endnu et tegn på jeg bryder sammen."
    },
    textLines: [
      {
        urdu: "2024: BP 225/122",
        english: "2024: BP 225/122",
        punjabi: "2024: BP 225/122",
        danish: "2024: BT 225/122"
      },
      {
        urdu: "Hypertensive Crisis",
        english: "Hypertensive Crisis",
        punjabi: "Hypertensive Crisis",
        danish: "Hypertensiv Krise",
        delay: 400
      },
      {
        urdu: "مجھے مار سکتا تھا۔",
        english: "Could have killed me.",
        punjabi: "ਮੈਨੂੰ ਮਾਰ ਸਕਦਾ ਸੀ।",
        danish: "Kunne have dræbt mig.",
        delay: 800
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-39.1-medical-crisis.jpg',
    textOverlay: 'BREAKING POINT',
    timePeriod: '2024'
  },

  // Scene 39.2: LOST DOCTOR
  {
    id: 39.2,
    title: "LOST DOCTOR",
    audioScripts: {
      urdu: "[sad] اگست ٢٠٢٤۔ Dr. Slataroff... suspended۔ [hurt] ١٠ سال۔ شاید ١٢۔ [breaking] اس نے مجھے ١٦ سال کی عمر سے treat کیا۔ [lost] اب... کوئی نہیں۔ [desperate] ایک اور anchor... چلا گیا۔",

      english: "[sad] August two thousand twenty-four. Dr. Slataroff... suspended. [hurt] Ten years. Maybe twelve. [breaking] He treated me since I was sixteen. [lost] Now... no one. [desperate] Another anchor... gone.",

      punjabi: "[sad] ਅਗਸਤ ੨੦੨੪। Dr. Slataroff... suspended। [hurt] ੧੦ ਸਾਲ। ਸ਼ਾਇਦ ੧੨। [breaking] ਉਸਨੇ ਮੈਨੂੰ ੧੬ ਸਾਲ ਦੀ ਉਮਰ ਤੋਂ treat ਕੀਤਾ। [lost] ਹੁਣ... ਕੋਈ ਨਹੀਂ। [desperate] ਇੱਕ ਹੋਰ anchor... ਚਲਾ ਗਿਆ।",

      danish: "[sad] August to tusind og fireogtyve. Dr. Slataroff... suspenderet. [hurt] Ti år. Måske tolv. [breaking] Han behandlede mig siden jeg var seksten. [lost] Nu... ingen. [desperate] Endnu et anker... væk."
    },
    textLines: [
      {
        urdu: "اگست 2024: Dr. Slataroff Suspended",
        english: "August 2024: Dr. Slataroff Suspended",
        punjabi: "ਅਗਸਤ 2024: Dr. Slataroff Suspended",
        danish: "August 2024: Dr. Slataroff Suspenderet"
      },
      {
        urdu: "10-12 سال۔ عمر 16 سے۔",
        english: "10-12 years. Since age 16.",
        punjabi: "10-12 ਸਾਲ। ਉਮਰ 16 ਤੋਂ।",
        danish: "10-12 år. Siden 16.",
        delay: 400
      },
      {
        urdu: "کوئی ڈاکٹر نہیں۔",
        english: "No doctor.",
        punjabi: "ਕੋਈ ਡਾਕਟਰ ਨਹੀਂ।",
        danish: "Ingen læge.",
        delay: 800
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-39.2-lost-doctor.jpg',
    textOverlay: 'ANOTHER ANCHOR GONE',
    timePeriod: 'AUGUST 2024'
  },

  // Scene 39.3: THE BRIEF
  {
    id: 39.3,
    title: "THE BRIEF",
    audioScripts: {
      urdu: "[proud] Criminal charge۔ Court case۔ [confident] میں نے ٢٠+ صفحات کا brief لکھا۔ [excited] Brilliant۔ Legal reasoning۔ Case law۔ تمام arguments۔ [determined] میں جانتا تھا کہ میں جیت سکتا ہوں۔ [devastated] پھر... court date۔ [adhd] میں... بھول گیا۔ Print کرنا بھول گیا۔ [broken] ٢٠ صفحات۔ Perfect brief۔ [hollow] لیکن یہ میرے computer میں تھا۔ میرے ہاتھ میں نہیں۔ [defeated] یہی ADHD ہے۔ Brilliant... لیکن نہیں کر سکتا۔ [sad] Potential... ضائع۔",

      english: "[proud] Criminal charge. Court case. [confident] I wrote a twenty-plus page brief. [excited] Brilliant. Legal reasoning. Case law. All the arguments. [determined] I knew I could win. [devastated] Then... court date. [adhd] I... forgot. Forgot to print it. [broken] Twenty pages. Perfect brief. [hollow] But it was on my computer. Not in my hands. [defeated] That's ADHD. Brilliant... but can't execute. [sad] Potential... wasted.",

      punjabi: "[proud] Criminal charge। Court case। [confident] ਮੈਂ ੨੦+ ਸਫ਼ਿਆਂ ਦਾ brief ਲਿਖਿਆ। [excited] Brilliant। Legal reasoning। Case law। ਸਾਰੇ arguments। [determined] ਮੈਂ ਜਾਣਦਾ ਸੀ ਕਿ ਮੈਂ ਜਿੱਤ ਸਕਦਾ ਹਾਂ। [devastated] ਫਿਰ... court date। [adhd] ਮੈਂ... ਭੁੱਲ ਗਿਆ। Print ਕਰਨਾ ਭੁੱਲ ਗਿਆ। [broken] ੨੦ ਸਫ਼ੇ। Perfect brief। [hollow] ਪਰ ਇਹ ਮੇਰੇ computer 'ਚ ਸੀ। ਮੇਰੇ ਹੱਥਾਂ 'ਚ ਨਹੀਂ। [defeated] ਇਹੀ ADHD ਹੈ। Brilliant... ਪਰ ਨਹੀਂ ਕਰ ਸਕਦਾ। [sad] Potential... ਬਰਬਾਦ।",

      danish: "[proud] Kriminel anklage. Retssag. [confident] Jeg skrev et tyve-plus siders indlæg. [excited] Genialt. Juridisk ræsonnement. Retspraksis. Alle argumenterne. [determined] Jeg vidste jeg kunne vinde. [devastated] Så... retsmødet. [adhd] Jeg... glemte. Glemte at printe det. [broken] Tyve sider. Perfekt indlæg. [hollow] Men det var på min computer. Ikke i mine hænder. [defeated] Det er ADHD. Genial... men kan ikke udføre. [sad] Potentiale... spildt."
    },
    textLines: [
      {
        urdu: "Criminal Charge → 20+ صفحات brief",
        english: "Criminal Charge → 20+ page brief",
        punjabi: "Criminal Charge → 20+ ਸਫ਼ੇ brief",
        danish: "Kriminel anklage → 20+ siders indlæg"
      },
      {
        urdu: "Brilliant۔ Legal reasoning۔ Perfect۔",
        english: "Brilliant. Legal reasoning. Perfect.",
        punjabi: "Brilliant। Legal reasoning। Perfect।",
        danish: "Genialt. Juridisk ræsonnement. Perfekt.",
        delay: 400
      },
      {
        urdu: "لیکن... print کرنا بھول گیا۔",
        english: "But... forgot to print.",
        punjabi: "ਪਰ... print ਕਰਨਾ ਭੁੱਲ ਗਿਆ।",
        danish: "Men... glemte at printe.",
        delay: 800
      },
      {
        urdu: "ADHD: Brilliant لیکن نہیں کر سکتا۔",
        english: "ADHD: Brilliant but can't execute.",
        punjabi: "ADHD: Brilliant ਪਰ ਨਹੀਂ ਕਰ ਸਕਦਾ।",
        danish: "ADHD: Genial men kan ikke udføre.",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-39.3-the-brief.jpg',
    textOverlay: 'BRILLIANT BUT BROKEN',
    timePeriod: '2024'
  },

  // Scene 40: THE PATTERN
  {
    id: 40,
    title: "THE PATTERN",
    audioScripts: {
      urdu: "[clear] میں نے pattern دیکھ لیا ہے۔ [sad] ہر بار جب میں نے غلطی کی... آپ ناراض ہوئے۔ [frustrated] ہر بار جب میں نے مدد مانگی... آپ نے control کیا۔ [honest] Urdu بولا... سزا ملی۔ Housing... حکم ملا۔ Projects... روکنے کا حکم۔ School... زور دیا۔ Credit cards... غصے میں بند کیے۔ Paise دیے... پھر blame کیا۔ [bitter] آپ نے تین ہزار لیے... پھر پوچھا \"ایک مہینے میں کوئی پیسے نہیں؟\" [defeated] جب میں نے کہا ghar میں رہنے سے problems ہیں... [defensive] آپ نے کہا \"تم blame کر رہے ہو۔\" [hurt] جب میں نے pattern دکھایا... [accused] \"تم victim بن رہے ہو۔ اپنی shortcomings کے لیے۔\" [strong] لیکن pattern کو نام دینا... blame نہیں ہے۔ [determined] یہ حل کرنے کی کوشش ہے۔ [clear] ہر بار... غصہ۔ سزا۔ Control۔ [sad] کبھی نہیں... سمجھنا۔ مدد۔ اعتماد۔ [resigned] یہ pattern... ٹوٹنا ضروری ہے۔ [hopeful] اور میں جانتا ہوں... آپ کو شاید کبھی نظر نہ آئے۔ [accepting] لیکن میں نے دیکھ لیا ہے۔ [determined] اور میں اب participate نہیں کر سکتا۔",
      english: "[clear] I see the pattern now. [sad] Every time I made a mistake... you got angry. [frustrated] Every time I asked for help... you controlled. [honest] Spoke Urdu... punished. Housing... ordered. Projects... demanded I stop. School... pushed. Credit cards... closed in anger. Gave money... then blamed. [bitter] You took three thousand... then asked \"No money after a month?\" [defeated] When I said living at home creates problems... [defensive] You said \"You're blaming.\" [hurt] When I showed the pattern... [accused] \"You're victimizing yourself. For your own shortfalls.\" [strong] But naming the pattern... is not blame. [determined] It's trying to solve it. [clear] Every time... anger. Punishment. Control. [sad] Never... understanding. Help. Trust. [resigned] This pattern... has to break. [hopeful] And I know... you may never see it. [accepting] But I see it now. [determined] And I can't participate anymore.",
      punjabi: "[clear] ਮੈਂ pattern ਦੇਖ ਲਿਆ ਹੈ। [sad] ਹਰ ਵਾਰ ਜਦੋਂ ਮੈਂ ਗਲਤੀ ਕੀਤੀ... ਤੁਸੀਂ ਗੁੱਸਾ ਹੋਏ। [frustrated] ਹਰ ਵਾਰ ਜਦੋਂ ਮੈਂ ਮਦਦ ਮੰਗੀ... ਤੁਸੀਂ control ਕੀਤਾ। [honest] Urdu ਬੋਲਿਆ... ਸਜ਼ਾ ਮਿਲੀ। Housing... ਹੁਕਮ ਮਿਲਿਆ। Projects... ਰੋਕਣ ਦਾ ਹੁਕਮ। School... ਜ਼ੋਰ ਦਿੱਤਾ। Credit cards... ਗੁੱਸੇ 'ਚ ਬੰਦ ਕੀਤੇ। Paise ਦਿੱਤੇ... ਫਿਰ blame ਕੀਤਾ। [bitter] ਤੁਸੀਂ ਤਿੰਨ ਹਜ਼ਾਰ ਲਏ... ਫਿਰ ਪੁੱਛਿਆ \"ਇੱਕ ਮਹੀਨੇ 'ਚ ਕੋਈ ਪੈਸੇ ਨਹੀਂ?\" [defeated] ਜਦੋਂ ਮੈਂ ਕਿਹਾ ਘਰ 'ਚ ਰਹਿਣ ਨਾਲ problems ਹਨ... [defensive] ਤੁਸੀਂ ਕਿਹਾ \"ਤੁਸੀਂ blame ਕਰ ਰਹੇ ਹੋ।\" [hurt] ਜਦੋਂ ਮੈਂ pattern ਦਿਖਾਇਆ... [accused] \"ਤੁਸੀਂ victim ਬਣ ਰਹੇ ਹੋ। ਆਪਣੀਆਂ shortcomings ਲਈ।\" [strong] ਪਰ pattern ਨੂੰ ਨਾਂ ਦੇਣਾ... blame ਨਹੀਂ ਹੈ। [determined] ਇਹ ਹੱਲ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਹੈ। [clear] ਹਰ ਵਾਰ... ਗੁੱਸਾ। ਸਜ਼ਾ। Control। [sad] ਕਦੇ ਨਹੀਂ... ਸਮਝਣਾ। ਮਦਦ। ਭਰੋਸਾ। [resigned] ਇਹ pattern... ਟੁੱਟਣਾ ਜ਼ਰੂਰੀ ਹੈ। [hopeful] ਅਤੇ ਮੈਂ ਜਾਣਦਾ ਹਾਂ... ਤੁਹਾਨੂੰ ਸ਼ਾਇਦ ਕਦੇ ਨਜ਼ਰ ਨਾ ਆਵੇ। [accepting] ਪਰ ਮੈਂ ਦੇਖ ਲਿਆ ਹੈ। [determined] ਅਤੇ ਮੈਂ ਹੁਣ participate ਨਹੀਂ ਕਰ ਸਕਦਾ।",
      danish: "[clear] Jeg ser mønstret nu. [sad] Hver gang jeg lavede en fejl... blev du vred. [frustrated] Hver gang jeg bad om hjælp... kontrollerede du. [honest] Talte urdu... straffet. Bolig... beordret. Projekter... krævede jeg stopper. Skole... presset. Kreditkort... lukket i vrede. Gav penge... så skældt ud. [bitter] Du tog tre tusind... så spurgte \"Ingen penge efter en måned?\" [defeated] Da jeg sagde at bo hjemme skaber problemer... [defensive] Du sagde \"Du giver andre skylden.\" [hurt] Da jeg viste mønstret... [accused] \"Du ofrer dig selv. For dine egne mangler.\" [strong] Men at navngive mønstret... er ikke at give skylden. [determined] Det er at prøve at løse det. [clear] Hver gang... vrede. Straf. Kontrol. [sad] Aldrig... forståelse. Hjælp. Tillid. [resigned] Dette mønster... skal brydes. [hopeful] Og jeg ved... du måske aldrig ser det. [accepting] Men jeg ser det nu. [determined] Og jeg kan ikke deltage længere."
    },
    textLines: [
      {
        urdu: "pattern دیکھ لیا: ہر بار غصہ، control",
        english: "I see the pattern: every time anger, control",
        punjabi: "Pattern ਦੇਖ ਲਿਆ: ਹਰ ਵਾਰ ਗੁੱਸਾ, control",
        danish: "Jeg ser mønstret: hver gang vrede, kontrol"
      },
      {
        urdu: "کبھی نہیں: سمجھنا، مدد، اعتماد",
        english: "Never: understanding, help, trust",
        punjabi: "ਕਦੇ ਨਹੀਂ: ਸਮਝਣਾ, ਮਦਦ, ਭਰੋਸਾ",
        danish: "Aldrig: forståelse, hjælp, tillid",
        delay: 400
      },
      {
        urdu: "$3000 لیے → \"کوئی پیسے نہیں؟\"",
        english: "Took $3000 → \"No money?\"",
        punjabi: "$3000 ਲਏ → \"ਕੋਈ ਪੈਸੇ ਨਹੀਂ?\"",
        danish: "Tog $3000 → \"Ingen penge?\"",
        delay: 800
      },
      {
        urdu: "جب میں کہتا ہوں → \"تم blame کر رہے ہو\"",
        english: "When I explain → \"You're blaming\"",
        punjabi: "ਜਦੋਂ ਮੈਂ ਕਹਿੰਦਾ → \"ਤੁਸੀਂ blame ਕਰ ਰਹੇ\"",
        danish: "Når jeg forklarer → \"Du giver skylden\"",
        delay: 1200
      },
      {
        urdu: "pattern کو نام دینا ≠ blame",
        english: "Naming the pattern ≠ blame",
        punjabi: "Pattern ਨੂੰ ਨਾਂ ਦੇਣਾ ≠ blame",
        danish: "At navngive mønstret ≠ skyld",
        delay: 1600
      },
      {
        urdu: "یہ حل کرنے کی کوشش ہے",
        english: "It's trying to solve it",
        punjabi: "ਇਹ ਹੱਲ ਕਰਨ ਦੀ ਕੋਸ਼ਿਸ਼ ਹੈ",
        danish: "Det er at prøve at løse det",
        delay: 2000
      },
      {
        urdu: "آپ کو شاید کبھی نظر نہ آئے",
        english: "You may never see it",
        punjabi: "ਤੁਹਾਨੂੰ ਸ਼ਾਇਦ ਕਦੇ ਨਜ਼ਰ ਨਾ ਆਵੇ",
        danish: "Du ser det måske aldrig",
        delay: 2400
      },
      {
        urdu: "لیکن میں نے دیکھ لیا ہے",
        english: "But I see it now",
        punjabi: "ਪਰ ਮੈਂ ਦੇਖ ਲਿਆ ਹੈ",
        danish: "Men jeg ser det nu",
        delay: 2800
      },
      {
        urdu: "اور میں اب participate نہیں کر سکتا",
        english: "And I can't participate anymore",
        punjabi: "ਅਤੇ ਮੈਂ ਹੁਣ participate ਨਹੀਂ ਕਰ ਸਕਦਾ",
        danish: "Og jeg kan ikke deltage længere",
        delay: 3200
      }
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-40-the-pattern.jpg',
    textOverlay: 'THE PATTERN BREAKS',
    timePeriod: 'NOW'
  }
];
