import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/i18n/translations';
import { Check } from 'lucide-react';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'yo', name: 'Yoruba', native: 'Yorùbá' },
  { code: 'ig', name: 'Igbo', native: 'Asụsụ Igbo' },
  { code: 'ha', name: 'Hausa', native: 'Harshen Hausa' },
  { code: 'pcm', name: 'Pidgin', native: 'Nigerian Pidgin' },
];

export function LanguageSelection() {
  const { setLanguage } = useLanguage();
  const [selected, setSelected] = useState<Language | null>(null);

  const handleContinue = () => {
    if (selected) {
      setLanguage(selected);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col p-6 max-w-md mx-auto">
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-[#008080] rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg">
            CC
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CareCircle</h1>
          <p className="text-gray-500">Family Health Companion</p>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">Choose your language</h2>

        <div className="grid grid-cols-1 gap-4 mb-10">
          {languages.map((lang) => (
            <Card 
              key={lang.code}
              className={`cursor-pointer border-2 transition-all duration-200 ${
                selected === lang.code 
                  ? 'border-[#008080] bg-teal-50 shadow-md' 
                  : 'border-gray-100 hover:border-teal-200'
              }`}
              onClick={() => setSelected(lang.code as Language)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900">{lang.native}</p>
                  <p className="text-xs text-gray-500">{lang.name}</p>
                </div>
                {selected === lang.code && (
                  <div className="w-6 h-6 bg-[#008080] rounded-full flex items-center justify-center text-white">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Button 
        className="w-full h-14 bg-[#008080] hover:bg-[#006666] text-white font-bold rounded-xl text-lg shadow-lg disabled:opacity-50"
        disabled={!selected}
        onClick={handleContinue}
      >
        Continue
      </Button>
    </div>
  );
}
