import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";

// Placeholder shape for the future authenticated user. Extend this once a
// real auth provider (e.g. Supabase, Firebase, a custom API) is wired in.
type AuthUser = {
  id: string;
  name: string;
} | null;

type AuthContextValue = {
  user: AuthUser;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser>(null);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      isAuthenticated: user !== null,
      // TODO: replace with a real sign-in flow once an auth provider is chosen.
      login: () => console.log("auth.login(): not implemented yet"),
      // TODO: replace with a real sign-out call once an auth provider is chosen.
      logout: () => setUser(null),
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
