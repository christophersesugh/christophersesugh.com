import React from "react";
import { QueryCache } from "react-query";
import * as auth from "utils/auth-provider";
import { FullPageSpinner } from "components/loading-indicator";
import { client } from "utils/api-client";
import { useAsync } from "utils/hooks/use-async";
import ErrorFallback from "pages/error-fallback";

type FormProps = {
  email: string;
  password: string;
};

type User = {
  user: { email: string; id: string; token: string };
  login: (form: FormProps) => Promise<any>;
  register: (form: FormProps) => Promise<any>;
  logout: () => void;
};

async function getUser() {
  let user = null;
  const token = await auth.getToken();
  if (token) {
    const data = await client("auth/me", { token } as any);
    user = data.user;
  }

  return user;
}
const AuthContext = React.createContext<User | undefined>(undefined);
AuthContext.displayName = "AuthContext";

function AuthProvider(props: any) {
  const {
    data: user,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    run,
    setData,
    status,
  } = useAsync();

  const queryCache = new QueryCache();

  React.useEffect(() => {
    run(getUser());
  }, [run]);

  // login
  const login = (form: FormProps) =>
    auth.login(form).then((user) => setData(user));

  // register
  const register = (form: FormProps) =>
    auth.register(form).then((user) => setData(user));

  // logout
  const logout = () => {
    auth.logout();
    queryCache.clear();
    setData(null);
  };
  if (isLoading || isIdle) {
    return <FullPageSpinner />;
  }

  if (isError) {
    return <ErrorFallback error={error} />;
  }

  if (isSuccess) {
    const value = { user, login, register, logout };
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within an AuthProvider`);
  }
  return context;
}

export { useAuth, AuthProvider };
