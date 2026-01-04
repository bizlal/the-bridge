import { SceneData } from '../types';

/**
 * ACT 4: THE HIDDEN EMPIRE (Scenes 20-27)
 * The true business achievements: Trackem, DailyRapFacts, Limelight
 * 2017-2021: Peak success period while living independently
 */

export const act4Scenes: SceneData[] = [
  // Scene 20: THE ESCAPE
  {
    id: 20,
    title: "THE ESCAPE",
    audioScripts: {
      urdu: "[devastated] Winter ٢٠١٧۔ University سے kick out ہو گیا۔ [trembling] میں تباہ ہو گیا تھا۔ [memory] First year میں... جب میں نے Papa کو بتایا میرے marks 60s میں تھے... وہ بہت غصہ ہوئے۔ [fear] اب؟ Expelled؟ میں بتانے سے بہت ڈرتا تھا۔ [desperate] تو میں نے jobs apply کرنا شروع کیا۔ پیسوں کے لیے نہیں... بس ایک mental escape کے لیے۔ حقیقت سے بھاگنے کے لیے۔ [surprised] میں نے resume بنایا... اور Trackem نے مجھے hire کر لیا۔ ایک escape... میرا career بن گیا۔",

      english: "[devastated] Winter two thousand seventeen. Got kicked out of university. [trembling] I was devastated. [memory] In first year... when I told Papa I was getting sixties... he got so angry. [fear] Now? Expelled? I was too scared to tell him. [desperate] So I started applying for jobs. Not for money... but as a mental escape. To hide from the reality. [surprised] I created a resume... and Trackem hired me. A mental escape... became my career.",

      punjabi: "[devastated] Winter ੨੦੧੭। University ਤੋਂ kick out ਹੋ ਗਿਆ। [trembling] ਮੈਂ ਬਰਬਾਦ ਹੋ ਗਿਆ ਸੀ। [memory] First year ਵਿੱਚ... ਜਦੋਂ ਮੈਂ Papa ਨੂੰ ਦੱਸਿਆ ਮੇਰੇ number 60s ਵਿੱਚ ਸਨ... ਉਹ ਬਹੁਤ ਗੁੱਸੇ ਹੋਏ। [fear] ਹੁਣ? Expelled? ਮੈਂ ਦੱਸਣ ਤੋਂ ਬਹੁਤ ਡਰਦਾ ਸੀ। [desperate] ਤਾਂ ਮੈਂ jobs apply ਕਰਨਾ ਸ਼ੁਰੂ ਕੀਤਾ। ਪੈਸਿਆਂ ਲਈ ਨਹੀਂ... ਬਸ ਇੱਕ mental escape ਲਈ। ਅਸਲੀਅਤ ਤੋਂ ਭੱਜਣ ਲਈ। [surprised] ਮੈਂ resume ਬਣਾਇਆ... ਅਤੇ Trackem ਨੇ ਮੈਨੂੰ hire ਕਰ ਲਿਆ। ਇੱਕ escape... ਮੇਰਾ career ਬਣ ਗਿਆ।",

      danish: "[devastated] Vinter to tusind og sytten. Blev smidt ud af universitetet. [trembling] Jeg var knust. [memory] I første år... da jeg fortalte Papa jeg fik tres... blev han så vred. [fear] Nu? Bortvist? Jeg var for bange til at fortælle ham det. [desperate] Så jeg begyndte at søge job. Ikke for penge... men som en mental flugt. For at skjule mig fra virkeligheden. [surprised] Jeg lavede et CV... og Trackem ansatte mig. En mental flugt... blev min karriere."
    },
    textLines: [
      {
        urdu: "Winter ٢٠١٧: تباہ ہو گیا",
        english: "Winter 2017: Devastated",
        punjabi: "Winter ੨੦੧੭: ਬਰਬਾਦ ਹੋ ਗਿਆ",
        danish: "Vinter 2017: Knust"
      },
      {
        urdu: "Papa کو بتانے سے ڈرتا تھا",
        english: "Scared to tell Papa",
        punjabi: "Papa ਨੂੰ ਦੱਸਣ ਤੋਂ ਡਰਦਾ ਸੀ",
        danish: "Bange for at fortælle Papa",
        delay: 400
      },
      {
        urdu: "Jobs = Mental Escape",
        english: "Jobs = Mental Escape",
        punjabi: "Jobs = Mental Escape",
        danish: "Jobs = Mental Flugt",
        delay: 800
      },
      {
        urdu: "Trackem نے hire کر لیا",
        english: "Trackem hired me",
        punjabi: "Trackem ਨੇ hire ਕਰ ਲਿਆ",
        danish: "Trackem ansatte mig",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-20-the-finesse.jpg',
    textOverlay: 'THE ESCAPE',
    timePeriod: 'WINTER 2017'
  },

  // Scene 21: TRACKEM MASTERY
  {
    id: 21,
    title: "TRACKEM MASTERY",
    audioScripts: {
      urdu: "[confident] میں نے Trackem میں کام کیا۔ ٢٠١٧ سے ٢٠٢١ تک۔ [proud] میں نے expense processes کو optimize کیا۔ [amazed] میں نے کمپنی کو ایک million dollars ایک سال میں بچائے۔ [bitter] میرا raise؟ [laughing] ایک dollar۔ ایک گھنٹے میں۔",

      english: "[confident] I worked at Trackem. Two thousand seventeen to two thousand twenty-one. [proud] I optimized expense processes. [amazed] I saved the company one million dollars a year. [bitter] My raise? [laughing] One dollar. Per hour.",

      punjabi: "[confident] ਮੈਂ Trackem ਵਿੱਚ ਕੰਮ ਕੀਤਾ। ੨੦੧੭ ਤੋਂ ੨੦੨੧ ਤੱਕ। [proud] ਮੈਂ expense processes ਨੂੰ optimize ਕੀਤਾ। [amazed] ਮੈਂ ਕੰਪਨੀ ਨੂੰ ਇੱਕ million dollars ਇੱਕ ਸਾਲ ਵਿੱਚ ਬਚਾਏ। [bitter] ਮੇਰਾ raise? [laughing] ਇੱਕ dollar। ਇੱਕ ਘੰਟੇ ਵਿੱਚ।",

      danish: "[confident] Jeg arbejdede hos Trackem. To tusind og sytten til to tusind og enogtyve. [proud] Jeg optimerede udgiftsprocesser. [amazed] Jeg sparede firmaet en million dollars om året. [bitter] Min lønforhøjelse? [laughing] Én dollar. I timen."
    },
    textLines: [
      {
        urdu: "Trackem: ٢٠١٧-٢٠٢١",
        english: "Trackem: 2017-2021",
        punjabi: "Trackem: ੨੦੧੭-੨੦੨੧",
        danish: "Trackem: 2017-2021"
      },
      {
        urdu: "کمپنی کو $١M سالانہ بچایا",
        english: "Saved company $1M annually",
        punjabi: "ਕੰਪਨੀ ਨੂੰ $੧M ਸਾਲਾਨਾ ਬਚਾਇਆ",
        danish: "Sparede firma $1M årligt",
        delay: 400
      },
      {
        urdu: "میرا raise: $١/گھنٹہ",
        english: "My raise: $1/hour",
        punjabi: "ਮੇਰਾ raise: $੧/ਘੰਟਾ",
        danish: "Min lønforhøjelse: $1/time",
        delay: 800
      },
      {
        urdu: "لیکن میں نے جاری رکھا۔",
        english: "But I kept going.",
        punjabi: "ਪਰ ਮੈਂ ਜਾਰੀ ਰੱਖਿਆ۔",
        danish: "Men jeg blev ved.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-21-trackem-mastery.jpg',
    textOverlay: 'TRACKEM',
    timePeriod: '2017-2021'
  },

  // Scene 21.2: THE CHEAP SURGERY
  {
    id: 21.2,
    title: "THE CHEAP SURGERY",
    audioScripts: {
      urdu: "[excited] میں امیر تھا۔ میرا plan تھا Lasik کروانے کا۔ [confident] Lasik ٢٤ گھنٹے میں ٹھیک ہو جاتا ہے۔ میں نے یہ plan کیا تھا۔ [hurt] لیکن آپ نے میرے uncle سے کہا PRK کرائیں۔ Lasik کی جگہ۔ [betrayed] آپ نے کہا: \"اسے پتہ نہیں چلے گا فرق۔\" [shocked] میں نے consent نہیں دیا۔ یہ آپ کا فیصلہ تھا۔ [pain] ٢٤ گھنٹے نہیں... ٦ مہینے لگے ٹھیک ہونے میں۔ [sad] میری دائیں آنکھ اب بھی دھندلی ہے۔ رات کو نظر نہیں آتا۔ [bitter] آپ نے میرے لیے فیصلہ کیا۔ میری رضامندی کے بغیر۔ اور اب میں ہر دن اس کی قیمت ادا کر رہا ہوں۔ [determined] اب مجھے Canada میں دوبارہ surgery کروانی ہے۔",

      english: "[excited] I was rich. I planned to get Lasik. [confident] Lasik heals in twenty-four hours. I had planned this. [hurt] But you told my uncle to do PRK. Instead of Lasik. [betrayed] You said: \"He wouldn't know the difference.\" [shocked] I didn't consent. This was your decision. [pain] Not twenty-four hours... it took six months to heal. [sad] My right eye is still blurry. I can't see at night. [bitter] You made a decision for me. Without my consent. And I pay the price every day. [determined] Now I have to get surgery again. In Canada.",

      punjabi: "[excited] ਮੈਂ ਅਮੀਰ ਸੀ। ਮੇਰਾ plan ਸੀ Lasik ਕਰਵਾਉਣ ਦਾ। [confident] Lasik ੨੪ ਘੰਟਿਆਂ ਵਿੱਚ ਠੀਕ ਹੋ ਜਾਂਦਾ ਹੈ। ਮੈਂ ਇਹ plan ਕੀਤਾ ਸੀ। [hurt] ਪਰ ਤੁਸੀਂ ਮੇਰੇ uncle ਨੂੰ ਕਿਹਾ PRK ਕਰੋ। Lasik ਦੀ ਜਗ੍ਹਾ। [betrayed] ਤੁਸੀਂ ਕਿਹਾ: \"ਉਸਨੂੰ ਪਤਾ ਨਹੀਂ ਲੱਗੇਗਾ ਫ਼ਰਕ।\" [shocked] ਮੈਂ consent ਨਹੀਂ ਦਿੱਤੀ। ਇਹ ਤੁਹਾਡਾ ਫ਼ੈਸਲਾ ਸੀ। [pain] ੨੪ ਘੰਟੇ ਨਹੀਂ... ੬ ਮਹੀਨੇ ਲੱਗ ਗਏ ਠੀਕ ਹੋਣ ਵਿੱਚ। [sad] ਮੇਰੀ ਸੱਜੀ ਅੱਖ ਅਜੇ ਵੀ ਧੁੰਦਲੀ ਹੈ। ਰਾਤ ਨੂੰ ਨਹੀਂ ਦਿਸਦਾ। [bitter] ਤੁਸੀਂ ਮੇਰੇ ਲਈ ਫ਼ੈਸਲਾ ਕੀਤਾ। ਮੇਰੀ ਰਜ਼ਾਮੰਦੀ ਤੋਂ ਬਿਨਾਂ। ਅਤੇ ਮੈਂ ਹਰ ਦਿਨ ਇਸ ਦੀ ਕੀਮਤ ਅਦਾ ਕਰ ਰਿਹਾ ਹਾਂ। [determined] ਹੁਣ ਮੈਨੂੰ Canada ਵਿੱਚ ਦੁਬਾਰਾ surgery ਕਰਵਾਉਣੀ ਪਵੇਗੀ।",

      danish: "[excited] Jeg var rig. Jeg planlagde at få Lasik. [confident] Lasik heler på fireogtyve timer. Jeg havde planlagt dette. [hurt] Men du sagde til min onkel at lave PRK. I stedet for Lasik. [betrayed] Du sagde: \"Han ville ikke kende forskel.\" [shocked] Jeg gav ikke samtykke. Dette var din beslutning. [pain] Ikke fireogtyve timer... det tog seks måneder at hele. [sad] Mit højre øje er stadig sløret. Jeg kan ikke se om natten. [bitter] Du tog en beslutning for mig. Uden mit samtykke. Og jeg betaler prisen hver dag. [determined] Nu skal jeg opereres igen. I Canada."
    },
    textLines: [
      {
        urdu: "Lasik plan: ٢٤ گھنٹے healing",
        english: "Lasik plan: 24h healing",
        punjabi: "Lasik plan: ੨੪ ਘੰਟੇ healing",
        danish: "Lasik plan: 24t heling"
      },
      {
        urdu: "\"اسے پتہ نہیں چلے گا فرق\"",
        english: "\"He wouldn't know the difference\"",
        punjabi: "\"ਉਸਨੂੰ ਪਤਾ ਨਹੀਂ ਲੱਗੇਗਾ ਫ਼ਰਕ\"",
        danish: "\"Han ville ikke kende forskel\"",
        delay: 400
      },
      {
        urdu: "PRK حقیقت: ٦ مہینے درد",
        english: "PRK reality: 6 months pain",
        punjabi: "PRK ਅਸਲੀਅਤ: ੬ ਮਹੀਨੇ ਦਰਦ",
        danish: "PRK virkelighed: 6 mdr smerte",
        delay: 800
      },
      {
        urdu: "بغیر رضامندی کی قیمت: خراب بینائی",
        english: "Cost of no consent: Damaged sight",
        punjabi: "ਬਿਨਾਂ ਰਜ਼ਾਮੰਦੀ ਦੀ ਕੀਮਤ: ਖਰਾਬ ਨਜ਼ਰ",
        danish: "Pris uden samtykke: Skadet syn",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-21.5-prk-surgery.jpg',
    textOverlay: 'WITHOUT CONSENT',
    timePeriod: 'SUMMER 2021'
  },

  // Scene 21.5: THE LOST LAUNCH
  {
    id: 21.5,
    title: "THE LOST LAUNCH",
    audioScripts: {
      urdu: "[excited] Winter ٢٠٢١۔ LMLT Token launch۔ [amazed] میں نے تین دن میں پچاس ہزار dollars بیچے۔ [proud] یہ real تھا۔ Momentum اصلی تھا۔ [hurt] لیکن پابا نے یقین نہیں کیا۔ انہوں نے سوچا میں \"boosting\" کر رہا ہوں۔ جھوٹ بول رہا ہوں۔ ہمیشہ کی طرح۔ [conflict] پھر انہوں نے کہا پاکستان چلو۔ [obedient] میں نے اپنی کامیابی چھوڑ دی۔ میں چلا گیا۔ [regret] چار دن بعد واپس آیا... لیکن سب ختم ہو چکا تھا۔ [sad] پچاس ہزار کا momentum... ان کے شک اور میری اطاعت کی نذر ہو گیا۔",

      english: "[excited] Winter two thousand twenty-one. LMLT Token launch. [amazed] I sold fifty thousand dollars in three days. [proud] It was real. The momentum was real. [hurt] But Papa didn't believe me. He thought I was \"boosting.\" Lying. Like always. [conflict] Then he said come to Pakistan. [obedient] I left my success. I went. [regret] I flew back four days later... but it was all gone. [sad] Fifty thousand dollars of momentum... lost to his doubt and my obedience.",

      punjabi: "[excited] Winter ੨੦੨੧। LMLT Token launch. [amazed] ਮੈਂ ਤਿੰਨ ਦਿਨਾਂ ਵਿੱਚ ਪੰਜਾਹ ਹਜ਼ਾਰ dollars ਵੇਚੇ। [proud] ਇਹ ਅਸਲੀ ਸੀ। Momentum ਅਸਲੀ ਸੀ। [hurt] ਪਰ ਪਾਪਾ ਨੇ ਯਕੀਨ ਨਹੀਂ ਕੀਤਾ। ਉਨ੍ਹਾਂ ਨੇ ਸੋਚਿਆ ਮੈਂ \"boosting\" ਕਰ ਰਿਹਾ ਹਾਂ। ਝੂਠ ਬੋਲ ਰਿਹਾ ਹਾਂ। ਹਮੇਸ਼ਾ ਵਾਂਗ। [conflict] ਫਿਰ ਉਨ੍ਹਾਂ ਨੇ ਕਿਹਾ ਪਾਕਿਸਤਾਨ ਚਲੋ। [obedient] ਮੈਂ ਆਪਣੀ ਕਾਮਯਾਬੀ ਛੱਡ ਦਿੱਤੀ। ਮੈਂ ਚਲਾ ਗਿਆ। [regret] ਚਾਰ ਦਿਨ ਬਾਅਦ ਵਾਪਸ ਆਇਆ... ਪਰ ਸਭ ਖਤਮ ਹੋ ਚੁੱਕਾ ਸੀ। [sad] ਪੰਜਾਹ ਹਜ਼ਾਰ ਦਾ momentum... ਉਨ੍ਹਾਂ ਦੇ ਸ਼ੱਕ ਅਤੇ ਮੇਰੀ ਆਗਿਆਕਾਰੀ ਦੀ ਭੇਂਟ ਚੜ੍ਹ ਗਿਆ।",

      danish: "[excited] Vinter to tusind og enogtyve. LMLT Token lancering. [amazed] Jeg solgte for halvtreds tusind dollars på tre dage. [proud] Det var ægte. Momentum var ægte. [hurt] Men Papa troede ikke på mig. Han troede jeg \"boostede\". Løj. Som altid. [conflict] Så sagde han kom til Pakistan. [obedient] Jeg forlod min succes. Jeg tog afsted. [regret] Jeg fløj tilbage fire dage senere... men alt var væk. [sad] Halvtreds tusind dollars momentum... tabt til hans tvivl og min lydighed."
    },
    textLines: [
      {
        urdu: "$٥٠،٠٠٠ تین دن میں",
        english: "$50,000 in 3 days",
        punjabi: "$੫੦,੦੦੦ ਤਿੰਨ ਦਿਨਾਂ 'ਚ",
        danish: "$50.000 på 3 dage"
      },
      {
        urdu: "پابا نے سوچا میں جھوٹ بول رہا ہوں",
        english: "He thought I was \"boosting\"",
        punjabi: "ਉਨ੍ਹਾਂ ਨੇ ਸੋਚਿਆ ਮੈਂ ਝੂਠ ਬੋਲ ਰਿਹਾ",
        danish: "Han troede jeg løj",
        delay: 400
      },
      {
        urdu: "پاکستان گیا... سب کھو دیا",
        english: "Went to Pakistan... lost it all",
        punjabi: "ਪਾਕਿਸਤਾਨ ਗਿਆ... ਸਭ ਖੋ ਦਿੱਤਾ",
        danish: "Tog til Pakistan... tabte alt",
        delay: 800
      },
      {
        urdu: "شک اور اطاعت کی قیمت",
        english: "Cost of doubt & obedience",
        punjabi: "ਸ਼ੱਕ ਅਤੇ ਆਗਿਆਕਾਰੀ ਦੀ ਕੀਮਤ",
        danish: "Prisen for tvivl & lydighed",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-21.2-lost-launch.jpg',
    textOverlay: 'DISBELIEF',
    timePeriod: 'WINTER 2021'
  },

  // Scene 22: THE OVERWHELM
  {
    id: 22,
    title: "THE OVERWHELM",
    audioScripts: {
      urdu: "[confident] شروع ٢٠٢١۔ میں نے محسوس کیا میں دنیا کی چوٹی پر ہوں۔ میں نے وہ email بھیجا: میں اس کمپنی کا LeBron James ہوں۔ [pain] لیکن پھر... دنیا ٹوٹ گئی۔ PRK surgery نے مجھے اندھیرے اور درد میں چھوڑ دیا۔ [heavy] اور پھر phone calls شروع ہو گئیں۔ میری خالہ۔ میرے چچا۔ ان کا بیٹا۔ میری نانی۔ [breaking] چار موتیں۔ ایک کے بعد ایک۔ [trembling] میں اتنا overwhelmed تھا... اتنا ٹوٹ گیا تھا... مجھے Trackem کو بتانے سے ڈر لگتا تھا کہ میں کام نہیں کر سکتا۔ میں انہیں disappoint کرنے سے ڈرتا تھا۔ [whispers] تو میں جم گیا۔ میں نے ghosting کی۔ میں نے respond کرنا بند کر دیا کیونکہ میں reality کا سامنا نہیں کر سکتا تھا۔ [sad] April ٢٠٢١۔ انہوں نے مجھے جانے دیا۔ اس لیے نہیں کہ میں قابل نہیں تھا۔ بلکہ اس لیے کہ میں غم میں ڈوب رہا تھا... اور مجھے نہیں معلوم تھا کہ life raft کیسے مانگنی ہے۔",

      english: "[confident] Early two thousand twenty-one. I felt on top of the world. I sent that email: I'm the LeBron James of this company. [pain] But then... the world collapsed. PRK surgery left me in darkness and pain. [heavy] And then the phone calls started coming. My aunt. My uncle. Their son. My grandma. [breaking] Four deaths. Back to back. [trembling] I was so overwhelmed... so broken... I was terrified to tell Trackem I couldn't work. I was scared to disappoint them. [whispers] So I froze. I ghosted. I stopped responding because I couldn't face the reality. [sad] April two thousand twenty-one. They let me go. Not because I wasn't capable. But because I was drowning in grief... and I didn't know how to ask for a life raft.",

      punjabi: "[confident] ਸ਼ੁਰੂ ੨੦੨੧। ਮੈਂ ਮਹਿਸੂਸ ਕੀਤਾ ਮੈਂ ਦੁਨੀਆਂ ਦੀ ਚੋਟੀ 'ਤੇ ਹਾਂ। ਮੈਂ ਉਹ email ਭੇਜਿਆ: ਮੈਂ ਇਸ ਕੰਪਨੀ ਦਾ LeBron James ਹਾਂ। [pain] ਪਰ ਫਿਰ... ਦੁਨੀਆਂ ਟੁੱਟ ਗਈ। PRK surgery ਨੇ ਮੈਨੂੰ ਹਨੇਰੇ ਅਤੇ ਦਰਦ 'ਚ ਛੱਡ ਦਿੱਤਾ। [heavy] ਅਤੇ ਫਿਰ phone calls ਆਉਣੀਆਂ ਸ਼ੁਰੂ ਹੋ ਗਈਆਂ। ਮੇਰੀ ਮਾਸੀ। ਮੇਰੇ ਚਾਚਾ। ਉਨ੍ਹਾਂ ਦਾ ਪੁੱਤਰ। ਮੇਰੀ ਦਾਦੀ। [breaking] ਚਾਰ ਮੌਤਾਂ। ਇੱਕ ਤੋਂ ਬਾਅਦ ਇੱਕ। [trembling] ਮੈਂ ਇੰਨਾ overwhelmed ਸੀ... ਇੰਨਾ ਟੁੱਟਿਆ ਹੋਇਆ... ਮੈਂ Trackem ਨੂੰ ਦੱਸਣ ਤੋਂ ਡਰਦਾ ਸੀ ਕਿ ਮੈਂ ਕੰਮ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਮੈਂ ਉਨ੍ਹਾਂ ਨੂੰ disappoint ਕਰਨ ਤੋਂ ਡਰਦਾ ਸੀ। [whispers] ਤਾਂ ਮੈਂ ਜੰਮ ਗਿਆ। ਮੈਂ ghosting ਕੀਤੀ। ਮੈਂ respond ਕਰਨਾ ਬੰਦ ਕਰ ਦਿੱਤਾ ਕਿਉਂਕਿ ਮੈਂ reality ਦਾ ਸਾਹਮਣਾ ਨਹੀਂ ਕਰ ਸਕਦਾ ਸੀ। [sad] April ੨੦੨੧। ਉਨ੍ਹਾਂ ਨੇ ਮੈਨੂੰ ਜਾਣ ਦਿੱਤਾ। ਇਸ ਲਈ ਨਹੀਂ ਕਿ ਮੈਂ ਯੋਗ ਨਹੀਂ ਸੀ। ਬਲਕਿ ਇਸ ਲਈ ਕਿ ਮੈਂ ਗ਼ਮ 'ਚ ਡੁੱਬ ਰਿਹਾ ਸੀ... ਅਤੇ ਮੈਨੂੰ ਨਹੀਂ ਪਤਾ ਸੀ ਕਿ life raft ਕਿਵੇਂ ਮੰਗਣੀ ਹੈ।",

      danish: "[confident] Tidlig to tusind og enogtyve. Jeg følte mig på toppen af verden. Jeg sendte den email: Jeg er LeBron James i dette firma. [pain] Men så... verden kollapsede. PRK-operation efterlod mig i mørke og smerte. [heavy] Og så begyndte telefonopkaldene at komme. Min tante. Min onkel. Deres søn. Min bedstemor. [breaking] Fire dødsfald. Bagefter hinanden. [trembling] Jeg var så overvældet... så knust... jeg var skrækslagen for at fortælle Trackem at jeg ikke kunne arbejde. Jeg var bange for at skuffe dem. [whispers] Så jeg frøs. Jeg ghostede. Jeg stoppede med at svare fordi jeg ikke kunne konfrontere virkeligheden. [sad] April to tusind og enogtyve. De lod mig gå. Ikke fordi jeg ikke var dygtig. Men fordi jeg druknede i sorg... og jeg vidste ikke hvordan jeg skulle bede om en redningsflåde."
    },
    textLines: [
      {
        urdu: "\"میں LeBron James ہوں\" Email",
        english: "\"I'm LeBron James\" Email",
        punjabi: "\"ਮੈਂ LeBron James ਹਾਂ\" Email",
        danish: "\"Jeg er LeBron James\" Email"
      },
      {
        urdu: "پھر: PRK درد + ٤ موتیں",
        english: "Then: PRK Pain + 4 Deaths",
        punjabi: "ਫਿਰ: PRK ਦਰਦ + ੪ ਮੌਤਾਂ",
        danish: "Så: PRK Smerte + 4 Dødsfald",
        delay: 400
      },
      {
        urdu: "خالہ، چچا، کزن، نانی",
        english: "Aunt, Uncle, Cousin, Grandma",
        punjabi: "ਮਾਸੀ, ਚਾਚਾ, ਕਜ਼ਨ, ਦਾਦੀ",
        danish: "Tante, Onkel, Fætter, Bedstemor",
        delay: 800
      },
      {
        urdu: "Disappointment کا خوف = Ghosting",
        english: "Fear of disappointment = Ghosting",
        punjabi: "Disappointment ਦਾ ਡਰ = Ghosting",
        danish: "Frygt for skuffelse = Ghosting",
        delay: 1200
      },
      {
        urdu: "Fired: مہارت کے لیے نہیں، بلکہ غم کے لیے۔",
        english: "Fired: Not for skill, but for grief.",
        punjabi: "Fired: ਹੁਨਰ ਲਈ ਨਹੀਂ, ਪਰ ਗ਼ਮ ਲਈ।",
        danish: "Fyret: Ikke for dygtighed, men for sorg.",
        delay: 1600
      }
    ],
    visualStyle: 'dark',
    backgroundImage: '/images/scene-22-the-overwhelm.jpg',
    textOverlay: 'THE OVERWHELM',
    timePeriod: 'EARLY 2021'
  },

  // Scene 22.5: THE LOS ANGELES ESCAPE
  {
    id: 22.5,
    title: "THE LOS ANGELES ESCAPE",
    audioScripts: {
      urdu: "[release] غم کے بعد... موتوں کے اندھیرے کے بعد... میں بھاگا نہیں، پابا۔ میں اڑ گیا۔ [amazed] میں Chicago گیا Vishnu سے ملنے۔ اس کے والدین آٹھ فیگر ملینئرز ہیں۔ ہم نے چالیس ہزار ڈالر کے private jet پر بحث کی LA جانے کے لیے۔ [laughing] ہمیں commercial لینا پڑا کیونکہ اس نے اس مہینے میں بہت سارے jets charter کیے تھے۔ [excited] ہم ایک مہینے کے لیے Los Angeles گئے۔ میرے دوست Yaseen نے سب کچھ pay کیا۔ Downtown LA میں hotel۔ [proud] میں Rolls Royces چلا رہا تھا۔ میں نے Lil Tjay کے ساتھ basketball کھیلا۔ اس نے مجھے اپنے گھر بلایا۔ اس نے مجھے اپنی گاڑی کی چابیاں دیں۔ [intense] اور پورا وقت... میرا phone بج رہا تھا۔ آپ۔ گھبرائے ہوئے۔ \"گھر آ جاؤ! تم کہاں ہو؟\" [sad] آپ نے سوچا میں خطرے میں ایک بھاگا ہوا بچہ ہوں۔ آپ کو احساس نہیں تھا میں بادشاہوں کے ساتھ رہ رہا تھا۔ [defeated] لیکن پھر... میں واپس آیا۔ سفر ختم ہو گیا۔ اور فوری طور پر... \"نوکری لے لو۔\" خواب ختم ہو گیا۔",

      english: "[release] After the grief... after the darkness of the deaths... I didn't run away, Papa. I flew. [amazed] I went to Chicago to meet Vishnu. His parents are eight-figure millionaires. We debated taking a forty-thousand-dollar private jet to LA. [laughing] We had to fly commercial only because he'd already charted too many jets that month. [excited] We went to Los Angeles for a month. My friend Yaseen paid for everything. Hotel in downtown LA. [proud] I was driving Rolls Royces. I played basketball with Lil Tjay. He invited me to his house. He gave me the keys to his car. [intense] And the whole time... my phone was ringing. You. Panicked. \"Come home! Where are you?\" [sad] You thought I was a runaway child in danger. You didn't realize I was living with kings. [defeated] But then... I came back. The trip ended. And immediately... \"Get a job.\" The dream was over.",

      punjabi: "[release] ਗ਼ਮ ਤੋਂ ਬਾਅਦ... ਮੌਤਾਂ ਦੇ ਹਨੇਰੇ ਤੋਂ ਬਾਅਦ... ਮੈਂ ਭੱਜਿਆ ਨਹੀਂ, ਪਾਪਾ। ਮੈਂ ਉੱਡ ਗਿਆ। [amazed] ਮੈਂ Chicago ਗਿਆ Vishnu ਨੂੰ ਮਿਲਣ। ਉਸਦੇ ਮਾਤਾ-ਪਿਤਾ ਅੱਠ-ਫਿਗਰ ਮਿਲੀਅਨੇਅਰ ਹਨ। ਅਸੀਂ ਚਾਲੀ ਹਜ਼ਾਰ ਡਾਲਰ ਦੇ private jet 'ਤੇ ਬਹਿਸ ਕੀਤੀ LA ਜਾਣ ਲਈ। [laughing] ਸਾਨੂੰ commercial ਲੈਣਾ ਪਿਆ ਕਿਉਂਕਿ ਉਸਨੇ ਉਸ ਮਹੀਨੇ 'ਚ ਬਹੁਤ ਸਾਰੇ jets charter ਕੀਤੇ ਸਨ। [excited] ਅਸੀਂ ਇੱਕ ਮਹੀਨੇ ਲਈ Los Angeles ਗਏ। ਮੇਰੇ ਦੋਸਤ Yaseen ਨੇ ਸਭ ਕੁਝ pay ਕੀਤਾ। Downtown LA 'ਚ hotel। [proud] ਮੈਂ Rolls Royces ਚਲਾ ਰਿਹਾ ਸੀ। ਮੈਂ Lil Tjay ਨਾਲ basketball ਖੇਡਿਆ। ਉਸਨੇ ਮੈਨੂੰ ਆਪਣੇ ਘਰ ਬੁਲਾਇਆ। ਉਸਨੇ ਮੈਨੂੰ ਆਪਣੀ ਕਾਰ ਦੀਆਂ ਚਾਬੀਆਂ ਦਿੱਤੀਆਂ। [intense] ਅਤੇ ਪੂਰਾ ਸਮਾਂ... ਮੇਰਾ phone ਵੱਜ ਰਿਹਾ ਸੀ। ਤੁਸੀਂ। ਘਬਰਾਏ ਹੋਏ। \"ਘਰ ਆ ਜਾਓ! ਤੁਸੀਂ ਕਿੱਥੇ ਹੋ?\" [sad] ਤੁਸੀਂ ਸੋਚਿਆ ਮੈਂ ਖਤਰੇ 'ਚ ਇੱਕ ਭੱਜਿਆ ਹੋਇਆ ਬੱਚਾ ਹਾਂ। ਤੁਹਾਨੂੰ ਅਹਿਸਾਸ ਨਹੀਂ ਸੀ ਮੈਂ ਰਾਜਿਆਂ ਨਾਲ ਰਹਿ ਰਿਹਾ ਸੀ। [defeated] ਪਰ ਫਿਰ... ਮੈਂ ਵਾਪਸ ਆਇਆ। ਸਫ਼ਰ ਖਤਮ ਹੋ ਗਿਆ। ਅਤੇ ਫੌਰਨ... \"ਨੌਕਰੀ ਲੈ ਲਓ।\" ਸੁਪਨਾ ਖਤਮ ਹੋ ਗਿਆ।",

      danish: "[release] Efter sorgen... efter dødens mørke... jeg løb ikke væk, Papa. Jeg fløj. [amazed] Jeg tog til Chicago for at møde Vishnu. Hans forældre er otte-cifrede millionærer. Vi debatterede at tage et fyrretyve tusind dollar privat jetfly til LA. [laughing] Vi måtte flyve kommercielt kun fordi han allerede havde chartret for mange jetfly den måned. [excited] Vi tog til Los Angeles i en måned. Min ven Yaseen betalte for alt. Hotel i downtown LA. [proud] Jeg kørte Rolls Royces. Jeg spillede basketball med Lil Tjay. Han inviterede mig hjem til sig. Han gav mig nøglerne til sin bil. [intense] Og hele tiden... ringede min telefon. Dig. Panisk. \"Kom hjem! Hvor er du?\" [sad] Du troede jeg var et bortløbet barn i fare. Du indså ikke jeg levede med konger. [defeated] Men så... jeg kom tilbage. Turen sluttede. Og med det samme... \"Få et job.\" Drømmen var forbi."
    },
    textLines: [
      {
        urdu: "Chicago: Vishnu (٨-فیگر فیملی)",
        english: "Chicago: Vishnu (8-Figure Family)",
        punjabi: "Chicago: Vishnu (੮-ਫਿਗਰ ਫੈਮਲੀ)",
        danish: "Chicago: Vishnu (8-Cifret Familie)"
      },
      {
        urdu: "Private Jet بمقابلہ Commercial",
        english: "Private Jet vs Commercial",
        punjabi: "Private Jet ਬਨਾਮ Commercial",
        danish: "Privat Jet vs Kommerciel",
        delay: 400
      },
      {
        urdu: "LA: Yaseen نے سب کچھ pay کیا۔",
        english: "LA: Yaseen paid for everything.",
        punjabi: "LA: Yaseen ਨੇ ਸਭ ਕੁਝ pay ਕੀਤਾ।",
        danish: "LA: Yaseen betalte for alt.",
        delay: 800
      },
      {
        urdu: "Lil Tjay: Basketball & اس کی گاڑیاں",
        english: "Lil Tjay: Basketball & His Cars",
        punjabi: "Lil Tjay: Basketball & ਉਸਦੀਆਂ ਕਾਰਾਂ",
        danish: "Lil Tjay: Basketball & Hans Biler",
        delay: 1200
      },
      {
        urdu: "آپ: \"بھاگ گیا۔\" میں: \"زندہ رہ رہا ہوں۔\"",
        english: "You: \"Runaway.\" Me: \"Living.\"",
        punjabi: "ਤੁਸੀਂ: \"ਭੱਜਿਆ।\" ਮੈਂ: \"ਜੀ ਰਿਹਾ ਹਾਂ।\"",
        danish: "Dig: \"Bortløben.\" Mig: \"Levende.\"",
        delay: 1600
      }
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-22-5-la-escape.jpg',
    textOverlay: 'LIVING WITH KINGS',
    timePeriod: 'APRIL-MAY 2021'
  },

  // Scene 23: DAILYRAPFACTS EXPLOSION
  {
    id: 23,
    title: "DAILYRAPFACTS EXPLOSION",
    audioScripts: {
      urdu: "[proud] ٢٠١٤ سے، میں نے DailyRapFacts چلایا۔ Ope کے ساتھ۔ [amazed] ہمیں پانچ سو million impressions مہینے میں ملے۔ آٹھ سو million total reach۔ [excited] DMCA نے ہمیں shut down کیا۔ [confident] ہم نے rebuild کیا۔ اور واپس آ گئے۔ [proud] بڑے سے بھی بڑے۔",

      english: "[proud] Since two thousand fourteen, I ran DailyRapFacts. With Opee. [amazed] We got five hundred million impressions a month. Eight hundred million total reach. [excited] DMCA shut us down. [confident] We rebuilt. And came back. [proud] Bigger than before.",

      punjabi: "[proud] ੨੦੧੪ ਤੋਂ, ਮੈਂ DailyRapFacts ਚਲਾਇਆ। Ope ਨਾਲ। [amazed] ਸਾਨੂੰ ਪੰਜ ਸੌ million impressions ਮਹੀਨੇ ਵਿੱਚ ਮਿਲੇ। ਅੱਠ ਸੌ million total reach। [excited] DMCA ਨੇ ਸਾਨੂੰ shut down ਕੀਤਾ। [confident] ਅਸੀਂ rebuild ਕੀਤਾ। ਅਤੇ ਵਾਪਸ ਆ ਗਏ। [proud] ਪਹਿਲਾਂ ਨਾਲੋਂ ਵੱਡੇ।",

      danish: "[proud] Siden to tusind og fjorten, drev jeg DailyRapFacts. Med Ope. [amazed] Vi fik fem hundrede millioner visninger om måneden. Otte hundrede millioner total rækkevidde. [excited] DMCA lukkede os ned. [confident] Vi genopbyggede. Og kom tilbage. [proud] Større end før."
    },
    textLines: [
      {
        urdu: "DailyRapFacts: ٢٠١٤-موجودہ",
        english: "DailyRapFacts: 2014-Present",
        punjabi: "DailyRapFacts: ੨੦੧੪-ਮੌਜੂਦਾ",
        danish: "DailyRapFacts: 2014-Nutid"
      },
      {
        urdu: "٥٠٠M impressions/ماہ",
        english: "500M impressions/month",
        punjabi: "੫੦੦M impressions/ਮਹੀਨਾ",
        danish: "500M visninger/måned",
        delay: 400
      },
      {
        urdu: "٨٠٠M total reach",
        english: "800M total reach",
        punjabi: "੮੦੦M total reach",
        danish: "800M total rækkevidde",
        delay: 800
      },
      {
        urdu: "DMCA shutdown → Rebuild",
        english: "DMCA shutdown → Rebuild",
        punjabi: "DMCA shutdown → Rebuild",
        danish: "DMCA nedlukning → Genopbygget",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-23-dailyrapfacts.jpg',
    textOverlay: 'DAILYRAPFACTS',
    timePeriod: '2014-PRESENT'
  },

  // Scene 24: RAPTV PARTNERSHIP
  {
    id: 24,
    title: "RAPTV PARTNERSHIP",
    audioScripts: {
      urdu: "[excited] RapTV۔ پندرہ million followers۔ [proud] ان کا founder Daniel Snow۔ Forbes ٣٠ Under ٣٠۔ ساٹھ million dollars revenue۔ [amazed] وہ میرا business partner بن گیا۔ [emotional] کسی نے مجھ میں یہ دیکھا۔ یہ صلاحیت۔",

      english: "[excited] RapTV. Fifteen million followers. [proud] Their founder Daniel Snow. Forbes thirty under thirty. Sixty million dollars revenue. [amazed] He became my business partner. [emotional] Someone saw this in me. This potential.",

      punjabi: "[excited] RapTV। ਪੰਦਰਾਂ million followers। [proud] ਉਨ੍ਹਾਂ ਦਾ founder Daniel Snow। Forbes ੩੦ Under ੩੦। ਸੱਠ million dollars revenue। [amazed] ਉਹ ਮੇਰਾ business partner ਬਣ ਗਿਆ। [emotional] ਕਿਸੇ ਨੇ ਮੇਰੇ ਵਿੱਚ ਇਹ ਦੇਖਿਆ। ਇਹ ਸਮਰੱਥਾ।",

      danish: "[excited] RapTV. Femten millioner følgere. [proud] Deres grundlægger Daniel Snow. Forbes tredive under tredive. Tres millioner dollars omsætning. [amazed] Han blev min forretningspartner. [emotional] Nogen så dette i mig. Dette potentiale."
    },
    textLines: [
      {
        urdu: "RapTV Partnership",
        english: "RapTV Partnership",
        punjabi: "RapTV Partnership",
        danish: "RapTV Partnerskab"
      },
      {
        urdu: "Daniel Snow: Forbes ٣٠ Under ٣٠",
        english: "Daniel Snow: Forbes 30 Under 30",
        punjabi: "Daniel Snow: Forbes ੩੦ Under ੩੦",
        danish: "Daniel Snow: Forbes 30 Under 30",
        delay: 400
      },
      {
        urdu: "١٥M followers, $٦٠M revenue",
        english: "15M followers, $60M revenue",
        punjabi: "੧੫M followers, $੬੦M revenue",
        danish: "15M følgere, $60M omsætning",
        delay: 800
      },
      {
        urdu: "میرا business partner",
        english: "My business partner",
        punjabi: "ਮੇਰਾ business partner",
        danish: "Min forretningspartner",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-24-raptv.jpg',
    textOverlay: 'RAPTV',
    timePeriod: '2018-2020'
  },

  // Scene 25: TORY LANEZ
  {
    id: 25,
    title: "TORY LANEZ",
    audioScripts: {
      urdu: "[amazed] April ٢٠٢٠۔ Tory Lanez نے مجھے DM کیا۔ [proud] Grammy-nominated artist۔ [emotional] اس نے میرے کام کو recognize کیا۔ [reflective] وہ جانتا تھا میں کون ہوں۔ میں نے کیا کیا ہے۔ [soft] اور تم... تم نے کبھی نہیں پوچھا۔",

      english: "[amazed] April two thousand twenty. Tory Lanez DMed me. [proud] Grammy-nominated artist. [emotional] He recognized my work. [reflective] He knew who I was. What I'd built. [soft] And you... you never asked.",

      punjabi: "[amazed] April ੨੦੨੦। Tory Lanez ਨੇ ਮੈਨੂੰ DM ਕੀਤਾ। [proud] Grammy-nominated artist। [emotional] ਉਸਨੇ ਮੇਰੇ ਕੰਮ ਨੂੰ recognize ਕੀਤਾ। [reflective] ਉਹ ਜਾਣਦਾ ਸੀ ਮੈਂ ਕੌਣ ਹਾਂ। ਮੈਂ ਕੀ ਬਣਾਇਆ ਸੀ। [soft] ਅਤੇ ਤੁਸੀਂ... ਤੁਸੀਂ ਕਦੇ ਨਹੀਂ ਪੁੱਛਿਆ।",

      danish: "[amazed] April to tusind og tyve. Tory Lanez sendte mig en DM. [proud] Grammy-nomineret artist. [emotional] Han anerkendte mit arbejde. [reflective] Han vidste hvem jeg var. Hvad jeg havde bygget. [soft] Og du... du spurgte aldrig."
    },
    textLines: [
      {
        urdu: "April ٢٠٢٠",
        english: "April 2020",
        punjabi: "April ੨੦੨੦",
        danish: "April 2020"
      },
      {
        urdu: "Tory Lanez DM",
        english: "Tory Lanez DM",
        punjabi: "Tory Lanez DM",
        danish: "Tory Lanez DM",
        delay: 400
      },
      {
        urdu: "Grammy-nominated artist",
        english: "Grammy-nominated artist",
        punjabi: "Grammy-nominated artist",
        danish: "Grammy-nomineret artist",
        delay: 800
      },
      {
        urdu: "اس نے جانا۔ تم نے نہیں۔",
        english: "He knew. You didn't.",
        punjabi: "ਉਸਨੇ ਜਾਣਿਆ। ਤੁਸੀਂ ਨਹੀਂ।",
        danish: "Han vidste. Du gjorde ikke.",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-25-tory-lanez.jpg',
    textOverlay: 'RECOGNITION',
    timePeriod: 'APRIL 2020'
  },

  // Scene 26: LIMELIGHT VISION
  {
    id: 26,
    title: "LIMELIGHT VISION",
    audioScripts: {
      urdu: "[excited] میں نے ایک app بنایا۔ Limelight۔ [thoughtful] Location-based music platform۔ [proud] تم کسی venue میں جاتے ہو، تم دیکھتے ہو کون سا music وہاں بج رہا ہے۔ [confident] اور میں نے یہ خود سے بنایا۔",

      english: "[excited] I built an app. Limelight. [thoughtful] Location-based music platform. [proud] You go to a venue, you see what music is playing there. [confident] And I built this myself.",

      punjabi: "[excited] ਮੈਂ ਇੱਕ app ਬਣਾਇਆ। Limelight। [thoughtful] Location-based music platform। [proud] ਤੁਸੀਂ ਕਿਸੇ venue ਵਿੱਚ ਜਾਂਦੇ ਹੋ, ਤੁਸੀਂ ਦੇਖਦੇ ਹੋ ਕਿਹੜਾ music ਉੱਥੇ ਵੱਜ ਰਿਹਾ ਹੈ। [confident] ਅਤੇ ਮੈਂ ਇਹ ਖੁਦ ਬਣਾਇਆ।",

      danish: "[excited] Jeg byggede en app. Limelight. [thoughtful] Lokationsbaseret musikplatform. [proud] Du går til et sted, du ser hvilken musik der spiller der. [confident] Og jeg byggede dette selv."
    },
    textLines: [
      {
        urdu: "Limelight App",
        english: "Limelight App",
        punjabi: "Limelight App",
        danish: "Limelight App"
      },
      {
        urdu: "Location-based music",
        english: "Location-based music",
        punjabi: "Location-based music",
        danish: "Lokationsbaseret musik",
        delay: 400
      },
      {
        urdu: "اپنے آپ سے بنایا۔",
        english: "Built it myself.",
        punjabi: "ਖੁਦ ਬਣਾਇਆ।",
        danish: "Byggede det selv.",
        delay: 800
      },
      {
        urdu: "ایک نیا vision",
        english: "A new vision",
        punjabi: "ਇੱਕ ਨਵਾਂ vision",
        danish: "En ny vision",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-26-limelight-vision.jpg',
    textOverlay: 'LIMELIGHT',
    timePeriod: '2018-2019'
  },

  // Scene 27: LIMELIGHT #4 APP STORE
  {
    id: 27,
    title: "LIMELIGHT #4 APP STORE",
    audioScripts: {
      urdu: "[amazed] Limelight تیس ہزار users تک پہنچ گیا۔ ایک سو بیس countries میں۔ پانچ ہزار artists۔ [proud] صفر marketing خرچہ۔ [excited] Universal Music اور Warner Brothers نے campaigns چلائے۔ The Weeknd۔ Kendrick Lamar۔ [emotional] AC Jump Start نے مجھے پچیس ہزار dollars grant دی۔ [bitter] اور تم نے کہا... میں صرف government کی رقم لے رہا ہوں۔",

      english: "[amazed] Limelight reached thirty thousand users. In one hundred twenty countries. Five thousand artists. [proud] Zero marketing spend. [excited] Universal Music and Warner Brothers ran campaigns. The Weeknd. Kendrick Lamar. [emotional] AC Jump Start gave me a twenty-five thousand dollar grant. [bitter] And you said... I was just taking government money.",

      punjabi: "[amazed] Limelight ਤੀਹ ਹਜ਼ਾਰ users ਤੱਕ ਪਹੁੰਚ ਗਿਆ। ਇੱਕ ਸੌ ਵੀਹ countries ਵਿੱਚ। ਪੰਜ ਹਜ਼ਾਰ artists। [proud] ਜ਼ੀਰੋ marketing ਖਰਚ। [excited] Universal Music ਅਤੇ Warner Brothers ਨੇ campaigns ਚਲਾਏ। The Weeknd। Kendrick Lamar। [emotional] AC Jump Start ਨੇ ਮੈਨੂੰ ਪੱਚੀ ਹਜ਼ਾਰ dollars grant ਦਿੱਤੀ। [bitter] ਅਤੇ ਤੁਸੀਂ ਕਿਹਾ... ਮੈਂ ਸਿਰਫ਼ government ਦੇ ਪੈਸੇ ਲੈ ਰਿਹਾ ਹਾਂ।",

      danish: "[amazed] Limelight nåede tredive tusind brugere. I et hundrede og tyve lande. Fem tusind artister. [proud] Nul markedsføring. [excited] Universal Music og Warner Brothers kørte kampagner. The Weeknd. Kendrick Lamar. [emotional] AC Jump Start gav mig et tilskud på femogtyve tusind dollars. [bitter] Og du sagde... jeg bare tog regeringens penge."
    },
    textLines: [
      {
        urdu: "Limelight: #٤ App Store",
        english: "Limelight: #4 App Store",
        punjabi: "Limelight: #੪ App Store",
        danish: "Limelight: #4 App Store"
      },
      {
        urdu: "٣٠K users, ١٢٠ countries, ٥K artists",
        english: "30K users, 120 countries, 5K artists",
        punjabi: "੩੦K users, ੧੨੦ countries, ੫K artists",
        danish: "30K brugere, 120 lande, 5K artister",
        delay: 400
      },
      {
        urdu: "Universal, Warner campaigns",
        english: "Universal, Warner campaigns",
        punjabi: "Universal, Warner campaigns",
        danish: "Universal, Warner kampagner",
        delay: 800
      },
      {
        urdu: "AC Jump Start: $٢٥K grant",
        english: "AC Jump Start: $25K grant",
        punjabi: "AC Jump Start: $੨੫K grant",
        danish: "AC Jump Start: $25K tilskud",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-27-limelight-peak.jpg',
    textOverlay: '#4 APP STORE',
    timePeriod: '2019-2020'
  },
];
