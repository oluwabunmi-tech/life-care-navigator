import { useState } from 'react';
import { Calendar, Baby, Syringe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { cn } from '@/lib/utils';

export function FamilyTracking() {
  const [pregnancyWeek, setPregnancyWeek] = useLocalStorage('carecircle_preg_week', 12);
  const [immunizations, setImmunizations] = useLocalStorage('carecircle_vax', [
    { id: 1, name: 'BCG (Tuberculosis)', due: 'At birth', done: true },
    { id: 2, name: 'Hepatitis B (1st)', due: 'At birth', done: true },
    { id: 3, name: 'OPV 0', due: 'At birth', done: true },
    { id: 4, name: 'Penta 1', due: '6 weeks', done: false },
    { id: 5, name: 'PCV 1', due: '6 weeks', done: false },
    { id: 6, name: 'Rotavirus 1', due: '6 weeks', done: false },
  ]);

  const toggleVax = (id: number) => {
    setImmunizations(immunizations.map(v => v.id === id ? { ...v, done: !v.done } : v));
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="pregnancy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pregnancy">Pregnancy</TabsTrigger>
          <TabsTrigger value="children">Children</TabsTrigger>
        </TabsList>

        <TabsContent value="pregnancy" className="space-y-4 pt-4">
          <Card className="border-pink-100 bg-pink-50/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center text-pink-700">
                <Baby className="w-5 h-5 mr-2" />
                Pregnancy Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-pink-600">{pregnancyWeek}</span>
                <p className="text-sm text-pink-800 font-medium">Weeks Pregnant</p>
              </div>
              <Progress value={(pregnancyWeek / 40) * 100} className="h-3 bg-pink-100" />
              <div className="flex justify-between mt-2 text-[10px] text-pink-600 font-medium uppercase">
                <span>Conception</span>
                <span>Due Date (40w)</span>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" onClick={() => setPregnancyWeek(Math.max(1, pregnancyWeek - 1))}>- Week</Button>
                <Button variant="outline" size="sm" onClick={() => setPregnancyWeek(Math.min(42, pregnancyWeek + 1))}>+ Week</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-[#008080]" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                <div>
                  <p className="text-sm font-bold text-gray-800">Antenatal Checkup</p>
                  <p className="text-xs text-gray-500">St. Luke's Hospital</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#008080]">Oct 24</p>
                  <p className="text-[10px] text-gray-400">09:30 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="children" className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">Immunization Schedule</h3>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Age: 4 weeks</span>
          </div>

          <div className="space-y-3">
            {immunizations.map(vax => (
              <Card key={vax.id} className={vax.done ? "bg-green-50/50 border-green-100" : ""}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={cn("p-2 rounded-full", vax.done ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600")}>
                      <Syringe className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-800">{vax.name}</p>
                      <p className="text-[10px] text-gray-500">Due: {vax.due}</p>
                    </div>
                  </div>
                  <button onClick={() => toggleVax(vax.id)}>
                    {vax.done ? (
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                    )}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
