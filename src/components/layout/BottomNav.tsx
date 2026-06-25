import React from 'react';
import { Home, Pill, Baby, Heart, Info, MessageSquare, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, active, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
        active ? "text-[#008080]" : "text-gray-500"
      )}
    >
      <Icon className="w-6 h-6" />
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}

export function BottomNav({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 h-16 safe-area-pb">
      <div className="grid grid-cols-5 h-full max-w-md mx-auto">
        <NavItem icon={Home} label={t.home} active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
        <NavItem icon={Pill} label={t.meds} active={activeTab === 'meds'} onClick={() => setActiveTab('meds')} />
        <NavItem icon={Baby} label={t.family} active={activeTab === 'family'} onClick={() => setActiveTab('family')} />
        <NavItem icon={MessageSquare} label={t.ai} active={activeTab === 'ai'} onClick={() => setActiveTab('ai')} />
        <NavItem icon={UserCircle} label={t.profile} active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
      </div>
    </nav>
  );
}
