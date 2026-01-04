import { SceneData } from '../types';

/**
 * ACT 2: THE SPLIT SELF (Scenes 6-12)
 * ADHD diagnosis, medication, high school success, fire factory gambling
 */

export const act2Scenes: SceneData[] = [
  // Scene 2: THE HIDDEN ENTREPRENEUR
  {
    id: 2,
    title: "THE HIDDEN ENTREPRENEUR",
    audioScripts: {
      urdu: "[curious] جب میں school میں fail ہو رہا تھا... کچھ اور ہو رہا تھا۔ [secretive] گیارہ سال کی عمر میں... میں نے خود سیکھا کہ iPhone کیسے jailbreak کرتے ہیں۔ [proud] چودہ سال کی عمر میں... میں business چلا رہا تھا۔ $٢٠ لیتا تھا۔ Kijiji پے add لگایا۔ [amazed] ایک دن میں تین replies آئے۔ میں business کر رہا تھا۔",
      english: "[curious] While I was failing school... something else was happening. [secretive] At age eleven... I taught myself how to jailbreak iPhones. [proud] By age fourteen... I was running a business. Charging twenty dollars. Ads on Kijiji. [amazed] Got three replies in a single day. I was in business.",
      punjabi: "[curious] ਜਦੋਂ ਮੈਂ school 'ਚ fail ਹੋ ਰਿਹਾ ਸੀ... ਕੁਝ ਹੋਰ ਹੋ ਰਿਹਾ ਸੀ। [secretive] ਗਿਆਰਾਂ ਸਾਲ ਦੀ ਉਮਰ 'ਚ... ਮੈਂ ਖੁਦ ਸਿੱਖਿਆ ਕਿ iPhone ਕਿਵੇਂ jailbreak ਕਰਦੇ ਨੇ। [proud] ਚੌਦਾਂ ਸਾਲ ਦੀ ਉਮਰ 'ਚ... ਮੈਂ business ਚਲਾ ਰਿਹਾ ਸੀ। $੨੦ ਲੈਂਦਾ ਸੀ। Kijiji 'ਤੇ add ਲਗਾਇਆ। [amazed] ਇੱਕ ਦਿਨ 'ਚ ਤਿੰਨ replies ਆਏ। ਮੈਂ business ਕਰ ਰਿਹਾ ਸੀ।",
      danish: "[curious] Mens jeg dumpede i skolen... skete der noget andet. [secretive] Som elleveårig... lærte jeg mig selv at jailbreake iPhones. [proud] Som fjortenårig... drev jeg en forretning. Tog tyve dollars. Annoncer på Kijiji. [amazed] Fik tre svar på én dag. Jeg var i gang."
    },
    textLines: [
      {
        urdu: "11 سال کی عمر: Jailbreaking سیکھا",
        english: "Age 11: Taught myself jailbreaking",
        punjabi: "11 ਸਾਲ ਦੀ ਉਮਰ: Jailbreaking ਸਿੱਖਿਆ",
        danish: "Alder 11: Lærte mig selv jailbreaking"
      },
      {
        urdu: "14 سال کی عمر: Business شروع کیا",
        english: "Age 14: Running a business",
        punjabi: "14 ਸਾਲ ਦੀ ਉਮਰ: Business ਸ਼ੁਰੂ ਕੀਤਾ",
        danish: "Alder 14: Drev en forretning",
        delay: 400
      },
      {
        urdu: "$20 فی فون۔ 3 replies روزانہ۔",
        english: "$20/phone. 3 replies/day.",
        punjabi: "$20/ਫੋਨ। 3 replies ਰੋਜ਼ਾਨਾ।",
        danish: "$20/telefon. 3 svar/dag.",
        delay: 800
      },
      {
        urdu: "سکول فیل... بزنس پاس۔",
        english: "Failing school... acing business.",
        punjabi: "ਸਕੂਲ fail... business ਪਾਸ।",
        danish: "Dumpede skolen... kørte forretning.",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-02-hidden-entrepreneur.jpg',
    textOverlay: 'HIDDEN GENIUS',
    timePeriod: '2008-2011'
  },

  // Scene 3: THE SPECTATOR
  {
    id: 3,
    title: "THE SPECTATOR",
    audioScripts: {
      urdu: "[proud] July ٢، ٢٠١١۔ The Hamilton Spectator۔ انہوں نے میرا interview لیا۔ [confident] میں نے کہا: \"Jailbreak تب کرو جب customize کرنا ہو۔\" [bold] دوسرے ڈرتے تھے اپنا نام دینے سے۔ میں نے دیا۔ Bilal Khalid، ١٤ سال۔ [passionate] Papa نے کہا gas station۔ میں اخبار میں quoted expert تھا۔",
      english: "[proud] July second, two thousand eleven. The Hamilton Spectator. They interviewed me. [confident] I said: \"You jailbreak if you want to customize.\" [bold] Others were scared to give their names. I gave mine. Bilal Khalid, age fourteen. [passionate] Papa said gas station. I was a quoted expert in the newspaper.",
      punjabi: "[proud] July ੨, ੨੦੧੧। The Hamilton Spectator। ਉਨ੍ਹਾਂ ਨੇ ਮੇਰਾ interview ਲਿਆ। [confident] ਮੈਂ ਕਿਹਾ: \"Jailbreak ਉਦੋਂ ਕਰੋ ਜਦੋਂ customize ਕਰਨਾ ਹੋਵੇ।\" [bold] ਬਾਕੀ ਡਰਦੇ ਸੀ ਆਪਣਾ ਨਾਮ ਦੇਣ ਤੋਂ। ਮੈਂ ਦਿੱਤਾ। Bilal Khalid, ੧੪ ਸਾਲ। [passionate] Papa ਨੇ ਕਿਹਾ gas station। ਮੈਂ ਅਖਬਾਰ 'ਚ quoted expert ਸੀ।",
      danish: "[proud] Anden juli, to tusind og elleve. The Hamilton Spectator. De interviewede mig. [confident] Jeg sagde: \"Man jailbreaker hvis man vil tilpasse.\" [bold] Andre var bange for at give deres navne. Jeg gav mit. Bilal Khalid, fjorten år. [passionate] Papa sagde tankstation. Jeg var citeret ekspert i avisen."
    },
    textLines: [
      {
        urdu: "The Hamilton Spectator: July 2, 2011",
        english: "The Hamilton Spectator: July 2, 2011",
        punjabi: "The Hamilton Spectator: July 2, 2011",
        danish: "The Hamilton Spectator: 2. juli 2011"
      },
      {
        urdu: "\"Jailbreak تب کرو جب customize کرنا ہو\"",
        english: "\"Jailbreak if you want to customize\"",
        punjabi: "\"Jailbreak ਉਦੋਂ ਕਰੋ ਜਦੋਂ customize ਕਰਨਾ ਹੋਵੇ\"",
        danish: "\"Jailbreak hvis du vil tilpasse\"",
        delay: 400
      },
      {
        urdu: "Bilal Khalid, عمر ١٤",
        english: "Bilal Khalid, Age 14",
        punjabi: "Bilal Khalid, ਉਮਰ ੧੪",
        danish: "Bilal Khalid, Alder 14",
        delay: 800
      },
      {
        urdu: "Drive کرنے سے پہلے CEO",
        english: "CEO before I could drive",
        punjabi: "Drive ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ CEO",
        danish: "CEO før jeg kunne køre",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-03-spectator.jpg',
    textOverlay: 'PUBLIC RECOGNITION',
    timePeriod: 'JULY 2, 2011'
  },

  // Scene 4: THE BANNED BUILDER
  {
    id: 4,
    title: "THE BANNED BUILDER",
    audioScripts: {
      urdu: "[energetic] پھر میں نے BilalTech شروع کیا۔ [proud] میں مہینے کا $١٠٠ کما رہا تھا۔ [shocked] پھر Google نے مجھے ban کر دیا... کیونکہ میں ١٣ سال سے چھوٹا تھا۔ [resilient] میں نے BilalTechHD بنایا۔ وہ بھی ban ہو گیا۔ [determined] میں رکا نہیں۔ میں نے iPhoneKingKhalid بنایا۔ [bitter] ایسا لگا جیسے system ہی مجھے روک رہا ہو۔ کامیاب ہونے سے پہلے ہی۔ [determined] وہ مجھے نہیں دیکھ سکتے تھے... لیکن میں ابھی بھی بنا رہا تھا۔",
      english: "[energetic] Then I started BilalTech. [proud] I was making a hundred dollars a month. [shocked] Then Google banned me... because I was under thirteen. [resilient] I made BilalTechHD. That got banned too. [determined] I didn't stop. I made iPhoneKingKhalid. [bitter] It felt like the system itself was stopping me. Before I could even succeed. [determined] They couldn't see me... but I was still building.",
      punjabi: "[energetic] ਫਿਰ ਮੈਂ BilalTech ਸ਼ੁਰੂ ਕੀਤਾ। [proud] ਮੈਂ ਮਹੀਨੇ ਦਾ $١٠٠ ਕਮਾ ਰਿਹਾ ਸੀ। [shocked] ਫਿਰ Google ਨੇ ਮੈਨੂੰ ban ਕਰ ਦਿੱਤਾ... ਕਿਉਂਕਿ ਮੈਂ ١٣ ਸਾਲ ਤੋਂ ਛੋਟਾ ਸੀ। [resilient] ਮੈਂ BilalTechHD ਬਣਾਇਆ। ਉਹ ਵੀ ban ਹੋ ਗਿਆ। [determined] ਮੈਂ ਰੁਕਿਆ ਨਹੀਂ। ਮੈਂ iPhoneKingKhalid ਬਣਾਇਆ। [bitter] ਇੰਝ ਲੱਗਾ ਜਿਵੇਂ system ਹੀ ਮੈਨੂੰ ਰੋਕ ਰਿਹਾ ਹੋਵੇ। ਕਾਮਯਾਬ ਹੋਣ ਤੋਂ ਪਹਿਲਾਂ ਹੀ। [determined] ਉਹ ਮੈਨੂੰ ਦੇਖ ਨਹੀਂ ਸਕਦੇ ਸੀ... ਪਰ ਮੈਂ ਅਜੇ ਵੀ ਬਣਾ ਰਿਹਾ ਸੀ।",
      danish: "[energetic] Så startede jeg BilalTech. [proud] Jeg tjente hundrede dollars om måneden. [shocked] Så bannede Google mig... fordi jeg var under tretten. [resilient] Jeg lavede BilalTechHD. Det blev også bannet. [determined] Jeg stoppede ikke. Jeg lavede iPhoneKingKhalid. [bitter] Det føltes som om systemet stoppede mig. Før jeg overhovedet kunne lykkes. [determined] De kunne ikke se mig... men jeg byggede stadig."
    },
    textLines: [
      {
        urdu: "BilalTech: $100/month (Banned)",
        english: "BilalTech: $100/month (Banned)",
        punjabi: "BilalTech: $100/ਮਹੀਨਾ (Banned)",
        danish: "BilalTech: $100/måned (Banned)"
      },
      {
        urdu: "BilalTechHD -> iPhoneKingKhalid",
        english: "BilalTechHD -> iPhoneKingKhalid",
        punjabi: "BilalTechHD -> iPhoneKingKhalid",
        danish: "BilalTechHD -> iPhoneKingKhalid",
        delay: 400
      },
      {
        urdu: "بار بار کوشش۔ بار بار Ban۔",
        english: "Tried again. Banned again.",
        punjabi: "ਵਾਰ ਵਾਰ ਕੋਸ਼ਿਸ਼। ਵਾਰ ਵਾਰ Ban।",
        danish: "Prøvede igen. Bannet igen.",
        delay: 800
      },
      {
        urdu: "سسٹم نے روکا۔",
        english: "The system stopped me.",
        punjabi: "ਸਿਸਟਮ ਨੇ ਰੋਕਿਆ।",
        danish: "Systemet stoppede mig.",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-04-digital-creator.jpg',
    textOverlay: 'SYSTEM BLOCKED',
    timePeriod: '2012'
  },

  // Scene 4.5: THE MISSED FORTUNES
  {
    id: 4.5,
    title: "THE MISSED FORTUNES",
    audioScripts: {
      urdu: "[frustrated] یہ صرف میرے projects نہیں تھے۔ [earnest] میں نے Papa کو کہا Tesla میں invest کریں۔ انہوں نے تیل (oil) خریدا۔ پیسے ڈوب گئے۔ [thoughtful] میں نے Dogecoin بھی خریدا تھا۔ میں نے ان کو کہا خریدیں۔ انہوں نے وہ بھی dismiss کر دیا۔ [sad] لیکن... میں نے اپنا Dogecoin بیچ دیا۔ کیوں؟ [shame] کیونکہ مجھے school میں دوستوں کے ساتھ کھانا کھانے کے لیے پیسے چاہیے تھے۔ [bitter] بھوک اور survival نے مجھے future بیچنے پے مجبور کر دیا۔",
      english: "[frustrated] It wasn't just my projects. [earnest] I told Papa to invest in Tesla. He bought oil instead. Lost the money. [thoughtful] I even bought Dogecoin. I told him to buy some. He dismissed that too. [sad] But... I sold my Dogecoin. Why? [shame] Because I needed money to get food with my friends at school. [bitter] Hunger and basic survival forced me to sell the future.",
      punjabi: "[frustrated] ਇਹ ਸਿਰਫ਼ ਮੇਰੇ projects ਨਹੀਂ ਸਨ। [earnest] ਮੈਂ Papa ਨੂੰ ਕਿਹਾ Tesla 'ਚ invest ਕਰੋ। ਉਨ੍ਹਾਂ ਨੇ ਤੇਲ (oil) ਖਰੀਦਿਆ। ਪੈਸੇ ਡੁੱਬ ਗਏ। [thoughtful] ਮੈਂ Dogecoin ਵੀ ਖਰੀਦਿਆ ਸੀ। ਮੈਂ ਉਨ੍ਹਾਂ ਨੂੰ ਕਿਹਾ ਖਰੀਦੋ। ਉਨ੍ਹਾਂ ਨੇ ਉਹ ਵੀ dismiss ਕਰ ਦਿੱਤਾ। [sad] ਪਰ... ਮੈਂ ਆਪਣਾ Dogecoin ਵੇਚ ਦਿੱਤਾ। ਕਿਉਂ? [shame] ਕਿਉਂਕਿ ਮੈਨੂੰ school 'ਚ ਦੋਸਤਾਂ ਨਾਲ ਖਾਣਾ ਖਾਣ ਲਈ ਪੈਸੇ ਚਾਹੀਦੇ ਸਨ। [bitter] ਭੁੱਖ ਅਤੇ survival ਨੇ ਮੈਨੂੰ future ਵੇਚਣ 'ਤੇ ਮਜਬੂਰ ਕਰ ਦਿੱਤਾ।",
      danish: "[frustrated] Det var ikke kun mine projekter. [earnest] Jeg fortalte Papa, at han skulle investere i Tesla. Han købte olie i stedet. Tabte pengene. [thoughtful] Jeg købte endda Dogecoin. Jeg sagde til ham, han skulle købe noget. Han afviste også det. [sad] Men... jeg solgte min Dogecoin. Hvorfor? [shame] Fordi jeg havde brug for penge til at købe mad med mine venner i skolen. [bitter] Sult og overlevelse tvang mig til at sælge fremtiden."
    },
    textLines: [
      {
        urdu: "Papa کو مشورہ: Tesla (Ignored)",
        english: "Advice to Papa: Tesla (Ignored)",
        punjabi: "Papa ਨੂੰ ਸਲਾਹ: Tesla (Ignored)",
        danish: "Råd til Papa: Tesla (Ignoreret)"
      },
      {
        urdu: "Dogecoin خریدا (Dismissed)",
        english: "Bought Dogecoin (Dismissed)",
        punjabi: "Dogecoin ਖਰੀਦਿਆ (Dismissed)",
        danish: "Købte Dogecoin (Afvist)",
        delay: 400
      },
      {
        urdu: "Dogecoin بیچا... کھانے کے لیے",
        english: "Sold Dogecoin... for food",
        punjabi: "Dogecoin ਵੇਚਿਆ... ਖਾਣੇ ਲਈ",
        danish: "Solgte Dogecoin... til mad",
        delay: 800
      },
      {
        urdu: "Survival > Future Wealth",
        english: "Survival > Future Wealth",
        punjabi: "Survival > Future Wealth",
        danish: "Overlevelse > Fremtidig rigdom",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-04.5-tesla-oil.jpg',
    textOverlay: 'MISSED FORTUNES',
    timePeriod: '2013-2014'
  },

  // Scene 5: THE REJECTION
  {
    id: 5,
    title: "THE REJECTION",
    audioScripts: {
      urdu: "[sad] High school میں وہی کہانی۔ ہر سال فیل ہوتا رہا۔ [frustrated] اساتذہ نے سستی دیکھی۔ یہ ADHD تھا۔ [defeated] گریڈ ١٢ میں، میں نے Brock University کے لیے apply کیا۔ [heartbroken] Reject ہو گیا۔ [echoing] Papa کی پیشین گوئی سچ لگ رہی تھی۔",
      english: "[sad] High school was the same story. Failed every year. [frustrated] Teachers saw laziness. It was ADHD. [defeated] In grade twelve, I applied to Brock University. [heartbroken] Rejected. [echoing] Papa's prediction felt like it was coming true.",
      punjabi: "[sad] High school 'ਚ ਉਹੀ ਕਹਾਣੀ। ਹਰ ਸਾਲ fail ਹੁੰਦਾ ਰਿਹਾ। [frustrated] ਅਧਿਆਪਕਾਂ ਨੇ ਸੁਸਤੀ ਦੇਖੀ। ਇਹ ADHD ਸੀ। [defeated] Grade ੧੨ 'ਚ, ਮੈਂ Brock University ਲਈ apply ਕੀਤਾ। [heartbroken] Reject ਹੋ ਗਿਆ। [echoing] Papa ਦੀ ਭਵਿੱਖਬਾਣੀ ਸੱਚ ਲੱਗ ਰਹੀ ਸੀ।",
      danish: "[sad] High school var samme historie. Dumpede hvert år. [frustrated] Lærere så dovenskab. Det var ADHD. [defeated] I tolvte klasse søgte jeg ind på Brock University. [heartbroken] Afvist. [echoing] Papas forudsigelse føltes som om den gik i opfyldelse."
    },
    textLines: [
      {
        urdu: "ہر سال فیل (دوبارہ)",
        english: "Failed every year (again)",
        punjabi: "ਹਰ ਸਾਲ fail (ਦੁਬਾਰਾ)",
        danish: "Dumpede hvert år (igen)"
      },
      {
        urdu: "Brock University: Rejected",
        english: "Brock University: Rejected",
        punjabi: "Brock University: Rejected",
        danish: "Brock University: Afvist",
        delay: 400
      },
      {
        urdu: "اساتذہ نے سستی دیکھی",
        english: "Teachers saw laziness",
        punjabi: "ਅਧਿਆਪਕਾਂ ਨੇ ਸੁਸਤੀ ਦੇਖੀ",
        danish: "Lærere så dovenskab",
        delay: 800
      },
      {
        urdu: "Papa کی پیشن گوئی...",
        english: "Papa's prediction...",
        punjabi: "Papa ਦੀ ਭਵਿੱਖਬਾਣੀ...",
        danish: "Papas forudsigelse...",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-05-rejection.jpg',
    textOverlay: 'REJECTED',
    timePeriod: '2012-2014'
  },

  // Scene 6: ADDERALL DISCOVERY
  {
    id: 6,
    title: "ADDERALL DISCOVERY",
    audioScripts: {
      urdu: "[thoughtful] Grade ١١۔ سب کچھ بدل گیا۔ [exhales] میں نے پہلی دفعہ Adderall try کیا۔ [amazed] اور... پہلی دفعہ اپنی پوری زندگی میں... میں نے محسوس کیا کہ ایک normal انسان کی طرح focus کرنا کیسا لگتا ہے۔ [emotional] یہ جادو نہیں تھا۔ [determined] یہ دوا تھی۔ میرا دماغ... finally... ویسے کام کر رہا تھا جیسے آپ کا naturally کرتا ہے۔",
      english: "[thoughtful] Grade eleven. Everything changed. [exhales] I tried Adderall for the first time. [amazed] And... for the first time in my entire life... I felt what it's like to focus like a normal person. [emotional] This wasn't magic. [determined] This was medicine. My brain... finally... was working the way yours does naturally.",
      punjabi: "[thoughtful] Grade ੧੧। ਸਭ ਕੁਝ ਬਦਲ ਗਿਆ। [exhales] ਮੈਂ ਪਹਿਲੀ ਵਾਰ Adderall try ਕੀਤਾ। [amazed] ਅਤੇ... ਆਪਣੀ ਪੂਰੀ ਜ਼ਿੰਦਗੀ 'ਚ ਪਹਿਲੀ ਵਾਰ... ਮੈਂ ਮਹਿਸੂਸ ਕੀਤਾ ਕਿ ਇੱਕ ਆਮ ਇਨਸਾਨ ਵਾਂਗ focus ਕਰਨਾ ਕਿਵੇਂ ਲੱਗਦਾ ਹੈ। [emotional] ਇਹ ਜਾਦੂ ਨਹੀਂ ਸੀ। [determined] ਇਹ ਦਵਾਈ ਸੀ। ਮੇਰਾ ਦਿਮਾਗ... ਆਖਿਰਕਾਰ... ਉਵੇਂ ਕੰਮ ਕਰ ਰਿਹਾ ਸੀ ਜਿਵੇਂ ਤੁਹਾਡਾ naturally ਕਰਦਾ ਹੈ।",
      danish: "[thoughtful] Elvte klasse. Alt ændrede sig. [exhales] Jeg prøvede Adderall for første gang. [amazed] Og... for første gang i hele mit liv... mærkede jeg hvordan det er at fokusere som et normalt menneske. [emotional] Dette var ikke magi. [determined] Dette var medicin. Min hjerne... endelig... fungerede på den måde, din gør naturligt."
    },
    textLines: [
      {
        urdu: "Grade ١١: پہلی دفعہ Adderall",
        english: "Grade 11: First time Adderall",
        punjabi: "Grade ੧੧: ਪਹਿਲੀ ਵਾਰ Adderall",
        danish: "11. klasse: Første gang Adderall"
      },
      {
        urdu: "پہلی دفعہ عام انسان کی طرح focus",
        english: "First time focusing like a normal person",
        punjabi: "ਪਹਿਲੀ ਵਾਰ ਆਮ ਇਨਸਾਨ ਵਾਂਗ focus",
        danish: "Første gang at fokusere som normalt",
        delay: 400
      },
      {
        urdu: "جادو نہیں۔ دوا تھی۔",
        english: "Not magic. Medicine.",
        punjabi: "ਜਾਦੂ ਨਹੀਂ। ਦਵਾਈ ਸੀ।",
        danish: "Ikke magi. Medicin.",
        delay: 800
      },
      {
        urdu: "میرا دماغ آخرکار کام کر رہا تھا۔",
        english: "My brain was finally working.",
        punjabi: "ਮੇਰਾ ਦਿਮਾਗ ਆਖਿਰਕਾਰ ਕੰਮ ਕਰ ਰਿਹਾ ਸੀ।",
        danish: "Min hjerne fungerede endelig.",
        delay: 1200
      },
    ],
    visualStyle: 'abstract',
    backgroundImage: '/images/scene-06-adderall-discovery.jpg',
    textOverlay: 'THE FIRST TIME',
    timePeriod: 'GRADE 11, 2014'
  },
  // Scene 7: SELF-DIAGNOSIS
  {
    id: 7,
    title: "SELF-DIAGNOSIS",
    audioScripts: {
      urdu: "[determined] میں نے خود کو diagnose کیا ADHD کے ساتھ۔ ایک teenager نے وہ کیا... جو اس کے ارد گرد ہر adult کرنے میں fail ہو گیا۔ [proud] میں Dr. Slataroff کے پاس گیا اور مجھے Vyvanse بیس milligrams prescribe ہوئی۔ [amazed] تبدیلی... فوران تھی۔ Dramatic تھی۔ میں کبھی اپنی زندگی میں ستر percent نہیں پایا... اور اب چورانوے percent average۔ [triumphant] Grade ١٣ تک: پچانوے point چھے percent! President's Gold Scholarship! [emotional] میں نے خود کو بچایا۔ [crying] میں نے خود اپنے آپ کو بچایا۔ اکیلے۔",

      english: "[determined] I diagnosed myself with ADHD. A teenager did what... every adult around him failed to do. [proud] I went to Dr. Slataroff and got prescribed Vyvanse, twenty milligrams. [amazed] The change... was immediate. Dramatic. I'd never hit seventy percent in my life... and now ninety-four percent average. [triumphant] By grade thirteen: ninety-five point six percent! President's Gold Scholarship! [emotional] I saved myself. [crying] I saved myself. Alone.",

      punjabi: "[determined] ਮੈਂ ਆਪਣੇ-ਆਪ ਨੂੰ ADHD ਨਾਲ diagnose ਕੀਤਾ। ਇੱਕ teenager ਨੇ ਉਹ ਕੀਤਾ... ਜੋ ਉਸ ਦੇ ਆਲੇ-ਦੁਆਲੇ ਹਰ ਬਾਲਗ ਕਰਨ 'ਚ fail ਹੋਇਆ। [proud] ਮੈਂ Dr. Slataroff ਕੋਲ ਗਿਆ ਅਤੇ ਮੈਨੂੰ Vyvanse, ਵੀਹ milligrams prescribe ਹੋਈ। [amazed] ਤਬਦੀਲੀ... ਫੌਰੀ ਸੀ। Dramatic ਸੀ। ਮੈਂ ਕਦੇ ਆਪਣੀ ਜ਼ਿੰਦਗੀ 'ਚ ਸੱਤਰ percent ਨਹੀਂ ਪਾਇਆ... ਅਤੇ ਹੁਣ ਚੌਰਾਨਵੇਂ percent average। [triumphant] Grade ੧੩ ਤੱਕ: ਪਚਾਨਵੇਂ point ਛੇ percent! President's Gold Scholarship! [emotional] ਮੈਂ ਆਪਣੇ-ਆਪ ਨੂੰ ਬਚਾਇਆ। [crying] ਮੈਂ ਆਪਣੇ-ਆਪ ਨੂੰ ਬਚਾਇਆ। ਇਕੱਲੇ।",

      danish: "[determined] Jeg diagnosticerede mig selv med ADHD. En teenager gjorde hvad... enhver voksen omkring ham undlod at gøre. [proud] Jeg gik til Dr. Slataroff og fik ordineret Vyvanse, tyve milligram. [amazed] Forandringen... var øjeblikkelig. Dramatisk. Jeg havde aldrig ramt halvfjerds procent i mit liv... og nu fireoghalvfems procent i gennemsnit. [triumphant] I trettende klasse: femoghalvfems komma seks procent! President's Gold Scholarship! [emotional] Jeg reddede mig selv. [crying] Jeg reddede mig selv. Alene."
    },
    textLines: [
      {
        urdu: "میں نے خود ADHD کی تشخیص کی",
        english: "I self-diagnosed ADHD",
        punjabi: "ਮੈਂ ਆਪਣੇ-ਆਪ ADHD diagnose ਕੀਤਾ",
        danish: "Jeg selvdiagnosticerede ADHD"
      },
      {
        urdu: "Dr. Slataroff: Vyvanse ٢٠mg",
        english: "Dr. Slataroff: Vyvanse 20mg",
        punjabi: "Dr. Slataroff: Vyvanse ੨੦mg",
        danish: "Dr. Slataroff: Vyvanse 20mg",
        delay: 400
      },
      {
        urdu: "کبھی ٧٠٪ نہیں → ٩٤٪ → ٩٥.٦٪",
        english: "Never 70% → 94% → 95.6%",
        punjabi: "ਕਦੇ ੭੦% ਨਹੀਂ → ੯੪% → ੯੫.੬%",
        danish: "Aldrig 70% → 94% → 95,6%",
        delay: 800
      },
      {
        urdu: "میں نے خود کو بچایا۔ اکیلے۔",
        english: "I saved myself. Alone.",
        punjabi: "ਮੈਂ ਆਪਣੇ-ਆਪ ਨੂੰ ਬਚਾਇਆ। ਇਕੱਲੇ।",
        danish: "Jeg reddede mig selv. Alene.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-07-self-diagnosis.jpg',
    textOverlay: 'SELF-RESCUE',
    timePeriod: '2014'
  },

  {
    id: 8,
    title: "THE IMPOSSIBLE ACCEPTANCE",
    audioScripts: {
      urdu: "[triumphant] مجھے accept کر لیا Waterloo-Laurier Double Degree میں! Business اور Computer Science۔ [amazed] صرف تیس log پوری دنیا میں آتے ہیں۔ [laughs] تیس! [emotional] وہی بچہ جسے Brock نے reject کیا تھا۔ وہی بچہ جس کے بارے میں آپ نے کہا تھا gas station پے کام کرے گا۔ [proud] اب... دنیا کے سب سے competitive programs میں سے ایک میں۔ [defiant] کسی نے مدد نہیں کی۔ میں نے خود پتہ لگایا۔ اکیلے۔",

      english: "[triumphant] I got accepted into the Waterloo-Laurier Double Degree! Business and Computer Science. [amazed] Only thirty people in the entire world get in. [laughs] Thirty! [emotional] The same kid Brock rejected. The same kid you said would work at a gas station. [proud] Now... in one of the world's most competitive programs. [defiant] Nobody helped. I figured it out myself. Alone.",

      punjabi: "[triumphant] ਮੈਨੂੰ Waterloo-Laurier Double Degree 'ਚ accept ਕਰ ਲਿਆ! Business ਅਤੇ Computer Science। [amazed] ਸਿਰਫ਼ ਤੀਹ ਲੋਕ ਪੂਰੀ ਦੁਨੀਆਂ 'ਚ ਆਉਂਦੇ ਹਨ। [laughs] ਤੀਹ! [emotional] ਉਹੀ ਬੱਚਾ ਜਿਸਨੂੰ Brock ਨੇ reject ਕੀਤਾ ਸੀ। ਉਹੀ ਬੱਚਾ ਜਿਸ ਬਾਰੇ ਤੁਸੀਂ ਕਿਹਾ ਸੀ gas station 'ਤੇ ਕੰਮ ਕਰੇਗਾ। [proud] ਹੁਣ... ਦੁਨੀਆਂ ਦੇ ਸਭ ਤੋਂ competitive programs 'ਚੋਂ ਇੱਕ 'ਚ। [defiant] ਕਿਸੇ ਨੇ ਮਦਦ ਨਹੀਂ ਕੀਤੀ। ਮੈਂ ਆਪਣੇ-ਆਪ ਪਤਾ ਲਗਾਇਆ। ਇਕੱਲੇ।",

      danish: "[triumphant] Jeg blev optaget på Waterloo-Laurier Double Degree! Business og datalogi. [amazed] Kun tredive mennesker i hele verden kommer ind. [laughs] Tredive! [emotional] Det samme barn Brock afviste. Det samme barn du sagde ville arbejde på en tankstation. [proud] Nu... i et af verdens mest konkurrencedygtige programmer. [defiant] Ingen hjalp. Jeg fandt ud af det selv. Alene."
    },
    textLines: [
      {
        urdu: "Waterloo-Laurier Double Degree قبول",
        english: "Waterloo-Laurier Double Degree accepted",
        punjabi: "Waterloo-Laurier Double Degree ਮਨਜ਼ੂਰ",
        danish: "Waterloo-Laurier Double Degree optaget"
      },
      {
        urdu: "Business + Computer Science",
        english: "Business + Computer Science",
        punjabi: "Business + Computer Science",
        danish: "Business + Datalogi",
        delay: 400
      },
      {
        urdu: "صرف ٣٠ لوگ دنیا میں داخل ہوتے ہیں",
        english: "Only 30 people worldwide get in",
        punjabi: "ਸਿਰਫ਼ ੩੦ ਲੋਕ ਦੁਨੀਆਂ 'ਚ ਦਾਖਲ ਹੁੰਦੇ ਹਨ",
        danish: "Kun 30 mennesker verden over kommer ind",
        delay: 800
      },
      {
        urdu: "وہی بچہ جسے Brock نے مسترد کیا",
        english: "Same kid Brock rejected",
        punjabi: "ਉਹੀ ਬੱਚਾ ਜਿਸਨੂੰ Brock ਨੇ reject ਕੀਤਾ",
        danish: "Samme barn Brock afviste",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-08-waterloo-acceptance.jpg',
    textOverlay: 'TOP 30 IN THE WORLD',
    timePeriod: 'SPRING 2014'
  },

  {
    id: 9,
    title: "CAFETERIA DISCOVERY",
    audioScripts: {
      urdu: "[curious] Grade ١٣۔ Cafeteria میں بچے soccer games پے betting کی بات کر رہے تھے۔ [thoughtful] یہ پہلی دفعہ تھا جب میں نے سیکھا کہ online gambling exist کرتی ہے۔ [nervous laugh] میں نے اپنے دوست Bakht کو کہا، آدھا مذاق میں: \"یار، یہ شاید میری زندگی برباد کر دے گی۔\" [sighs] میں صحیح تھا۔",

      english: "[curious] Grade thirteen. Cafeteria kids were talking about betting on soccer games. [thoughtful] This was the first time I learned that online gambling even existed. [nervous laugh] I told my friend Bakht, half-joking: \"Man, this will probably ruin my life.\" [sighs] I was right.",

      punjabi: "[curious] Grade ੧੩। Cafeteria 'ਚ ਬੱਚੇ soccer games 'ਤੇ betting ਦੀ ਗੱਲ ਕਰ ਰਹੇ ਸਨ। [thoughtful] ਇਹ ਪਹਿਲੀ ਵਾਰ ਸੀ ਜਦੋਂ ਮੈਂ ਸਿੱਖਿਆ ਕਿ online gambling ਮੌਜੂਦ ਹੈ। [nervous laugh] ਮੈਂ ਆਪਣੇ ਦੋਸਤ Bakht ਨੂੰ ਕਿਹਾ, ਅੱਧਾ ਮਜ਼ਾਕ 'ਚ: \"ਯਾਰ, ਇਹ ਸ਼ਾਇਦ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਬਰਬਾਦ ਕਰ ਦੇਵੇਗੀ।\" [sighs] ਮੈਂ ਸਹੀ ਸੀ।",

      danish: "[curious] Trettende klasse. Cafeteria-børn talte om at vædde på fodboldkampe. [thoughtful] Dette var første gang jeg lærte, at online gambling overhovedet eksisterede. [nervous laugh] Jeg fortalte min ven Bakht, halvt i spøg: \"Mand, det her vil nok ødelægge mit liv.\" [sighs] Jeg havde ret."
    },
    textLines: [
      {
        urdu: "Grade ١٣ کیفے ٹیریا: بچے soccer پر شرط",
        english: "Grade 13 cafeteria: Kids betting on soccer",
        punjabi: "Grade ੧੩ cafeteria: ਬੱਚੇ soccer 'ਤੇ ਸ਼ਰਤ",
        danish: "13. klasse cafeteria: Børn vædder på fodbold"
      },
      {
        urdu: "پہلی دفعہ gambling کا علم",
        english: "First learned about gambling",
        punjabi: "ਪਹਿਲੀ ਵਾਰ gambling ਬਾਰੇ ਜਾਣਿਆ",
        danish: "Først lært om gambling",
        delay: 400
      },
      {
        urdu: "\"یہ شاید میری زندگی برباد کر دے گی\"",
        english: "\"This will probably ruin my life\"",
        punjabi: "\"ਇਹ ਸ਼ਾਇਦ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਬਰਬਾਦ ਕਰ ਦੇਵੇਗੀ\"",
        danish: "\"Det her vil nok ødelægge mit liv\"",
        delay: 800
      },
      {
        urdu: "میں صحیح تھا۔",
        english: "I was right.",
        punjabi: "ਮੈਂ ਸਹੀ ਸੀ।",
        danish: "Jeg havde ret.",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-09-cafeteria-gambling.jpg',
    textOverlay: 'THE FIRST SEED',
    timePeriod: 'GRADE 13, 2014'
  },

  {
    id: 10,
    title: "FIRE FACTORY ADDICTION",
    audioScripts: {
      urdu: "[thoughtful] University سے پہلے کی گرمیاں۔ میں اور میرا دوست Nauman... fire truck door factory میں کام کرتے تھے۔ [proud] میں exceptional تھا۔ جب باقی log دن میں دو doors ختم کرتے... میں لگاتار پانچ کرتا۔ میری paycheque چار سو dollar تھی۔ [nervous laugh] میں نے مزے کے لیے جوا کھیلا۔ بڑا جیتنا... رات کے آخر تک سب ہار جانا۔ [sighs] ہارنے کی depression نے مجھے withdraw کر دیا۔ میں نے کام پے زیادہ focus کیا... پیسے نہ ہونے کے درد کو بھولانے کے لیے۔ Extra shifts اٹھائے۔ Monday سے Wednesday... Friday سے Sunday کے اوپر... بارہ گھنٹے کی shifts۔ [exhausted] اسی گھنٹے ہر ہفتے۔ Paycheque بڑھ کے آٹھ... نو سو dollar۔ [defeated] سب جوا کھیلا۔ سب ہار گیا۔ بار بار۔ University شروع ہونے تک... [emotional] پوری گرمیاں اسی گھنٹے ہر ہفتے کام کرنے کے بعد... میرے bank account میں منفی دو سو سینتیس dollar تھے۔ [crying] منفی۔ جب مجھے school کے لیے بچانا تھا۔ [hurt] یہ pattern کی پہلی documented instance ہے۔ گھر پے رہ رہا تھا۔ Gambling active تھی۔ [whispers] خود کو تباہ کرنا شروع ہو گیا تھا۔",

      english: "[thoughtful] The summer before university. Me and my friend Nauman... worked at a fire truck door factory. [proud] I was exceptional. When others finished two doors a day... I consistently did five. My paycheque was four hundred dollars. [nervous laugh] I gambled for fun. Winning big... losing it all by end of night. [sighs] The depression of losing made me withdraw. I focused harder at work... to numb the pain of having no money. Picked up extra shifts. Monday through Wednesday... on top of Friday through Sunday... twelve-hour shifts. [exhausted] Eighty hours every week. Paycheque grew to eight... nine hundred dollars. [defeated] Gambled it all. Lost it all. Again and again. By the time university started... [emotional] After working eighty hours every week all summer... I had negative two hundred thirty-seven dollars in my bank account. [crying] Negative. When I was supposed to be saving for school. [hurt] This is the first documented instance of the pattern. Living at home. Gambling active. [whispers] Self-destruction had begun.",

      punjabi: "[thoughtful] University ਤੋਂ ਪਹਿਲਾਂ ਦੀ ਗਰਮੀ। ਮੈਂ ਅਤੇ ਮੇਰਾ ਦੋਸਤ Nauman... fire truck door factory 'ਚ ਕੰਮ ਕਰਦੇ ਸੀ। [proud] ਮੈਂ exceptional ਸੀ। ਜਦੋਂ ਬਾਕੀ ਦਿਨ 'ਚ ਦੋ doors ਖਤਮ ਕਰਦੇ... ਮੈਂ ਲਗਾਤਾਰ ਪੰਜ ਕਰਦਾ। ਮੇਰਾ paycheque ਚਾਰ ਸੌ dollar ਸੀ। [nervous laugh] ਮੈਂ ਮਜ਼ੇ ਲਈ ਜੂਆ ਖੇਡਿਆ। ਵੱਡਾ ਜਿੱਤਣਾ... ਰਾਤ ਦੇ ਅੰਤ ਤੱਕ ਸਭ ਹਾਰ ਜਾਣਾ। [sighs] ਹਾਰਨ ਦੀ depression ਨੇ ਮੈਨੂੰ withdraw ਕਰ ਦਿੱਤਾ। ਮੈਂ ਕੰਮ 'ਤੇ ਜ਼ਿਆਦਾ focus ਕੀਤਾ... ਪੈਸੇ ਨਾ ਹੋਣ ਦੇ ਦਰਦ ਨੂੰ ਭੁੱਲਾਉਣ ਲਈ। Extra shifts ਚੁੱਕੀਆਂ। Monday ਤੋਂ Wednesday... Friday ਤੋਂ Sunday ਦੇ ਉੱਪਰ... ਬਾਰਾਂ ਘੰਟੇ ਦੀਆਂ shifts। [exhausted] ਅੱਸੀ ਘੰਟੇ ਹਰ ਹਫ਼ਤੇ। Paycheque ਵਧ ਕੇ ਅੱਠ... ਨੌਂ ਸੌ dollar। [defeated] ਸਭ ਜੂਆ ਖੇਡਿਆ। ਸਭ ਹਾਰ ਗਿਆ। ਬਾਰ ਬਾਰ। University ਸ਼ੁਰੂ ਹੋਣ ਤੱਕ... [emotional] ਪੂਰੀ ਗਰਮੀ ਅੱਸੀ ਘੰਟੇ ਹਰ ਹਫ਼ਤੇ ਕੰਮ ਕਰਨ ਤੋਂ ਬਾਅਦ... ਮੇਰੇ bank account 'ਚ ਮਾਈਨਸ ਦੋ ਸੌ ਸੈਂਤੀ dollar ਸਨ। [crying] ਮਾਈਨਸ। ਜਦੋਂ ਮੈਨੂੰ school ਲਈ ਬਚਾਉਣਾ ਸੀ। [hurt] ਇਹ pattern ਦੀ ਪਹਿਲੀ documented instance ਹੈ। ਘਰ 'ਤੇ ਰਹਿ ਰਿਹਾ ਸੀ। Gambling active ਸੀ। [whispers] ਆਪਣੇ-ਆਪ ਨੂੰ ਤਬਾਹ ਕਰਨਾ ਸ਼ੁਰੂ ਹੋ ਗਿਆ ਸੀ।",

      danish: "[thoughtful] Sommeren før universitet. Mig og min ven Nauman... arbejdede på en brandbilfabrik. [proud] Jeg var exceptionel. Når andre færdiggjorde to døre om dagen... lavede jeg konsekvent fem. Min lønseddel var fire hundrede dollars. [nervous laugh] Jeg spillede for sjov. Vinde stort... tabe det hele inden nattens slutning. [sighs] Depressionen ved at tabe fik mig til at trække mig tilbage. Jeg fokuserede hårdere på arbejdet... for at bedøve smerten ved ikke at have penge. Tog ekstra vagter. Mandag til onsdag... oven i fredag til søndag... tolv-timers vagter. [exhausted] Firs timer hver uge. Lønseddel voksede til otte... ni hundrede dollars. [defeated] Spillede det hele. Tabte det hele. Igen og igen. Da universitetet startede... [emotional] Efter at arbejde firs timer hver uge hele sommeren... havde jeg minus to hundrede syvogtr edive dollars på min bankkonto. [crying] Minus. Når jeg skulle spare op til skole. [hurt] Dette er den første dokumenterede forekomst af mønsteret. Boede hjemme. Gambling aktivt. [whispers] Selvdestruktion var begyndt."
    },
    textLines: [
      {
        urdu: "Fire truck factory: ٥ دروازے/دن دوسرے ٢",
        english: "Fire truck factory: 5 doors/day vs others' 2",
        punjabi: "Fire truck factory: ੫ doors/ਦਿਨ ਬਾਕੀ ੨",
        danish: "Brandbilfabrik: 5 døre/dag mod andres 2"
      },
      {
        urdu: "$٤٠٠ تنخواہ → جوا → ہار",
        english: "$400 paycheque → gamble → lose",
        punjabi: "$੪੦੦ paycheque → ਜੂਆ → ਹਾਰ",
        danish: "$400 lønseddel → spil → tab",
        delay: 400
      },
      {
        urdu: "٨٠ گھنٹے/ہفتہ → $٨٠٠-٩٠٠ → جوا → ہار",
        english: "80 hrs/week → $800-900 → gamble → lose",
        punjabi: "੮੦ ਘੰਟੇ/ਹਫ਼ਤਾ → $੮੦੦-੯੦੦ → ਜੂਆ → ਹਾਰ",
        danish: "80 timer/uge → $800-900 → spil → tab",
        delay: 800
      },
      {
        urdu: "یونیورسٹی -$٢٣٧ سے شروع کی",
        english: "Started university at -$237",
        punjabi: "University -$੨੩੭ ਨਾਲ ਸ਼ੁਰੂ ਕੀਤੀ",
        danish: "Startede universitet på -$237",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-10-fire-factory.jpg',
    textOverlay: 'FIRST ADDICTION',
    timePeriod: 'SUMMER 2015'
  },

  {
    id: 11,
    title: "UNIVERSITY COLLAPSE",
    audioScripts: {
      urdu: "[sighs] Fall ٢٠١٥۔ میں Waterloo چلا گیا۔ میں Eli، Nick، Saajan، اور Zaid کے ساتھ رہتا تھا۔ [thoughtful] پہلی دفعہ گھر سے دور۔ Saajan اور Zaid... [whispers] خراب log تھے۔ Drug dealers۔ بری influence۔ [defeated] اس ماحول کی وجہ سے... میں weed کا عادی ہو گیا۔ ہر دن۔ شام چار بجے تک سوتا۔ [hurt] Adderall addiction تو اور بھی بری تھی۔ Extra لے لو... جلدی ختم ہو جائے... withdrawal میں crash ہو جاؤ۔ [exhausted] Cycle: addiction، withdrawal، پھر سے۔ میں نے Intro to Programming fail کر دیا۔ CP١٠٤۔ [crying] پورا term fail کر دیا۔ Double Degree سے نکال دیا گیا۔ [whispers] میرے پاس پیسے نہیں تھے۔ صرف Eli پیسے دیتا... ہم دونوں کے لیے McDonald's۔ [emotional] لیکن... یہ note کرو: اس سارے chaos کے باوجود... gambling active نہیں تھی۔ گھر سے دور۔ الگ problems۔ [determined] لیکن gambling نہیں۔",

      english: "[sighs] Fall two thousand fifteen. I moved to Waterloo. I lived with Eli, Nick, Saajan, and Zaid. [thoughtful] First time away from home. Saajan and Zaid... [whispers] were bad people. Drug dealers. Bad influence. [defeated] Because of that environment... I became addicted to weed. Every day. Sleeping till four PM. [hurt] The Adderall addiction was even worse. Take extra... run out early... crash in withdrawal. [exhausted] Cycle: addiction, withdrawal, repeat. I failed Intro to Programming. CP one-oh-four. [crying] Failed the entire term. Kicked out of the Double Degree. [whispers] I had no money. Only Eli would pay... for McDonald's for both of us. [emotional] But... note this: despite all this chaos... gambling wasn't active. Away from home. Different problems. [determined] But no gambling.",

      punjabi: "[sighs] Fall ੨੦੧੫। ਮੈਂ Waterloo ਚਲਾ ਗਿਆ। ਮੈਂ Eli, Nick, Saajan, ਅਤੇ Zaid ਨਾਲ ਰਹਿੰਦਾ ਸੀ। [thoughtful] ਪਹਿਲੀ ਵਾਰ ਘਰ ਤੋਂ ਦੂਰ। Saajan ਅਤੇ Zaid... [whispers] ਖਰਾਬ ਲੋਕ ਸਨ। Drug dealers। ਬੁਰਾ influence। [defeated] ਉਸ ਮਾਹੌਲ ਕਾਰਨ... ਮੈਂ weed ਦਾ ਆਦੀ ਹੋ ਗਿਆ। ਹਰ ਦਿਨ। ਸ਼ਾਮ ਚਾਰ ਵਜੇ ਤੱਕ ਸੌਂਦਾ। [hurt] Adderall addiction ਤਾਂ ਹੋਰ ਵੀ ਬੁਰੀ ਸੀ। Extra ਲੈ ਲਓ... ਜਲਦੀ ਖਤਮ ਹੋ ਜਾਵੇ... withdrawal 'ਚ crash ਹੋ ਜਾਓ। [exhausted] Cycle: addiction, withdrawal, ਫਿਰ ਸੇ। ਮੈਂ Intro to Programming fail ਕਰ ਦਿੱਤਾ। CP੧੦੪। [crying] ਪੂਰਾ term fail ਕਰ ਦਿੱਤਾ। Double Degree ਤੋਂ ਕੱਢ ਦਿੱਤਾ ਗਿਆ। [whispers] ਮੇਰੇ ਕੋਲ ਪੈਸੇ ਨਹੀਂ ਸਨ। ਸਿਰਫ਼ Eli ਪੈਸੇ ਦਿੰਦਾ... ਸਾਡੇ ਦੋਨਾਂ ਲਈ McDonald's। [emotional] ਪਰ... ਇਹ note ਕਰੋ: ਇਸ ਸਾਰੇ chaos ਦੇ ਬਾਵਜੂਦ... gambling active ਨਹੀਂ ਸੀ। ਘਰ ਤੋਂ ਦੂਰ। ਵੱਖਰੀਆਂ problems। [determined] ਪਰ gambling ਨਹੀਂ।",

      danish: "[sighs] Efterår to tusind og femten. Jeg flyttede til Waterloo. Jeg boede med Eli, Nick, Saajan og Zaid. [thoughtful] Første gang væk hjemmefra. Saajan og Zaid... [whispers] var dårlige mennesker. Narkohandlere. Dårlig indflydelse. [defeated] På grund af det miljø... blev jeg afhængig af hash. Hver dag. Sov til klokken fire om eftermiddagen. [hurt] Adderall-afhængigheden var endnu værre. Tag ekstra... løb tør tidligt... crash i abstinenser. [exhausted] Cyklus: afhængighed, abstinenser, gentag. Jeg dumpede Intro to Programming. CP et-nul-fire. [crying] Dumpede hele semesteret. Smidt ud af Double Degree. [whispers] Jeg havde ingen penge. Kun Eli betalte... for McDonald's til os begge. [emotional] Men... bemærk dette: trods alt dette kaos... var gambling ikke aktivt. Væk hjemmefra. Forskellige problemer. [determined] Men ikke gambling."
    },
    textLines: [
      {
        urdu: "Fall ٢٠١٥: Waterloo منتقل ہوئے",
        english: "Fall 2015: Moved to Waterloo",
        punjabi: "Fall ੨੦੧੫: Waterloo ਚਲੇ ਗਏ",
        danish: "Efterår 2015: Flyttede til Waterloo"
      },
      {
        urdu: "Weed کی لت۔ Adderall کی لت۔",
        english: "Weed addiction. Adderall addiction.",
        punjabi: "Weed ਦੀ ਲੱਤ। Adderall ਦੀ ਲੱਤ।",
        danish: "Hash-afhængighed. Adderall-afhængighed.",
        delay: 400
      },
      {
        urdu: "CP١٠٤ فیل۔ پورا term فیل۔",
        english: "CP104 failed. Entire term failed.",
        punjabi: "CP੧੦੪ fail। ਪੂਰਾ term fail।",
        danish: "CP104 dumpet. Hele semester dumpet.",
        delay: 800
      },
      {
        urdu: "لیکن gambling نہیں تھی۔ گھر سے دور۔",
        english: "But no gambling. Away from home.",
        punjabi: "ਪਰ gambling ਨਹੀਂ ਸੀ। ਘਰ ਤੋਂ ਦੂਰ।",
        danish: "Men ikke gambling. Væk hjemmefra.",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-11-university-collapse.jpg',
    textOverlay: 'THE COLLAPSE',
    timePeriod: 'FALL 2015'
  },

  // Scene 12: ELI & NICK INTERVENTION,

  {
    id: 12,
    title: "ELI & NICK INTERVENTION",
    audioScripts: {
      urdu: "[thoughtful] Eli اور Nick مجھے کافی پسند کرتے تھے۔ [warm] انہوں نے مجھے intervention دی۔ [emotional] میں نے Adderall چھوڑ دی۔ میں نے weed چھوڑ دی۔ [hopeful] میں نے دوبارہ کوشش کی۔ Winter ٢٠١٦۔ میں نے پاس کیا۔ [proud] ہر ایک کورس۔",

      english: "[thoughtful] Eli and Nick liked me a lot. [warm] They gave me an intervention. [emotional] I quit Adderall. I quit weed. [hopeful] I tried again. Winter two thousand sixteen. I passed. [proud] Every single course.",

      punjabi: "[thoughtful] Eli ਅਤੇ Nick ਮੈਨੂੰ ਬਹੁਤ ਪਸੰਦ ਕਰਦੇ ਸਨ। [warm] ਉਨ੍ਹਾਂ ਨੇ ਮੈਨੂੰ intervention ਦਿੱਤੀ। [emotional] ਮੈਂ Adderall ਛੱਡ ਦਿੱਤੀ। ਮੈਂ weed ਛੱਡ ਦਿੱਤੀ। [hopeful] ਮੈਂ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕੀਤੀ। Winter ੨੦੧੬। ਮੈਂ ਪਾਸ ਕੀਤਾ। [proud] ਹਰ ਇੱਕ course।",

      danish: "[thoughtful] Eli og Nick kunne virkelig godt lide mig. [warm] De gav mig en intervention. [emotional] Jeg stoppede med Adderall. Jeg stoppede med hash. [hopeful] Jeg prøvede igen. Vinter to tusind og seksten. Jeg bestod. [proud] Hvert eneste fag."
    },
    textLines: [
      {
        urdu: "Eli اور Nick کا intervention",
        english: "Eli & Nick's intervention",
        punjabi: "Eli ਅਤੇ Nick ਦੀ intervention",
        danish: "Eli og Nicks intervention"
      },
      {
        urdu: "Adderall بند۔ Weed بند۔",
        english: "Quit Adderall. Quit weed.",
        punjabi: "Adderall ਬੰਦ। Weed ਬੰਦ।",
        danish: "Stoppede Adderall. Stoppede hash.",
        delay: 400
      },
      {
        urdu: "Winter ٢٠١٦: ہر کورس پاس",
        english: "Winter 2016: Passed every course",
        punjabi: "Winter ੨੦੧੬: ਹਰ course ਪਾਸ",
        danish: "Vinter 2016: Bestod alle fag",
        delay: 800
      },
      {
        urdu: "دوبارہ امید۔",
        english: "Hope again.",
        punjabi: "ਦੁਬਾਰਾ ਉਮੀਦ।",
        danish: "Håb igen.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-12-eli-nick-intervention.jpg',
    textOverlay: 'THE INTERVENTION',
    timePeriod: 'WINTER 2016'
  },

  // Scene 12.5: THE DECISION - Second year housing disaster

  {
    id: 12.5,
    title: "THE DECISION",
    audioScripts: {
      urdu: "[reflective] Winter ٢٠١٦ کے بعد... مجھے دوسرے سال کے لیے رہائش کا فیصلہ کرنا تھا۔ [honest] پہلے سال میں campus کے قریب رہا۔ Eli، Nick، Saajan، Zaid کے ساتھ۔ [thoughtful] دوسرے سال کے لیے... Papa نے کہا پیسے بچاؤ۔ [confused] مجھے OSAP کے بارے میں پتہ نہیں تھا۔ میں نہیں جانتا تھا کہ student loans موجود ہیں۔ [defeated] تو میں نے Papa کی مانی۔ سستی جگہ ڈھونڈی۔ [heavy] Fall ٢٠١٦۔ میں school سے بہت دور رہنے لگا۔ [struggling] ہر دن... مجھے ایک جنگل عبور کرنا پڑتا تھا classes تک پہنچنے کے لیے۔ [ashamed] میں نے کبھی bus نہیں لی۔ مجھے پتہ نہیں تھا کیسے۔ [bitter] پیسے بچانے کی کوشش نے... مجھے worst situation میں ڈال دیا۔ [isolated] Eli نہیں تھا۔ Nick نہیں تھا۔ میں اکیلا تھا۔ بھوکا تھا۔ کھویا ہوا تھا۔",

      english: "[reflective] After winter two thousand sixteen... I had to decide housing for second year. [honest] First year I lived near campus. With Eli, Nick, Saajan, Zaid. [thoughtful] For second year... Papa said save money. [confused] I didn't know about OSAP. I didn't know student loans existed. [defeated] So I listened to Papa. Found a cheap place. [heavy] Fall two thousand sixteen. I ended up living very far from school. [struggling] Every day... I had to cross a forest to get to classes. [ashamed] I never took the bus. I didn't know how. [bitter] Trying to save money... put me in the worst situation possible. [isolated] No Eli. No Nick. I was alone. Hungry. Lost.",

      punjabi: "[reflective] Winter ੨੦੧੬ ਤੋਂ ਬਾਅਦ... ਮੈਨੂੰ ਦੂਜੇ ਸਾਲ ਲਈ ਰਿਹਾਇਸ਼ ਦਾ ਫ਼ੈਸਲਾ ਕਰਨਾ ਸੀ। [honest] ਪਹਿਲੇ ਸਾਲ ਮੈਂ campus ਦੇ ਨੇੜੇ ਰਿਹਾ। Eli, Nick, Saajan, Zaid ਨਾਲ। [thoughtful] ਦੂਜੇ ਸਾਲ ਲਈ... Papa ਨੇ ਕਿਹਾ ਪੈਸੇ ਬਚਾਓ। [confused] ਮੈਨੂੰ OSAP ਬਾਰੇ ਪਤਾ ਨਹੀਂ ਸੀ। ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ ਸੀ ਕਿ student loans ਹੁੰਦੇ ਹਨ। [defeated] ਤਾਂ ਮੈਂ Papa ਦੀ ਸੁਣੀ। ਸਸਤੀ ਜਗ੍ਹਾ ਲੱਭੀ। [heavy] Fall ੨੦੧੬। ਮੈਂ school ਤੋਂ ਬਹੁਤ ਦੂਰ ਰਹਿਣ ਲੱਗਾ। [struggling] ਹਰ ਦਿਨ... ਮੈਨੂੰ ਇੱਕ ਜੰਗਲ ਪਾਰ ਕਰਨਾ ਪੈਂਦਾ ਸੀ classes ਤੱਕ ਪਹੁੰਚਣ ਲਈ। [ashamed] ਮੈਂ ਕਦੇ bus ਨਹੀਂ ਲਈ। ਮੈਨੂੰ ਪਤਾ ਨਹੀਂ ਸੀ ਕਿਵੇਂ। [bitter] ਪੈਸੇ ਬਚਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਨੇ... ਮੈਨੂੰ ਸਭ ਤੋਂ ਮਾੜੀ ਸਥਿਤੀ 'ਚ ਪਾ ਦਿੱਤਾ। [isolated] Eli ਨਹੀਂ ਸੀ। Nick ਨਹੀਂ ਸੀ। ਮੈਂ ਇਕੱਲਾ ਸੀ। ਭੁੱਖਾ ਸੀ। ਗੁਆਚਿਆ ਹੋਇਆ ਸੀ।",

      danish: "[reflective] Efter vinter to tusind og seksten... skulle jeg beslutte bolig for andet år. [honest] Første år boede jeg tæt på campus. Med Eli, Nick, Saajan, Zaid. [thoughtful] For andet år... sagde Papa spar penge. [confused] Jeg vidste ikke om OSAP. Jeg vidste ikke studielån eksisterede. [defeated] Så jeg lyttede til Papa. Fandt et billigt sted. [heavy] Efterår to tusind og seksten. Jeg endte med at bo meget langt fra skolen. [struggling] Hver dag... skulle jeg krydse en skov for at komme til undervisning. [ashamed] Jeg tog aldrig bussen. Jeg vidste ikke hvordan. [bitter] At prøve at spare penge... satte mig i den værst mulige situation. [isolated] Ingen Eli. Ingen Nick. Jeg var alene. Sulten. Fortabt."
    },
    textLines: [
      {
        urdu: "پہلا سال: campus کے قریب",
        english: "First year: Near campus",
        punjabi: "ਪਹਿਲਾ ਸਾਲ: campus ਦੇ ਨੇੜੇ",
        danish: "Første år: Tæt på campus"
      },
      {
        urdu: "Papa: پیسے بچاؤ۔ OSAP نہیں جانتا تھا۔",
        english: "Papa: Save money. Didn't know OSAP existed.",
        punjabi: "Papa: ਪੈਸੇ ਬਚਾਓ। OSAP ਬਾਰੇ ਨਹੀਂ ਪਤਾ ਸੀ।",
        danish: "Papa: Spar penge. Vidste ikke OSAP eksisterede.",
        delay: 400
      },
      {
        urdu: "دوسرا سال: جنگل عبور کرنا پڑتا تھا۔",
        english: "Second year: Had to cross a forest.",
        punjabi: "ਦੂਜਾ ਸਾਲ: ਜੰਗਲ ਪਾਰ ਕਰਨਾ ਪੈਂਦਾ ਸੀ।",
        danish: "Andet år: Skulle krydse en skov.",
        delay: 800
      },
      {
        urdu: "پیسے بچانا = worst situation",
        english: "Saving money = worst situation",
        punjabi: "ਪੈਸੇ ਬਚਾਉਣਾ = ਸਭ ਤੋਂ ਮਾੜੀ ਸਥਿਤੀ",
        danish: "Spare penge = værste situation",
        delay: 1200
      },
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-12.5-the-decision.jpg',
    textOverlay: 'THE DECISION',
    timePeriod: 'FALL 2016'
  },

  // Scene 13: AMAN - THE FRIEND
];
