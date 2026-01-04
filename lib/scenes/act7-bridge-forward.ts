
import { SceneData } from '../types';

/**
 * ACT 7: THE BRIDGE FORWARD (Scenes 40-43)
 * The realization of the environment pattern, the disconnect in worldviews,
 * and the concrete financial solution (Condo/Equity) to break the cycle.
 */

export const act7Scenes: SceneData[] = [
  // Scene 41: THE DISCONNECT (Taxi vs Empire)
  {
    id: 41,
    title: "THE DISCONNECT",
    audioScripts: {
      urdu: "[sad] آپ ٹیکسی چلاتے ہیں۔ 14 گھنٹے روزانہ۔ جسم توڑ محنت۔ [soft] آپ ایک مہینے میں وہ کماتے ہیں جو میں ایک ہفتے میں کماتا تھا۔ [pain] جب میں نے آپ کو بتایا... آپ نے سوچا میں جھوٹ بول رہا ہوں۔ \"Capping\"۔ [bitter] جب مجھے $25,000 کی گرانٹ ملی... آپ نے کہا یہ \"سرکاری بھیک\" ہے۔ [angry] اور جب مجھے $14,000 کی ضرورت پڑی... آپ نے کہا میں نے زندگی برباد کر دی۔ [intense] بابا، وہ میرے لیے دو ہفتے کی کمائی تھی۔ [broken] آپ کا خوف... میرا پنجرہ بن گیا۔ میں نے اپنی کامیابی کو آپ کی گھبراہٹ میں فٹ کرنے کے لیے چھوٹا کر دیا۔",

      english: "[sad] You drive a taxi. Fourteen hours a day. Breaking your body. [soft] You make in a month what I was making in a week. [pain] When I told you... you thought I was lying. \"Capping.\" [bitter] When I got a $25,000 grant... you called it \"government handouts.\" [angry] And when I needed $14,000... you said I ruined my life. [intense] Papa, that was two weeks of income for me. [broken] Your panic... became my cage. I shrank my success to fit inside your fear.",

      punjabi: "[sad] ਤੁਸੀਂ ਟੈਕਸੀ ਚਲਾਉਂਦੇ ਹੋ। 14 ਘੰਟੇ ਰੋਜ਼ਾਨਾ। ਸਰੀਰ ਤੋੜ ਮਿਹਨਤ। [soft] ਤੁਸੀਂ ਇੱਕ ਮਹੀਨੇ 'ਚ ਉਹ ਕਮਾਉਂਦੇ ਹੋ ਜੋ ਮੈਂ ਇੱਕ ਹਫ਼ਤੇ 'ਚ ਕਮਾਉਂਦਾ ਸੀ। [pain] ਜਦੋਂ ਮੈਂ ਤੁਹਾਨੂੰ ਦੱਸਿਆ... ਤੁਸੀਂ ਸੋਚਿਆ ਮੈਂ ਝੂਠ ਬੋਲ ਰਿਹਾ ਹਾਂ। [bitter] ਜਦੋਂ ਮੈਨੂੰ $25,000 ਦੀ ਗ੍ਰਾਂਟ ਮਿਲੀ... ਤੁਸੀਂ ਕਿਹਾ ਇਹ \"ਸਰਕਾਰੀ ਭੀਖ\" ਹੈ। [angry] ਅਤੇ ਜਦੋਂ ਮੈਨੂੰ $14,000 ਦੀ ਲੋੜ ਪਈ... ਤੁਸੀਂ ਕਿਹਾ ਮੈਂ ਜ਼ਿੰਦਗੀ ਬਰਬਾਦ ਕਰ ਦਿੱਤੀ। [intense] ਪਾਪਾ, ਉਹ ਮੇਰੇ ਲਈ ਦੋ ਹਫ਼ਤਿਆਂ ਦੀ ਕਮਾਈ ਸੀ। [broken] ਤੁਹਾਡਾ ਡਰ... ਮੇਰਾ ਪਿੰਜਰਾ ਬਣ ਗਿਆ।",

      danish: "[sad] Du kører taxa. Fjorten timer om dagen. Ødelægger din krop. [soft] Du tjener på en måned, hvad jeg tjente på en uge. [pain] Da jeg fortalte dig det... troede du jeg løj. [bitter] Da jeg fik $25.000 i tilskud... kaldte du det \"regeringspenge\". [angry] Og da jeg manglede $14.000... sagde du jeg ødelagde mit liv. [intense] Papa, det var to ugers indkomst for mig. [broken] Din panik... blev mit bur."
    },
    textLines: [
      {
        urdu: "آپ کا مہینہ = میرا ہفتہ",
        english: "Your month = My week",
        punjabi: "ਤੁਹਾਡਾ ਮਹੀਨਾ = ਮੇਰਾ ਹਫ਼ਤਾ",
        danish: "Din måned = Min uge"
      },
      {
        urdu: "آپ نے یقین نہیں کیا۔",
        english: "You didn't believe me.",
        punjabi: "ਤੁਸੀਂ ਯਕੀਨ ਨਹੀਂ ਕੀਤਾ।",
        danish: "Du troede ikke på mig.",
        delay: 400
      },
      {
        urdu: "$14k قرض = 2 ہفتے کی آمدنی",
        english: "$14k Debt = 2 Weeks Income",
        punjabi: "$14k ਕਰਜ਼ਾ = 2 ਹਫ਼ਤਿਆਂ ਦੀ ਕਮਾਈ",
        danish: "$14k Gæld = 2 ugers indkomst",
        delay: 800
      },
      {
        urdu: "آپ کا خوف میرا پنجرہ بن گیا۔",
        english: "Your fear became my cage.",
        punjabi: "ਤੁਹਾਡਾ ਡਰ ਮੇਰਾ ਪਿੰਜਰਾ ਬਣ ਗਿਆ।",
        danish: "Din frygt blev mit bur.",
        delay: 1200
      },
    ],
    visualStyle: 'dramatic',
    backgroundImage: '/images/scene-41-taxi-vs-empire.jpg',
    textOverlay: 'FRAME OF REFERENCE',
    timePeriod: 'THE DISCONNECT'
  },

  // Scene 41.5: THE FIXER
  {
    id: 41.5,
    title: "THE FIXER",
    audioScripts: {
      urdu: "[calm] یہ کوئی لڑائی نہیں ہے۔ یہ رگڑ (friction) ہے۔ [thoughtful] میں آپ کے پاس اپنی زندگی کا منظر بیان کرنے آتا ہوں... اور آپ فوراً مجھے نقشہ (map) تھما دیتے ہیں۔ [gentle] آپ سمجھتے ہیں میں کھو گیا ہوں۔ مجھے بالکل پتا ہے میں کہاں ہوں۔ [emotional] میں صرف یہ چاہتا تھا کہ آپ میرے ساتھ کھڑکی سے باہر دیکھیں۔ [analytical] آپ میری زندگی کو ایک ٹوٹے ہوئے toaster کی طرح دیکھتے ہیں۔ جسے re-wire کرنے کی ضرورت ہے۔ efficient بنانے کی۔ [firm] لیکن میں ٹوٹا ہوا نہیں ہوں۔ میں صرف... buffer کر رہا ہوں۔ [peaceful] تو میں سر ہلاتا ہوں۔ \"جی پاپا۔\" \"ٹھیک ہے پاپا۔\" [wisely] میں آپ کو filter کرتا ہوں۔ میں کام کی باتیں لیتا ہوں... اور باقی سے خود کو بچاتا ہوں۔",
      english: "[calm] It's not a fight. It's friction. [thoughtful] I come to you to describe the scenery of my life... and you immediately hand me a map. [gentle] You think I am lost. I know exactly where I am. [emotional] I just wanted you to look out the window with me. [analytical] You treat my life like a broken toaster. Something to be re-wired. Made efficient. [firm] But I am not broken. I am just... buffering. [peaceful] So I nod. \"Okay Papa.\" \"Yes Papa.\" [wisely] I filter you. I take the useful parts... and I protect the rest.",
      punjabi: "[calm] ਇਹ ਕੋਈ ਲੜਾਈ ਨਹੀਂ ਹੈ। ਇਹ friction ਹੈ। [thoughtful] ਮੈਂ ਤੁਹਾਡੇ ਕੋਲ ਆਪਣੀ ਜ਼ਿੰਦਗੀ ਦਾ ਨਜ਼ਾਰਾ ਦੱਸਣ ਆਉਂਦਾ ਹਾਂ... ਅਤੇ ਤੁਸੀਂ ਝੱਟ ਮੈਨੂੰ ਨਕਸ਼ਾ (map) ਫੜਾ ਦਿੰਦੇ ਹੋ। [gentle] ਤੁਸੀਂ ਸਮਝਦੇ ਹੋ ਮੈਂ ਗੁਆਚ ਗਿਆ ਹਾਂ। ਮੈਨੂੰ ਬਿਲਕੁਲ ਪਤਾ ਹੈ ਮੈਂ ਕਿੱਥੇ ਹਾਂ। [emotional] ਮੈਂ ਸਿਰਫ਼ ਇਹ ਚਾਹੁੰਦਾ ਸੀ ਕਿ ਤੁਸੀਂ ਮੇਰੇ ਨਾਲ ਖਿੜਕੀ ਤੋਂ ਬਾਹਰ ਦੇਖੋ। [analytical] ਤੁਸੀਂ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਨੂੰ ਇੱਕ ਟੁੱਟੇ ਹੋਏ toaster ਵਾਂਗ ਦੇਖਦੇ ਹੋ। ਜਿਸਨੂੰ re-wire ਕਰਨ ਦੀ ਲੋੜ ਹੈ। [firm] ਪਰ ਮੈਂ ਟੁੱਟਿਆ ਹੋਇਆ ਨਹੀਂ ਹਾਂ। ਮੈਂ ਸਿਰਫ਼... buffer ਕਰ ਰਿਹਾ ਹਾਂ। [peaceful] ਤਾਂ ਮੈਂ ਸਿਰ ਹਿਲਾਉਂਦਾ ਹਾਂ। \"ਜੀ ਪਾਪਾ।\" \"ਠੀਕ ਹੈ ਪਾਪਾ।\" [wisely] ਮੈਂ ਤੁਹਾਨੂੰ filter ਕਰਦਾ ਹਾਂ। ਮੈਂ ਕੰਮ ਦੀਆਂ ਗੱਲਾਂ ਲੈਂਦਾ ਹਾਂ... ਅਤੇ ਬਾਕੀ ਤੋਂ ਖੁਦ ਨੂੰ ਬਚਾਉਂਦਾ ਹਾਂ।",
      danish: "[calm] Det er ikke en kamp. Det er friktion. [thoughtful] Jeg kommer til dig for at beskrive udsigten over mit liv... og du giver mig straks et kort. [gentle] Du tror, jeg er faret vild. Jeg ved præcis, hvor jeg er. [emotional] Jeg ville bare have, at du kiggede ud ad vinduet med mig. [analytical] Du behandler mit liv som en ødelagt brødrister. Noget der skal ominstalleres. Gøres effektivt. [firm] Men jeg er ikke i stykker. Jeg... buffer bare. [peaceful] Så jeg nikker. \"Okay Papa.\" \"Ja Papa.\" [wisely] Jeg filtrerer dig. Jeg tager de brugbare dele... og jeg beskytter resten."
    },
    textLines: [
      {
        urdu: "لڑائی نہیں، رگڑ (friction)",
        english: "Not a fight. Friction.",
        punjabi: "ਲੜਾਈ ਨਹੀਂ। Friction.",
        danish: "Ikke en kamp. Friktion."
      },
      {
        urdu: "میں منظر دکھاتا ہوں، آپ نقشہ دیتے ہیں",
        english: "I show scenery, you give map",
        punjabi: "ਮੈਂ ਨਜ਼ਾਰਾ ਦਿਖਾਉਂਦਾ ਹਾਂ, ਤੁਸੀਂ ਨਕਸ਼ਾ",
        danish: "Jeg viser udsigt, du giver kort",
        delay: 400
      },
      {
        urdu: "میں ٹوٹا نہیں ہوں... buffer کر رہا ہوں",
        english: "Not broken... just buffering",
        punjabi: "ਟੁੱਟਿਆ ਨਹੀਂ... buffer ਕਰ ਰਿਹਾ ਹਾਂ",
        danish: "Ikke i stykker... buffer bare",
        delay: 800
      },
      {
        urdu: "میں filter کرتا ہوں۔ protect کرتا ہوں۔",
        english: "I filter. I protect.",
        punjabi: "ਮੈਂ filter ਕਰਦਾ ਹਾਂ। protect ਕਰਦਾ ਹਾਂ।",
        danish: "Jeg filtrerer. Jeg beskytter.",
        delay: 1200
      }
    ],
    visualStyle: 'abstract',
    backgroundImage: '/images/scene-41.5-the-fixer.jpg',
    textOverlay: 'MAP VS SCENERY',
    timePeriod: 'THE FRICTION'
  },

  // Scene 42: THE EQUITY SOLUTION (The True Solution)
  {
    id: 42,
    title: "THE EQUITY SOLUTION",
    audioScripts: {
      urdu: "[analytical] بابا، یہ ایک ریاضی کا مسئلہ ہے۔ جذباتی نہیں۔ [logical] میں گھر پر پیسے نہیں بچا سکتا کیونکہ یہ ماحول مجھے بیمار کر دیتا ہے۔ [strategic] لیکن کرائے پر جانا پیسے ضائع کرنا ہے۔ [firm] تو یہ رہا حل: آپ کنڈو (condo) کے لیے downpayment دیں۔ میں mortgage ادا کروں گا۔ [confident] آپ کے پاس ٹائر شاپ بیچنے کا capital ہے۔ میرے پاس $120k کی تنخواہ کا cash flow ہے۔ [persuasive] ہم equity بناتے ہیں۔ دولت خاندان میں رہتی ہے۔ اور سب سے اہم... مجھے وہ ماحول ملتا ہے جس کی مجھے زندہ رہنے کے لیے ضرورت ہے۔ [hopeful] یہ خیرات نہیں ہے۔ یہ partnership ہے۔",

      english: "[analytical] Papa, this is a math problem. Not an emotional one. [logical] I cannot save money at home because the environment makes me sick. [strategic] But renting is throwing money away. [firm] So here is the solution: You put the downpayment on a condo. I will pay the mortgage. [confident] You have the capital from the tire shop sale. I have the cash flow from my $120k salary. [persuasive] We build equity. The wealth stays in the family. And most importantly... I get the environment I need to survive. [hopeful] This isn't charity. It's a partnership.",

      punjabi: "[analytical] ਪਾਪਾ, ਇਹ ਇੱਕ ਹਿਸਾਬ ਦਾ ਮਸਲਾ ਹੈ। ਜਜ਼ਬਾਤੀ ਨਹੀਂ। [logical] ਮੈਂ ਘਰ 'ਚ ਪੈਸੇ ਨਹੀਂ ਬਚਾ ਸਕਦਾ ਕਿਉਂਕਿ ਇਹ ਮਾਹੌਲ ਮੈਨੂੰ ਬਿਮਾਰ ਕਰ ਦਿੰਦਾ ਹੈ। [strategic] ਪਰ ਕਿਰਾਏ 'ਤੇ ਜਾਣਾ ਪੈਸੇ ਬਰਬਾਦ ਕਰਨਾ ਹੈ। [firm] ਤਾਂ ਇਹ ਰਿਹਾ ਹੱਲ: ਤੁਸੀਂ condo ਲਈ downpayment ਦਿਓ। ਮੈਂ mortgage ਅਦਾ ਕਰਾਂਗਾ। [confident] ਤੁਹਾਡੇ ਕੋਲ ਟਾਇਰ ਸ਼ਾਪ ਵੇਚਣ ਦਾ capital ਹੈ। ਮੇਰੇ ਕੋਲ $120k ਦੀ ਤਨਖਾਹ ਦਾ cash flow ਹੈ। [persuasive] ਅਸੀਂ equity ਬਣਾਉਂਦੇ ਹਾਂ। ਦੌਲਤ ਪਰਿਵਾਰ ਵਿੱਚ ਰਹਿੰਦੀ ਹੈ। ਅਤੇ ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ... ਮੈਨੂੰ ਉਹ ਮਾਹੌਲ ਮਿਲਦਾ ਹੈ ਜਿਸਦੀ ਮੈਨੂੰ ਜ਼ਿੰਦਾ ਰਹਿਣ ਲਈ ਲੋੜ ਹੈ। [hopeful] ਇਹ ਖੈਰਾਤ ਨਹੀਂ ਹੈ। ਇਹ partnership ਹੈ।",

      danish: "[analytical] Papa, dette er et matematikproblem. Ikke et følelsesmæssigt. [logical] Jeg kan ikke spare penge hjemme, fordi miljøet gør mig syg. [strategic] Men at leje er at smide penge ud. [firm] Så her er løsningen: Du lægger udbetalingen til en lejlighed. Jeg betaler realkreditlånet. [confident] Du har kapitalen fra salget af dækbutikken. Jeg har pengestrømmen fra min $120k løn. [persuasive] Vi opbygger friværdi. Rigdommen bliver i familien. Og vigtigst af alt... jeg får det miljø, jeg skal bruge for at overleve. [hopeful] Dette er ikke velgørenhed. Det er et partnerskab."
    },
    textLines: [
      {
        urdu: "مسئلہ: میں یہاں بچت نہیں کر سکتا",
        english: "Problem: Can't save here",
        punjabi: "ਮਸਲਾ: ਮੈਂ ਇੱਥੇ ਬਚਤ ਨਹੀਂ ਕਰ ਸਕਦਾ",
        danish: "Problem: Kan ikke spare her"
      },
      {
        urdu: "آپ Downpayment دیں۔ میں Mortgage دوں۔",
        english: "You: Downpayment. Me: Mortgage.",
        punjabi: "ਤੁਸੀਂ Downpayment ਦਿਓ। ਮੈਂ Mortgage ਦਿਆਂ।",
        danish: "Dig: Udbetaling. Mig: Realkreditlån.",
        delay: 400
      },
      {
        urdu: "ہم کرایہ ضائع کرنے کے بجائے Equity بنائیں",
        english: "Build Equity instead of Renting",
        punjabi: "ਕਿਰਾਇਆ ਬਰਬਾਦ ਕਰਨ ਦੀ ਬਜਾਏ Equity ਬਣਾਈਏ",
        danish: "Byg friværdi i stedet for at leje",
        delay: 800
      },
      {
        urdu: "خیرات نہیں۔ پارٹنرشپ۔",
        english: "Not charity. Partnership.",
        punjabi: "ਖੈਰਾਤ ਨਹੀਂ। Partnership।",
        danish: "Ikke velgørenhed. Partnerskab.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-42-equity-solution.jpg',
    textOverlay: 'THE DEAL',
    timePeriod: 'THE PROPOSAL'
  },

  // Scene 43: I AM OKAY (The Resolution)
  {
    id: 43,
    title: "I AM OKAY",
    audioScripts: {
      urdu: "[gentle] آپ مجھے اس سطح تک کوچ نہیں کر سکتے جو آپ نے کبھی دیکھی ہی نہیں۔ [thoughtful] آپ نے زندہ رہنا سکھایا۔ میں نے اڑنا سیکھا۔ [emotional] مجھے افسوس ہے کہ میں وہ نہیں بن سکا جو آپ چاہتے تھے۔ [determined] لیکن میں اب اپنی اہلیت ثابت کرنے کے لیے نہیں لڑوں گا۔ [peaceful] مجھے یہ سودا کرنا ہے۔ مجھے جانا ہے۔ تاکہ میں وہ بن سکوں جو میں ہوں۔ [warm] میں آپ کا بیٹا ہوں۔ اور میں ٹھیک ہوں۔",

      english: "[gentle] You cannot coach me to a level you have never seen. [thoughtful] You taught me survival. I learned to fly. [emotional] I grieve that I cannot be who you want. [determined] But I am done auditioning for my own life. [peaceful] We need to make this deal. I have to leave, so I can be who I am. [warm] Main aap ka beta hoon. Aur main theek hoon. (I am your son. And I am okay.)",

      punjabi: "[gentle] ਤੁਸੀਂ ਮੈਨੂੰ ਉਸ ਪੱਧਰ ਤੱਕ ਕੋਚ ਨਹੀਂ ਕਰ ਸਕਦੇ ਜੋ ਤੁਸੀਂ ਕਦੇ ਦੇਖਿਆ ਹੀ ਨਹੀਂ। [thoughtful] ਤੁਸੀਂ ਜਿਉਣਾ ਸਿਖਾਇਆ। ਮੈਂ ਉੱਡਣਾ ਸਿੱਖਿਆ। [emotional] ਮੈਨੂੰ ਅਫਸੋਸ ਹੈ ਕਿ ਮੈਂ ਉਹ ਨਹੀਂ ਬਣ ਸਕਿਆ ਜੋ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਸੀ। [determined] ਪਰ ਮੈਂ ਹੁਣ ਆਪਣੀ ਕਾਬਲੀਅਤ ਸਾਬਤ ਕਰਨ ਲਈ ਨਹੀਂ ਲੜਾਂਗਾ। [peaceful] ਮੈਨੂੰ ਇਹ ਸੌਦਾ ਕਰਨਾ ਪਵੇਗਾ। ਮੈਨੂੰ ਜਾਣਾ ਪਵੇਗਾ, ਤਾਂ ਜੋ ਮੈਂ ਉਹ ਬਣ ਸਕਾਂ ਜੋ ਮੈਂ ਹਾਂ। [warm] ਮੈਂ ਤੁਹਾਡਾ ਪੁੱਤਰ ਹਾਂ। ਅਤੇ ਮੈਂ ਠੀਕ ਹਾਂ।",

      danish: "[gentle] Du kan ikke coache mig til et niveau, du aldrig har set. [thoughtful] Du lærte mig overlevelse. Jeg lærte at flyve. [emotional] Jeg sørger over, at jeg ikke kan være den du vil have. [determined] Men jeg er færdig med at gå til audition på mit eget liv. [peaceful] Vi er nødt til at lave denne aftale. Jeg er nødt til at tage afsted, så jeg kan være den jeg er. [warm] Jeg er din søn. Og jeg er okay."
    },
    textLines: [
      {
        urdu: "آپ نے بقا سکھائی۔",
        english: "You taught survival.",
        punjabi: "ਤੁਸੀਂ ਬਚਾਅ ਸਿਖਾਇਆ।",
        danish: "Du lærte overlevelse."
      },
      {
        urdu: "میں نے اڑنا سیکھا۔",
        english: "I learned to fly.",
        punjabi: "ਮੈਂ ਉੱਡਣਾ ਸਿੱਖਿਆ।",
        danish: "Jeg lærte at flyve.",
        delay: 400
      },
      {
        urdu: "اب مزید آڈیشن نہیں۔",
        english: "No more auditions.",
        punjabi: "ਹੋਰ ਆਡੀਸ਼ਨ ਨਹੀਂ।",
        danish: "Ingen flere auditions.",
        delay: 800
      },
      {
        urdu: "میں آپ کا بیٹا ہوں۔ اور میں ٹھیک ہوں۔",
        english: "I am your son. I am okay.",
        punjabi: "ਮੈਂ ਤੁਹਾਡਾ ਪੁੱਤਰ ਹਾਂ। ਮੈਂ ਠੀਕ ਹਾਂ।",
        danish: "Jeg er din søn. Jeg er okay.",
        delay: 1200
      },
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-43-i-am-okay.jpg',
    textOverlay: 'MAIN THEEK HOON',
    timePeriod: 'NOW'
  },

  // Scene 43.5: THE SPECIFIC ASK (Bringing it full circle)
  {
    id: 43.5,
    title: "LET'S FIND UNDERSTANDING",
    audioScripts: {
      urdu: "[calm] پابا، یہاں میری درخواست ہے۔ واضح۔ [firm] میری credit خراب ہے۔ میں اسے ٹھیک کرنا چاہتا ہوں۔ [direct] Civic gift مت دیں۔ مجھے کچھ finance کرنے میں مدد کریں جو میں خود pay کروں۔ Mercedes۔ جو میں خود pay کروں۔ credit rebuild کرنے کے لیے۔ [strategic] ٢٠٢٠: ہم نے disagree کیا condo بمقابلہ house پر۔ کچھ نہیں ہوا۔ اب: condo میں مدد کریں۔ آپ downpayment۔ میں mortgage۔ ہم equity بناتے ہیں۔ [pleading] جب ہم disagree کرتے ہیں... کچھ نہ کرنا کی بجائے... آئیں understanding تلاش کریں۔ ساتھ میں۔ [hopeful] میں قابل ہوں۔ میرا ADHD حقیقی ہے۔ میں tools کے ساتھ succeed کرتا ہوں۔ [gentle] مجھ پر trust کریں۔ میری طرح کرنے دیں۔",

      english: "[calm] Papa, here is my ask. Clear. [firm] My credit is damaged. I want to fix it. [direct] Don't gift me a Civic. Help me finance something I pay for myself. A Mercedes. That I pay for. To rebuild credit. [strategic] Twenty twenty: We disagreed on condo versus house. Nothing happened. Now: help me with a condo. You: downpayment. Me: mortgage. We build equity. [pleading] When we disagree... instead of doing nothing... let's find understanding. Together. [hopeful] I am capable. My ADHD is real. I succeed with tools. [gentle] Trust me. Let me do things my way.",

      punjabi: "[calm] ਪਾਪਾ, ਇਹ ਮੇਰੀ ਬੇਨਤੀ ਹੈ। ਸਾਫ਼। [firm] ਮੇਰੀ credit ਖਰਾਬ ਹੈ। ਮੈਂ ਇਸਨੂੰ ਠੀਕ ਕਰਨਾ ਚਾਹੁੰਦਾ ਹਾਂ। [direct] Civic gift ਨਾ ਦਿਓ। ਮੈਨੂੰ ਕੁਝ finance ਕਰਨ 'ਚ ਮਦਦ ਕਰੋ ਜੋ ਮੈਂ ਖੁਦ pay ਕਰਾਂ। Mercedes। ਜੋ ਮੈਂ ਖੁਦ pay ਕਰਾਂ। credit rebuild ਕਰਨ ਲਈ। [strategic] ੨੦੨੦: ਅਸੀਂ disagree ਕੀਤਾ condo ਬਨਾਮ house 'ਤੇ। ਕੁਝ ਨਹੀਂ ਹੋਇਆ। ਹੁਣ: condo 'ਚ ਮਦਦ ਕਰੋ। ਤੁਸੀਂ downpayment। ਮੈਂ mortgage। ਅਸੀਂ equity ਬਣਾਉਂਦੇ ਹਾਂ। [pleading] ਜਦੋਂ ਅਸੀਂ disagree ਕਰਦੇ ਹਾਂ... ਕੁਝ ਨਾ ਕਰਨ ਦੀ ਬਜਾਏ... ਚਲੋ understanding ਲੱਭੀਏ। ਇਕੱਠੇ। [hopeful] ਮੈਂ ਕਾਬਲ ਹਾਂ। ਮੇਰਾ ADHD ਅਸਲੀ ਹੈ। ਮੈਂ tools ਨਾਲ succeed ਕਰਦਾ ਹਾਂ। [gentle] ਮੈਨੂੰ trust ਕਰੋ। ਮੈਨੂੰ ਮੇਰੇ ਤਰੀਕੇ ਨਾਲ ਕਰਨ ਦਿਓ।",

      danish: "[calm] Papa, her er mit ønske. Klart. [firm] Min kredit er skadet. Jeg vil reparere den. [direct] Giv mig ikke en Civic. Hjælp mig med at finansiere noget jeg selv betaler for. En Mercedes. Som jeg betaler for. For at genopbygge kredit. [strategic] Tyve tyve: Vi var uenige om lejlighed versus hus. Intet skete. Nu: hjælp mig med en lejlighed. Dig: udbetaling. Mig: realkreditlån. Vi opbygger friværdi. [pleading] Når vi er uenige... i stedet for at gøre ingenting... lad os finde forståelse. Sammen. [hopeful] Jeg er i stand til det. Min ADHD er ægte. Jeg lykkes med værktøjer. [gentle] Stol på mig. Lad mig gøre tingene på min måde."
    },
    textLines: [
      {
        urdu: "تحفہ نہیں۔ Credit ٹھیک کرنے کے لیے tools۔",
        english: "Not a gift. Tools to rebuild credit.",
        punjabi: "ਤੋਹਫ਼ਾ ਨਹੀਂ। Credit ਠੀਕ ਕਰਨ ਲਈ tools।",
        danish: "Ikke en gave. Værktøjer til at genopbygge kredit."
      },
      {
        urdu: "Condo: آپ downpayment، میں mortgage",
        english: "Condo: You downpayment, I mortgage",
        punjabi: "Condo: ਤੁਸੀਂ downpayment, ਮੈਂ mortgage",
        danish: "Lejlighed: Du udbetaling, jeg lån",
        delay: 400
      },
      {
        urdu: "Disagree → کچھ نہیں سے → Understanding تک",
        english: "Disagree → Nothing to → Understanding",
        punjabi: "Disagree → ਕੁਝ ਨਹੀਂ ਤੋਂ → Understanding ਤੱਕ",
        danish: "Uenighed → Ingenting til → Forståelse",
        delay: 800
      },
      {
        urdu: "ساتھ مل کر۔",
        english: "Together.",
        punjabi: "ਇਕੱਠੇ।",
        danish: "Sammen.",
        delay: 1200
      }
    ],
    visualStyle: 'bright',
    backgroundImage: '/images/scene-43-5-understanding.jpg',
    textOverlay: 'LET\'S FIND UNDERSTANDING',
    timePeriod: 'THE BRIDGE'
  }
];

