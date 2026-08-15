const views=[...document.querySelectorAll('.view')];
const nav=[...document.querySelectorAll('.nav-btn')];
let currentLang='en';
let activeClaimId='fringe';

function activate(id){
  views.forEach(v=>v.classList.toggle('active',v.id===id));
  nav.forEach(b=>b.classList.toggle('active',b.dataset.view===id));
  window.scrollTo({top:0,behavior:'smooth'});
}
nav.forEach(b=>b.addEventListener('click',()=>activate(b.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{
  const target=b.dataset.jump==='lineage'?'history':'read';
  activate(target);
  setTimeout(()=>document.getElementById(b.dataset.jump)?.scrollIntoView({behavior:'smooth'}),100);
}));

const copy={
  en:{
    primaryNav:'Primary',navRead:'Read',navModel:'Model',navEvidence:'Evidence',navHistory:'History',statusCurrent:'CURRENT · 2026',
    heroEyebrow:'CRITICAL REALIST EPISTEMOLOGY · LIVING KNOWLEDGE',heroTitle:'Always under construction.',heroLead:'Knowledge is not a final node. It is the current state of an unfinished epistemic trajectory: fallible hypotheses, deliberate encounters with reality, anomaly, revision, and another turn.',viewCurrent:'View current state',openLineage:'Open revision lineage',heroCeiling:'Nothing is hidden to protect the theory. Nothing is promoted beyond the evidence. Nothing is excluded merely because it contradicts us.',
    currentEyebrow:'CURRENT EPISTEMIC STATE',currentTitle:'Draft IV is a state, not a monument.',currentLead:'Draft III is preserved. Draft IV records what is currently held, revised, reopened, or unresolved. Draft V arrives when a conceptual phase shift earns a new draft number.',stillHeld:'STILL HELD',fallibilityTitle:'Fallibility',fallibilityBody:'Our best account remains corrigible and revisable in contact with new evidence and new occurrences.',revised:'REVISED',verifiedTitle:'Verified Hypothesis',verifiedBody:'Outcome agreement does not by itself verify a causal mechanism. Support is bounded by the probe and its discrimination power.',unresolved:'UNRESOLVED',guildTitle:'Guild as Real-level mechanism',guildBody:'The guild is a candidate relational structure with causal powers. It is not a knower and is not yet treated as a validated mechanism.',
    sovereigntyEyebrow:'COGNITIVE SOVEREIGNTY',sovereigntyTitle:'Apcha begins at home.',sovereigntyBody:'No thought receives epistemic sovereignty merely because it is mine. The gap between Forecast and Hypothesis is a reflexive inspection surface: what evidence entered, what stake shifted, what story became attractive, and what possible motive may have acted?',claimBoundary:'CLAIM BOUNDARY',forecastPre:'FORECAST → RATIONALISATION → HYPOTHESIS\n              ↑\n       REFLEXIVE FRINGE\n\nDelta ≠ unconscious motive discovered\nDelta = trace requiring retroduction',
    modelEyebrow:'MULTI-AGENT CR · V2.1 CANDIDATE',modelTitle:'Three dimensions. Distinct agents. No sovereign knower.',modelLead:'The diagram below is a candidate source view. It is connected to the site as an explicit model artifact, not silently promoted to canon.',notValidated:'NOT VALIDATED',notCanon:'NOT CANON',ownerSource:'OWNER-SUPPLIED CANDIDATE SOURCE',sourceTitle:'Multi-Agent Critical Realist Epistemology — V2.1 Candidate',sourceBody:'Fringe is an anomaly-sensitivity function: internally carried, externally allocatable, never monopolized by identity. Guild remains a candidate Real-level structure. Typed Receipt Admission remains a candidate gate.',sourceProvenance:'Original source artifact (English) is preserved unchanged. The Hebrew view is a separate translation/projection and does not replace the source.',loadSource:'Load connected source',openSource:'Open original .mmd source',sourceIdle:'Connected original source not loaded yet.',sourceLoading:'Loading connected original source…',sourceReload:'Reload original source',sourceRetry:'Retry source load',sourceFailure:'Could not load connected source in this environment.',
    actualTitle:'ACTUAL',actualSubtitle:'Events / occurrences / interventions',sharedWorld:'Shared Actual World',probeIntervention:'Probe / Intervention',consequences:'↺ consequences become new occurrences',realTitle:'REAL',realSubtitle:'Structures / mechanisms / powers',guildNode:'Guild as relational structure',candidate:'CANDIDATE',mechanisms:'Visibility · Access · Costs · Roles · Artifacts/Memory · Norms/Language',fringeTitle:'FRINGE',fringeFunction:'anomaly-sensitivity function',fringeRule:'internally carried · externally allocatable · never monopolized by identity',probeContract:'Probe Contract',probeContractBody:'purpose · expected outcomes · success/failure conditions · risks · costs · responsibilities · rollback',typedAdmission:'Typed Receipt Admission',typedAdmissionBody:'Inventory · Context/Conditioning · Runtime · Effect/Outcome · Cost/Pressure',empiricTitle:'EMPIRIC',empiricSubtitle:'Experience / perspective / reasoning',agent1:'Agent 1',agent2:'Agent 2',agentCycle:'PFE → Forecast → Rationalisation → Hypothesis → Causality → Probe Intent',roleIdentity:'Role ≠ Identity · structural asymmetry ≠ epistemic privilege',modelNote:'Guild ≠ Agent. Artifact ≠ Knower. Consensus ≠ Truth. Receipt ≠ Reality. Action succeeded ≠ Hypothesis confirmed. No receipt ≠ negative result.',
    evidenceEyebrow:'CLAIMS AS OBJECTS',evidenceTitle:'Every consequential claim carries its lineage.',evidenceLead:'The site separates what happened from what was reported, inferred, hypothesised, believed, or left unresolved.',receiptsBefore:'Typed receipts before interpretation:',receiptInventory:'Inventory',receiptContext:'Context / Conditioning',receiptRuntime:'Runtime / Instrumentation',receiptEffect:'Effect / Outcome',receiptCost:'Cost / Pressure',claimCeiling:'Claim ceiling',evidenceBasis:'Evidence basis',doesNotMean:'Does not mean',lineage:'Lineage',
    historyEyebrow:'CONSTRUCTION HISTORY',historyTitle:'Revision history is part of the knowledge.',historyLead:'A static summary can launder temporal states. Draft IV keeps the changes visible.',h4Eyebrow:'PROTOTYPE · H4 LINEAGE',h4Title:'Do not compress a changing claim into one sentence.',h4Initial:'<strong>Initial:</strong> “mixture” offered as a broad explanation.',h4Critique:'<strong>Critique:</strong> catch-all wording is unfalsifiable.',h4Retire:'<strong>Retire:</strong> H4_MIXTURE_LABEL.',h4Recover:'<strong>Recover:</strong> original factorial design shows a measurable interaction term.',h4Current:'<strong>Current:</strong> interaction term retained; catch-all mixture label remains retired.',footerLeft:'ReachingOut · Draft IV · 2026',footerCenter:'ALWAYS UNDER CONSTRUCTION',footerRight:'Source preserved · revisions explicit · unresolved allowed'
  },
  he:{
    primaryNav:'ניווט ראשי',navRead:'קריאה',navModel:'מודל',navEvidence:'ראיות',navHistory:'היסטוריה',statusCurrent:'מצב נוכחי · 2026',
    heroEyebrow:'אפיסטמולוגיה ריאליסטית־ביקורתית · ידע חי',heroTitle:'תמיד בבנייה.',heroLead:'ידע איננו צומת סופי. הוא המצב הנוכחי של מסלול אפיסטמי לא־גמור: השערות הניתנות לתיקון, מפגשים מכוונים עם המציאות, אנומליה, תיקון — ועוד סיבוב.',viewCurrent:'למצב הנוכחי',openLineage:'לשושלת התיקונים',heroCeiling:'שום דבר אינו מוסתר כדי להגן על התיאוריה. שום טענה אינה מקודמת מעבר לראיות. שום דבר אינו נפסל רק משום שהוא סותר אותנו.',
    currentEyebrow:'המצב האפיסטמי הנוכחי',currentTitle:'Draft IV הוא מצב, לא אנדרטה.',currentLead:'Draft III נשמר. Draft IV מתעד מה מוחזק כרגע, מה תוקן, מה נפתח מחדש ומה נותר לא־מוכרע. Draft V יגיע רק כאשר שינוי מושגי מהותי יצדיק מספר טיוטה חדש.',stillHeld:'עדיין מוחזק',fallibilityTitle:'יכולת תיקון',fallibilityBody:'גם החשבון הטוב ביותר שלנו נשאר ניתן לתיקון ולשינוי במפגש עם ראיות ואירועים חדשים.',revised:'תוקן',verifiedTitle:'"השערה מאומתת"',verifiedBody:'התאמה בין תוצאה לציפייה אינה מאמתת כשלעצמה מנגנון סיבתי. התמיכה מוגבלת לעוצמת ההבחנה של הפרוב.',unresolved:'לא מוכרע',guildTitle:'הגילדה כמנגנון ברמת הממשי',guildBody:'הגילדה היא מבנה יחסי מועמד בעל כוחות סיבתיים. היא אינה "יודעת", ועדיין אינה נחשבת מנגנון מאומת.',
    sovereigntyEyebrow:'ריבונות קוגניטיבית',sovereigntyTitle:'אפכא מתחיל בבית.',sovereigntyBody:'שום מחשבה אינה מקבלת ריבונות אפיסטמית רק מפני שהיא שלי. הפער בין Forecast ל־Hypothesis הוא משטח בדיקה רפלקסיבי: איזו ראיה נכנסה, מה השתנה באינטרס, איזה סיפור נעשה מושך, ואיזה מניע אפשרי אולי פעל?',claimBoundary:'גבול הטענה',forecastPre:'תחזית → רציונליזציה → השערה\n            ↑\n        FRINGE רפלקסיבי\n\nDelta ≠ גילוי של מניע לא־מודע\nDelta = עקבה הדורשת רטרודוקציה',
    modelEyebrow:'ריאליזם ביקורתי רב־סוכני · V2.1 מועמד',modelTitle:'שלושה ממדים. סוכנים נבדלים. אין יודע ריבוני.',modelLead:'התרשים שלהלן הוא תצוגה של מקור מועמד. הוא מחובר לאתר כארטיפקט מודל מפורש — לא מקודם בשקט לקאנון.',notValidated:'לא אומת',notCanon:'לא קאנון',ownerSource:'מקור מועמד שסופק בידי הבעלים',sourceTitle:'אפיסטמולוגיה ריאליסטית־ביקורתית רב־סוכנית — V2.1 מועמד',sourceBody:'Fringe הוא פונקציית רגישות לאנומליה: יכולה להינשא מבפנים, להיות מוקצית בין אנשים/סוכנים, ולעולם אינה בבעלות מונופוליסטית של זהות אחת. Guild נשארת מבנה מועמד ברמת הממשי. Typed Receipt Admission נשאר שער מועמד.',sourceProvenance:'ארטיפקט המקור המקורי (באנגלית) נשמר ללא שינוי. התצוגה העברית היא תרגום/היטל נפרד ואינה מחליפה את המקור.',loadSource:'טען את מקור ה־.mmd',openSource:'פתח את מקור ה־.mmd המקורי',sourceIdle:'המקור המקורי המחובר עדיין לא נטען.',sourceLoading:'טוען את המקור המקורי המחובר…',sourceReload:'טען מחדש את המקור המקורי',sourceRetry:'נסה שוב לטעון את המקור',sourceFailure:'לא ניתן לטעון את המקור המחובר בסביבה הזו.',
    actualTitle:'ACTUAL · בפועל',actualSubtitle:'אירועים / התרחשויות / התערבויות',sharedWorld:'העולם הממשי המשותף',probeIntervention:'פרוב / התערבות',consequences:'↺ התוצאות נעשות התרחשויות חדשות',realTitle:'REAL · ממשי',realSubtitle:'מבנים / מנגנונים / כוחות',guildNode:'Guild כמבנה יחסי',candidate:'מועמד',mechanisms:'נראות · גישה · עלויות · תפקידים · ארטיפקטים/זיכרון · נורמות/שפה',fringeTitle:'FRINGE',fringeFunction:'פונקציית רגישות לאנומליה',fringeRule:'נישאת מבפנים · ניתנת להקצאה מבחוץ · לעולם אינה מונופול של זהות',probeContract:'חוזה פרוב',probeContractBody:'מטרה · תוצאות צפויות · תנאי הצלחה/כישלון · סיכונים · עלויות · אחריות · rollback',typedAdmission:'קבלת קבלות מטופלות',typedAdmissionBody:'מלאי · הקשר/התניה · Runtime · השפעה/תוצאה · עלות/לחץ',empiricTitle:'EMPIRIC · אמפירי',empiricSubtitle:'חוויה / פרספקטיבה / הנמקה',agent1:'סוכן 1',agent2:'סוכן 2',agentCycle:'PFE → תחזית → רציונליזציה → השערה → סיבתיות → כוונת פרוב',roleIdentity:'תפקיד ≠ זהות · אסימטריה מבנית ≠ פריבילגיה אפיסטמית',modelNote:'Guild ≠ סוכן. ארטיפקט ≠ יודע. קונצנזוס ≠ אמת. קבלה ≠ מציאות. הצלחת פעולה ≠ אישור השערה. היעדר קבלה ≠ תוצאה שלילית.',
    evidenceEyebrow:'טענות כאובייקטים',evidenceTitle:'כל טענה משמעותית נושאת את שושלתה.',evidenceLead:'האתר מפריד בין מה שקרה לבין מה שדווח, הוסק, שוער, הוחזק כאמונה או נשאר לא־מוכרע.',receiptsBefore:'קבלות מטופלות לפני פירוש:',receiptInventory:'מלאי',receiptContext:'הקשר / התניה',receiptRuntime:'Runtime / מכשור',receiptEffect:'השפעה / תוצאה',receiptCost:'עלות / לחץ',claimCeiling:'תקרת טענה',evidenceBasis:'בסיס ראייתי',doesNotMean:'לא אומר',lineage:'שושלת',
    historyEyebrow:'היסטוריית הבנייה',historyTitle:'היסטוריית התיקונים היא חלק מן הידע.',historyLead:'סיכום סטטי עלול להלבין מצבים זמניים. Draft IV משאיר את השינויים גלויים.',h4Eyebrow:'אב־טיפוס · שושלת H4',h4Title:'לא דוחסים טענה משתנה למשפט אחד.',h4Initial:'<strong>ראשית:</strong> “mixture” הוצע כהסבר רחב.',h4Critique:'<strong>ביקורת:</strong> ניסוח מסוג catch-all אינו ניתן להפרכה.',h4Retire:'<strong>הוצאה משימוש:</strong> H4_MIXTURE_LABEL.',h4Recover:'<strong>שחזור:</strong> התכנון הפקטוריאלי המקורי מציג איבר אינטראקציה מדיד.',h4Current:'<strong>מצב נוכחי:</strong> איבר האינטראקציה נשמר; תווית ה־mixture הכוללנית נשארת מחוץ לשימוש.',footerLeft:'ReachingOut · Draft IV · 2026',footerCenter:'תמיד בבנייה',footerRight:'המקור נשמר · התיקונים מפורשים · מותר להישאר לא־מוכרע'
  }
};

const claimTypes={
  OBSERVED:{en:'directly encountered or measured',he:'נצפה או נמדד ישירות'},
  REPORTED:{en:'stated by a person or system',he:'דווח בידי אדם או מערכת'},
  INFERENCE:{en:'reasoned from evidence',he:'היסק מתוך ראיות'},
  HYPOTHESIS:{en:'candidate explanation',he:'הסבר מועמד'},
  BELIEF:{en:'worldview / premise',he:'אמונה / הנחת יסוד'}
};

const semanticAxes=['admission','warrant','validation','resolution','lineage','temporal'];
const semanticAxisLabels={
  type:{en:'CLAIM TYPE',he:'סוג טענה'},
  admission:{en:'EPISTEMIC ADMISSION',he:'קבלה אפיסטמית'},
  warrant:{en:'EPISTEMIC WARRANT',he:'הצדקה אפיסטמית'},
  validation:{en:'VALIDATION',he:'אימות'},
  resolution:{en:'RESOLUTION',he:'הכרעה'},
  lineage:{en:'LINEAGE',he:'שושלת'},
  temporal:{en:'TEMPORAL',he:'זמן'}
};
const semanticStatusLabels={
  NOT_EXPLICIT:{en:'NOT EXPLICIT',he:'לא מפורש'},
  CANDIDATE:{en:'CANDIDATE',he:'מועמד'},
  NOT_VALIDATED:{en:'NOT VALIDATED',he:'לא אומת'},
  UNRESOLVED:{en:'UNRESOLVED',he:'לא מוכרע'},
  REVISED:{en:'REVISED',he:'תוקן'},
  REFINED:{en:'REFINED',he:'שוכלל'},
  CURRENT:{en:'CURRENT · 2026',he:'נוכחי · 2026'}
};
const typeSymbols={OBSERVED:'○',REPORTED:'❞',INFERENCE:'△',HYPOTHESIS:'◇',BELIEF:'◆'};
const semanticSymbols={NOT_EXPLICIT:'—',CANDIDATE:'◇',NOT_VALIDATED:'⊘',UNRESOLVED:'?',REVISED:'↻',REFINED:'⊕',CURRENT:'●'};

const claims=[
 {id:'fringe',type:'INFERENCE',semantics:{admission:'NOT_EXPLICIT',warrant:'NOT_EXPLICIT',validation:'NOT_EXPLICIT',resolution:'NOT_EXPLICIT',lineage:'REVISED',temporal:'CURRENT'},en:{title:'Fringe is an anomaly-sensitivity function',ceiling:'Supported as a faithful current reconstruction; historical expression included both intrapersonal sensitivity and socially allocated function.',evidence:'Draft III diagrams and dialogue; 2026 re-reading of role allocation and rotation.',counter:'Do not claim that Fringe was never a role. Do not make any one person or agent the permanent critic.',lineage:'Earlier v2 wording “not a person or role” was too strong. Current: internally carried, externally allocatable, never monopolized by identity.'},he:{title:'Fringe הוא פונקציית רגישות לאנומליה',ceiling:'נתמך כשחזור נאמן של המצב הנוכחי; הביטוי ההיסטורי כלל גם רגישות תוך־אישית וגם פונקציה שהוקצתה חברתית.',evidence:'תרשימי Draft III ודיאלוג; קריאה מחודשת ב־2026 של הקצאת תפקידים ורוטציה.',counter:'אין לטעון ש־Fringe מעולם לא היה תפקיד. אין להפוך אדם או סוכן יחיד למבקר הקבוע.',lineage:'הניסוח הקודם ב־v2 — “לא אדם או תפקיד” — היה חזק מדי. הניסוח הנוכחי: נישא מבפנים, ניתן להקצאה מבחוץ, ולעולם אינו מונופול של זהות.'}},
 {id:'receipts',type:'INFERENCE',semantics:{admission:'CANDIDATE',warrant:'NOT_EXPLICIT',validation:'NOT_EXPLICIT',resolution:'NOT_EXPLICIT',lineage:'REFINED',temporal:'CURRENT'},en:{title:'Receipts precede interpretation',ceiling:'Typed receipt admission is a 2026 refinement of prior ReflexGuard controls, not a wholly new invention.',evidence:'Prior Context Receipt / Evidence Eligibility / Reference Admission controls plus 2026 differentiation of inventory, context, runtime, effect and cost receipts.',counter:'A receipt is a trace, not truth. Missing receipt is not automatically a negative result.',lineage:'Prior control → typed receipt recombination → claim/probe-derived receipt requirements.'},he:{title:'קבלות קודמות לפרשנות',ceiling:'קבלת קבלות מטופלות היא שכלול מ־2026 של בקרות ReflexGuard קודמות, לא המצאה חדשה לחלוטין.',evidence:'בקרות קודמות של Context Receipt / Evidence Eligibility / Reference Admission, יחד עם הבחנה מ־2026 בין קבלות מלאי, הקשר, runtime, השפעה ועלות.',counter:'קבלה היא עקבה, לא אמת. קבלה חסרה אינה תוצאה שלילית אוטומטית.',lineage:'בקרה קודמת → צירוף מחדש של קבלות מטופלות → דרישות קבלה הנגזרות מן הטענה/הפרוב.'}},
 {id:'guild',type:'HYPOTHESIS',semantics:{admission:'CANDIDATE',warrant:'NOT_EXPLICIT',validation:'NOT_VALIDATED',resolution:'UNRESOLVED',lineage:'NOT_EXPLICIT',temporal:'CURRENT'},en:{title:'Guild may possess emergent causal powers',ceiling:'Candidate Critical Realist interpretation only. Not validated as a mechanism.',evidence:'Observed relational effects involving roles, access, memory, attention, cost, language and norms across multi-agent work.',counter:'Guild is not an agent, not a super-mind, not a sovereign knower.',lineage:'Community/cohort structures → multi-agent 2026 retroduction → candidate Real-level relational mechanism.'},he:{title:'ל־Guild עשויים להיות כוחות סיבתיים מתהווים',ceiling:'פרשנות ריאליסטית־ביקורתית מועמדת בלבד. לא אומתה כמנגנון.',evidence:'השפעות יחסיות שנצפו סביב תפקידים, גישה, זיכרון, קשב, עלות, שפה ונורמות בעבודה רב־סוכנית.',counter:'Guild אינה סוכן, אינה super-mind ואינה יודע ריבוני.',lineage:'מבני קהילה/קוהורט → רטרודוקציה רב־סוכנית 2026 → מנגנון יחסי מועמד ברמת הממשי.'}},
 {id:'verification',type:'INFERENCE',semantics:{admission:'NOT_EXPLICIT',warrant:'NOT_EXPLICIT',validation:'NOT_EXPLICIT',resolution:'NOT_EXPLICIT',lineage:'REVISED',temporal:'CURRENT'},en:{title:'Outcome match does not verify a mechanism',ceiling:'A matched outcome may support a hypothesis only within preregistered discrimination conditions and alternative explanations.',evidence:'Open-system CR reasoning, probe design failures, and later discrimination logic.',counter:'ACTION_SUCCEEDED does not imply HYPOTHESIS_CONFIRMED.',lineage:'Draft III “Verified Hypothesis” → critique → bounded support / surviving hypothesis / NO_DISCRIMINATION.'},he:{title:'התאמת תוצאה אינה מאמתת מנגנון',ceiling:'תוצאה תואמת עשויה לתמוך בהשערה רק בתוך תנאי הבחנה שנרשמו מראש וביחס להסברים חלופיים.',evidence:'הנמקה ריאליסטית־ביקורתית במערכת פתוחה, כשלי תכנון פרוב ולוגיקת הבחנה מאוחרת יותר.',counter:'ACTION_SUCCEEDED אינו גורר HYPOTHESIS_CONFIRMED.',lineage:'Draft III “Verified Hypothesis” → ביקורת → תמיכה תחומה / השערה ששרדה / NO_DISCRIMINATION.'}},
 {id:'sovereignty',type:'HYPOTHESIS',semantics:{admission:'CANDIDATE',warrant:'NOT_EXPLICIT',validation:'NOT_EXPLICIT',resolution:'NOT_EXPLICIT',lineage:'NOT_EXPLICIT',temporal:'CURRENT'},en:{title:'Cognitive sovereignty applies against the self',ceiling:'Normative-methodological candidate, not a discovery of unconscious motives.',evidence:'Forecast–Hypothesis delta creates a reflexive inspection surface for evidence change, stake, framing and possible MM.',counter:'Delta ≠ unconscious motive discovered. Introspection does not confer privileged truth access.',lineage:'Personal epistemology → Reflexive Fringe → 2026 formulation: no internal component gains sovereignty merely because it is mine.'},he:{title:'ריבונות קוגניטיבית חלה גם מול העצמי',ceiling:'מועמד נורמטיבי־מתודולוגי, לא גילוי של מניעים לא־מודעים.',evidence:'פער Forecast–Hypothesis יוצר משטח בדיקה רפלקסיבי לשינוי בראיות, באינטרס, במסגרת וב־MM אפשרי.',counter:'Delta ≠ גילוי של מניע לא־מודע. אינטרוספקציה אינה מקנה גישה מועדפת לאמת.',lineage:'אפיסטמולוגיה אישית → Fringe רפלקסיבי → ניסוח 2026: שום רכיב פנימי אינו מקבל ריבונות רק מפני שהוא שלי.'}}
];

const history=[
 {en:['Draft III','SOURCE PRESERVED','Historical epistemic object. Its stronger verification language remains visible rather than silently rewritten.'],he:['Draft III','המקור נשמר','אובייקט אפיסטמי היסטורי. שפת האימות החזקה יותר שלו נשארת גלויה במקום להיכתב מחדש בשקט.']},
 {en:['2026 · Re-reading','REOPENED','Diagrams, dialogue and prior artifacts are re-read as evidence; prose is not allowed to overrule the topology without examination.'],he:['2026 · קריאה מחודשת','נפתח מחדש','תרשימים, דיאלוג וארטיפקטים קודמים נקראים מחדש כראיות; פרוזה אינה רשאית לגבור על הטופולוגיה בלי בדיקה.']},
 {en:['2026 · Multi-Agent CR','REQUEST_PATCH','Individual cycles are retained while relational structures, asymmetry, probe contracts and anomaly sensitivity are made explicit.'],he:['2026 · ריאליזם ביקורתי רב־סוכני','דורש תיקון','מחזורים אישיים נשמרים, ובמקביל מבנים יחסיים, אסימטריה, חוזי פרוב ורגישות לאנומליה נעשים מפורשים.']},
 {en:['2026 · ReflexGuard lineage','REFINED','Existing context/evidence controls are recognized as prior art; typed receipts and claim-derived admission rules are refinements.'],he:['2026 · שושלת ReflexGuard','שוכלל','בקרות הקשר/ראיות קיימות מוכרות כתקדים; קבלות מטופלות וכללי admission הנגזרים מן הטענה הם שכלולים.']},
 {en:['Draft IV · Current','UNDER CONSTRUCTION','The website is the living epistemic state. Text views are projections of a versioned claim and lineage graph.'],he:['Draft IV · נוכחי','בבנייה','האתר הוא המצב האפיסטמי החי. תצוגות הטקסט הן היטלים של גרף טענות ושושלת מתועד־גרסה.']},
 {en:['Draft V','NOT YET','A new draft number is earned by a conceptual phase shift, not by every correction or source update.'],he:['Draft V','עדיין לא','מספר Draft חדש מוצדק באמצעות שינוי שלב מושגי, לא באמצעות כל תיקון או עדכון מקור.']}
];

const legend=document.getElementById('claimLegend');
const list=document.getElementById('claimList');
const detail=document.getElementById('claimDetail');
const timeline=document.getElementById('timeline');
const modelButton=document.getElementById('loadModelSource');
const modelSource=document.getElementById('modelSource');
let sourceLoaded=false;

function typeLabel(type){
  if(currentLang==='en') return type;
  return {OBSERVED:'נצפה',REPORTED:'דווח',INFERENCE:'היסק',HYPOTHESIS:'השערה',BELIEF:'אמונה'}[type]||type;
}
function axisLabel(axis){
  return semanticAxisLabels[axis]?.[currentLang]||axis;
}
function statusLabel(status){
  return semanticStatusLabels[status]?.[currentLang]||status;
}
function semanticValue(c,axis){
  return c.semantics?.[axis]||'NOT_EXPLICIT';
}
function typeChip(type){
  const slug=type.toLowerCase().replaceAll('_','-');
  return `<span class="meta-pill epistemic-chip axis-type value-${slug}" data-axis="type" data-value="${type}"><span class="axis-label">${axisLabel('type')}</span> <strong>${typeSymbols[type]||''} ${typeLabel(type)}</strong></span>`;
}
function semanticChip(axis,value){
  const slug=value.toLowerCase().replaceAll('_','-');
  return `<span class="meta-pill epistemic-chip axis-${axis} value-${slug}${value==='NOT_EXPLICIT'?' is-not-explicit':''}" data-axis="${axis}" data-value="${value}"><span class="axis-label">${axisLabel(axis)}</span> <strong>${semanticSymbols[value]||''} ${statusLabel(value)}</strong></span>`;
}
function semanticSummary(c){
  const parts=[`${typeSymbols[c.type]||''} ${typeLabel(c.type)}`];
  semanticAxes.forEach(axis=>{
    const value=semanticValue(c,axis);
    if(value!=='NOT_EXPLICIT') parts.push(`${semanticSymbols[value]||''} ${statusLabel(value)}`);
  });
  return parts.join(' · ');
}
function missingSemanticSummary(c){
  const missing=semanticAxes.filter(axis=>semanticValue(c,axis)==='NOT_EXPLICIT');
  if(!missing.length) return '';
  return `<div class="claim-missing-summary"><span class="meta-pill" style="opacity:.64;border-style:dotted;background:transparent">${semanticSymbols.NOT_EXPLICIT} ${statusLabel('NOT_EXPLICIT')}: ${missing.map(axis=>axisLabel(axis)).join(' · ')}</span></div>`;
}
function renderLegend(){
  legend.innerHTML='';
  Object.entries(claimTypes).forEach(([k,v])=>{
    const e=document.createElement('div');e.className='legend-item';
    e.innerHTML=`<strong>${typeSymbols[k]||''} ${typeLabel(k)}</strong>${v[currentLang]}`;
    legend.appendChild(e);
  });
}
function renderClaim(c){
  activeClaimId=c.id;
  const t=c[currentLang];
  document.querySelectorAll('.claim-button').forEach(x=>x.classList.toggle('active',x.dataset.id===c.id));
  const explicitAxes=semanticAxes.filter(axis=>semanticValue(c,axis)!=='NOT_EXPLICIT');
  const semanticChips=[typeChip(c.type),...explicitAxes.map(axis=>semanticChip(axis,semanticValue(c,axis)))].join('');
  detail.innerHTML=`<div class="claim-semantics">${semanticChips}</div>${missingSemanticSummary(c)}<h3>${t.title}</h3><dl><dt class="claim-ceiling-label">${copy[currentLang].claimCeiling}</dt><dd class="claim-ceiling-value">${t.ceiling}</dd><dt>${copy[currentLang].evidenceBasis}</dt><dd>${t.evidence}</dd><dt>${copy[currentLang].doesNotMean}</dt><dd>${t.counter}</dd><dt>${copy[currentLang].lineage}</dt><dd>${t.lineage}</dd></dl>`;
}
function renderClaims(){
  list.innerHTML='';
  claims.forEach(c=>{
    const b=document.createElement('button');b.className='claim-button'+(c.id===activeClaimId?' active':'');b.dataset.id=c.id;
    b.innerHTML=`<strong>${c[currentLang].title}</strong><small>${semanticSummary(c)}</small>`;
    b.onclick=()=>renderClaim(c);list.appendChild(b);
  });
  renderClaim(claims.find(c=>c.id===activeClaimId)||claims[0]);
}
function renderHistory(){
  timeline.innerHTML='';
  history.forEach(item=>{
    const [when,state,text]=item[currentLang];
    const x=document.createElement('div');x.className='time-item';x.innerHTML=`<time>${state}</time><h3>${when}</h3><p>${text}</p>`;timeline.appendChild(x);
  });
}
function applyStaticCopy(){
  const langCopy=copy[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(langCopy[key]!==undefined)el.textContent=langCopy[key];});
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{const key=el.dataset.i18nHtml;if(langCopy[key]!==undefined)el.innerHTML=langCopy[key];});
  document.querySelectorAll('[data-i18n-aria]').forEach(el=>{const key=el.dataset.i18nAria;if(langCopy[key]!==undefined)el.setAttribute('aria-label',langCopy[key]);});
}
function setLanguage(lang){
  currentLang=lang==='he'?'he':'en';
  document.documentElement.lang=currentLang;
  document.documentElement.dir=currentLang==='he'?'rtl':'ltr';
  document.body.classList.toggle('rtl',currentLang==='he');
  document.querySelectorAll('.lang-btn').forEach(b=>b.classList.toggle('active',b.dataset.lang===currentLang));
  applyStaticCopy();renderLegend();renderClaims();renderHistory();
  if(!sourceLoaded) modelSource.textContent=copy[currentLang].sourceIdle;
  else modelButton.textContent=copy[currentLang].sourceReload;
  try{localStorage.setItem('draft4-lang',currentLang);}catch(_){ }
}
document.querySelectorAll('.lang-btn').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));

async function loadModelSource(){
  if(!modelButton||!modelSource)return;
  modelButton.disabled=true;
  modelButton.textContent=copy[currentLang].sourceLoading;
  modelSource.textContent=copy[currentLang].sourceLoading;
  try{
    const res=await fetch('models/multi-agent-cr-v2.1.mmd',{cache:'no-store'});
    if(!res.ok)throw new Error(`HTTP ${res.status}`);
    const text=await res.text();
    modelSource.textContent=text;
    modelSource.dir='ltr';modelSource.lang='en';
    sourceLoaded=true;
    modelButton.textContent=copy[currentLang].sourceReload;
  }catch(err){
    modelSource.textContent=`${copy[currentLang].sourceFailure}\n${err.message}`;
    modelButton.textContent=copy[currentLang].sourceRetry;
  }finally{modelButton.disabled=false;}
}
modelButton?.addEventListener('click',loadModelSource);

let initial='en';
try{initial=localStorage.getItem('draft4-lang')||((navigator.language||'').toLowerCase().startsWith('he')?'he':'en');}catch(_){initial='en';}
setLanguage(initial);