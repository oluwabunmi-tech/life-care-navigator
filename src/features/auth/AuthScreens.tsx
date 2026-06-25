import { useAuth } from '@/hooks/use-auth';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

export function AuthScreens() {
  const { login, register } = useAuth();
  const { t } = useLanguage();
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      login(emailOrPhone, password);
    } else {
      register(name, emailOrPhone, password);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center p-6 max-w-md mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-[#008080] rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-md">
          CC
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.appName}</h1>
        <p className="text-gray-500">{mode === 'login' ? t.login : t.register}</p>
      </div>

      <Card className="border-gray-100 shadow-xl rounded-3xl overflow-hidden">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{t.name}</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-xl border-gray-200"
                  required
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t.emailOrPhone}</label>
              <Input
                type="text"
                placeholder="name@example.com"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="h-12 rounded-xl border-gray-200"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">{t.password}</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl border-gray-200"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-[#008080] hover:bg-[#006666] h-12 rounded-xl font-bold text-white mt-4 shadow-lg">
              {mode === 'login' ? t.login : t.register}
            </Button>
          </form>
        </CardContent>
      </Card>

      <button 
        className="mt-8 text-[#008080] font-semibold text-sm hover:underline"
        onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
      >
        {mode === 'login' ? t.dontHaveAccount : t.alreadyHaveAccount}
      </button>
    </div>
  );
}
