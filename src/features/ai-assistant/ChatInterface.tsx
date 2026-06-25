import { useState } from 'react';
import { Send, Bot, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export function AIAssistant() {
  const { t } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: t.aiWelcome }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Mock AI Response logic
    setTimeout(() => {
      let botResponse = "That's a good question. Generally, it's important to maintain a balanced diet and regular exercise. For specific medical concerns, please consult a doctor.";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('fever')) {
        botResponse = "If you have a fever, stay hydrated and rest. If it persists above 38°C (100.4°F) or you have severe symptoms, please visit a clinic immediately.";
      } else if (lowerInput.includes('medication') || lowerInput.includes('pill')) {
        botResponse = "Always take medications exactly as prescribed by your doctor. Don't skip doses or double up if you miss one.";
      } else if (lowerInput.includes('pregnancy')) {
        botResponse = "During pregnancy, regular antenatal checkups are crucial. Make sure you're taking your folic acid and prenatal vitamins as advised.";
      } else if (lowerInput.includes('immunization') || lowerInput.includes('vaccine')) {
        botResponse = "Immunizations protect children from serious diseases. Following the recommended schedule ensures the best protection.";
      }

      setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] max-w-md mx-auto">
      <Alert className="mb-4 bg-yellow-50 border-yellow-200">
        <Info className="h-4 w-4 text-yellow-600 shrink-0" />
        <AlertDescription className="text-[10px] text-yellow-800 leading-tight">
          <strong>{t.notADoctor.toUpperCase()}:</strong> {t.aiDisclaimer}
        </AlertDescription>
      </Alert>

      <Card className="flex-1 flex flex-col overflow-hidden border-[#ADD8E6]">
        <CardHeader className="py-3 bg-[#008080] text-white">
          <CardTitle className="text-sm flex items-center space-x-2">
            <Bot className="w-5 h-5" />
            <span>{t.aiAssistant}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 ${
                    m.role === 'user' 
                      ? 'bg-[#008080] text-white rounded-tr-none' 
                      : 'bg-gray-100 text-gray-800 rounded-tl-none'
                  }`}>
                    <p className="text-sm">{m.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          
          <div className="p-3 border-t bg-gray-50 flex space-x-2">
            <Input 
              placeholder={t.askAIPlaceholder} 
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              className="bg-white"
            />
            <Button size="icon" onClick={handleSend} className="bg-[#008080]">
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
