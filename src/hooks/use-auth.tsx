import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useLocalStorage } from './use-local-storage';

interface User {
  id: string;
  name: string;
  emailOrPhone: string;
  emergencyInfo?: {
    bloodGroup?: string;
    allergies?: string;
    conditions?: string;
  };
}

interface AuthContextType {
  user: User | null;
  login: (emailOrPhone: string, password: string) => void;
  register: (name: string, emailOrPhone: string, password: string) => void;
  logout: () => void;
  updateEmergencyInfo: (info: User['emergencyInfo']) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useLocalStorage<User | null>('carecircle_user', null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!user);
  }, [user]);

  const login = (emailOrPhone: string, _password: string) => {
    // Mock login
    setUser({
      id: '1',
      name: emailOrPhone.split('@')[0] || 'User',
      emailOrPhone,
    });
  };

  const register = (name: string, emailOrPhone: string, _password: string) => {
    // Mock register
    setUser({
      id: Math.random().toString(36).substr(2, 9),
      name,
      emailOrPhone,
    });
  };

  const logout = () => {
    setUser(null);
  };

  const updateEmergencyInfo = (info: User['emergencyInfo']) => {
    if (user) {
      setUser({ ...user, emergencyInfo: info });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateEmergencyInfo, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
