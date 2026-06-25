import { useState } from 'react';
import { Pill, Plus, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface Medication {
  id: string;
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
  lastTaken?: string;
}

export function MedicationList({ buddy }: { buddy?: any }) {
  const [meds, setMeds] = useLocalStorage<Medication[]>('carecircle_meds', []);
  const [showAdd, setShowAdd] = useState(false);
  const [newName, setNewName] = useState('');
  const [newDosage, setNewDosage] = useState('');
  const [newTime, setNewTime] = useState('');

  const addMed = () => {
    if (!newName || !newDosage || !newTime) return;
    const newMed: Medication = {
      id: Math.random().toString(36).substr(2, 9),
      name: newName,
      dosage: newDosage,
      time: newTime,
      taken: false,
    };
    setMeds([...meds, newMed]);
    setNewName('');
    setNewDosage('');
    setNewTime('');
    setShowAdd(false);
    toast.success('Medication added successfully');
  };

  const toggleTaken = (id: string) => {
    setMeds(meds.map(m => {
      if (m.id === id) {
        const newState = !m.taken;
        if (newState) {
          toast.success(`Marked ${m.name} as taken`);
        }
        return { ...m, taken: newState, lastTaken: newState ? new Date().toISOString() : m.lastTaken };
      }
      return m;
    }));
  };

  const triggerBuddyAlert = (medName: string) => {
    if (buddy?.name) {
      toast.info(`SMS Alert sent to your Health Buddy (${buddy.name}): "${medName} reminder was not confirmed."`, {
        duration: 5000,
      });
    } else {
      toast.warning('No Health Buddy configured for alerts.');
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">My Medications</h2>
        <Button 
          size="sm" 
          onClick={() => setShowAdd(!showAdd)}
          className="bg-[#008080] hover:bg-[#006666]"
        >
          <Plus className="w-4 h-4 mr-1" /> Add
        </Button>
      </div>

      {showAdd && (
        <Card className="border-[#ADD8E6]">
          <CardContent className="pt-4 space-y-3">
            <div className="space-y-1">
              <Label>Medication Name</Label>
              <Input placeholder="Paracetamol" value={newName} onChange={e => setNewName(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Dosage</Label>
              <Input placeholder="500mg" value={newDosage} onChange={e => setNewDosage(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Time</Label>
              <Input type="time" value={newTime} onChange={e => setNewTime(e.target.value)} />
            </div>
            <Button className="w-full bg-[#008080]" onClick={addMed}>Save Medication</Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-3">
        {meds.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
            <Pill className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p>No medications added yet.</p>
          </div>
        ) : (
          meds.map(med => (
            <Card key={med.id} className={med.taken ? "bg-green-50 border-green-200" : "bg-white"}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={cn("p-2 rounded-full", med.taken ? "bg-green-100 text-green-600" : "bg-blue-100 text-[#008080]")}>
                    <Pill className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{med.name}</p>
                    <p className="text-xs text-gray-500">{med.dosage} • {med.time}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {!med.taken && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-xs text-orange-600"
                      onClick={() => triggerBuddyAlert(med.name)}
                    >
                      Missed?
                    </Button>
                  )}
                  <button onClick={() => toggleTaken(med.id)}>
                    {med.taken ? (
                      <CheckCircle2 className="w-8 h-8 text-green-500 fill-green-50" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-gray-100" />
                      </div>
                    )}
                  </button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
