import { createContext, useContext } from 'react';

type RoleContextValue = {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
};

export const RoleContext = createContext<RoleContextValue | undefined>(undefined);

export const useRole = () => {
  const ctx = useContext(RoleContext);
  if (!ctx) {
    throw new Error('useRole must be used within a RoleContext.Provider');
  }
  return ctx;
};


