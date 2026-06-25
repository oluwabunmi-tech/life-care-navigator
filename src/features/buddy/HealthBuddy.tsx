import { useState } from 'react';
import { Phone, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { toast } from 'sonner';

export interface Buddy {
  name: string;
  relationship: string;
  phone: string;
}

export function HealthBuddy() {
  const [buddy, setBuddy] = useLocalStorage<Buddy | null>('carecircle_buddy', null);
  const [editing, setEditing] = useState(!buddy);
  
  const [name, setName] = useState(buddy?.name || '');
  const [rel, setRel] = useState(buddy?.relationship || '');
  const [phone, setPhone] = useState(buddy?.phone || '');

  const saveBuddy = () => {
    if (!name || !rel || !phone) return;
    setBuddy({ name, relationship: rel, phone });
    setEditing(false);
    toast.success('Health Buddy saved successfully');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Health Buddy</h2>
      
      {!editing && buddy ? (
        <Card className="bg-[#ADD8E6] bg-opacity-20 border-[#ADD8E6]">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#008080]">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-lg">{buddy.name}</p>
                  <p className="text-sm text-gray-600">{buddy.relationship}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setEditing(true)}>Edit</Button>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-700 bg-white bg-opacity-50 p-3 rounded-lg">
              <Phone className="w-4 h-4" />
              <span className="font-mono">{buddy.phone}</span>
            </div>
            
            <div className="mt-4 flex items-start space-x-2 text-xs text-gray-500 italic">
              <ShieldCheck className="w-4 h-4 text-[#008080] flex-shrink-0" />
              <p>Your buddy will receive SMS alerts if you miss your medications or appointments.</p>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Add a Health Buddy</CardTitle>
            <CardDescription>A trusted person who can support your health journey.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-1">
              <Label>Buddy Name</Label>
              <Input placeholder="e.g. Mary Jane" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Relationship</Label>
              <Input placeholder="e.g. Sister, Spouse, Caregiver" value={rel} onChange={e => setRel(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Phone Number</Label>
              <Input placeholder="+234..." value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="pt-2 flex space-x-2">
              <Button className="flex-1 bg-[#008080]" onClick={saveBuddy}>Save Buddy</Button>
              {buddy && <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
