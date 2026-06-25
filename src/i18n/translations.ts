export type Language = 'en' | 'yo' | 'ig' | 'ha' | 'pcm';

export interface Translation {
  appName: string;
  welcome: string;
  subtitle: string;
  dailyTip: string;
  dailyTipBody: string;
  learnMore: string;
  medication: string;
  manageReminders: string;
  familyHealth: string;
  pregnancyKids: string;
  healthBuddy: string;
  addFamilyMember: string;
  emergency: string;
  healthCard: string;
  awareness: string;
  healthEducation: string;
  aiAssistant: string;
  generalQuestions: string;
  home: string;
  meds: string;
  family: string;
  ai: string;
  profile: string;
  buddy: string;
  settings: string;
  privacy: string;
  help: string;
  signOut: string;
  selectLanguage: string;
  continue: string;
  notADoctor: string;
  aiDisclaimer: string;
  switchLang: string;
  login: string;
  register: string;
  emailOrPhone: string;
  password: string;
  name: string;
  dontHaveAccount: string;
  alreadyHaveAccount: string;
  askAIPlaceholder: string;
  aiWelcome: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    appName: "CareCircle",
    welcome: "Hello, {name}!",
    subtitle: "How is your family doing today?",
    dailyTip: "Daily Health Tip",
    dailyTipBody: "Wash your hands regularly for at least 20 seconds to avoid germs.",
    learnMore: "Learn More",
    medication: "Medication",
    manageReminders: "Manage reminders",
    familyHealth: "Family Health",
    pregnancyKids: "Pregnancy & Kids",
    healthBuddy: "Health Buddy",
    addFamilyMember: "Add family member",
    emergency: "Emergency",
    healthCard: "Health card",
    awareness: "Awareness",
    healthEducation: "Health education",
    aiAssistant: "AI Assistant",
    generalQuestions: "General questions",
    home: "Home",
    meds: "Meds",
    family: "Family",
    ai: "AI",
    profile: "Profile",
    buddy: "Buddy",
    settings: "Account Settings",
    privacy: "Privacy & Security",
    help: "Help & Support",
    signOut: "Sign Out",
    selectLanguage: "Select Language",
    continue: "Continue",
    notADoctor: "I am not a doctor",
    aiDisclaimer: "This AI is for educational purposes only and is not a substitute for professional medical advice.",
    switchLang: "Switch Language",
    login: "Log In",
    register: "Register",
    emailOrPhone: "Email or Phone Number",
    password: "Password",
    name: "Full Name",
    dontHaveAccount: "Don't have an account? Register",
    alreadyHaveAccount: "Already have an account? Log In",
    askAIPlaceholder: "Ask a health question...",
    aiWelcome: "Hello! I am your CareCircle AI Health Assistant. How can I help you with health information today?",
  },
  yo: {
    appName: "CareCircle",
    welcome: "Pẹlẹ o, {name}!",
    subtitle: "Bawo ni ẹbi rẹ ṣe n ṣe loni?",
    dailyTip: "Imọran Ilera Ojoojumọ",
    dailyTipBody: "Fọ ọwọ rẹ nigbagbogbo fun o kere ju ogun iṣẹju-aaya lati yago fun awọn germs.",
    learnMore: "Kọ ẹkọ diẹ sii",
    medication: "Oogun",
    manageReminders: "Ṣakoso awọn olurannileti",
    familyHealth: "Ilera Ẹbi",
    pregnancyKids: "Iyun & Awọn ọmọde",
    healthBuddy: "Alabaṣepọ Ilera",
    addFamilyMember: "Fi ọmọ ẹgbẹ ẹbi kun",
    emergency: "pajawiri",
    healthCard: "Kaadi ilera",
    awareness: "Imo",
    healthEducation: "Ẹkọ ilera",
    aiAssistant: "AI Oluranlọwọ",
    generalQuestions: "Awọn ibeere gbogboogbo",
    home: "Ile",
    meds: "Oogun",
    family: "Ẹbi",
    ai: "AI",
    profile: "Profaili",
    buddy: "Alabaṣepọ",
    settings: "Eto Akọọlẹ",
    privacy: "Asiri & Aabo",
    help: "Iranlọwọ & Atilẹyin",
    signOut: "Jade kuro",
    selectLanguage: "Yan Ede",
    continue: "Tẹsiwaju",
    notADoctor: "Emi kii ṣe dokita",
    aiDisclaimer: "AI yii wa fun awọn idi eto-ẹkọ nikan kii ṣe aropo fun imọran iṣoogun ọjọgbọn.",
    switchLang: "Yi Ede pada",
    login: "Wọle",
    register: "Forukọsilẹ",
    emailOrPhone: "Imeeli tabi Nọmba foonu",
    password: "Ọrọigbaniwọle",
    name: "Orukọ Kikun",
    dontHaveAccount: "Ṣe ko ni akọọlẹ kan? Forukọsilẹ",
    alreadyHaveAccount: "Ti ni akọọlẹ tẹlẹ? Wọle",
    askAIPlaceholder: "Beere ibeere ilera...",
    aiWelcome: "Pẹlẹ o! Emi ni Oluranlọwọ Ilera CareCircle AI rẹ. Bawo ni MO ṣe le ṣe iranlọwọ fun ọ pẹlu alaye ilera loni?",
  },
  ig: {
    appName: "CareCircle",
    welcome: "Ndewo, {name}!",
    subtitle: "Kedu ka ezinụlọ gị si eme taa?",
    dailyTip: "Ndụmọdụ Ahụike Kwa Ụbọchị",
    dailyTipBody: "Na-asachapụ aka gị mgbe niile ma ọ dịkarịa ala sekọnd iri abụọ iji zere nje.",
    learnMore: "Mụtakwuo",
    medication: "Ọgwụ",
    manageReminders: "Jikwaa ihe ncheta",
    familyHealth: "Ahụike Ezinụlọ",
    pregnancyKids: "Ime & Ụmụaka",
    healthBuddy: "Enyi Ahụike",
    addFamilyMember: "Tinye onye ezinụlọ",
    emergency: "Mberede",
    healthCard: "Kaadi ahụike",
    awareness: "Mmata",
    healthEducation: "Mmụta ahụike",
    aiAssistant: "Onye enyemaka AI",
    generalQuestions: "Ajụjụ izugbe",
    home: "Ụlọ",
    meds: "Ọgwụ",
    family: "Ezinụlọ",
    ai: "AI",
    profile: "Profaịlụ",
    buddy: "Enyi",
    settings: "Ntọala Akaụntụ",
    privacy: "Nzuzo & Nchebe",
    help: "Enyemaka & Nkwado",
    signOut: "Pụọ",
    selectLanguage: "Họrọ Asụsụ",
    continue: "Gaa n'ihu",
    notADoctor: "Abụghị m dọkịta",
    aiDisclaimer: "AI a bụ maka ebumnuche mmụta naanị ma ọ bụghị onye nnọchi maka ndụmọdụ ahụike ọkachamara.",
    switchLang: "Gbanwee Asụsụ",
    login: "Banye",
    register: "Debanye aha",
    emailOrPhone: "Email ma ọ bụ nọmba ekwentị",
    password: "Okwu mbanye",
    name: "Aha zuru oke",
    dontHaveAccount: "Ị nweghị akaụntụ? Debanye aha",
    alreadyHaveAccount: "Ị nweelarị akaụntụ? Banye",
    askAIPlaceholder: "Jụọ ajụjụ ahụike...",
    aiWelcome: "Ndewo! Abụ m onye enyemaka ahụike CareCircle AI gị. Kedu otu m ga-esi nyere gị aka na ozi ahụike taa?",
  },
  ha: {
    appName: "CareCircle",
    welcome: "Sannu, {name}!",
    subtitle: "Yaya iyalin ku suke yau?",
    dailyTip: "Tukuncin Lafiya na Kullum",
    dailyTipBody: "Wanke hannunka akai-akai na akalla dakika 20 don gujewa kwayoyin cuta.",
    learnMore: "Koyi Karin Bayani",
    medication: "Magani",
    manageReminders: "Sarrafa masu tunatarwa",
    familyHealth: "Lafiyar Iyali",
    pregnancyKids: "Juna Biyu & Yara",
    healthBuddy: "Abokin Lafiya",
    addFamilyMember: "Ƙara memba na iyali",
    emergency: "Gaggawa",
    healthCard: "Katin lafiya",
    awareness: "Wayar da Kai",
    healthEducation: "Ilimin lafiya",
    aiAssistant: "Mataimakin AI",
    generalQuestions: "Tambayoyi na gaba ɗaya",
    home: "Gida",
    meds: "Magani",
    family: "Iyali",
    ai: "AI",
    profile: "Profile",
    buddy: "Aboki",
    settings: "Saitunan Account",
    privacy: "Sirri & Tsaro",
    help: "Taimako & Tallafi",
    signOut: "Fita",
    selectLanguage: "Zaɓi Harshe",
    continue: "Ci gaba",
    notADoctor: "Ni ba likita ba ne",
    aiDisclaimer: "Wannan AI na ilimi ne kawai kuma ba madadin shawarar likita ba ne.",
    switchLang: "Canja Harshe",
    login: "Shiga",
    register: "Yi Rijista",
    emailOrPhone: "Imel ko Lambar Waya",
    password: "Kalmar sirri",
    name: "Cikakken Suna",
    dontHaveAccount: "Ba ku da asusu? Yi rijista",
    alreadyHaveAccount: "Tuni kuna da asusu? Shiga",
    askAIPlaceholder: "Yi tambayar lafiya...",
    aiWelcome: "Sannu! Ni ne Mataimakin Lafiyar CareCircle AI na ku. Ta yaya zan iya taimaka muku da bayanan lafiya a yau?",
  },
  pcm: {
    appName: "CareCircle",
    welcome: "Howfar, {name}!",
    subtitle: "How your family dey today?",
    dailyTip: "Daily Health Tip",
    dailyTipBody: "Make you dey wash your hands regular for at least 20 seconds to avoid germs.",
    learnMore: "Learn More",
    medication: "Medicine",
    manageReminders: "Arrange reminders",
    familyHealth: "Family Health",
    pregnancyKids: "Belle & Pickin",
    healthBuddy: "Health Buddy",
    addFamilyMember: "Add family member",
    emergency: "Emergency",
    healthCard: "Health card",
    awareness: "Awareness",
    healthEducation: "Health education",
    aiAssistant: "AI Assistant",
    generalQuestions: "General questions",
    home: "Home",
    meds: "Meds",
    family: "Family",
    ai: "AI",
    profile: "Profile",
    buddy: "Buddy",
    settings: "Account Settings",
    privacy: "Privacy & Security",
    help: "Help & Support",
    signOut: "Sign Out",
    selectLanguage: "Select Language",
    continue: "Continue",
    notADoctor: "I no be doctor",
    aiDisclaimer: "Dis AI na for education only and e no replace wetin doctor go tell you.",
    switchLang: "Change Language",
    login: "Enter",
    register: "Sign Up",
    emailOrPhone: "Email or Phone Number",
    password: "Password",
    name: "Full Name",
    dontHaveAccount: "You never get account? Register",
    alreadyHaveAccount: "You don get account? Enter",
    askAIPlaceholder: "Ask any health question...",
    aiWelcome: "Howfar! I be your CareCircle AI Health Assistant. How I fit help you with health matter today?",
  }
};
