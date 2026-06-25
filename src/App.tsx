import { AuthProvider, useAuth } from './hooks/use-auth';
import { Toaster } from 'sonner';
import { useState } from 'react';
import { AuthScreens } from './features/auth/AuthScreens';
import { BottomNav } from './components/layout/BottomNav';
import { MedicationList } from './features/medication/MedicationList';
import { FamilyTracking } from './features/family/FamilyTracking';
import { HealthBuddy, Buddy } from './features/buddy/HealthBuddy';
import { AIAssistant } from './features/ai-assistant/ChatInterface';
import { HealthAwareness } from './features/awareness/HealthAwareness';
import { EmergencyCard } from './features/emergency/EmergencyCard';
import { useLocalStorage } from './hooks/use-local-storage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { LanguageSelection } from './features/language/LanguageSelection';
import { 
  Bell, 
  LogOut, 
  Pill, 
  Baby, 
  UserPlus, 
  ShieldAlert, 
  BookOpen, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';

function DashboardShell() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('home');
  const [buddy] = useLocalStorage<Buddy | null>('carecircle_buddy', null);
  const { t } = useLanguage();

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeView setActiveTab={setActiveTab} />;
      case 'meds':
        return <MedicationList buddy={buddy} />;
      case 'family':
        return <FamilyTracking />;
      case 'ai':
        return <AIAssistant />;
      case 'profile':
        return <ProfileView user={user} logout={logout} />;
      case 'buddy':
        return <HealthBuddy />;
      case 'emergency':
        return <EmergencyCard />;
      case 'awareness':
        return <HealthAwareness />;
      default:
        return <HomeView setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#008080] rounded-lg flex items-center justify-center text-white font-bold text-xs">
            CC
          </div>
          <span className="font-bold text-gray-800">{t.appName}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-400" />
          <div className="w-8 h-8 rounded-full bg-[#ADD8E6] flex items-center justify-center text-[#008080] font-bold text-xs">
            {user?.name?.[0]?.toUpperCase()}
          </div>
        </div>
      </header>

      <main className="p-4 max-w-md mx-auto">
        {renderContent()}
      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

function HomeView({ setActiveTab }: { setActiveTab: (tab: string) => void }) {
  const { user } = useAuth();
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6">
      <section>
        <h1 className="text-2xl font-bold text-gray-800">{t.welcome.replace('{name}', user?.name || '')}</h1>
        <p className="text-gray-500 text-sm">{t.subtitle}</p>
      </section>

      <section className="bg-gradient-to-br from-[#008080] to-[#006666] p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-xs font-medium opacity-80 uppercase tracking-wider mb-1">{t.dailyTip}</p>
          <p className="text-lg font-semibold mb-4 leading-snug">{t.dailyTipBody}</p>
          <Button 
            className="bg-white text-[#008080] hover:bg-gray-100 rounded-full text-xs font-bold"
            onClick={() => setActiveTab('awareness')}
          >
            {t.learnMore}
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10" />
      </section>

      <section className="grid grid-cols-2 gap-4">
        <MenuCard 
          icon={Pill} 
          title={t.medication} 
          desc={t.manageReminders} 
          color="bg-blue-50 text-[#008080]" 
          onClick={() => setActiveTab('meds')}
        />
        <MenuCard 
          icon={Baby} 
          title={t.familyHealth} 
          desc={t.pregnancyKids} 
          color="bg-pink-50 text-pink-600" 
          onClick={() => setActiveTab('family')}
        />
        <MenuCard 
          icon={UserPlus} 
          title={t.healthBuddy} 
          desc={t.addFamilyMember} 
          color="bg-purple-50 text-purple-600" 
          onClick={() => setActiveTab('buddy')}
        />
        <MenuCard 
          icon={ShieldAlert} 
          title={t.emergency} 
          desc={t.healthCard} 
          color="bg-red-50 text-red-600" 
          onClick={() => setActiveTab('emergency')}
        />
        <MenuCard 
          icon={BookOpen} 
          title={t.awareness} 
          desc={t.healthEducation} 
          color="bg-green-50 text-green-600" 
          onClick={() => setActiveTab('awareness')}
        />
        <MenuCard 
          icon={MessageSquare} 
          title={t.aiAssistant} 
          desc={t.generalQuestions} 
          color="bg-orange-50 text-orange-600" 
          onClick={() => setActiveTab('ai')}
        />
      </section>
    </div>
  );
}

function MenuCard({ icon: Icon, title, desc, color, onClick }: any) {
  return (
    <Card className="border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow" onClick={onClick}>
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className={`p-3 rounded-2xl mb-3 ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-bold text-gray-800 text-sm mb-1">{title}</h3>
        <p className="text-[10px] text-gray-500 leading-tight">{desc}</p>
      </CardContent>
    </Card>
  );
}

function ProfileView({ user, logout }: any) {
  const { t, setLanguage } = useLanguage();
  
  return (
    <div className="space-y-6">
      <div className="text-center py-8">
        <div className="w-24 h-24 rounded-full bg-[#ADD8E6] mx-auto flex items-center justify-center text-[#008080] text-4xl font-bold mb-4 border-4 border-white shadow-lg">
          {user?.name?.[0]?.toUpperCase()}
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{user?.name}</h2>
        <p className="text-gray-500">{user?.emailOrPhone}</p>
      </div>

      <div className="space-y-2">
        <Button variant="outline" className="w-full justify-between" onClick={() => setLanguage(null as any)}>
          <span>{t.switchLang}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="outline" className="w-full justify-between" onClick={() => {}}>
          <span>{t.privacy}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="outline" className="w-full justify-between" onClick={() => {}}>
          <span>{t.help}</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      <Button variant="ghost" className="w-full text-red-600 hover:text-red-700 hover:bg-red-50" onClick={logout}>
        <LogOut className="w-4 h-4 mr-2" />
        {t.signOut}
      </Button>
    </div>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();
  
  if (!language) {
    return <LanguageSelection />;
  }

  if (!isAuthenticated) {
    return <AuthScreens />;
  }

  return <DashboardShell />;
}

function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-[#008080]/10 selection:text-[#008080]">
          <AppContent />
          <Toaster position="top-center" />
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
