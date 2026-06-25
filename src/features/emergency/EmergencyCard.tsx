import { useAuth } from '@/hooks/use-auth';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, Droplets } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function EmergencyCard() {
  const { user, updateEmergencyInfo } = useAuth();
  const [editing, setEditing] = useState(false);
  
  const [blood, setBlood] = useState(user?.emergencyInfo?.bloodGroup || '');
  const [allergies, setAllergies] = useState(user?.emergencyInfo?.allergies || '');
  const [conditions, setConditions] = useState(user?.emergencyInfo?.conditions || '');

  const handleSave = () => {
    updateEmergencyInfo({ bloodGroup: blood, allergies, conditions });
    setEditing(false);
    toast.success('Emergency information updated');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-red-600 flex items-center">
        <AlertCircle className="w-5 h-5 mr-2" />
        Emergency Health Card
      </h2>

      {editing ? (
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="space-y-1">
              <Label>Blood Group</Label>
              <Input placeholder="e.g. O+" value={blood} onChange={e => setBlood(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Allergies</Label>
              <Input placeholder="e.g. Penicillin, Peanuts" value={allergies} onChange={e => setAllergies(e.target.value)} />
            </div>
            <div className="space-y-1">
              <Label>Chronic Conditions</Label>
              <Input placeholder="e.g. Asthma, Diabetes" value={conditions} onChange={e => setConditions(e.target.value)} />
            </div>
            <div className="pt-2 flex space-x-2">
              <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white" onClick={handleSave}>Save Info</Button>
              <Button variant="outline" onClick={() => setEditing(false)}>Cancel</Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="bg-red-50 border-red-200 overflow-hidden">
          <div className="h-2 bg-red-600" />
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-red-800 flex justify-between items-center">
              <span>{user?.name}</span>
              <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-100" onClick={() => setEditing(true)}>Edit</Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-[10px] text-red-400 font-bold uppercase">Blood Group</p>
                <p className="text-xl font-bold text-red-700 flex items-center">
                  <Droplets className="w-4 h-4 mr-1 fill-current" />
                  {user?.emergencyInfo?.bloodGroup || 'Not set'}
                </p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-red-100">
                <p className="text-[10px] text-red-400 font-bold uppercase">Contact</p>
                <p className="text-sm font-bold text-gray-800">{user?.emailOrPhone}</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div>
                <p className="text-[10px] text-red-400 font-bold uppercase">Allergies</p>
                <p className="text-sm text-gray-700 font-medium">{user?.emergencyInfo?.allergies || 'No known allergies reported'}</p>
              </div>
              <div>
                <p className="text-[10px] text-red-400 font-bold uppercase">Conditions</p>
                <p className="text-sm text-gray-700 font-medium">{user?.emergencyInfo?.conditions || 'No conditions reported'}</p>
              </div>
            </div>

            <div className="pt-2 flex items-center text-[10px] text-red-500 font-medium">
              <ShieldCheck className="w-3 h-3 mr-1" />
              This information is for emergency use only.
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
